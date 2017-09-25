define(['jquery','utils','template'],function($,utils,template){
  utils.setMenu(location.pathname);

  $.ajax({
    type:'get',
    url:'/api/course',
    dataType:'json',
    success:function(data){
      console.log(data);
      var html=template("courselistTpl",{list:data.result});
      $("#courseListInfo").html(html);
    }
  })
})
