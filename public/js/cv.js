setTimeout(function(){
        var t = document.querySelectorAll(".slider-item");
	for (var i = 0; i < t.length; i++){t[i].parentNode.removeChild(t[i]);}
	for (var i = t.length-1; i >=0 ; i--){$(".slider-item-container")[0].appendChild(t[i]);}
}, 2500);