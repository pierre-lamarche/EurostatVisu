/**
 *
 * @author julien Gaffuri
 *
 */
(function($) {
	$(function() {
		//http://www.nytimes.com/interactive/2013/10/09/us/yellen-fed-chart.html?_r=0
		//https://www.dashingd3js.com/svg-paths-and-d3js

		//TODO adapt labels presence to remove cluttering
		//TODO tw
		//TODO graticule dashed

		$.when(
				//get inflation data
				//$.ajax({url:EstLib.getEstatDataURL("prc_hicp_manr",{unit:"RCH_A",coicop:"CP00"})}),
				$.ajax({url:EstLib.getEstatDataURL("prc_hicp_aind",{unit:"RCH_A_AVG",coicop:"CP00"})}),
				//get unemployment data
				//$.ajax({url:EstLib.getEstatDataURL("une_rt_m",{age:"TOTAL",sex:"T",s_adj:"NSA",unit:"PC_ACT"})}) //use seasonal adjusted?
				$.ajax({url:EstLib.getEstatDataURL("une_rt_a",{age:"TOTAL",sex:"T",unit:"PC_ACT"})})
		).then(function(inflationData, unemploymentData) {
			EstLib.overrideCountryNames(inflationData[0].dimension.geo.category.label);
			EstLib.overrideCountryNames(unemploymentData[0].dimension.geo.category.label);

			//decode data
			inflationData = JSONstat(inflationData).Dataset(0);
			unemploymentData = JSONstat(unemploymentData).Dataset(0);

			//function to compute intersection of two arrays
			var intersection = function(array1,array2){ return array1.filter(function(n) { return array2.indexOf(n) != -1; }); };

			//get time and geo
			var times = intersection(inflationData.Dimension("time").id, unemploymentData.Dimension("time").id);
			var geos = intersection(inflationData.Dimension("geo").id, unemploymentData.Dimension("geo").id);

			//filter and sort geos
			//geos.splice(geos.indexOf("US"),1);
			//geos.splice(geos.indexOf("TR"),1);
			var isAggregate = function(geo){ return geo.indexOf("EA") > -1 || geo.indexOf("EU") > -1; };
			geos.sort(function(g1, g2) {
				if(isAggregate(g1) && !isAggregate(g2)) return 1;
				if(!isAggregate(g1) && isAggregate(g2)) return -1;
				return g1.localeCompare(g2);
			});

			var highlightGeo = function(geo){
				//move curve to front and show
				d3.select("#curve"+geo).moveToFront().attr("stroke", "black").attr("stroke-width", 3);
				//show points
				d3.selectAll(".pt[geo="+geo+"]").attr("display", "inline");
				//show year labels
				d3.selectAll(".lblTime[geo="+geo+"]").attr("display", "inline");
				//bold legend label
				d3.selectAll(".lgd[geo="+geo+"]").attr("font-weight","bold").attr("fill","maroon");
				//show info
				info.text( inflationData.Dimension("geo").Category(geo).label );
			};
			var unHighlightGeo = function(geo){
				//hide curve
				d3.select("#curve"+geo).attr("stroke", "#aaa").attr("stroke-width", 0.7);
				//hide points
				d3.selectAll(".pt[geo="+geo+"]").attr("display", "none");
				//hide year labels
				d3.selectAll(".lblTime[geo="+geo+"]").attr("display", "none");
				//unbold legend label
				d3.selectAll(".lgd[geo="+geo+"]").attr("font-weight","normal").attr("fill","black");
				//hide info
				info.text("");
			};

			var highlightTime = function(time){
				//show points
				d3.selectAll(".pt[time='"+time+"']").attr("display", "inline");
				//show geo labels
				d3.selectAll(".lblGeo[time='"+time+"']").attr("display", "inline");
				//bold legend label
				d3.selectAll(".lgd[time='"+time+"']").attr("font-weight","bold").attr("fill","maroon");
				//show info
				info.text( time );
			};
			var unHighlightTime = function(time){
				//hide points
				d3.selectAll(".pt[time='"+time+"']").attr("display", "none");
				//hide geo labels
				d3.selectAll(".lblGeo[time='"+time+"']").attr("display", "none");
				//unbold legend label
				d3.selectAll(".lgd[time='"+time+"']").attr("font-weight","normal").attr("fill","black");
				//hide info
				info.text("");
			};



			var margin = {top: 15, right: 10, bottom: 40, left: 50};
			var width = 800 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
			var svg = d3.select("#curves").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);

			//unemployment scale
			var xScale = d3.scale.linear().domain([0, 25]).range([0, width]);
			//inflation scale
			var yScale = d3.scale.linear().domain([-2, 15]).range([height, 0]);


			//draw x grid
			var gratUnemp = svg.append("g").attr("class", "axis").attr("transform", "translate("+margin.left+","+(height+margin.top)+")");
			var xAxis = d3.svg.axis().scale(xScale).tickValues([0,5,10,15,20,25]).tickSize(-height).tickFormat(function(d) {return d+"%";}).orient("bottom");
			gratUnemp.call(xAxis);

			//draw y grid
			var gratInfl = svg.append("g").attr("class", "axis").attr("transform", "translate("+margin.left+","+margin.top+")");
			var yAxis = d3.svg.axis().scale(yScale).tickValues([0,5,10,15]).tickSize(-width).tickFormat(function(d) {return d+"%";}).orient("left");
			gratInfl.call(yAxis);

			//axis labels
			gratUnemp.append("text").attr("class","chartLabel").attr("x",width*0.5-50).attr("y",20).attr("dy", ".35em").text("Unemployment rate");
			gratInfl.append("text").attr("class","chartLabel").attr("x",2-margin.left).attr("y",height*0.5-15).attr("dy", ".35em").text("Inflation");
			gratInfl.append("text").attr("class","chartLabel").attr("x",20-margin.left).attr("y",height*0.5).attr("dy", ".35em").text("rate");

			//the chart element
			var chart = svg.append("g").attr("id", "chart").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			//build dataset
			var dataset = {};
			for(var i=0; i<geos.length; i++){
				var geo = geos[i];
				dataset[geo]=[];
				for(var j=0; j<times.length; j++){
					var time = times[j];
					var infl = inflationData.Data({time:time,geo:geo}).value;
					if(!infl) continue;
					var unemp = unemploymentData.Data({time:time,geo:geo}).value;
					if(!unemp) continue;
					dataset[geo].push({time:time,geo:geo,infl:infl,unemp:unemp})
				}
			}

			//drawing function
			var lineFunction = d3.svg.line()
			.x(function(d) { return xScale(d.unemp); })
			.y(function(d) { return yScale(d.infl); })
			.interpolate("cardinal") //.interpolate("linear")
			;

			//draw chart curves
			var curves = chart.append("g").attr("id", "curves");
			for(i=0; i<geos.length; i++){
				geo = geos[i];
				curves.append("path")
				.attr("d", lineFunction(dataset[geo]))
				.attr("id", "curve"+geo)
				.attr("geo", geo)
				.attr("stroke", "#aaa").attr("stroke-width", 0.7).attr("fill", "none")
				.on("mouseover", function() { highlightGeo(d3.select(this).attr("geo")); })
				.on("mouseout", function() { unHighlightGeo(d3.select(this).attr("geo")); })
				;
			}

			//draw chart points and labels
			var points = chart.append("g").attr("id", "points");
			var pointsLblTime = chart.append("g").attr("id", "pointsLblTime");
			var pointsLblGeo = chart.append("g").attr("id", "pointsLblGeo");
			for(i=0; i<geos.length; i++){
				geo = geos[i];
				var g;

				//circles
				g = points .append("g").attr("id", "points"+geo);
				g.selectAll("circle").data(dataset[geo]).enter().append("circle")
				.attr("display", "none").attr("fill", "black").attr("stroke-width", 0)
				.attr("class", "pt")
				.attr("time", function(d) { return d.time; })
				.attr("geo", function(d) { return d.geo; })
				.attr("cx", function(d) { return xScale(d.unemp); })
				.attr("cy", function(d) { return yScale(d.infl); })
				.attr("r", 4)
				;

				//time labels
				g = pointsLblTime.append("g").attr("id", "pointsLblTime"+geo);
				g.selectAll("text").data(dataset[geo]).enter().append("text")
				.attr("display", "none")
				.attr("class", "lblTime")
				.attr("time", function(d) { return d.time; })
				.attr("geo", function(d) { return d.geo; })
				.attr("x", function(d) { return 5+xScale(d.unemp); })
				.attr("y", function(d) { return -5+yScale(d.infl); })
				.text(function(d) { return d.time; })
				;

				//geo labels
				g = pointsLblGeo.append("g").attr("id", "pointsLblGeo"+geo);
				g.selectAll("text").data(dataset[geo]).enter().append("text")
				.attr("display", "none")
				.attr("class", "lblGeo")
				.attr("time", function(d) { return d.time; })
				.attr("geo", function(d) { return d.geo; })
				.attr("x", function(d) { return 5+xScale(d.unemp); })
				.attr("y", function(d) { return -5+yScale(d.infl); })
				.text(function(d) { return d.geo; })
				;
			}

			var info = chart.append("text").attr("id", "infoText").attr("x", width-280).attr("y", 30).text("");


			//legend
			width = 100;
			var lgd = d3.select("#legend").append("svg").attr("width", width).attr("height", height + margin.top + margin.bottom);

			//legend title
			lgd.append("text").attr("class", "lgd").attr("font-weight", "bold").attr("x", 0).attr("y", 25).text("Focus on");
			lgd.append("text").attr("class", "lgd").attr("font-weight", "bold").attr("x", 0).attr("y", 40).text("country or year...");
			var topLgd = 45;

			//geo legend
			var dy = margin.top+topLgd;
			lgd.append("g").selectAll("text").data(geos).enter().append("text")
			.attr("class", "lgd")
			.attr("geo", function(d) { return d; })
			.attr("x", 0)
			.attr("y", function() { dy+=12; return dy-10; })
			.text(function(d) { return d; })
			.on("mouseover", function() { highlightGeo(d3.select(this).attr("geo")); })
			.on("mouseout", function() { unHighlightGeo(d3.select(this).attr("geo")); })
			;

			//time legend
			dy = margin.top+topLgd;
			lgd.append("g").selectAll("text").data(times).enter().append("text")
			.attr("class", "lgd")
			.attr("time", function(d) { return d; })
			.attr("x", 60)
			.attr("y", function() { dy+=12; return dy-10; })
			.text(function(d) { return d; })
			.on("mouseover", function() { highlightTime(d3.select(this).attr("time")); })
			.on("mouseout", function() { unHighlightTime(d3.select(this).attr("time")); })
			;


			//move to front function
			d3.selection.prototype.moveToFront = function() {  
				return this.each(function(){
					this.parentNode.appendChild(this);
				});
			};

		}, function() {
			console.log("Could not load data");
		}
		);
	});
}(jQuery));
