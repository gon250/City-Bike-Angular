requirejs.config({
    baseUrl: './',
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route'
    },
    shim:{
        angularRoute:{
            deps: ['angular'],
            exports: 'angularRoute'
        },
        angular:{
            exports: 'angular'
        }
    }
});