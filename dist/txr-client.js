#!/usr/bin/env node

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=8)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e){e&&e.__esModule}(t(12));var r=function(){};n.default={twoLinesDifferentColors:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"blue",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"green";this.wrapInNewlines(function(){e.length>0&&console.log(e[t]),n.length>0&&console.log(n[r])})},singleLine:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blue",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.wrapInNewlines(function(){return console.log(e[n])},t)},success:function(e){this.wrapInNewlines(function(){return console.log(e.green)})},error:function(e){this.wrapInNewlines(function(){return console.log(e.red)})},progress:function(e){process.stdout.write(e)},wrapInNewlines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=n-1>0?new Array(n-1).fill("\n").join(""):"";n>0&&console.log(t),e(),n>0&&console.log(t)}}},function(e,n){e.exports=require("fs")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("socket.io-client")},function(e,n){e.exports=require("socket.io-stream")},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,i){try{var u=n[o](i),a=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}return r("next")})}}Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(1)),u=r(t(15)),a=r(t(6)),s=u.default.markdown,c=(0,a.default)(i.default.readFile);n.default={getFileName:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),t=e.lastIndexOf("."),r=e.substring(t);return e.substring(0,t)+"_"+n+r},expressjs:{convertReadmeToHtml:function(){var e=o(regeneratorRuntime.mark(function e(n){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("README.md","utf8");case 2:return t=e.sent,r=s.toHTML(t),e.abrupt("return",n.send(this.createHtmlPage(r)));case 5:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),createHtmlPage:function(e){return'\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n            <title>txr - Transfer Files to Friends</title>\n\n            <style>\n              body {\n                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n              }\n\n              a {\n                color: inherit;\n              }\n\n              code {\n                border-radius: 5px;\n                border: 1px solid #a0a0a0;\n                background: #f5f5f5;\n                padding: 5px;\n              }\n\n              .container {\n                max-width: 700px;\n                margin-right: auto;\n                margin-left: auto;\n              }\n\n              .notice {\n                border-radius: 5px;\n                border: 1px solid #a0a0a0;\n                background: #28a745;\n                color: white;\n                padding: 15px;\n                margin: 25px 0px;\n              }\n            </style>\n          </head>\n\n          <body>\n            <div class="container">\n              <div class="notice">\n                You navigated to a txr server to transfer files easily to and\n                from other machines. Learn more below or by visiting\n                <a href="https://www.npmjs.com/package/txr">https://www.npmjs.com/package/txr</a>\n              </div>\n              '+e+"\n            </div>\n          </body>\n        </html>\n      "}}}},function(e,n){e.exports=require("es6-promisify")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={filepath:process.env.TXR_PATH||process.env["win32"==process.platform?"USERPROFILE":"HOME"],server:{port:process.env.PORT||8e3,web_conc:process.env.WEB_CONCURRENCY||1,host:process.env.TXR_HOST||"wss://txr.herokuapp.com"},logger:{options:{name:process.env.APP_NAME||"txr",level:process.env.LOGGING_LEVEL||"info",stream:process.stdout}}}},function(e,n,t){t(9),e.exports=t(10)},function(e,n){e.exports=require("babel-polyfill")},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,i){try{var u=n[o](i),a=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}return r("next")})}}var i=function(){function e(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=r(t(11)),a=r(t(0)),s=r(t(13)),c=(0,u.default)(process.argv.slice(2)),f=i(c._,3),l=f[0],d=f[1],p=f[2];!function(){var e=o(regeneratorRuntime.mark(function e(){var n,t,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.c||c.command||l,t=c.f||c.file||c.d||c.dir||d,r=c.u||c.username||p||d,o=c.a||c.auth,i=c.h||c.host,!n||!s.default[n]){e.next=10;break}return e.next=8,s.default[n]({file:t,user:r,auth:o,host:i});case 8:e.next=11;break;case 10:a.default.error("Please enter a valid command (-c or --command).");case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()()},function(e,n){e.exports=require("minimist")},function(e,n){e.exports=require("colors")},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=r(t(14)),i=r(t(18));n.default={listen:o.default,send:i.default}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,i){try{var u=n[o](i),a=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}return r("next")})}}Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(1)),u=r(t(2)),a=r(t(3)),s=r(t(4)),c=r(t(5)),f=r(t(16)),l=r(t(0)),d=r(t(7));n.default=function(){var e=o(regeneratorRuntime.mark(function e(n){var t,r=this,p=(n.file,n.user),h=n.auth,v=n.host;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}return e.abrupt("return",l.default.error("Make sure you pass a user (-u or --username) to listen for files that could be sent to you.\n"));case 2:(t=a.default.connect(v||d.default.server.host)).emit("regiser-listen",{user:p,auth:h}),t.on("user-taken",function(){l.default.error("The user you chose, "+p+", is already registered with the server. Please try another username."),process.exit()}),t.on("user-registered-success",function(e){l.default.success("Successfully registered name: "+e+". You are now listening for files.")}),t.on("file-permission",function(){var e=o(regeneratorRuntime.mark(function e(n){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return delete n.user,e.next=3,(0,f.default)().ask("\nSomeone wants to send you a file. Are you okay receiving a file with this data: "+JSON.stringify(n)+" -- answer (yes/no): ");case 3:o=e.sent,l.default.success("You answered '"+o+"', we're letting the server and sender know now."),t.emit("file-permission-response",o);case 6:case"end":return e.stop()}},e,r)}));return function(n){return e.apply(this,arguments)}}()),t.on("disconnect",function(){l.default.error("You were disconnected from the server."),process.exit()}),(0,s.default)(t).on("file",function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};delete n.user,l.default.success("Starting to receive file with data: "+JSON.stringify(n));var t=c.default.getFileName(n.filename||"txr.file"),r=u.default.join(d.default.filepath,u.default.basename(t)),o=i.default.createWriteStream(r),a=0;e.on("data",function(e){a+=e.length,l.default.progress(".")}),e.on("error",function(e){return l.default.error("\nError reading stream: "+e.toString())}),e.on("end",function(){l.default.success("\nFinished receiving file with data: "+JSON.stringify(n)),l.default.success("Target file path: "+r)}),e.pipe(o)});case 9:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},function(e,n){e.exports=require("markdown")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return{rl:r.default.createInterface({input:process.stdin,output:process.stdout}),ask:function(e){var n=this,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise(function(r,o){n.rl.question(e,function(e){r(e),t&&n.close()})})},close:function(){this.rl.close()}}};var r=function(e){return e&&e.__esModule?e:{default:e}}(t(17))},function(e,n){e.exports=require("readline")},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,i){try{var u=n[o](i),a=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}return r("next")})}}Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(1)),u=r(t(2)),a=r(t(6)),s=r(t(3)),c=r(t(4)),f=r(t(19)),l=r(t(5)),d=r(t(0)),p=r(t(7)),h=(0,a.default)(i.default.access),v=(0,a.default)(i.default.lstat),m=(0,a.default)(i.default.unlink),g=(0,a.default)(i.default.writeFile),x=(0,a.default)(f.default);n.default=function(){var e=o(regeneratorRuntime.mark(function e(n){var t,r,a,f,w,y,b,k,_,P,R,M,O,N,j,T,S=this,q=function(){var e=o(regeneratorRuntime.mark(function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!P){e.next=3;break}return e.next=3,m(_);case 3:n(),process.exit();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),E=n.file,A=n.user,F=n.host;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=E,r=A,t){e.next=4;break}return e.abrupt("return",d.default.error("Make sure you pass an absolute filepath (-f or --file) to send a file.\n"));case 4:if(r){e.next=6;break}return e.abrupt("return",d.default.error("Make sure you pass a user (-u or --username) to send a file to.\n"));case 6:return e.next=8,function(){var e=o(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,S,[[0,6]])}));return function(n){return e.apply(this,arguments)}}()(t);case 8:if(a=e.sent){e.next=11;break}return e.abrupt("return",d.default.error("We couldn't find a file or directory located in the following location:\n"+t+"\n"));case 11:return e.next=13,v(t);case 13:if(f=e.sent,w=f.isDirectory(),y=f.isFile(),b=f.size,k=void 0,_=void 0,P=void 0,!w){e.next=28;break}return d.default.success("We are zipping and sending the directory: "+t+". This may take some time depending on how large the directory is..."),e.next=22,x(t);case 22:k=e.sent,_=l.default.getFileName(t+".zip"),P=!0,b+=" (directory)",e.next=34;break;case 28:if(!y){e.next=33;break}k=t,_=t,e.next=34;break;case 33:return e.abrupt("return",d.default.error("The path specified is not a file or directory. The specified path needs to be a file or directory.\n"+t+"\n"));case 34:if(R=s.default.connect(F||p.default.server.host),M=c.default.createStream(),O=u.default.basename(_),N={filename:O,filesizebytes:b,user:r},R.emit("send-file-check-auth",N),R.on("no-user",function(e){return q(function(){return d.default.error("No user registered with username: "+e.user)})}),R.on("file-permission-granted",function(){return(0,c.default)(R).emit("upload",M,N)}),R.on("file-permission-waiting",function(){return d.default.success("Waiting for user to grant or reject receiving the file.")}),R.on("file-permission-denied",function(){return q(function(){return d.default.error("User did not grant permission to send file.")})}),R.on("file-data-hash-mismatch",function(){return q(function(){return d.default.error("We can't validate the file you're sending.")})}),R.on("finished-uploading",function(){return q(function(){return d.default.success("Your file has successfully sent to "+r+"!")})}),R.on("disconnect",function(){return q(function(){return d.default.error("You were disconnected from the server.")})}),!(k instanceof Buffer)){e.next=49;break}return e.next=49,g(_,k);case 49:j=i.default.createReadStream(_),T=0,j.on("data",function(e){T+=e.length,d.default.progress(".")}),j.on("end",function(){return d.default.success("\nAll bytes have been read from file: "+_+".")}),j.pipe(M);case 54:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},function(e,n){e.exports=require("zip-dir")}]);