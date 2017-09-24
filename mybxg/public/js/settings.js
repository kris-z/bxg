define(['jquery','template','ckeditor','uploadify','region','datepicker','language','validate','form'],function($,template,CKEDITOR){
    $.ajax({
      type:'get',
      url:'/api//teacher/profile',
      dataType:'json',
      success:function(data){
         // 将数据渲染到页面
         // console.log(data);
         var html=template("settingsTpl",data.result);
         $("#settingsInfo").html(html);
         // 处理头像上传
         $("#upfile").uploadify({
            width:120,
            height:120,
            // 按钮显示的文字
            buttonText:'',
            itemTemplate:'<span></span>',
            // 指定swf文件
            swf:'/public/assets/uploadify/uploadify.swf',
            // 后台处理的页面
            uploader:'/api/uploader/avatar',

            fileObjName:'tc_avatar',
            // 上传完成后设置可执行的代码
            onUploadSuccess:function(a,b){
              // console.log(b);
              // b=b.substring(1);
              // var obj=JSON.parse(b);
              var obj=eval("("+b+")");
              // console.log(obj);
              $(".preview img").attr('src',obj.result.path);
            }
         });
         // 省市县三级联动
         $("#pcd").region({
          url:'/public/assets/jquery-region/region.json'
         });

         // 文本域处理
          CKEDITOR.replace('editor',{
          toolbarGroups : [
         { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
         { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
         { name: 'links', groups: [ 'links' ] },
         { name: 'insert', groups: [ 'insert' ] },
         { name: 'forms', groups: [ 'forms' ] },
         { name: 'tools', groups: [ 'tools' ] },
         { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
         { name: 'others', groups: [ 'others' ] },
         '/',
         { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
         { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
         { name: 'styles', groups: [ 'styles' ] },
         { name: 'colors', groups: [ 'colors' ] },
         { name: 'about', groups: [ 'about' ] }
        ]
          });

          // 处理表单提交
          $("#settingsForm").validate({
            sendForm: false,
            valid : function(){
              // 获取地址信息
              var p=$("#p").find('option:selected').text();
              var c=$("#c").find('option:selected').text();
              var d=$("#d").find('option:selected').text();
              // console.log(p , c , d);
              var hometwon= p + '|' + c + '|' + d;

              // 获取文本域信息
              for(var instance in CKEDITOR.instences){
                   CKEDITOR.instences[instance].updateElement();  
              }

              // 提交表单
              $(this).ajaxSubmit({
                type:'post',
                url:'/api/teacher/modify',
                data:{tc_hometown:hometwon},
                dataType:'json',
                success:function(data){
                  // console.log(data);
                  if(data.code==200){
                    location.reload();
                  }
                }
              })
            }
          })
      }
    })
})
