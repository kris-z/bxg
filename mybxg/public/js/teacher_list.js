define(['jquery','template','bootstrap'],function($,template){
  $.ajax({
    type:'get',
    url:'/api/teacher',
    dataType:'json',
    success:function(data){
      // console.log(data); 
      var html=template("teacherTmp",{list:data.result});
      $("#teacherInfo").html(html);

     // 查看讲师信息
       $(".look").click(function(){
          var td=$(this).parent("td");
          // console.log(td);
          var tcId=td.attr("data-tcId");
          $.ajax({
            url:'/api/teacher/view',
            type:'get',
            data:{tc_id:tcId},
            dataType:'json',
            success:function(data){
              console.log(data);
              if(data.code==200){
           
                var html=template("modalTpl",data.result);
                $(".modalInfo").html(html);
                $("#teacherModal").modal();
              }
            }
          })
       })


       // 启用注销功能实现
       $(".eod").click(function(){
          var that=this;
          var td=$(this).parent("td");
          // console.log(td);
          var tcId=td.attr("data-tcId");
          var tcStatus=td.attr("data-status");
          $.ajax({
            url:'/api/teacher/handle',
            type:'post',
            data:{tc_id:tcId,tc_status:tcStatus},
            dataType:'json',
            success:function(data){
              if(data.code==200){
                td.attr("data-status",data.result.tc_status);
                if(data.result.tc_status==0){
                  $(that).text("注销");
                }else{
                  $(that).text("启用");
                }
              }
            }
          })
       })
    }
  })
})
