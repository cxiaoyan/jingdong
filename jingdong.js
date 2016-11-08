$(function(){
	var box=$(".bnlf")[0]
	var banner=$(".banners")
	var btn=$(".buttons")
	var left=$(".left")[0]
	var right=$(".right")[0]
	var width=parseInt(getStyle(box,"width"))
	var n=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,2000);
	function move(type){

		type=type||"r"
		if(type=="r"){
				if(!flag){
					return;
				}
				flag=false;
				next=n+1;
				if(next>=banner.length){
					next=0;
				}
				banner[next].style.left=width+"px"
				animate(banner[n],{left:-width},600)
			
		}else if(type=="l"){
			if(!flag){
				return;
			}
			flag=false;
			next=n-1;
			if(next<0){
				next=banner.length-1
			}
			banner[next].style.left=-width+"px"
			animate(banner[n],{left:width},600)
		}

		animate(banner[next],{left:0},600,function(){
			flag=true;
		})
		btn[n].style.background="#3e3e3e"
		btn[next].style.background="red"
		n=next;
	}

	box.onmouseover=function(){
		clearInterval(t)
	}
	box.onmouseout=function(){
		t=setInterval(move,2000);
	}

	for (var i = 0; i < btn.length; i++) {
		btn[i].index=i
		btn[i].onclick=function(){
			if(!flag){
				return;
			}
			flag=false;

			if(this.index>n){
				
				banner[this.index].style.left=width+"px"
				animate(banner[n],{left:-width},600)
				
			}else if(this.index<n){

				banner[this.index].style.left=-width+"px"
				animate(banner[n],{left:width},600)
			}
			animate(banner[this.index],{left:0},600,function(){
					flag=true;
				})
			btn[n].style.background="#3e3e3e"
			btn[this.index].style.background="red"
			n=this.index;
		}
	}




	//京东的楼层跳转：
	var floor_nav=$(".floor-nav")[0]
	var floor_lis=$(".floor-lis")
	var floor=$(".building")
	var cheight=document.documentElement.clientHeight;
	var nheight;
	var now;
	for (var i = 0; i < floor.length; i++) {
		floor[i].h=floor[i].offsetTop;
	}
	window.onscroll=function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
		var top=obj.scrollTop;
		if(top>=floor[0].h-300){
			floor_nav.style.display="block"
			nheight=floor_nav.offsetHeight;
			floor_nav.style.top=(cheight-nheight)/2+"px";	
		}
		if(top<floor[0].h-300){
			floor_nav.style.display="none"
		}
		for (var i = 0; i < floor.length; i++) {
			if(top>=floor[i].h-200){
				for (var j = 0; j < floor_lis.length; j++) {
					floor_lis[j].style.background=""
					var aa=$(".none",floor_lis[j])[0]
					aa.style.cssText="display:none;color:#333;"
					var block=$(".block",floor_lis[j])[0]
					block.style.display="block"

				}
				var aa=$(".none",floor_lis[i])[0]
				var block=$(".block",floor_lis[i])[0]
				aa.style.cssText="display:block;color:#e00313;"
				block.style.display="none"
			}
		}
	}
	for (var i = 0; i < floor_lis.length; i++) {
		floor_lis[i].index=i;
		floor_lis[i].onclick=function(){
			animate(document.body,{scrollTop:floor[this.index].h})
			animate(document.documentElement,{scrollTop:floor[this.index].h})
			now=this.index;
		}
		floor_lis[i].onmouseover=function(){
			this.style.background="#c81623"
			var a=$(".none",this)[0]
			var block=$(".block",this)[0]
			block.style.display="none"
			a.style.cssText="display:block;color:#fff;"
		}
		floor_lis[i].onmouseout=function(){
			if(this.index==now){
				return;
			}
			this.style.background=""
			var a=$(".none",this)[0]
			var block=$(".block",this)[0]
			a.style.cssText="display:none;color:#333;"	
			block.style.display=""
		}
	}



	
	function Show(type){
		var lf=type;
		lf.onmouseover=function(){
			var hidden=$(".hidden",this)[0]
			var p=$("p",this)[0]
			var chidden=$(".hidden-top",this)[0]
			chidden.style.display="block"
			hidden.style.display="block"
			p.style.background="url(top/top.png)"
		}
		lf.onmouseout=function(){
			var hidden=$(".hidden",this)[0]
			var p=$("p",this)[0]
			var chidden=$(".hidden-top",this)[0]
			chidden.style.display=""
			hidden.style.display=""
			p.style.background=""
		}
	}
	var lf=$(".lf")[0]
	Show(lf)


		var obj=$(".my-care")
	for (var i = 0; i < obj.length; i++) {
		obj[i].index=i
		obj[i].onmouseover=function(){
			var hd=$(".hidden-all",this)[0]
			hd.style.display="block"
			if(this.index==0||this.index==3||this.index==2){
				var hd2=$(".hidden-top",this)[0]
				hd2.style.display="block"
			}
		}
		obj[i].onmouseout=function(){
			var hd=$(".hidden-all",this)[0]
			hd.style.display="none"
			if(this.index==0||this.index==3||this.index==2){
				var hd2=$(".hidden-top",this)[0]
				hd2.style.display="none"
			}
		}

	};
	

	var lfneirong=$(".lfneirong")[0]
	var kuangjia=$(".kuangjia")
	for (var i = 0; i < kuangjia.length; i++) {
		kuangjia[i].onmouseover=function(){
			var hidden_nav=$(".hidden-nav",this)[0]
			var word=$("a",this)[0]
			hidden_nav.style.display="block"
			this.style.background="#fff"
			word.style.color="#c81623"
		}
		kuangjia[i].onmouseout=function(){
			var hidden_nav=$(".hidden-nav",this)[0]
			var word=$("a",this)[0]
			hidden_nav.style.display=""
			this.style.background=""
			word.style.color=""
		}
	}




	// function lunboNode(lunbo,left,right,imgBox){
	// 	var lunbo=lunbo;
	// 	var left=left;
	// 	var right=right;
	// 	var imgBox=imgBox;
	// 	var n=4;
	// 	var width=parseInt(getStyle($(".ad-column",lunbo)[0],"width"));
	// 	// var t=setInterval(move,1000)
	// 	function move(){
	// 		animate(imgBox,{left:-width*n},600,function(){
	// 				var imgfirst=getFirst(imgBox);
	// 				imgBox.appendChild(imgfirst)
	// 				imgBox.style.left=0;
	// 		})
	// 	}

	// 	lunbo.onmouseover=function(){
	// 		clearInterval(t);
	// 		left.style.display="block"
	// 		right.style.display="block"
	// 	}
	// 	lunbo.onmouseout=function(){
	// 		t=setInterval(move,1000)
	// 		left.style.display="none"
	// 		right.style.display="none"
	// 	}
	// 	left.onclick=function(){
	// 		for (var i = 0; i < n; i++) {
	// 			var last=getLast(imgBox)
	// 			var first=getFirst(imgBox)
	// 			insertBefore(last,first)
	// 			imgBox.style.left=-width*n+"px"
			
	// 		}	animate(imgBox,{left:0},600)
	// 	}
	// 	right.onclick=function(){
	// 		move()
	// 	}
	// }
	
	// var lunbo=$(".jiedian-parent")[0]
	// var left=$(".lunbo-left")[0]
	// var right=$(".lunbo-right")[0]
	// var imgBox=$(".jiedian")[0]
	// lunboNode(lunbo,left,right,imgBox)


	var lunbo=$(".jiedian-parent")[0]
	var leftbutton=$(".lunbo-left")[0]
	var rightbutton=$(".lunbo-right")[0]
	var imgBox=$(".jiedian")[0]
	var swidth=parseInt(getStyle($(".ad-column",imgBox)[0],"width"));
	// var n=4;
	// var tttt=setInterval(moveNode,3000)
	function moveNode(){
		animate(imgBox,{left:-(swidth+1)},500,function(){
			// for (var i = 0; i < n; i++) {
			// 	var imgfirst=getFirst(imgBox);
			// 	imgBox.appendChild(imgfirst)
			// 	}
			var imgfirst=getFirst(imgBox);
			imgBox.appendChild(imgfirst)
			imgBox.style.left=0;
		})
	}
	lunbo.onmouseover=function(){
		// clearInterval(tttt);
		leftbutton.style.display="block"
		rightbutton.style.display="block"
	}
	lunbo.onmouseout=function(){
		// tttt=setInterval(moveNode,2000)
		leftbutton.style.display="none"
		rightbutton.style.display="none"
	}
	leftbutton.onclick=function(){
		var last=getLast(imgBox)
		var first=getFirst(imgBox)
		insertBefore(last,first)
		imgBox.style.left=-(swidth+1)+"px"
		animate(imgBox,{left:0},500)
	}
	rightbutton.onclick=function(){
		moveNode()
	}
	
	


	// 选项卡
	function option(type){
		var xxk=type 
		var wz=$("a",xxk)
		var content=$(".add-box")
		for (var i = 0; i < wz.length; i++) {
			wz[i].index=i
			
			wz[i].onmouseover=function(){
				
				for (var i = 0; i < wz.length; i++) {
					wz[i].style.cssText="border-top: 3px solid #fff;border-left: 1px solid #fff;border-right: 1px solid #fff;border-bottom:0;color:#666;"
					var sp=$("span",xxk)
					sp[i].style.color="#ccc"
					content[i].style.display="none"
				};
				this.style.cssText="border-right:1px solid #c81623;border-left:1px solid #c81623;border-top:3px solid #c81623;border-bottom:1px solid #fff;color:#c81623;"
				var span=$("span",xxk)[this.index]
				var spans=$("span",xxk)[this.index-1]
				if(this.index==0){
					spans=$("span",xxk)[this.index]
				}
				span.style.color="#fff"
				spans.style.color="#fff"
				var span8=$("span",xxk)[8]
				span8.style.color="#fff"
				content[this.index].style.display="block"

			}
		}

}
var xxk=$(".build-nav-right")
for (var i = 0; i < xxk.length; i++) {
	option(xxk[i])
}

	
	
	function xlunbo(type){
		var parent=type;
		var banner=$(".top-img",parent)
		var btn=$(".span-button",parent)
		var left=$(".lf-bt",parent)[0]
		var right=$(".rg-bt",parent)[0]
		var width=parseInt(getStyle(parent,"width"))
		var n=0;
		var next=0;
		var flag=true;
		var t=setInterval(move,2000);
		function move(type){

			type=type||"r"
			if(type=="r"){
					if(!flag){
						return;
					}
					flag=false;
					next=n+1;
					if(next>=banner.length){
						next=0;
					}
					banner[next].style.left=width+"px"
					animate(banner[n],{left:-width},600)
				
			}else if(type=="l"){
				if(!flag){
					return;
				}
				flag=false;
				next=n-1;
				if(next<0){
					next=banner.length-1
				}
				banner[next].style.left=-width+"px"
				animate(banner[n],{left:width},600)
			}

			animate(banner[next],{left:0},600,function(){
				flag=true;
			})
			btn[n].style.background="#3e3e3e"
			btn[next].style.background="#c81623"
			n=next;
		}

		box.onmouseover=function(){
			clearInterval(t)
			left.style.display="block"
			right.style.display="block"
		}
		box.onmouseout=function(){
			t=setInterval(move,2000);
			left.style.display="none"
			right.style.display="none"
		}
		left.onclick=function(){
			move("l")
		}
		right.onclick=function(){
			move("r")
		}

		for (var i = 0; i < btn.length; i++) {
			btn[i].index=i
			btn[i].onclick=function(){
				if(!flag){
					return;
				}
				flag=false;

				if(this.index>n){
					
					banner[this.index].style.left=width+"px"
					animate(banner[n],{left:-width},600)
					
				}else if(this.index<n){

					banner[this.index].style.left=-width+"px"
					animate(banner[n],{left:width},600)
				}
				animate(banner[this.index],{left:0},600,function(){
						flag=true;
					})
				btn[n].style.background="#3e3e3e"
				btn[this.index].style.background="#c81623"
				n=this.index;
			}
		}
	}
	
	var box=$(".pos-center-box")[0]
	xlunbo(box)

