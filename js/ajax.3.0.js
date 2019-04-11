function ajaxPost(url,callback,data){
	data = data == undefined ? {} : data;
	var str = "";
	for(var i in data){
		str = str + i + "=" + data[i] + "&";
	}
	str = str.slice(0,str.length-1);
	var ajax = new XMLHttpRequest();
	ajax.open("POST",url);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			callback(ajax.responseText)
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send(str);
}


function ajaxGet(url,callback,data){
	data = data==undefined ? {} : data;
	var str = "";
	for(var i in data){
		str = str + i+ "=" +data[i] + "&"
	}
	var d = new Date();
	url = url + "?" + str + "_lyt="+d.getTime();
	var ajax = new XMLHttpRequest();
	ajax.open("GET",url,true);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			callback(ajax.responseText)
		}
	}
	ajax.send(null)
}

function jsonp(url,callback,data){
	var str= "";
	for(var i in data){
		str = str + i + "=" + data[i] + "&";
	}
//	str = str.slice(0,str.length-1);
	var d = new Date;
	url = url + "?" + str + "_lyt=" + d.getTime();
	
//	通过顶层对象window,在局部环境中绑定一个全局函数
	window[data[data._name]] = function(res){
		callback(res)
	}
	
	var script = document.createElement("script");
	script.src = url;
	document.body.appendChild(script)
}