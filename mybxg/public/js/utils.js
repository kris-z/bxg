define(['jquery'],function($){
   return {
      qs:function(key){
    var urlId=location.search.substr(1);
    var result=null;
    if(urlId){
     var ps=urlId.split('&');
     $.each(ps,function(index,value){
           var kv=value.split("=");
           if(kv[0]==key){
              result=kv[1];
              return false;
           }
     }) 
    }
    return result;
    } ,
    setMenu:function(path){
     $('.aside .navs a[href="'+path+'"]').addClass('active').closest('ul').show();
    }
   }
})
