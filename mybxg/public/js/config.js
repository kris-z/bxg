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
      uploadify : 'uploadify/jquery.uploadify',
      region : 'jquery-region/jquery.region',
      ckeditor: 'ckeditor/ckeditor',
      utils: '../js/utils',
      common : '../js/common',
      login : '../js/login',
      teacherList: '../js/teacher_list',
      teacherAdd:'../js/teacher_add',
      settings:'../js/settings',
      index:'../js/index',
      course_list: '../js/course-list',
      course_add: '../js/course_add' 
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
      },
      uploadify : {
        deps : ['jquery']
      },
      ckeditor : {
        exports: 'CKEDITOR'
      }
    }
})
