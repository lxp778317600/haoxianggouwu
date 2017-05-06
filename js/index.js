//广告动画
var mlft=0;
var div_=$(".li_da");
setInterval(move,2000);
    function move(){
    	console.log(mlft);
    	if(mlft<-304){
    		div_.css("left","0px");
    		mlft=-152;
    	}
    	div_.animate({"left":mlft+"px"},500,function (){
    		mlft-=152;
    	})
    }
//给ul定位Top从在一个相同的位置
$(".nei_ul").each(function (i){
		$(this).css("top","-"+(i*55+20)+"px");
	})
//图像的变化
    //获取li集合
	var lis=document.getElementsByClassName("Center_div_one_ul")[0].getElementsByTagName("li");
	var lis_tow=document.getElementsByClassName("Center_div_tow_ul")[0].getElementsByTagName("li");
	var datu=document.getElementsByClassName("Datu")[0];
	var uls=$(".Center_div_one_ul");
	var arr=["#CCCCCC","#8DEAF9","#1083DE","#FDFBE2"];
	lis[0].style.opacity="1";
	lis_tow[0].style.background="#ED145B";
	datu.style.background=arr[0];
	var a=0;
	var fa;
	var Mid=setInterval(Time,2000);
	//时间调用方法
	function Time(){
		fa=true;
		taAll();
		lis[a].style.opacity="1";
		lis_tow[a].style.background="#ED145B";
		datu.style.background=arr[a];
		a++;
		if(a>=lis.length){
			a=0;
		}
	}
	//给li的初始样式
	function taAll(){
		for(var i=0;i<lis.length;i++){
			lis[i].style.opacity="0";
			lis[i].style.transition="1s";
		}
		for(var i=0;i<lis_tow.length;i++){
			lis_tow[i].style.background="#CCCCCC";
		}
	}
	//移动/移出、到ul上停止或开始动画
	uls.hover(function (){
		clearInterval(Mid);
	},
	function (){
		Mid=setInterval(Time,2000);
	}
	)
	//左按钮
	$(".left_1").click(function (){
		if(fa){
			--a;
			fa=false;
		}
		--a;
		if(a==-2){
			a=lis.length-2;
		}
		clearInterval(Mid);
		if(a<=-1){
			a=lis.length-1;
		}
		taAll();
		lis[a].style.opacity="1";
		lis[a].style.transition="1s";
		datu.style.background=arr[a];
		lis_tow[a].style.background="#ED145B";
		Mid=setInterval(Time,2000);
	})
	//右按钮
	$(".right_1").click(function (){
		++a;
		clearInterval(Mid);
		if(fa){
			--a;
			fa=false;
		}
		if(a>lis.length-1){
			a=0;
		}
		taAll();
		lis[a].style.opacity="1";
		lis[a].style.transition="1s";
		datu.style.background=arr[a];
		lis_tow[a].style.background="#ED145B";
		Mid=setInterval(Time,2000);
	})
	//单击获取相应照片
	$(".Center_div_tow_ul li").bind("click",function (){
		var index=$(this).index();
		clearInterval(Mid);
		taAll();
		lis[index].style.opacity="1";
		lis[index].style.transition="1s";
		datu.style.background=arr[index];
		lis_tow[index].style.background="#ED145B";
		a=index;
		Mid=setInterval(Time,2000);
	})
	//固定定位移动动画
	var fiax_1=$(".fiax_1 li");
	fiax_1.hover(function (){
		$(this).children("div").stop().animate({"left":"-90px"},300);
	},function (){
		$(this).children("div").stop().animate({"left":"40px"},300);
	})
	//直播json 效果
	$("#a p").eq(1).hover(function (){
		$(".Center_div_tow_top p").eq(1).css({
			"color":"#B70841",
			"border-bottom":"1px solid #B70841"
		})
		$(".Center_div_tow_top p").eq(0).css({
			"color":"black",
			"border-bottom":"1px solid black"
		})
		$.getJSON("date.json",function (reust){
			for(var i=0;i<reust.data.length;i++){
				$(".play").eq(i).children("img").attr("src",reust.data[i].img);
				$(".Center_wemzi").eq(i).children(".Center_wemzi_1").html(reust.data[i].pri);
			}
		})
	})
	$("#a p").eq(0).hover(function (){
		$(".Center_div_tow_top p").eq(1).css({
			"color":"black",
			"border-bottom":"1px solid black"
		})
		$(".Center_div_tow_top p").eq(0).css({
			"color":"#B70841",
			"border-bottom":"1px solid #B70841"
		})
		$.getJSON("date.json",function (reust1){
			for(var i=0;i<reust1.daaa.length;i++){
				$(".play").eq(i).children("img").attr("src",reust1.daaa[i].img);
				$(".Center_wemzi").eq(i).children(".Center_wemzi_1").html(reust1.daaa[i].pri);
			}
		})
	})
	//热门栏效果
	$(".zhong1_1_right ul li").eq(0).hover(function (){
		$.getJSON("date.json",function (a){
			for(var i=0;i<a.xitu1.length;i++){
				$(".zhong1_2_right li").eq(i).children("a").children("img").attr("src",a.xitu1[i].img);
			}
		})
	})
	$(".zhong1_1_right ul li").eq(1).hover(function (){
		$.getJSON("date.json",function (a){
			for(var i=0;i<a.xitu2.length;i++){
				$(".zhong1_2_right li").eq(i).children("a").children("img").attr("src",a.xitu2[i].img);
			}
		})
	})
	$(".zhong1_1_right ul li").eq(2).hover(function (){
		$.getJSON("date.json",function (a){
			for(var i=0;i<a.xitu3.length;i++){
				$(".zhong1_2_right li").eq(i).children("a").children("img").attr("src",a.xitu3[i].img);
			}
		})
	})
	$(".zhong1_1_right ul li").eq(3).hover(function (){
		$.getJSON("date.json",function (a){
			for(var i=0;i<a.xitu4.length;i++){
				$(".zhong1_2_right li").eq(i).children("a").children("img").attr("src",a.xitu4[i].img);
			}
		})
	})
	$(".zhong1_1_right ul li").eq(4).hover(function (){
		$.getJSON("date.json",function (a){
			for(var i=0;i<a.xitu5.length;i++){
				$(".zhong1_2_right li").eq(i).children("a").children("img").attr("src",a.xitu5[i].img);
			}
		})
	})