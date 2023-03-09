let mix = require('laravel-mix');

mix.js("'src/js/app.js", "public/dist/js")
    .js("'src/js/alpine.js", "public/dist/js")
    .postCss("src/css/app.css", "public/dist/css", [
        require("tailwindcss"),
    ]);