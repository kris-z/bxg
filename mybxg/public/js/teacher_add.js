define(['jquery','template','utils','datepicker','language','validate','form'],function($,template,utils){
    var tcId=utils.qs("tc_id");
    console.log(tcId);
    if(tcId){
      $.ajax({
        url:'/api//teacher/edit',
        type:'get',
        data:{tc_id:tcId},
        dataType:'json',
        success:function(data){
          console.log(data);
          data.result.abc = '编辑讲师';
            var html=template("addTpl",data.result);
            $("#teacherInfo").html(html);
             submitForm('/api/teacher/update');
        }
      })
    }else{
      var html=template("addTpl",{abc:"添加讲师"});
        $("#teacherInfo").html(html);
        submitForm('/api/teacher/add');
    }

    function submitForm(url){
       $("#addForm").validate({
        sendForm: false,
        vaild: function(){
          $(this).ajaxSubmit({
               type:"post",
               url:url,    
               dataType:"json",
               success:function(data){
                // console.log(data);
                if(data.code==200){
                  location.href="/teacher/teacher_list"
                }
               }
          })
        },
        description: {
          tcName :{
            required : '用户名不能为空'
          },
          tcPass : {
            required : '密码不能为空',
            pattern : '密码必须为六位数字'
          },
          tcJoinDate : {
            required : '日期不能为空'
          }
        }
       })
    }



/* function submitForm(url){
   $("#teacherBtn").on("click",function(){
    $.ajax({
      type:"post",
      url:url,
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
 }*/
 
})
