function DQ_HEIGHT(year,country){
	d3.tsv("data/DQ_HEIGHT.tsv", function(tsv) {
		

		var dq_Data=tsv.filter(function(d) {
			
	      return(d.variable== parseFloat(year) && d.country==country)
	    });

	    if(dq_Data!=""){
	    	var text = "La qualité des données pour " + country + " est égale à " + dq_Data[0].value + " en " + year ;
			document.getElementById("DQ_HEIGHT").innerHTML= text;
		}
		else{
			document.getElementById("DQ_HEIGHT").innerHTML= "Pas d'information sur la qualité des données pour cette année";
		}

	});
}