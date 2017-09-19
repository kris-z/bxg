
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
  });


  // 点击退出按钮返回登录页面
  $("#logoutBtn").click(function(){
    $.ajax({
      type:'post',
      url:'/api/logout',
      dataType:'json',
      success:function(data){
          if(data.code==200){
            location.href="/main/login";
          }
      }
    })
  })
// 检测用户是否登录

var flag=$.cookie("PHPSESSID");
// console.log(flag);
// 如果没有flag 则用户没有登录，自动跳转到登录页面
if(!flag){
  location.href="/main/login";
}

// 设置头像信息
var loginInfo=$.cookie('loginInfo');
loginInfo=loginInfo&&JSON.parse(loginInfo);

$(".aside .avatar img").attr("src",loginInfo.tc_avatar);
$(".aside h4").html(loginInfo.tc_name);

