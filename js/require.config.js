requirejs.config({
    baseUrl: './',
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route',
        material: '../bower_components/bootstrap-material-design/js/material.min'
    },
    shim:{
        angularRoute:{
            deps: ['angular'],
            exports: 'angularRoute'
        },
        angular:{
            exports: 'angular'
        },
        material:{
            exports: 'material'
        }
    }
});