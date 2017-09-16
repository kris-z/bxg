<?php 

     header('content-type:text/html;charset=utf8');
   // 后端路由 （根据url的不同响应不同的页面）
  // include 在当前的php中嵌入一个子页面
  // 通过url区分出用户访问的页面
   
   // var_dump($_SERVER);

  
   // echo $path;
   // 默认文件目录
   $dir='main';
   // 默认文件名称
   $filename='index';
   // 判断path——info是否存在
   if(array_key_exists('PATH_INFO', $_SERVER)){
   	// path-info存在
   	 $path = $_SERVER['PATH_INFO'];
   	 // 去掉第一个/ 
   	 $str = substr($path, 1);
     // 字符串分割 
     $ret=explode('/', $str);
     if(count($ret)==2){
        $dir = $ret[0];
        $filename=$ret[1];
     }else{
     	 $filename='login';
     }


   };
    include('./views/'.$dir.'/'.$filename.'.html');
    
  ?>