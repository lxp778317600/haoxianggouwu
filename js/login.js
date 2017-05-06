var inp=$("#inp1");
var inp1=$(".inp2");
inp.focus(function (){
   $(".login_user > p").css({"background-position":"-110px 0"});
   $(".Ts_1 ").css("display","block");
})

inp.blur(function (){
   $(".login_user > p").css("background-position","0 -32px");
    $(".Ts_1 ").css("display","none");
})
inp1.focus(function (){
   $(".login_user1 > p").css({"background-position":"-110px -36px"});
   $(".Ts_2 ").css("display","block");
})

inp1.blur(function (){
   $(".login_user1 > p").css("background-position","0 -68px");
    $(".Ts_2 ").css("display","none");
})
var checkInp=document.getElementById("checkInp");
checkInp.onclick=function(){
	if(checkInp.checked){
		$(".xgg").css("display","block");
	}
}
$(".xgg").click(function (){
	$(this).css("display","none");
	checkInp.checked=false;
})
inp.keydown(function (){
	if($(this).val()!=""&&inp1.val()!=""){
		$(".btn").css("background","orange");
	}
	$(".xcc").css("display","block");
})
inp1.keydown(function (){
	if($(this).val()!=""&&inp.val()!=""){
		$(".btn").css({"background":"#FA7117","color":"white"});
	}
	$(".xcc1").css("display","block");
})
//F3592A
$(".btn").hover(function (){
	var a=$(this).css("background");
	if(a=="rgb(250, 113, 23) none repeat scroll 0% 0% / auto padding-box border-box"){
	    $(this).css("background","#F3592A");
	}
	
},
function (){
	var a=$(this).css("background");
	if(a=="rgb(243, 89, 42) none repeat scroll 0% 0% / auto padding-box border-box"){
	    $(this).css("background","#FA7117");
	}
}
)
var inpa=document.getElementById("inp1");
var inpb=document.getElementsByClassName("inp2")[0];
$(".xcc").click(function (){
	inp.focus();
	inpa.value="";
	$(this).css("display","none");
})
$(".xcc1").click(function (){
	inp1.focus();
	inpb.value="";
	$(this).css("display","none");
})