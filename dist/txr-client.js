#!/usr/bin/env node

!function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(r(10));var n=function(){};t.default={twoLinesDifferentColors:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"blue",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"green";this.wrapInNewlines(function(){e.length>0&&console.log(e[r]),t.length>0&&console.log(t[n])})},singleLine:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blue",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.wrapInNewlines(function(){return console.log(e[t])},r)},success:function(e){this.wrapInNewlines(function(){return console.log(e.green)})},error:function(e){this.wrapInNewlines(function(){return console.log(e.red)})},wrapInNewlines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;t-1>0&&new Array(t-1).fill("\n").join("");e()}}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("socket.io-client")},function(e,t){e.exports=require("socket.io-stream")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={filepath:process.env.TXR_PATH||process.env["win32"==process.platform?"USERPROFILE":"HOME"],server:{port:process.env.PORT||8e3,web_conc:process.env.WEB_CONCURRENCY||1,host:process.env.TXR_HOST||"http://txr.herokuapp.com"},logger:{options:{name:process.env.APP_NAME||"txr",level:process.env.LOGGING_LEVEL||"info",stream:process.stdout}}}},function(e,t,r){r(7),e.exports=r(8)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,o){try{var i=t[u](o),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}var o=function(){function e(e,t){var r=[],n=!0,u=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){u=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(u)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(r(9)),s=n(r(0)),a=n(r(11)),c=(0,i.default)(process.argv.slice(2)),f=o(c._,3),l=f[0],d=f[1],p=f[2];!function(){var e=u(regeneratorRuntime.mark(function e(){var t,r,n,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.c||c.command||l,r=c.f||c.file||d,n=c.u||c.username||p||d,u=c.a||c.auth,!t||!a.default[t]){e.next=9;break}return e.next=7,a.default[t]({file:r,user:n,auth:u});case 7:e.next=10;break;case 9:s.default.error("Please enter a valid command (-c or --command).");case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()()},function(e,t){e.exports=require("minimist")},function(e,t){e.exports=require("colors")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(12)),o=n(r(16));t.default={listen:u.default,send:o.default}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,o){try{var i=t[u](o),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),i=n(r(2)),s=n(r(3)),a=n(r(4)),c=n(r(13)),f=n(r(14)),l=n(r(0)),d=n(r(5));t.default=function(){var e=u(regeneratorRuntime.mark(function e(t){var r,n=this,p=(t.file,t.user),v=t.auth;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}return e.abrupt("return",l.default.error("Make sure you pass a user (-u or --username) to listen for files that could be sent to you.\n"));case 2:(r=s.default.connect(d.default.server.host)).emit("regiser-listen",{user:p,auth:v}),r.on("user-taken",function(){l.default.error("The user you chose, "+p+", is already registered with the server. Please try another username."),process.exit()}),r.on("user-registered-success",function(e){l.default.success("Successfully registered name: "+e+". You are now listening for files.")}),r.on("file-permission",function(){var e=u(regeneratorRuntime.mark(function e(t){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.default)().ask("Someone wants to send you a file. Are you okay receiving a file with this data: "+JSON.stringify(t)+" -- answer (yes/no): ");case 2:u=e.sent,l.default.success("You answered '"+u+"', we're letting the server know now!"),r.emit("file-permission-response",u);case 5:case"end":return e.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}()),r.on("disconnect",function(){l.default.error("You were disconnected from the server."),process.exit()}),(0,a.default)(r).on("file",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l.default.success("Received 'file' event with data "+JSON.stringify(t));var r=c.default.getFileName(t.filename||"txr.file"),n=i.default.join(d.default.filepath,i.default.basename(r)),u=o.default.createWriteStream(n);e.on("data",function(e){return l.default.success("Wrote "+e.length+" bytes of data.")}),e.on("error",function(e){return l.default.error("Error reading stream: "+e.toString())}),e.on("end",function(){l.default.success("Completed receiving file with data: "+JSON.stringify(t)+"!"),l.default.success("Target file path: "+n)}),e.pipe(u)});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getFileName:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),r=e.lastIndexOf("."),n=e.substring(r);return e.substring(0,r)+"_"+t+n}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{rl:n.default.createInterface({input:process.stdin,output:process.stdout}),ask:function(e){var t=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise(function(n,u){t.rl.question(e,function(e){n(e),r&&t.close()})})},close:function(){this.rl.close()}}};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(15))},function(e,t){e.exports=require("readline")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,o){try{var i=t[u](o),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),i=n(r(2)),s=n(r(17)),a=n(r(3)),c=n(r(4)),f=n(r(0)),l=n(r(5)),d=(0,s.default)(o.default.access),p=(0,s.default)(o.default.lstat);t.default=function(){var e=u(regeneratorRuntime.mark(function e(t){var r,n,s,v,h,m,g,w,y,x=this,b=t.file,_=t.user;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=b,n=_,r){e.next=4;break}return e.abrupt("return",f.default.error("Make sure you pass an absolute filepath (-f or --file) to send a file.\n"));case 4:if(n){e.next=6;break}return e.abrupt("return",f.default.error("Make sure you pass a user (-u or --username) to send a file to.\n"));case 6:return e.next=8,function(){var e=u(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(r);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,x,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()(r);case 8:if(s=e.sent){e.next=11;break}return e.abrupt("return",f.default.error("We couldn't find a file located in the following location:\n"+r+"\n"));case 11:return e.next=13,p(r);case 13:if(v=e.sent.isFile()){e.next=16;break}return e.abrupt("return",f.default.error("The path specified is not a file. Only files are available to send:\n"+r+"\n"));case 16:h=a.default.connect(l.default.server.host),m=c.default.createStream(),g=i.default.basename(r),w={filename:g,user:n},h.emit("send-file-check-auth",w),h.on("no-user",function(e){f.default.error("No user registered with username: "+e.user),process.exit()}),h.on("file-permission-granted",function(){return(0,c.default)(h).emit("upload",m,w)}),h.on("file-permission-waiting",function(){return f.default.success("Waiting for user to grant or reject receiving the file.")}),h.on("file-permission-denied",function(){f.default.error("User did not grant permission to send file."),process.exit()}),h.on("finished-uploading",function(){f.default.success("Your file has been sent!"),process.exit()}),h.on("disconnect",function(){f.default.error("You were disconnected from the server."),process.exit()}),(y=o.default.createReadStream(r)).on("data",function(e){return f.default.success("Received "+e.length+" bytes of data.")}),y.on("end",function(){return f.default.success("Completed sending file!\n")}),y.pipe(m);case 31:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("es6-promisify")}]);