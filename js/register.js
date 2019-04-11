function Register(){
	this.user = document.getElementById("user");
	this.pass = document.getElementById("pass");
	this.btn = document.querySelector(".btn2");
	this.span = document.querySelector(".content");
	this.url = "http://www.icodeilife.cn/ctrl/register.php";
	this.init();
}
Register.prototype.init = function(){
	var that = this;
	this.btn.onclick = function(){
		that.val1 = that.user.value;
		that.val2 = that.pass.value;
		that.load();
	}
}
Register.prototype.load = function(){
	var that = this;
	ajax({
		url : this.url,
		success : function(res){
			switch(res){
				case "0":
					that.span.innerHTML = "用户名重名，请重新输出";
//					that.user.value = "";
					that.pass.value = "";
					break;
				case "1":
					that.span.innerHTML = "注册成功,即将跳转登陆页面";
					setTimeout(()=>{
						location.href = "landing.html"
					},2000)
					break;
				case "2":
					that.span.innerHTML = "请输入用户名、密码";
					break;
			}
		},
		data:{
			tel:that.val1,
			pass:that.val2
		},
		beforeSend:function(){
			this.span.html = "<img src='img/loading.gif' />"
		}
	})
}

new Register();
