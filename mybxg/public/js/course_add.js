define(['jquery','utils','form'],function($,utils){
  utils.setMenu(location.pathname);

  // 绑定表单提交点击事件
  $("#courseBtn").click(function(){
     $("#courseForm").ajaxSubmit({
        type:'post',
        url:'/api/course/create',
        dataType:'json',
        success:function(data){
          console.log(data)
        }
     })
  })
})
