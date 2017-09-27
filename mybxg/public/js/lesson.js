define(['jquery','utils'],function($,utils){
  utils.setMenu('/course/course_add');
  var csId=utils.qs('cs-id');

 $.ajax({
  type:'get',
  url:'/api/course/lesson',
  data:{cs_id:csId},
  dataType:'json',
  success:function(data){
    console.log(data);
  }
 })
})
