require.config({
    baseUrl:'/public/assets',
    paths:{
      jquery : 'jquery/jquery',
      cookie : 'jquery-cookie/jquery.cookie',
      template: 'artTemplate/template-web',
      bootstrap: 'bootstrap/js/bootstrap',
      datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker.min',
      language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
       validate:'validate/jquery-validate.min',
      form:'jquery-form/jquery.form',
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
      },
      validate : {
        deps :['jquery']
      }
    }
})
