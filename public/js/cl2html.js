function convert(){
	var inp = document.getElementById("input");

	var arr = inp.value.split(',');
	arr.pop();
	var res = "<ul>"
	for (var i = 0; i < arr.length; i++){
		res += "<li>"+arr[i]+"</li>";
	}
	res +="</ul>";
	inp.value=res;
	//alert(res);
}