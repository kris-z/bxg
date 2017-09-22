require.config({
    baseUrl:'/public/assets',
    paths:{
      jquery : 'jquery/jquery',
      cookie : 'jquery-cookie/jquery.cookie',
      template: 'artTemplate/template-web',
      bootstrap: 'bootstrap/js/bootstrap',
      datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker.min',
      language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
      utils: '../js/utils',
      common : '../js/common',
      login : '../js/login',
      teacherList: '../js/teacher_list',
      teacherAdd:'../js/teacher_add'
    },
    shim : {
      bootstrap : {
        deps : ['jquery']
      },
      language : {
        deps: ['jquery','datepicker']
      }
    }
})
