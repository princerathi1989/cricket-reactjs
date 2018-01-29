# cricket-reactjs
#npm init - package.json
#bower init - bower.json
create folders
	1. app
	2. server
create files
	1. index.html - app
	2. main.js - server
#npm install express
#npm install ejs

//EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
 
edit server/main.js -(will listen to the request on our main route which is '/')
#node server/main.js
#localhost:7777

#npm install --save-dev babel-cli
#npm install babel-preset-env --save-dev

create gulpfile.js

#npm install -g gulp
#npm install gulp

edit gulpfile.js
#gulp live-server

#npm install browser-sync
edit gulpfile.js to include browserSync code with serve task

gulp serve

include 'main.jsx' as script in 'index.ejs' 
edit 'server/main.js' to 'use static folder - app'

#npm install -g browserify
#npm install reactify browserify

edit gulpfile.js to include browserify,reactify code with bundle task

#npm install vinyl-source-stream

edit gulpfile.js to include source, gulp.dest inside pipe

#gulp bundle

check target to app.js and app in index.ejs and server/main.js

edit gulpfile.js to include copy task

#npm install jquery

#npm install body-parser

install mongodb in system

#npm install mongoose

#npm install uuid



