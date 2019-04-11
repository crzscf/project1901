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
//			oList.style.display = "block";
			oPosition.onmouseout = function(){
				oPosition.style.display = "none";
//				oList.style.display = "none";
			}
		}
	}
	aLiList[i].onmouseout = function(){
		oPosition.style.display = "none";
	}
}

//function Search(){
//	this.txt = document.querySelector(".txt");
//	this.list = document.getElementById("list");
////	this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su"
//	this.init();
//}
//Search.prototype.init = function(){
//	var that = this;
//	this.txt.onkeyup = function(){
////		console.log(this.value)
//		that.val = this.value;
//		that.load();
//	}
//}
//Search.prototype.load = function(){
//	jsonp(this.url,(res)=>{
//		console.log(res.s)
//	},{
//		_name:"cb",
//		cb:"zcsf",
//		wd:this.val
//	})
//}
//new Search();




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
$(".floor").children("li").click(function(){
	var index = $(this).index();
	var h = $(".content").height()+60;
	var t = 950 + index*h;
	$("html").animate({
		scrollTop:t
	})
})



function Search(){
	this.txt = document.querySelector(".txt");
	this.list = document.querySelector(".list-2");
	this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
	this.init();
}
Search.prototype.init = function(){
	var that = this;
	this.txt.onkeyup = function(){
		that.val = this.value;
		that.load();
	}
}
Search.prototype.load = function(){
	var that = this;
	jsonp(this.url,function(res){
		that.res = res;
		that.display();
	},{
		_name:"cb",
		cb:"zscf",
		wd:this.val
	})
}
Search.prototype.display = function(){
	var str = "";
	this.res.s.forEach(function(v){
		str += `<li>${v}</li>`;
	})
//	console.log(str)
	this.list.innerHTML = str;
}
new Search();













