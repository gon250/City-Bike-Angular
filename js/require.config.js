requirejs.config({
    baseUrl: './',
    paths: {
        angular: './bower_components/angular/angular',
        angularRoute: './bower_components/angular-route/angular-route',
        jquery: './bower_components/jquery/dist/jquery.min',
        bootstrap : "./bower_components/bootstrap/dist/js/bootstrap.min"
    },
    shim:{
        angularRoute:{
            deps: ['angular'],
            exports: 'angularRoute'
        },
        angular:{
            exports: 'angular'
        },
        jquery:{
            exports: 'jquery'
        },
        bootstrap: { 
            deps: ['jquery'], 
            exports: 'bootstrap' 
        },
    }
});