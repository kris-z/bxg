define(['jquery','utils',"template"],function($,utils,template){
  utils.setMenu('/course/course_add');
  var csId=utils.qs('cs_id');
  console.log(csId);
 $.ajax({
  type:'get',
  url:'/api/course/lesson',
  data:{cs_id:csId},
  dataType:'json',
  success:function(data){
    console.log(data);
    var html=template("lessonTpl",data.result);
    $("#lessonInfo").html(html);
  }
 })
})
