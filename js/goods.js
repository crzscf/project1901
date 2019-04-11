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
			str +=`<li>
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
			str +=`<li>
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
			str +=`<li>
						<a href="goods.html" class="img"><img src="${this.res[i].src}"/></a>
						<a href="goods.html" class="txt">${this.res[i].name}</a>
						<p>${this.res[i].p}</p>
						<span>${this.res[i].price}</span>
					</li>`
		}
		str += `</ul>`;
		this.second.innerHTML = str;
	}
}

new Goodssecond({
	url:"./data/goods-3.json",
	second:document.querySelector(".second")
});