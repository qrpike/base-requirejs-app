

require.config({
    baseUrl: "js/",
    paths: {
        backbone: "../packages/backbone/backbone",
        bootstrap: "../packages/bootstrap/dist/js/bootstrap.min",
        jquery: "../packages/jquery/dist/jquery.min",
        jqueryform: "../packages/jquery-form/jquery.form",
        jqueryui: "lib/jqueryui.custom",
        dropzone: "../packages/dropzone/downloads/dropzone-amd-module.min",
        highlight: "../packages/highlightjs-amd/highlight.pack",
        'svg': "../packages/svg.js/dist/svg",
        json: "../packages/json2/json2",
        moment: "../packages/moment/min/moment.min",
        text: "../packages/requirejs-text/text",
        underscore: "../packages/underscore/underscore-min",
        zeroclipboard: "../packages/zeroclipboard/dist/ZeroClipboard.min",
        events: "lib/events",
        view: "lib/view",
        bb: "lib/bb",
        templates: "../templates"
    },
    shim: {
        backbone: {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        },
        bootstrap: {
            deps: [
                "jquery"
            ]
        },
        svg: {
            exports: "SVG"
        },
        jquery: {
            exports: "$"
        },
        jqueryui: {
            deps: [
                "jquery"
            ]
        },
        kalendae: {
            exports: "Kalendae"
        },
        moment: {
            exports: "Moment"
        },
        underscore: {
            exports: "_"
        }
    },
    packages: [

    ]
});