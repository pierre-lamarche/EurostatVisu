(function($) {
    $(function() {
        //https://bl.ocks.org/mbostock/3808218
        //https://bost.ocks.org/mike/join/

        var svg = d3.select("#join").append("svg").attr("width", 100).attr("height", 100)
        //.append("g").attr("transform", "translate(0,0)")
            ;

        function update(data) {

            // DATA JOIN: Join new data with old elements, if any.
            var circle = svg.selectAll("circle").data(data);

            // UPDATE: Update old elements as needed.
            //circle. ...

            // ENTER: Create new elements as needed.
            circle.enter().append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 0)
            ;

            // ENTER + UPDATE
            circle
                .transition()
                .attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; })
                .attr("r", 2.5)
            ;

            // EXIT: Remove old elements as needed.
            circle.exit().transition().attr("r", 0).remove();
        }

        var data = [{x:10,y:15},{x:43,y:22},{x:97,y:7},{x:13,y:67},{x:45,y:38}];
        update(data);

        setTimeout(function() {
            //add new, change existing, remove one
            data.push({x:30,y:45});
            data[2].x = 7; data[2].y = 37;
            data.splice(3,1); data.splice(0,1);
            update(data);
        }, (1*1000));

    });
}(jQuery));