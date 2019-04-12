//function Goods(){
//	this.url = "./data/goods-1.json";
//	this.picture = document.querySelector(".picture");
//	this.init();
//}
//Goods.prototype.init = function(){
//	ajaxGet({
//		url:this.url,
//		success:function(res){
//			that.res = JSON.parse(res),
//			that.display()
//		}
//	})
//}
//Goods.prototype.display = function(){
//	var str = "<ul>";
//		for(var i=0;i<this.res.length;i++){
//			str +=`<li>
//						<a href="goods.html" class="img"><img src="${this.res[i].src}"/></a>
//						<a href="goods.html" class="txt">${this.res[i].name}</a>
//						<span class="mony">￥</span><span>${this.res[i].price}</span>
//					</li>`
//		}
//		str += `</ul>`;
//		this.picture.innerHTML = str;
//}
//new Goods();



class Goods{
	constructor(options){
		this.picture = options.picture;
		this.url = options.url;
		this.init();
	}
	init(){
		var that = this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res),
				that.display()
			}
		})
	}
	display(){
		var str = "<ul>";
		str += `<div class="alone">
						<a href="goods.html" class="img"><img src="img/limit-1.png"/></a>
						<a href="goods.html" class="txt">维生素C泡腾片</a>
						<span class="mony">￥</span><span>41.00</span>
					</div>`
		for(var i=0;i<this.res.length;i++){
			str +=`<li index="${this.res[i].goodsId}">
						<a href="goods.html" class="img"><img src="${this.res[i].src}"/></a>
						<a href="goods.html" class="txt">${this.res[i].name}</a>
						<span class="mony">￥</span><span>${this.res[i].price}</span>
					</li>`
		}
		str += `</ul>`;
		this.picture.innerHTML = str;
	}
}

new Goods({
	url:"./data/goods-1.json",
	picture:document.querySelector(".picture")
});


class Goodsfirst{
	constructor(options){
		this.first = options.first;
		this.url = options.url;
		this.init();
	}
	init(){
		var that = this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res),
				that.display()
			}
		})
	}
	display(){
		var str = "<ul>";
//		str += `<div class="alone">
//						<a href="goods.html" class="img"><img src="img/limit-1.png"/></a>
//						<a href="goods.html" class="txt">维生素C泡腾片</a>
//						<span class="mony">￥</span><span>41.00</span>
//					</div>`
		for(var i=0;i<this.res.length;i++){
			str +=`<li index="${this.res[i].goodsId}">
						<a href="goods.html" class="img"><img src="${this.res[i].src}"/></a>
						<a href="goods.html" class="txt">${this.res[i].name}</a>
						<p>${this.res[i].p}</p>
						<span>${this.res[i].price}</span>
					</li>`
		}
		str += `</ul>`;
		this.first.innerHTML = str;
	}
}

new Goodsfirst({
	url:"./data/goods-2.json",
	first:document.querySelector(".first")
});

class Goodssecond{
	constructor(options){
		this.second = options.second;
		this.url = options.url;
		this.init();
	}
	init(){
		var that = this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res),
				that.display()
			}
		})
	}
	display(){
		var str = "<ul>";
//		str += `<div class="alone">
//						<a href="goods.html" class="img"><img src="img/limit-1.png"/></a>
//						<a href="goods.html" class="txt">维生素C泡腾片</a>
//						<span class="mony">￥</span><span>41.00</span>
//					</div>`
		for(var i=0;i<this.res.length;i++){
			str +=`<li id="${this.res[i].goodsId}">
						<a href="goods.html" class="img"><img src="${this.res[i].src}"/></a>
						<a href="goods.html" class="txt">${this.res[i].name}</a>
						<p>${this.res[i].p}</p>
						<span>${this.res[i].price}</span>
					</li>`
		}
		str += `</ul>`;
		this.second.innerHTML = str;
		new Right()
	}
}

new Goodssecond({
	url:"./data/goods-3.json",
	second:document.querySelector(".second")
});




function Right(){

	this.rightLi = document.querySelectorAll(".right-2 ul li");
	this.init();
//	console.log(this.rightLi[10])
//	console.log($('.right-2').find('ul li'))
}
Right.prototype.init = function(){
	var that = this;
	for(var i=0;i<this.rightLi.length;i++){
		this.rightLi[i].addEventListener("click",function(eve){
			if(eve.target.nodeName == "IMG"){
				that.id = eve.target.parentNode.parentNode.getAttribute("index");
				that.setCookie();
				console.log(that.id)
			}
		})
		
	}
}
Right.prototype.setCookie = function(){
	this.goods = getCookie("goods");
//	if(this.goods == ""){
//		this.goods = [{
//			id:this.id
//		}];
//	}else{
//		this.goods = JSON.parse(this.goods);
//		this.goods.push({id:this.id})
//	}
	this.goods = [{
			id:this.id
	}];
//	console.log(this.goods)
	setCookie("goods",JSON.stringify(this.goods))
}
//function Right(){
//
//	this.rightLi = document.querySelectorAll(".right ul li");
//	this.init();
//	console.log(this.rightLi)
////	console.log($('.right').find('ul li'))
//}
//Right.prototype.init = function(){
//	var that = this;
//	
//	this.rightLi[0].addEventListener("click",function(eve){
//	console.log(1)
//		
//		if(eve.target.nodeName == "A"){
//			that.id = eve.target.parentNode.getAttribute("index");
//			console.log(5)
////			that.setCookie();
//		}
//	})
//}
//Right.prototype.setCookie = function(){
//	this.goods = getCookie("goods");
//	if(this.goods == ""){
//		this.goods = [{
//			id:this.id
//		}];
//	}else{
//		this.goods = JSON.parse(this.goods);
//		this.goods.push({id:this.id})
//	}
//	console.log(this.goods)
//	setCookie("goods",JSON.stringify(this.goods))
//}
