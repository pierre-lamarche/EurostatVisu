PrVis.coicopsDict = {
	"AP" : {desc:"Administered prices", parents:[], children:["APF","APM"]},
	"APF" : {desc:"Fully administered prices", parents:["AP"], children:[]},
	"APM" : {desc:"Mainly administered prices", parents:["AP"], children:[]},
	"CP00" : {desc:"All-items HICP", parents:[], children:["CP01","CP02","CP03","CP04","CP05","CP06","CP07","CP08","CP09","CP10","CP11","CP12"]},
	"CP01" : {desc:"Food and non-alcoholic beverages", parents:["CP00"], children:["CP011","CP012"]},
	"CP011" : {desc:"Food", parents:["CP01","FROOPP"], children:["CP0111","CP0112","CP0113","CP0114","CP0115","CP0116","CP0117","CP0118","CP0119"]},
	"CP0111" : {desc:"Bread and cereals", parents:["CP011","TOT_X_NRG_FOOD_S","FOOD_P","TOT_X_TBC","TOT_X_HOUS","TOT_X_ALC_TBC"], children:[]},
	"CP0112" : {desc:"Meat", parents:["CP011","TOT_X_NRG_FOOD_S","TOT_X_HOUS","FOOD_NP"], children:[]},
	"CP0113" : {desc:"Fish and seafood", parents:["CP011","FOOD_S","TOT_X_HOUS","FOOD_NP"], children:[]},
	"CP0114" : {desc:"Milk, cheese and eggs", parents:["CP011","TOT_X_NRG_FOOD_S","FOOD_P","TOT_X_TBC","TOT_X_HOUS","TOT_X_ALC_TBC"], children:[]},
	"CP0115" : {desc:"Oils and fats", parents:["CP011","TOT_X_NRG_FOOD_S","FOOD_P","TOT_X_TBC","TOT_X_HOUS","TOT_X_ALC_TBC"], children:[]},
	"CP0116" : {desc:"Fruit", parents:["CP011","FOOD_S","TOT_X_HOUS","FOOD_NP"], children:[]},
	"CP0117" : {desc:"Vegetables", parents:["CP011","FOOD_S","TOT_X_HOUS","FOOD_NP"], children:[]},
	"CP0118" : {desc:"Sugar, jam, honey, chocolate and confectionery", parents:["CP011","TOT_X_NRG_FOOD_S","FOOD_P","TOT_X_TBC","TOT_X_HOUS","TOT_X_ALC_TBC"], children:[]},
	"CP0119" : {desc:"Food products n.e.c.", parents:["CP011","TOT_X_NRG_FOOD_S","FOOD_P","TOT_X_TBC","TOT_X_HOUS","TOT_X_ALC_TBC"], children:[]},
	"CP012" : {desc:"Non-alcoholic beverages", parents:["CP01","FROOPP"], children:["CP0121","CP0122"]},
	"CP0121" : {desc:"Coffee, tea and cocoa", parents:["CP012","TOT_X_NRG_FOOD_S","FOOD_P","TOT_X_TBC","TOT_X_HOUS","TOT_X_ALC_TBC"], children:[]},
	"CP0122" : {desc:"Mineral waters, soft drinks, fruit and vegetable juices", parents:["CP012","TOT_X_NRG_FOOD_S","FOOD_P","TOT_X_TBC","TOT_X_HOUS","TOT_X_ALC_TBC"], children:[]},
	"CP02" : {desc:"Alcoholic beverages, tobacco and narcotics", parents:["CP00"], children:["CP021","CP022"]},
	"CP021" : {desc:"Alcoholic beverages", parents:["CP02","FROOPP"], children:["CP0211","CP0212","CP0213"]},
	"CP0211" : {desc:"Spirits", parents:["CP021","TOT_X_NRG_FOOD_S","FOOD_P","TOT_X_TBC","TOT_X_HOUS"], children:[]},
	"CP0212" : {desc:"Wine", parents:["CP021","TOT_X_NRG_FOOD_S","FOOD_P","TOT_X_TBC","TOT_X_HOUS"], children:[]},
	"CP0213" : {desc:"Beer", parents:["CP021","TOT_X_NRG_FOOD_S","FOOD_P","TOT_X_TBC","TOT_X_HOUS"], children:[]},
	"CP022" : {desc:"Tobacco", parents:["CP02","TOT_X_NRG_FOOD_S","FOOD_P","FROOPP","TOT_X_HOUS"], children:[]},
	"CP03" : {desc:"Clothing and footwear", parents:["CP00"], children:["CP031","CP032"]},
	"CP031" : {desc:"Clothing", parents:["CP03"], children:["CP0311","CP0312","CP0313","CP0314"]},
	"CP0311" : {desc:"Clothing materials", parents:["CP031","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP0312" : {desc:"Garments", parents:["CP031","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP0313" : {desc:"Other articles of clothing and clothing accessories", parents:["CP031","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP0314" : {desc:"Cleaning, repair and hire of clothing", parents:["CP031","FROOPP","TOT_X_HOUS","SERV_REC_X_HOA"], children:[]},
	"CP032" : {desc:"Footwear", parents:["CP03","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP04" : {desc:"Housing, water, electricity, gas and other fuels", parents:["CP00"], children:["CP041","CP043","CP044","CP045"]},
	"CP041" : {desc:"Actual rentals for housing", parents:["CP04","SERV_HOUS"], children:[]},
	"CP043" : {desc:"Maintenance and repair of the dwelling", parents:["CP04"], children:["CP0431","CP0432"]},
	"CP0431" : {desc:"Materials for the maintenance and repair of the dwelling", parents:["CP043","TOT_X_EDUC_HLTH_SPR","IGD_NNRG_ND","TOT_X_FROOPP"], children:[]},
	"CP0432" : {desc:"Services for the maintenance and repair of the dwelling", parents:["CP043","SERV_HOUS","TOT_X_FROOPP"], children:[]},
	"CP044" : {desc:"Water supply and miscellaneous services relating to the dwelling", parents:["CP04"], children:["CP0441","CP0442","CP0443","CP0444"]},
	"CP0441" : {desc:"Water supply", parents:["CP044","TOT_X_EDUC_HLTH_SPR","IGD_NNRG_ND","TOT_X_FROOPP"], children:[]},
	"CP0442" : {desc:"Refuse collection", parents:["CP044","SERV_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0443" : {desc:"Sewerage collection", parents:["CP044","SERV_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0444" : {desc:"Other services relating to the dwelling n.e.c.", parents:["CP044","SERV_HOUS","TOT_X_FROOPP"], children:[]},
	"CP045" : {desc:"Electricity, gas and other fuels", parents:["CP04"], children:["CP0451","CP0452","CP0453","CP0454","CP0455"]},
	"CP0451" : {desc:"Electricity", parents:["CP045","TOT_X_FUEL","ELC_GAS","TOT_X_FROOPP"], children:[]},
	"CP0452" : {desc:"Gas", parents:["CP045","TOT_X_FUEL","ELC_GAS","TOT_X_FROOPP"], children:[]},
	"CP0453" : {desc:"Liquid fuels", parents:["CP045","FUEL","TOT_X_FROOPP"], children:[]},
	"CP0454" : {desc:"Solid fuels", parents:["CP045","TOT_X_FUEL","ELC_GAS","TOT_X_FROOPP"], children:[]},
	"CP0455" : {desc:"Heat energy", parents:["CP045","TOT_X_FUEL","ELC_GAS","TOT_X_FROOPP"], children:[]},
	"CP05" : {desc:"Furnishings, household equipment and routine household maintenance", parents:["CP00"], children:["CP051","CP052","CP053","CP054","CP055","CP056"]},
	"CP051" : {desc:"Furniture and furnishings, carpets and other floor coverings", parents:["CP05"], children:["CP0511","CP0512","CP0513"]},
	"CP0511" : {desc:"Furniture and furnishings", parents:["CP051","IGD_NNRG_D","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0512" : {desc:"Carpets and other floor coverings", parents:["CP051","IGD_NNRG_D","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0513" : {desc:"Repair of furniture, furnishings and floor coverings", parents:["CP051","TOT_X_HOUS","SERV_HOUS","TOT_X_FROOPP"], children:[]},
	"CP052" : {desc:"Household textiles", parents:["CP05","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP053" : {desc:"Household appliances", parents:["CP05"], children:["CP0531_0532","CP0533"]},
	"CP0531_0532" : {desc:"Major household appliances whether electric or not and small electric household appliances", parents:["IGD_NNRG_D","TOT_X_HOUS","CP053","TOT_X_FROOPP"], children:[]},
	"CP0533" : {desc:"Repair of household appliances", parents:["CP053","TOT_X_HOUS","SERV_HOUS","TOT_X_FROOPP"], children:[]},
	"CP054" : {desc:"Glassware, tableware and household utensils", parents:["CP05","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP055" : {desc:"Tools and equipment for house and garden", parents:["CP05","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP056" : {desc:"Goods and services for routine household maintenance", parents:["CP05","FROOPP"], children:["CP0561","CP0562"]},
	"CP0561" : {desc:"Non-durable household goods", parents:["CP056","TOT_X_HOUS","TOT_X_EDUC_HLTH_SPR","IGD_NNRG_ND"], children:[]},
	"CP0562" : {desc:"Domestic services and household services", parents:["CP056","TOT_X_HOUS","SERV_HOUS"], children:[]},
	"CP06" : {desc:"Health", parents:["CP00","EDUC_HLTH_SPR","TOT_X_HOUS"], children:["CP061","CP062","CP063"]},
	"CP061" : {desc:"Medical products, appliances and equipment", parents:["CP06"], children:["CP0611","CP0612_0613"]},
	"CP0611" : {desc:"Pharmaceutical products", parents:["CP061","FROOPP","IGD_NNRG_ND"], children:[]},
	"CP0612_0613" : {desc:"Other medical products, therapeutic appliances and equipment", parents:["CP061","IGD_NNRG_ND","TOT_X_FROOPP"], children:[]},
	"CP062" : {desc:"Out-patient services", parents:["CP06"], children:["CP0621_0623","CP0622"]},
	"CP0621_0623" : {desc:"Medical services and paramedical services", parents:["SERV_MSC","CP062","TOT_X_FROOPP"], children:[]},
	"CP0622" : {desc:"Dental services", parents:["CP062","SERV_MSC","TOT_X_FROOPP"], children:[]},
	"CP063" : {desc:"Hospital services", parents:["CP06","SERV_MSC","TOT_X_FROOPP"], children:[]},
	"CP07" : {desc:"Transport", parents:["CP00"], children:["CP071","CP072","CP073"]},
	"CP071" : {desc:"Purchase of vehicles", parents:["CP07"], children:["CP0711","CP0712-0714"]},
	"CP0711" : {desc:"Motor cars", parents:["CP071","IGD_NNRG_D","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0712-0714" : {desc:"Motor cycles, bicycles and animal drawn vehicles", parents:["IGD_NNRG_D","TOT_X_HOUS","CP071","TOT_X_FROOPP"], children:[]},
	"CP072" : {desc:"Operation of personal transport equipment", parents:["CP07"], children:["CP0721","CP0722","CP0723","CP0724"]},
	"CP0721" : {desc:"Spare parts and accessories for personal transport equipment", parents:["CP072","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP0722" : {desc:"Fuels and lubricants for personal transport equipment", parents:["CP072","FUEL","FROOPP","TOT_X_HOUS"], children:[]},
	"CP0723" : {desc:"Maintenance and repair of personal transport equipment", parents:["CP072","SERV_TRA","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0724" : {desc:"Other services in respect of personal transport equipment", parents:["CP072","FROOPP","SERV_TRA","TOT_X_HOUS"], children:[]},
	"CP073" : {desc:"Transport services", parents:["CP07"], children:["CP0731","CP0732","CP0733","CP0734","CP0735","CP0736"]},
	"CP0731" : {desc:"Passenger transport by railway", parents:["CP073","FROOPP","SERV_TRA","TOT_X_HOUS"], children:[]},
	"CP0732" : {desc:"Passenger transport by road", parents:["CP073","FROOPP","SERV_TRA","TOT_X_HOUS"], children:[]},
	"CP0733" : {desc:"Passenger transport by air", parents:["CP073","SERV_TRA","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0734" : {desc:"Passenger transport by sea and inland waterway", parents:["CP073","SERV_TRA","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0735" : {desc:"Combined passenger transport", parents:["CP073","FROOPP","SERV_TRA","TOT_X_HOUS"], children:[]},
	"CP0736" : {desc:"Other purchased transport services", parents:["CP073","SERV_TRA","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP08" : {desc:"Communications", parents:["CP00"], children:["CP081","CP082_083"]},
	"CP081" : {desc:"Postal services", parents:["CP08","FROOPP","TOT_X_HOUS","SERV_COM"], children:[]},
	"CP082" : {desc:"Telephone and telefax equipment", parents:["CP08","CP082_083"], children:[]},
	"CP082_083" : {desc:"Telephone and telefax equipment and services", parents:["CP08","TOT_X_HOUS","SERV_COM","TOT_X_FROOPP"], children:["CP082","CP083"]},
	"CP083" : {desc:"Telephone and telefax services", parents:["CP08","CP082_083"], children:[]},
	"CP09" : {desc:"Recreation and culture", parents:["CP00"], children:["CP091","CP092","CP093","CP094","CP095","CP096"]},
	"CP091" : {desc:"Audio-visual, photographic and information processing equipment", parents:["CP09"], children:["CP0911","CP0912","CP0913","CP0914","CP0915"]},
	"CP0911" : {desc:"Equipment for the reception, recording and reproduction of sound and picture", parents:["CP091","IGD_NNRG_D","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0912" : {desc:"Photographic and cinematographic equipment and optical instruments", parents:["CP091","IGD_NNRG_D","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0913" : {desc:"Information processing equipment", parents:["CP091","IGD_NNRG_D","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP0914" : {desc:"Recording media", parents:["CP091","FROOPP","TOT_X_HOUS","IGD_NNRG_SD"], children:[]},
	"CP0915" : {desc:"Repair of audio-visual, photographic and information processing equipment", parents:["CP091","TOT_X_HOUS","SERV_REC_X_HOA","TOT_X_FROOPP"], children:[]},
	"CP092" : {desc:"Other major durables for recreation and culture", parents:["CP09"], children:["CP0921_0922","CP0923"]},
	"CP0921_0922" : {desc:"Major durables for indoor and outdoor recreation including musical instruments", parents:["IGD_NNRG_D","TOT_X_HOUS","CP092","TOT_X_FROOPP"], children:[]},
	"CP0923" : {desc:"Maintenance and repair of other major durables for recreation and culture", parents:["CP092","TOT_X_HOUS","SERV_REC_X_HOA","TOT_X_FROOPP"], children:[]},
	"CP093" : {desc:"Other recreational items and equipment, gardens and pets", parents:["CP09"], children:["CP0931","CP0932","CP0933","CP0934_0935"]},
	"CP0931" : {desc:"Games, toys and hobbies", parents:["CP093","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP0932" : {desc:"Equipment for sport, camping and open-air recreation", parents:["CP093","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP0933" : {desc:"Gardens, plants and flowers", parents:["CP093","TOT_X_HOUS","TOT_X_EDUC_HLTH_SPR","IGD_NNRG_ND","TOT_X_FROOPP"], children:[]},
	"CP0934_0935" : {desc:"Pets and related products; veterinary and other services for pets", parents:["FROOPP","TOT_X_HOUS","TOT_X_EDUC_HLTH_SPR","CP093","IGD_NNRG_ND"], children:[]},
	"CP094" : {desc:"Recreational and cultural services", parents:["CP09"], children:["CP0941","CP0942"]},
	"CP0941" : {desc:"Recreational and sporting services", parents:["CP094","FROOPP","TOT_X_HOUS","SERV_REC_X_HOA"], children:[]},
	"CP0942" : {desc:"Cultural services", parents:["CP094","FROOPP","TOT_X_HOUS","SERV_REC_X_HOA"], children:[]},
	"CP095" : {desc:"Newspapers, books and stationery", parents:["CP09"], children:["CP0951","CP0952","CP0953_0954"]},
	"CP0951" : {desc:"Books", parents:["CP095","FROOPP","TOT_X_HOUS","IGD_NNRG_SD"], children:[]},
	"CP0952" : {desc:"Newspapers and periodicals", parents:["CP095","FROOPP","TOT_X_HOUS","TOT_X_EDUC_HLTH_SPR","IGD_NNRG_ND"], children:[]},
	"CP0953_0954" : {desc:"Miscellaneous printed matter; stationery and drawing materials", parents:["FROOPP","TOT_X_HOUS","TOT_X_EDUC_HLTH_SPR","IGD_NNRG_ND","CP095"], children:[]},
	"CP096" : {desc:"Package holidays", parents:["CP09","SERV_REC_HOA","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP10" : {desc:"Education", parents:["CP00","SERV_MSC","EDUC_HLTH_SPR","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP11" : {desc:"Restaurants and hotels", parents:["CP00"], children:["CP111","CP112"]},
	"CP111" : {desc:"Catering services", parents:["CP11"], children:["CP1111","CP1112"]},
	"CP1111" : {desc:"Restaurants, caf�s and the like", parents:["CP111","TOT_X_HOUS","SERV_REC_X_HOA"], children:[]},
	"CP1112" : {desc:"Canteens", parents:["CP111","TOT_X_HOUS","SERV_REC_X_HOA"], children:[]},
	"CP112" : {desc:"Accommodation services", parents:["CP11","SERV_REC_HOA","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP12" : {desc:"Miscellaneous goods and services", parents:["CP00"], children:["CP121","CP123","CP124","CP125","CP126","CP127"]},
	"CP121" : {desc:"Personal care", parents:["CP12"], children:["CP1211","CP1212_1213"]},
	"CP1211" : {desc:"Hairdressing salons and personal grooming establishments", parents:["CP121","TOT_X_HOUS","SERV_REC_X_HOA"], children:[]},
	"CP1212_1213" : {desc:"Electrical appliances for personal care; other appliances, articles and products for personal care ", parents:["TOT_X_HOUS","TOT_X_EDUC_HLTH_SPR","IGD_NNRG_ND","CP121"], children:[]},
	"CP123" : {desc:"Personal effects n.e.c.", parents:["CP12"], children:["CP1231","CP1232"]},
	"CP1231" : {desc:"Jewellery, clocks and watches", parents:["CP123","IGD_NNRG_D","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP1232" : {desc:"Other personal effects", parents:["CP123","TOT_X_HOUS","TOT_X_FROOPP","IGD_NNRG_SD"], children:[]},
	"CP124" : {desc:"Social protection", parents:["CP12","SERV_MSC","EDUC_HLTH_SPR","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP125" : {desc:"Insurance", parents:["CP12"], children:["CP1252","CP1253","CP1254","CP1255"]},
	"CP1252" : {desc:"Insurance connected with the dwelling", parents:["CP125","TOT_X_HOUS","SERV_HOUS","TOT_X_FROOPP"], children:[]},
	"CP1253" : {desc:"Insurance connected with health", parents:["CP125","SERV_MSC","TOT_X_HOUS","TOT_X_EDUC_HLTH_SPR","TOT_X_FROOPP"], children:[]},
	"CP1254" : {desc:"Insurance connected with transport", parents:["CP125","SERV_TRA","TOT_X_HOUS","TOT_X_FROOPP"], children:[]},
	"CP1255" : {desc:"Other insurance", parents:["CP125","SERV_MSC","TOT_X_HOUS","TOT_X_EDUC_HLTH_SPR","TOT_X_FROOPP"], children:[]},
	"CP126" : {desc:"Financial services n.e.c.", parents:["CP12","SERV_MSC","TOT_X_HOUS","TOT_X_EDUC_HLTH_SPR","TOT_X_FROOPP"], children:[]},
	"CP127" : {desc:"Other services n.e.c.", parents:["CP12","SERV_MSC","TOT_X_HOUS","TOT_X_EDUC_HLTH_SPR","TOT_X_FROOPP"], children:[]},
	"EDUC_HLTH_SPR" : {desc:"Education, health and social protection", parents:[], children:["CP06","CP10","CP124"]},
	"ELC_GAS" : {desc:"Electricity, gas, solid fuels and heat energy", parents:["NRG"], children:["CP0451","CP0452","CP0454","CP0455"]},
	"FOOD" : {desc:"Food including alcohol and tobacco", parents:["GD","TOT_X_FUEL","TOT_X_EDUC_HLTH_SPR","TOT_X_NRG"], children:["FOOD_NP","FOOD_P"]},
	"FOOD_NP" : {desc:"Unprocessed food", parents:["TOT_X_TBC","NRG_FOOD_NP","FOOD","TOT_X_ALC_TBC"], children:["CP0112","CP0113","CP0116","CP0117"]},
	"FOOD_P" : {desc:"Processed food including alcohol and tobacco", parents:["FOOD","TOT_X_NRG_FOOD_NP"], children:["CP0111","CP0114","CP0115","CP0118","CP0119","CP0121","CP0122","CP0211","CP0212","CP0213","CP022"]},
	"FOOD_S" : {desc:"Seasonal food", parents:["NRG_FOOD_S"], children:["CP0113","CP0116","CP0117"]},
	"FROOPP" : {desc:"Frequent out-of-pocket purchases", parents:[], children:["CP011","CP012","CP021","CP022","CP0314","CP056","CP0611","CP0722","CP0724","CP0731","CP0732","CP0735","CP081","CP0914","CP0934_0935","CP0941","CP0942","CP0951","CP0952","CP0953_0954"]},
	"FUEL" : {desc:"Liquid fuels and fuels and lubricants for personal transport equipment", parents:["NRG"], children:["CP0453","CP0722"]},
	"GD" : {desc:"Goods (overall index excluding services)", parents:[], children:["FOOD","IGD"]},
	"IGD" : {desc:"Industrial goods", parents:["GD"], children:["IGD_NNRG","NRG"]},
	"IGD_NNRG" : {desc:"Non-energy industrial goods", parents:["IGD","TOT_X_NRG_FOOD"], children:["IGD_NNRG_D","IGD_NNRG_ND","IGD_NNRG_SD"]},
	"IGD_NNRG_D" : {desc:"Non-energy industrial goods, durables only", parents:["TOT_X_EDUC_HLTH_SPR","IGD_NNRG"], children:["CP0511","CP0512","CP0531_0532","CP0711","CP0712-0714","CP0911","CP0912","CP0913","CP0921_0922","CP1231"]},
	"IGD_NNRG_ND" : {desc:"Non-energy industrial goods, non-durables only", parents:["IGD_NNRG"], children:["CP0431","CP0441","CP0561","CP0611","CP0612_0613","CP0933","CP0934_0935","CP0952","CP0953_0954","CP1212_1213"]},
	"IGD_NNRG_SD" : {desc:"Non-energy industrial goods, semi-durables only", parents:["TOT_X_EDUC_HLTH_SPR","IGD_NNRG"], children:["CP0311","CP0312","CP0313","CP032","CP052","CP054","CP055","CP0721","CP0914","CP0931","CP0932","CP0951","CP1232"]},
	"NRG" : {desc:"Energy", parents:["IGD","TOT_X_TBC","NRG_FOOD_NP","TOT_X_EDUC_HLTH_SPR","TOT_X_ALC_TBC","TOT_X_FOOD_S","NRG_FOOD_S"], children:["ELC_GAS","FUEL"]},
	"NRG_FOOD_NP" : {desc:"Energy and unprocessed food", parents:[], children:["FOOD_NP","NRG"]},
	"NRG_FOOD_S" : {desc:"Energy and seasonal food", parents:[], children:["FOOD_S","NRG"]},
	"SERV" : {desc:"Services (overall index excluding goods)", parents:["TOT_X_NRG_FOOD"], children:["SERV_COM","SERV_HOUS","SERV_MSC","SERV_REC","SERV_TRA"]},
	"SERV_COM" : {desc:"Services related to communication", parents:["SERV","TOT_X_EDUC_HLTH_SPR"], children:["CP081","CP082_083"]},
	"SERV_HOUS" : {desc:"Services related to housing", parents:["SERV","TOT_X_EDUC_HLTH_SPR"], children:["CP041","CP0432","CP0442","CP0443","CP0444","CP0513","CP0533","CP0562","CP1252"]},
	"SERV_MSC" : {desc:"Services - miscellaneous", parents:["SERV"], children:["CP0621_0623","CP0622","CP063","CP10","CP124","CP1253","CP1255","CP126","CP127"]},
	"SERV_REC" : {desc:"Services related to recreation, including repairs and personal care", parents:["SERV","TOT_X_EDUC_HLTH_SPR"], children:["SERV_REC_HOA","SERV_REC_X_HOA"]},
	"SERV_REC_HOA" : {desc:"Services related to package holidays and accommodation", parents:["SERV_REC"], children:["CP096","CP112"]},
	"SERV_REC_X_HOA" : {desc:"Services related to recreation and personal care, excluding package holidays and accommodation", parents:["SERV_REC"], children:["CP0314","CP0915","CP0923","CP0941","CP0942","CP1111","CP1112","CP1211"]},
	"SERV_TRA" : {desc:"Services related to transport", parents:["SERV","TOT_X_EDUC_HLTH_SPR"], children:["CP0723","CP0724","CP0731","CP0732","CP0733","CP0734","CP0735","CP0736","CP1254"]},
	"TOT_X_ALC_TBC" : {desc:"Overall index excluding alcohol and tobacco", parents:[], children:["CP0111","CP0114","CP0115","CP0118","CP0119","CP0121","CP0122","FOOD_NP","NRG","TOT_X_NRG_FOOD"]},
	"TOT_X_AP" : {desc:"Overall index excluding administered prices", parents:[], children:[]},
	"TOT_X_APF" : {desc:"Overall index excluding fully administered prices", parents:[], children:[]},
	"TOT_X_APM" : {desc:"Overall index excluding mainly administered prices", parents:[], children:[]},
	"TOT_X_EDUC_HLTH_SPR" : {desc:"Overall index excluding Education, health and social protection", parents:[], children:["CP0431","CP0441","CP0561","CP0933","CP0934_0935","CP0952","CP0953_0954","CP1212_1213","CP1253","CP1255","CP126","CP127","FOOD","IGD_NNRG_D","IGD_NNRG_SD","NRG","SERV_COM","SERV_HOUS","SERV_REC","SERV_TRA"]},
	"TOT_X_FOOD_S" : {desc:"Overall index excluding seasonal food", parents:[], children:["NRG","TOT_X_NRG_FOOD_S"]},
	"TOT_X_FROOPP" : {desc:"Overall index excluding frequent out-of-pocket purchases", parents:[], children:["CP0311","CP0312","CP0313","CP032","CP0431","CP0432","CP0441","CP0442","CP0443","CP0444","CP0451","CP0452","CP0453","CP0454","CP0455","CP0511","CP0512","CP0513","CP052","CP0531_0532","CP0533","CP054","CP055","CP0612_0613","CP0621_0623","CP0622","CP063","CP0711","CP0712-0714","CP0721","CP0723","CP0733","CP0734","CP0736","CP082_083","CP0911","CP0912","CP0913","CP0915","CP0921_0922","CP0923","CP0931","CP0932","CP0933","CP096","CP10","CP112","CP1231","CP1232","CP124","CP1252","CP1253","CP1254","CP1255","CP126","CP127"]},
	"TOT_X_FUEL" : {desc:"Overall index excluding liquid fuels and lubricants for personal transport equipment", parents:[], children:["CP0451","CP0452","CP0454","CP0455","FOOD","TOT_X_NRG_FOOD"]},
	"TOT_X_HOUS" : {desc:"Overall index excluding housing, water, electricity, gas and other fuels", parents:[], children:["CP0111","CP0112","CP0113","CP0114","CP0115","CP0116","CP0117","CP0118","CP0119","CP0121","CP0122","CP0211","CP0212","CP0213","CP022","CP0311","CP0312","CP0313","CP0314","CP032","CP0511","CP0512","CP0513","CP052","CP0531_0532","CP0533","CP054","CP055","CP0561","CP0562","CP06","CP0711","CP0712-0714","CP0721","CP0722","CP0723","CP0724","CP0731","CP0732","CP0733","CP0734","CP0735","CP0736","CP081","CP082_083","CP0911","CP0912","CP0913","CP0914","CP0915","CP0921_0922","CP0923","CP0931","CP0932","CP0933","CP0934_0935","CP0941","CP0942","CP0951","CP0952","CP0953_0954","CP096","CP10","CP1111","CP1112","CP112","CP1211","CP1212_1213","CP1231","CP1232","CP124","CP1252","CP1253","CP1254","CP1255","CP126","CP127"]},
	"TOT_X_NRG" : {desc:"Overall index excluding energy", parents:[], children:["FOOD","TOT_X_NRG_FOOD"]},
	"TOT_X_NRG_FOOD" : {desc:"Overall index excluding energy, food, alcohol and tobacco", parents:["TOT_X_NRG_FOOD_S","TOT_X_TBC","TOT_X_FUEL","TOT_X_NRG","TOT_X_ALC_TBC","TOT_X_NRG_FOOD_NP"], children:["IGD_NNRG","SERV"]},
	"TOT_X_NRG_FOOD_NP" : {desc:"Overall index excluding energy and unprocessed food", parents:[], children:["FOOD_P","TOT_X_NRG_FOOD"]},
	"TOT_X_NRG_FOOD_S" : {desc:"Overall index excluding energy and seasonal food", parents:["TOT_X_FOOD_S"], children:["CP0111","CP0112","CP0114","CP0115","CP0118","CP0119","CP0121","CP0122","CP0211","CP0212","CP0213","CP022","TOT_X_NRG_FOOD"]},
	"TOT_X_TBC" : {desc:"Overall index excluding tobacco", parents:[], children:["CP0111","CP0114","CP0115","CP0118","CP0119","CP0121","CP0122","CP0211","CP0212","CP0213","FOOD_NP","NRG","TOT_X_NRG_FOOD"]},
};
