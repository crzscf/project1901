//var oBox = document.querySelector("#box")
//var oCont = document.querySelector("#cont")
//var oSpan = document.querySelector("span")
//var oImg = document.querySelector("img")
//
//if(oBox.attachEvent){
//	oBox.attachEvent("onmouseover",function(){
//		oSpan.style.display = "block";
//		oCont.style.display = "block";
//	})
//}else{
//	oBox.addEventListener("mouseover",function(){
//		oSpan.style.display = "block";
//		oCont.style.display = "block";
//	}) 
//}
//
//if(oBox.attachEvent){
//	oBox.attachEvent("onmousemove",function(eve){
//		var e = eve || window.event;
//		var l = e.offsetX - oSpan.offsetWidth/2;
//		var t = e.offsetY - oSpan.offsetHeight/2;
//		if(l < 0) l = 0;
//		if(t < 0) t = 0;
//		if(l > oBox.offsetWidth - oSpan.offsetWidth){
//			l = oBox.offsetWidth - oSpan.offsetWidth
//		}
//		if(t > oBox.offsetHeight - oSpan.offsetHeight){
//			t = oBox.offsetHeight - oSpan.offsetHeight
//		}
//		oSpan.style.left = l + "px"
//		oSpan.style.top = t + "px"
//		var x = l / (oBox.offsetWidth - oSpan.offsetWidth);
//		var y = t / (oBox.offsetHeight - oSpan.offsetHeight);
//	})
//}else{
//	oBox.addEventListener("mousemove",function(eve){
//		var e = eve || window.event;
//		var l = e.offsetX - oSpan.offsetWidth/2;
//		var t = e.offsetY - oSpan.offsetHeight/2;
////				console.log(l)
////				console.log(t)
//		if(l < 0) l = 0;
//		if(t < 0) t = 0;
//		if(l > oBox.offsetWidth - oSpan.offsetWidth){
//			l = oBox.offsetWidth - oSpan.offsetWidth
//		}
//		if(t > oBox.offsetHeight - oSpan.offsetHeight){
//			t = oBox.offsetHeight - oSpan.offsetHeight
//		}
//		oSpan.style.left = l + "px"
//		oSpan.style.top = t + "px"
//		var x = l / (oBox.offsetWidth - oSpan.offsetWidth);
//		var y = t / (oBox.offsetHeight - oSpan.offsetHeight);
//		oImg.style.left = x * (oCont.offsetWidth - oImg.offsetWidth) + "px"
//		oImg.style.top = y * (oCont.offsetHeight - oImg.offsetHeight) + "px"
//	})
//}
//
//if(oBox.attachEvent){
//	oBox.attachEvent("onmouseout",function(){
//		oSpan.style.display = "none";
//		oCont.style.display = "none";
//	})
//}else{
//	oBox.addEventListener("mouseout",function(){
//		oSpan.style.display = "none";
//		oCont.style.display = "none";
//	})
//}