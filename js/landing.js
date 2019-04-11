function Landing(){
	this.user = document.getElementById("user");
	this.pass = document.getElementById("pass");
	this.btn = document.querySelector(".btn1");
	this.span = document.querySelector(".content");
	this.url = "http://www.icodeilife.cn/ctrl/login.php";
	this.landing = document.querySelector(".landing");
	this.init();
}
Landing.prototype.init = function(){
	var that = this;
	this.btn.onclick = function(){
		that.val1 = that.user.value;
		that.val2 = that.pass.value;
		that.load();
	}
}
Landing.prototype.load = function(){
	var that = this;
	ajax({
		url : this.url,
		success : function(res){
			switch(res){
				case "0":
					that.span.innerHTML = "用户名密码不符，请重新输出";
//					that.user.value = "";
					that.pass.value = "";
					break;
				case "1":
					that.span.innerHTML = "重新登陆";
					that.pass.value = "";
//					setTimeout(()=>{
//						location.href = "landing.html"
//					},2000)
					break;
				default:
					that.span.innerHTML = "登陆成功";
					setTimeout(()=>{
						location.href = "index.html"
					},2000);
//					that.landing.innerHTML = that.val1;
					break;
			}
		},
		data:{
			user:that.val1,
			pass:that.val2
		},
		beforeSend:function(){
			this.span.html = "<img src='img/loading.gif' />"
		}
	})
}

new Landing();
