let head_bg = document.querySelector(".head");
let gnb = document.querySelectorAll(".menu > li");
let sub = document.querySelectorAll(".sub");
let subUl = document.querySelectorAll(".sub>ul");
function myfnc(){
	sub.forEach(function(v,k){
		v.classList.remove("on");
		v.style.height = 0 + "px";
		v.querySelector("a").classList.remove("on");
	})
	head_bg.style.height = 80 + "px";
	head_bg.style.background = "none";
	document.querySelector(".logo img").src = "images/logo.svg";
}
myfnc();
gnb.forEach(function(v,k){
	v.onmouseenter = function(){
		console.log(head_bg.offsetHeight);
		head_bg.style.background = "#fff";
		document.querySelector(".logo img").src = "images/logo-d.svg";
		try{
			subUl.forEach(function(){
			let ht = subUl[k].offsetHeight+120;
			//console.log(ht);
			gnb[k].querySelector(".sub").style.height = ht+"px";
			gnb[k].querySelector(".sub").classList.add("on");
			head_bg.style.height = ht+"px";
		})
		}catch(error){
			head_bg.style.height = 80+"px";
		}
		
	}
	v.onmouseleave = function(){
		myfnc();
	}
})
head_bg.onmouseenter = function(){
	gnb.forEach(function(v,k){
		v.querySelector("a").classList.add("on");
	})
	head_bg.style.height = 80+"px";
	head_bg.style.background = "#fff";
	document.querySelector(".logo img").src = "images/logo-d.svg";
}
head_bg.onmouseleave =function(){
	myfnc();
	gnb.forEach(function(v,k){
		v.querySelector("a").classList.remove("on");
	})
}