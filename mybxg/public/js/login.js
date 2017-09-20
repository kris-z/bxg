define(["jquery","cookie"],function($){
     $("#btnform").click(function(){
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$("#formlogin").serialize(),
            dataType:'json',
            success:function(data){
               // console.log(data);
               if(data.code==200){
                // 记录获取cookie数据
                $.cookie("loginInfo",JSON.stringify(data.result),{path:'/'});
                location.href='/main/index';
               }
            }
        })
          return false;
     })
})
