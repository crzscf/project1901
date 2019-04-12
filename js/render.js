class List{
	constructor(options){
		this.url = options.url;
		this.tbody = options.tbody;
		this.load();
	}
	load(){
		var that = this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res);
				that.getCookie();
			}
		})
	}
	getCookie(){
		this.goods = JSON.parse(getCookie("goods"));
//					console.log(this.res)
		this.display();
	}
	display(){
		var str = ""
		for(var i=0;i<this.res.length;i++){
			for(var j=0;j<this.goods.length;j++){
				if(this.res[i].goodsId == this.goods[j].id){
//								console.log(this.res[i])
					str =` <div class="goods">
								<img src="${this.res[i].src}"/>
							</div>
							<div class="magnifier">
								
							</div>
							<div class="details">
								<ul>
									<li><p>通用名</p><span>${this.res[i].name}</span></li>
									<li><p>生产企业</p><span>有限公司</span></li>
									<li><p>规格</p><span>${this.res[i].p}</span></li>
									<li><p>价格</p><span>${this.res[i].price}</span></li>
									<li><a href="index.html">返回首页</a><p class="shopping">加入购物车</p><a href="index.html">返回首页</a></li>
								</ul>
							</div>`
				}
			}
		}
		
		this.tbody.innerHTML = str;
	}
}
new List({
	url:"./data/goods-4.json",
	tbody:document.getElementById("tbody")
})