define(['jquery',''],function($){
  $(".btnAdd").on("click",function(){
    $.ajax({
      type:"POST",
      url:"/api/teacher/add",
      data:$("#addForm").serialize(),
      dataType:"json",
      success:function(data){
       // console.log(data);
       if(data.code==200){
         location.href="/teacher/teacher_list"
       }
      }
    })
  })
})
