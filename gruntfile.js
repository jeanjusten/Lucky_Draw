module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // Compiling Less init config for Grunt
        less: { 
            development: { // Local, Running only in my PC
                files: {
                    "dev/styles/main.css": "src/styles/main.less" // "Output file" : "origin file"  output to a development folder
                },
                options: {
                    livereload: true,
                }
            },
            production: { // Running on prod. Like Vercel
                options: {
                    compress: true, // Minified file
                },
                files: {
                    "dist/styles/main.min.css" : "src/styles/main.less" // "Output file" : "origin file" to be minified  output to a distribution folder (production)
                }
            },
            html: {
                files: ["src/index.html"],
                tasks: ["replace:dev"]
            }
        },

        // CSS Grunt Watcher 
        watch: {
            files: ["src/styles/**/*.less"], // Access any folder (**) and any file (*)
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


        // Compiling Sass init config for Grunt
        /* 
        sass: { 
            dist: {
                options: {
                    style: "compressed" // Minified file
                },
                files: {
                    "main2.css" : "main.scss" // "Output file" : "origin file" to be minified
                    }
            }
        },
        */
        
        /*
        concurrent: { // Concurrent is a plugin to execute async tasks when i npm run grunt. Good for compressing images and other slow tasks
            target: [ // Tasks to be executed asyncronously 
                "helloGrunt",
                "less",
                //"sass",
                "slowTask",
            ]
        }
        */
    })


    // TASKS
    // Registering a task. to run only this task, i must use npm run grunt helloGrunt
    /*
    grunt.registerTask("helloGrunt", function() { 
        const done = this.async(); // 1) If i want a async task, i must inform Grunt of it
        setTimeout(function() {  
            console.log("Hello Grunt!")
            done(); // 2) 
        }, 3000);
    })

    grunt.registerTask("slowTask", function() { 
        const done = this.async(); 
        setTimeout(function() {  
            console.log("This took 5 secons")
            done(); 
        }, 5000);
    })
    */

    //Loading Tasks
    // Less for Grunt
    grunt.loadNpmTasks("grunt-contrib-less"); // Loading the tasks of the contrib less-grunt. (npm i --save-dev grunt-contrib-less)
    grunt.loadNpmTasks("grunt-contrib-watch"); // Watcher for Grunt
    grunt.loadNpmTasks("grunt-replace"); // Grunt Html replace // npm run grunt replace:dev
    grunt.loadNpmTasks("grunt-contrib-htmlmin"); // Grunt Html minify
    grunt.loadNpmTasks("grunt-contrib-clean"); // Grunt clean temporary directory
    grunt.loadNpmTasks("grunt-contrib-uglify"); // Grunt Uglify plugin
    // Sass for Grunt
    //grunt.loadNpmTasks("grunt-contrib-sass"); // Loading the tasks of the contrib sass-grunt. (npm i --save-dev grunt-contrib-sass)
    // Concurrent for Grunt
    //grunt.loadNpmTasks("grunt-concurrent"); // Loading the tasks of the concurrent plugin. (npm i --save-dev grunt-concurrent)


    // Creating default task (npm run grunt)
    grunt.registerTask("default", [ // "Default as the task name, and the array with all the task names to be executed when i npm run grunt"
        // "helloGrunt", // Task to be executed
        //"less:development", // Accessing the less: development level, defined in grunt init configs
        "watch", // Running CSS Grunt watcher
        // "sass",
        //"concurrent", // replacing all the tasks with concurrent, since it has all the tasks on it asyncronously
    ]);


    grunt.registerTask("build", [ // Must add this to the package.JSON file as a script -> "build": "grunt build",  // npm run build
        "less:production", // Accessing the less: production level, defined in grunt init configs
        "htmlmin:dist",
        "replace:dist",
        "clean",
        "replace:dev",
        "uglify",
    ]);
}

// npm run grunt will run the default task