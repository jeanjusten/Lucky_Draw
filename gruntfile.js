module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // Copy image folder to dist folder
        copy: {
            dist: {
                expand: true,
                cwd: "src/img/", 
                src: "**/*",    
                dest: "dist/img/", 
                },
            },
            replace: {
                dist: {
                options: {
                    patterns: [
                    {
                        match: "CSS_ADRESS",
                        replacement: "./styles/main.min.css"
                    },
                    {
                        match: "JS_ADRESS",
                        replacement: "./scripts/main.min.js"
                    }
                    ]
                },
                files: [
                    {
                    expand: true,
                    flatten: true,
                    src: ["prebuild/index.html"],
                    dest: "dist/"
                    }
                ]
                }
            },
        
        // Compiling Less init config for Grunt
        less: { 
            development: { 
                files: {
                    "dev/styles/main.css": "src/styles/main.less" 
                },
                options: {
                    livereload: true,
                }
            },
            production: { 
                options: {
                    compress: true, 
                },
                files: {
                    "dist/styles/main.min.css" : "src/styles/main.less"
                }
            },
            html: {
                files: ["src/index.html"],
                tasks: ["replace:dev"]
            }
        },

        // CSS Grunt Watcher 
        watch: {
            files: ["src/styles/**/*.less"], 
            tasks: ["less:development"],
            options: {
                livereload: true,
            }
        },

        // HTML Grunt replace for dev enviroment
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: "CSS_ADRESS",
                            replacement: "./styles/main.css"
                        },
                        {
                            match: "JS_ADRESS",
                            replacement: "../src/scripts/main.js"
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ["src/index.html"],
                        dest: "dev/"
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: "CSS_ADRESS",
                            replacement: "./styles/main.min.css"
                        },
                        {
                            match: "JS_ADRESS",
                            replacement: "./scripts/main.min.js"
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ["prebuild/index.html"],
                        dest: "dist/"
                    }
                ]
            }
        },

        // HTML minify
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    "prebuild/index.html": "src/index.html" // Creates a temporary directory for minifying html file
                }
            }
        },

        // Temporary Directory Clean
        clean: [
            "prebuild"
        ],
        uglify: {
            target: {
                files: {
                    "dist/scripts/main.min.js": "src/scripts/main.js"
                }
            }
        }
    });

    //Loading Tasks
    grunt.loadNpmTasks("grunt-contrib-less"); 
    grunt.loadNpmTasks("grunt-contrib-watch"); 
    grunt.loadNpmTasks("grunt-replace"); 
    grunt.loadNpmTasks("grunt-contrib-htmlmin"); 
    grunt.loadNpmTasks("grunt-contrib-clean"); 
    grunt.loadNpmTasks("grunt-contrib-uglify"); 
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Creating default task (npm run grunt)
    grunt.registerTask("default", [
        "watch", 
    ]);

    grunt.registerTask("build", [ 
        "less:production", 
        "htmlmin:dist",
        "replace:dist",
        "copy:dist",
        "clean",
        "replace:dev",
        "uglify",
    ]);
}