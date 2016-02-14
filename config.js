var sourceAssets = "./public/src";
var distributionAssets = "./public/dist";

module.exports = {
    jade: {

    },
    sass: {
        autoprefixer: '"last 2 versions", "> 1%", "ie 8"'
    },
    optimize: {
        css: {
            src: sourceAssets + '/css/*.css',
            dest: distributionAssets + '/css/',
            options: {
                keepSpecialComments: 0
            }
        },
        html: {
            src: sourceAssets + '/html/*.html',
            dest: distributionAssets + '/',
            options: {
                keepSpecialComments: 0
            }
        },
        js: {
            src: sourceAssets + '/js/*.js',
            dest: distributionAssets + '/js/',
            options: {
                keepSpecialComments: 0
            }
        },
        images: {
            src: sourceAssets + '/images/*',
            dest: distributionAssets + '/images/',
            options: {
                keepSpecialComments: 0
            }
        }
    }
};
