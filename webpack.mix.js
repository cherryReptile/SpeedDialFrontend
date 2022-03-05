let mix = require('laravel-mix');

mix.setPublicPath('public')
mix.disableNotifications()

mix.sass('src/sass/main.scss', 'css/main.css')
mix.js('src/js/app.js', 'js/main.js');
mix.vue()

mix.browserSync({
    server: {
        baseDir: "./public",
        index: "index.html"
    },
})