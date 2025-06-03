![Status](https://img.shields.io/badge/status-finished-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

<!--Title Image-->
# 💻 Lucky Draw - Random Number Generator
<p>
Lucky Draw is a small webpage that generates numbers randomly.<br>
Specify your range, and Draw a number!
</p>

Check out the ***Table of Contents*** section to navigate through this documentation.

<!--Menu-->
## :large_orange_diamond: Table of Contents
- [1. Introduction](#large_orange_diamond-introduction)
  - [1.1 Description](#arrow_forward-description)
- [2. Patch Notes](#large_orange_diamond-patch-notes)
  - [2.1 Latest Update](#pushpin-latest-update)
- [3. Features](#large_orange_diamond-features)
  - [3.1 Drawing a Number](#arrow_forward-drawing-a-number)
  - [3.2 Responsiveness](#arrow_forward-responsiveness)
    - [3.2.1 Mobile](#small_red_triangle_down-mobile)
    - [3.2.2 Tablet](#small_red_triangle_down-tablet)
    - [3.2.3 Desktop](#small_red_triangle_down-desktop)
- [4. Automated Tasks](#large_orange_diamond-automated-tasks)
  - [4.1 Grunt](#arrow_forward-grunt)
- [5. Tools and Technologies](#large_orange_diamond-tools-and-technologies) 
  - [5.1 Stacks Used](#arrow_forward-stacks-used)
- [6. Result](#large_orange_diamond-result)
  - [6.1 Deploy](#arrow_forward-deploy)
- [7. Links](#large_orange_diamond-links)
  - [7.1. Project Repository](#arrow_forward-project-repository)
  - [7.2. Social Links](#arrow_forward-social-links)
  - [7.3. Other Links](#arrow_forward-other-links)
- [8. Etcetera](#large_orange_diamond-etcetera)
  - [8.1 About](#arrow_forward-about)
  - [8.2 Licenses](#arrow_forward-license)

<!--Introduction-->
## :large_orange_diamond: Introduction
### :arrow_forward: Description
Lucky Draw is a simple random number generator created as a study project to practice DOM manipulation with JavaScript and explore other development tools.<br>
It uses Grunt for automated tasks, and Less for CSS styling.

<!--Patch Notes-->
## :large_orange_diamond: Patch Notes
### :pushpin: Latest Update
<strong>13/01/2025</strong>
- Project finished.
- Webpage hosted.

<!--Features-->
## :large_orange_diamond: Features
### :arrow_forward: Drawing a Number
Lucky Draw is pretty simple. You just have to choose a range of numbers (Lower and Upper number) greater than zero, and then click on Draw Number.

### :arrow_forward: Responsiveness
<p>
This webpage uses bootstrap to apply a series of breakpoints that grant a responsive design in all devices.
</p>

#### :small_red_triangle_down: Mobile

<p>- Mobile View</p>

#### :small_red_triangle_down: Tablet

<p>- Tablet View</p>

#### :small_red_triangle_down: Desktop

<p>- Desktop View</p>

<!--Automated Tasks-->
## :large_orange_diamond: Automated Tasks
### :arrow_forward: Grunt
This project uses Grunt to automate several tasks, such as JavaScript and CSS minification, image compression, and WebP format conversion.<br>
Check out some of the tasks in `gruntfile.js`:

* Minifying HTML file:

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

* Compiling LESS:
  
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

<!--Tools Used-->
## :large_orange_diamond: Tools and Technologies
### :arrow_forward: Stacks Used
[![My Skills](https://skillicons.dev/icons?i=html,css,bootstrap,less)](https://skillicons.dev), GRUNT<br>

<!--Deploy-->
## :large_orange_diamond: Result

### :arrow_forward: Deploy
* <a href="https://lucky-draw-lac.vercel.app//" alt="Deploy page">Lucky Draw - Random Number Generator</a>

<!--Links-->
## :large_orange_diamond: Links
### :arrow_forward: Project Repository
* [Lucky Draw GitHub Repository](https://lucky-draw-lac.vercel.app/)

### :arrow_forward: Social Links
* [Jean Justen's Github page](https://github.com/jeanjusten)
* [Jean Justen's LinkedIn page](https://www.linkedin.com/in/jeanjusten/)

### :arrow_forward: Other Links
* [Bootstrap Documentation](https://getbootstrap.com/docs/)
* [Less Documentation](https://lesscss.org/)
* [Grunt Documentation](https://gruntjs.com/)

## :large_orange_diamond: Etcetera
### :arrow_forward: About
Lucky Draw webpage was created by ![logo](https://github.com/user-attachments/assets/0894beaf-f587-4d0a-983a-caf7fb551554) <strong>JEAN JUSTEN</strong> to study automated tasks with Grunt and CSS optimization with Less.

### :arrow_forward: License
You may use, copy, share and modify the code as you please. No credits needed.</p>
