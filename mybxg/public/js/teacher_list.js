define(['jquery','template','teacherAdd'],function($,template){
  $.ajax({
    type:'get',
    url:'/api/teacher',
    dataType:'json',
    success:function(data){
      // console.log(data);
      var html=template("teacherTmp",{list:data.result});
      $("#teacherInfo").html(html);
    }
  })
})
