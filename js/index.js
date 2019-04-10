var oUl = document.querySelector(".ul-2");
var aLi = oUl.children;
oUl.onmouseover = function(){
	oUl.style = `height:auto`;
	oUl.onmouseout = function(){
		oUl.style = `height:none`;
	}
}

var oList = document.querySelector(".list");
var aLiList = oList.children;
var oPosition = document.querySelector(".position");
var aP = document.querySelectorAll(".p");
for(var i=0;i<aLiList.length;i++){
	aLiList[i].index = i;
	aLiList[i].onmouseover = function(){
		oPosition.style.display = "block";
		for(var j=0;j<aLiList.length;j++){
			aP[j].style.display = "none";
		}
		aP[this.index].style.display = "block";
		oPosition.onmouseover = function(){
			oPosition.style.display = "block";
			oList.style.display = "block";
			oPosition.onmouseout = function(){
				oPosition.style.display = "none";
				oList.style.display = "none";
			}
		}
	}
	aLiList[i].onmouseout = function(){
		oPosition.style.display = "none";
	}
}

var oDt = document.querySelector(".dt");
oDt.onmouseover = function(){
	oList.style.display = "block";
//	console.log(3);
	oDt.onmouseout = function(){
		oList.style.display = "none";
	}
	oList.onmouseover = function(){
		oList.style.display = "block";
		oList.onmouseout = function(){
			oList.style.display = "none";
		}
	}
}

function Banner(){
	this.stop = document.querySelector(".photo")
	this.photo = document.querySelectorAll(".photo a");
	this.left = document.querySelector(".left");
	this.right = document.querySelector(".right");
//	this.iprev = this.photo.length-1;
	this.index = 0;
	this.length = this.photo.length-1;
	this.init();
}
Banner.prototype.init = function(){
	var that = this;
	this.left.onclick = function(){
//		console.log(that.index);
		if(that.index == 0){
			that.index = that.length;
		}else{
			that.index --;
		}
		that.move(that.index);	
//		console.log(that.index);
//		console.log(that.photo.length-1);
	}
	this.right.onclick = function(){
//		console.log(that.index);
//		console.log(that.length);
		if(that.index == that.length){
			that.index = 0;
//			console.log(true)
		}else{
			that.index ++;
		}
		that.move(that.index);
	}
	this.timer = setInterval(()=>{
		that.right.onclick();
	},3000)
	this.stop.onmousemove = function(){
		clearInterval(that.timer);
//		console.log(1);
		that.stop.onmouseout = function(){
			that.timer = setInterval(()=>{
				that.right.onclick();
			},2000)
		}
	}
	
}
Banner.prototype.move = function(index){
	for(var i=0;i<this.photo.length;i++){
		this.photo[i].style = `opacity:0`;
	}
//	console.log(index)
//	this.photo.style = `opacity:0`;
//	console.log(this.photo)
	this.photo[this.index].style = `opacity:1`;
//	console.log(this.photo[this.index])
}
//window.onload = function(){
	new Banner();
//}