// var j = jQuery.noConflict();

	// function manyimg(type){
	// 	parent=type;
	// 	var nn=0;
	// 	var nt=0;
	// 	var w=j(parent).width()
	// 	var t=setInterval(igmove,1000)
	// 	function igmove(){
	// 		nt=nn+1;
	// 		if(nt>=4){
	// 			nt=0;
	// 		}
	// 		j(parent).find("a").eq(nt).css("left",w);
	// 		j(parent).find("a").eq(nn).animate({left:-w});
	// 		j(parent).find("a").eq(nt).animate({left:0});
	// 		j(parent).find(".span-button-img").eq(nn).removeClass("first-span-img")
	// 		j(parent).find(".span-button-img").eq(nt).addClass("first-span-img")
	// 		nn=nt;
	// 	}


	// 	j(".img-box").hover(function(){
	// 		j(this).find(".lf-bt-img").css("display","block")
	// 		j(this).find(".rg-bt-img").css("display","block")
	// 	},function(){
	// 		j(this).find(".lf-bt-img").css("display","none")
	// 		j(this).find(".rg-bt-img").css("display","none")
	// 	})
	// }
	// var pp=j(".img-box").get();
	// for (var i = 0; i < pp.length; i++) {
	// 	console.log(pp[i])
	// 	manyimg(pp[i])
	// };

	// manyimg(pp[0])
	// manyimg(pp[1])


	function manyimg(type){
		parent=type;
		var nn=0;
		var nt=0;
		var w=parent.offsetWidth;
		var ab=$("a",parent)
		var an=$(".span-button-img",parent)
		var left=$(".lf-bt-img",parent)[0]
		var right=$(".rg-bt-img",parent)[0]
		var t=setInterval(igmove,3000)
		function igmove(){
			nt=nn+1;
			if(nt>=ab.length){
				nt=0;
			}

			ab[nt].style.left=w+"px";
			animate(ab[nn],{left:-w})
			animate(ab[nt],{left:0})
			an[nn].style.background="#000"
			an[nt].style.background="red"
			nn=nt;
			
		}
		hover(parent,function(){
			clearInterval(t)
			left.style.display="block";
			right.style.display="block"
		},function(){
			t=setInterval(igmove,3000)
			left.style.display="none";
			right.style.display="none"
		})
		left.onclick=function(){
			igmove()
		}
		right.onclick=function(){
			igmove()
		}
		for (var i = 0; i < an.length; i++) { 
			an[i].index=i;
			an[i].onclick=function(){
				ab[this.index].style.left=w+"px";
				animate(ab[nn],{left:-w})
				animate(ab[this.index],{left:0})
				an[nn].style.background="#000"
				an[this.index].style.background="red"
				nn=this.index;
			}
		};
	}
	var pp=$(".img-box")
	for (var i = 0; i < pp.length; i++) {
		manyimg(pp[i])
	};
	


	function twoomove(obj){
		var bigbox=obj
		var littlebox=$(".top-tu-box",bigbox)	
		var img1=$("a",littlebox[0])
		var img2=$("a",littlebox[1])
		var n=0;
		var nt=0;
		var ww=littlebox[0].offsetWidth;
		var lf=$(".span-center-left",bigbox)[0];
		var rg=$(".span-center-right",bigbox)[0];
		var bt=$(".anniu",bigbox)
		var tt=setInterval(twomove,3000);
		function twomove(){
			nt=n+1
			if(nt>=4){
				nt=0;
			}
			img1[nt].style.left=ww+"px";
			img2[nt].style.left=ww+"px";
			animate(img1[n],{left:-ww});
			animate(img2[n],{left:-ww});
			animate(img1[nt],{left:0});
			animate(img2[nt],{left:0});
			bt[n].style.background="#000";
			bt[nt].style.background="red";
			n=nt

		}
		hover(bigbox,function(){
			clearInterval(tt)
			lf.style.display="block";
			rg.style.display="block"
		},function(){
			t=setInterval(twomove,3000);
			lf.style.display="none";
			rg.style.display="none"
		})

		lf.onclick=function(){
			twomove()
		}
		rg.onclick=function(){
			twomove()
		}

		for (var i = 0; i < bt.length; i++) { 
			bt[i].index=i;
			bt[i].onclick=function(){
				img1[this.index].style.left=ww+"px";
				img2[this.index].style.left=ww+"px";
				animate(img1[n],{left:-ww});
				animate(img2[n],{left:-ww});
				animate(img1[this.index],{left:0});
				animate(img2[this.index],{left:0});
				bt[n].style.background="#000";
				bt[this.index].style.background="red";
				n=this.index;
			}
		};
	}
	var bigbox=$(".tu-box")
	for (var i = 0; i < bigbox.length; i++) {
		twoomove(bigbox[i])
	};


	var tu=$(".hei-box")
	for (var i = 0; i < tu.length; i++) {
		tu[i].index=i;
		tu[i].onmouseover=function(){
			this.style.background="#B61D1D"
			var word=$(".word-pos",this)[0]
			word.style.background=" #B61D1D";
			animate(word,{right:34},100)
		}
		tu[i].onmouseout=function(){
			this.style.background="";
			var word=$(".word-pos",this)[0]
			word.style.background="#7a6e6e";
			animate(word,{right:-28},100,function(){
			})
		}
	};

	var back=$(".word-pos-back")[0]
	back.onclick=function(){
		var top=back.scrollTop;
		animate(document.body,{scrollTop:0})
		animate(document.documentElement,{scrollTop:0})
	}


	var j = jQuery.noConflict();
	j("img").lazyload({
		threshold:300,
		event:"scroll",
		effect:"fadeIn"
	})


	j(".btcaidan").first().on("mouseover",function(){
		j(".xuan").css("display","block")
	})
	j("body").on("click",function(e){
		var obj=e.target;
		if(obj.className!="bnrgbottom"){
			j(".xuan").css("display","none")
		}
		
	})

	// j(".xuan-bt-lis").on("mouseover",function(){
	// 	var index=j(this).index();
	// 	j(this).find("a").css({color:"#fff",background:"#c81623"})
	// 	j(this).siblings().find("a").css({color:"#666",background:"#fff"})
	// 	j(this).find(".san-bt").css("display","block")
	// 	j(this).siblings().find(".san-bt").css("display","none");
	// 	j(".xuan-bt-content").eq(index).css("display","block").siblings().css("display","none")
	// })



	j(".xuan-lis").on("mouseover",function(){
		var index=j(this).index();
		j(this).css({borderTop:"2px solid #c81623",borderBottom:"1px solid #fff"}).siblings().css({borderTop:"2px solid #fff",borderBottom:"1px solid #e4e4e4"})
		var index=j(this).index();
		j(".xuan-bottom").eq(index).css("display","block").siblings().css("display","none")


		j(".xuan-bottom").eq(index).find(".xuan-bt-lis").on("mouseover",function(){
			var id=j(this).index();
			j(this).find("a").css({color:"#fff",background:"#c81623"})
			j(this).siblings().find("a").css({color:"#666",background:"#fff"})
			j(this).find(".san-bt").css("display","block")
			j(this).siblings().find(".san-bt").css("display","none");
			j(".xuan-bt-content").eq(id).css("display","block").siblings().css("display","none")
		})

	})
	

})