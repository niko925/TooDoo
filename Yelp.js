
	
	function T1(food,location){
		var xmlhttp = new XMLHttpRequest();
		//xmlhttp.withCredentials = true;
		var url = "http://api.yelp.com/v2/search?term=" + food +"&location=" + location;
		//var url = "https://api.yelp.com/v2/search?term=food&location=San+Francisco";
		xmlhttp.onreadystatechange = function() {
			//OK
    	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        	var myArr = JSON.parse(xmlhttp.responseText);
        	myFunction(myArr);
    		}
    		else{
    			//error internet p
    		}
		}; 
		xmlhttp.open("GET", url, true);
		xmlhttp.send(); 
	}
	
	function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    //document.getElementById("id01").innerHTML = out;
    console.log(out);
}

