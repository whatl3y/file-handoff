#!/usr/bin/env node

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("socket.io-stream")},function(e,t){e.exports=require("bunyan")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={filepath:process.env.TXR_PATH||process.env["win32"==process.platform?"USERPROFILE":"HOME"],server:{port:process.env.PORT||8e3,web_conc:process.env.WEB_CONCURRENCY||1,host:process.env.TXR_HOST||"https://txr.euphoritech.com"},logger:{options:{name:process.env.APP_NAME||"txr",level:process.env.LOGGING_LEVEL||"info",stream:process.stdout}}}},function(e,t,n){n(5),e.exports=n(6)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,n){"use strict";p(n(0)),p(n(7));var r=p(n(8)),i=p(n(9)),o=p(n(10)),s=p(n(11)),a=p(n(1)),u=p(n(2)),c=p(n(12)),f=p(n(15)),l=p(n(16)),d=p(n(3));function p(e){return e&&e.__esModule?e:{default:e}}var m=(0,o.default)(),h=i.default.Server(m),v=u.default.createLogger(d.default.logger.options),g=(0,r.default)(process.argv.slice(2)),x=g.p||g.port||d.default.server.port;x=isNaN(x)?d.default.server.port:x;var y=(0,s.default)(h);m.get("*",function(e,t){return l.default.expressjs.convertReadmeToHtml(t)}),h.listen(x,function(){return v.info("server listening on *: "+x)}),y.on("connection",function(e){v.info("got socket: "+e.id);var t=(0,a.default)(e),n=(0,c.default)(y,e,f.default);Object.keys(n.normal).forEach(function(t){return e.on(t,n.normal[t])}),Object.keys(n.stream).forEach(function(e){return t.on(e,n.stream[e])})})},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("minimist")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("socket.io")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return{normal:{"regiser-listen":function(e){var r=e.auth,i=e.user;n.names[i]?(t.emit("user-taken",!0),u.error("User could not register name: "+i)):(n.names[i]=t.id,n.ids[t.id]=i,n.auth[t.id]=!!r,t.emit("user-registered-success",i),u.info("User successfully registered name: "+i))},"send-file-check-auth":function(r){var i=r.filename,s=r.filesizebytes,a=r.user,c=n.names[a],f=n.auth[c],l=o.default.stringToHash(JSON.stringify({filename:i,filesizebytes:s,user:a}));if(a&&c){var d=e.sockets.connected[c];f?(t.emit("file-permission-waiting"),d.on("file-permission-response",function(e){"yes"===e.toLowerCase()?(n.unlocked[l]=t.id,t.emit("file-permission-granted")):t.emit("file-permission-denied")}),d.emit("file-permission",{filename:i,filesizebytes:s,user:a})):(n.unlocked[l]=t.id,t.emit("file-permission-granted"))}else u.error("Tried to send a file to '"+a+"' who has not registered."),t.emit("no-user",{user:a})},disconnect:function(){u.info("socket disconnected: "+t.id);var e=n.ids[t.id];delete n.ids[t.id],delete n.auth[t.id],delete n.names[e]}},stream:{upload:function(r,s){u.info("Received 'upload' event with data: "+JSON.stringify(s));var a=s.user,c=n.names[a],f=o.default.stringToHash(JSON.stringify(s));if(a&&c){if(n.unlocked[f]&&n.unlocked[f]==t.id){var l=e.sockets.connected[c],d=i.default.createStream();r.on("data",function(e){return u.info("Received "+e.length+" bytes of data.")}),r.on("error",function(e){return u.error("socket: "+t.id,e)}),r.on("end",function(){return u.info("Completed receiving file with data: "+JSON.stringify(s)+"!")}),d.on("end",function(){return t.emit("finished-uploading")}),r.pipe(d),(0,i.default)(l).emit("file",d,s)}else t.emit("file-data-hash-mismatch");delete n.unlocked[f]}else u.error("Tried to send a file to '"+a+"' who has not registered."),t.emit("no-user",{user:a})}}}};var r=a(n(2)),i=a(n(1)),o=a(n(13)),s=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var u=r.default.createLogger(s.default.logger.options)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(14),o=(r=i)&&r.__esModule?r:{default:r};t.default={stringToHash:function(e){var t=o.default.createHash("md5");return t.update(e),t.digest("hex")}}},function(e,t){e.exports=require("crypto")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={names:{},ids:{},auth:{},unlocked:{}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),i=a(n(17)),o=a(n(18)),s=a(n(19));function a(e){return e&&e.__esModule?e:{default:e}}var u=new o.default({highlight:function(e,t){if(t&&i.default.getLanguage(t))try{return'<pre class="hljs"><code>'+i.default.highlight(t,e,!0).value+"</code></pre>"}catch(e){}return""}}),c=(0,s.default)(r.default.readFile);t.default={getFileName:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),n=e.lastIndexOf("."),r=e.substring(n);return e.substring(0,n)+"_"+t+r},expressjs:{convertReadmeToHtml:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("README.md","utf8");case 2:return n=e.sent,r=u.render(n),e.abrupt("return",t.send(this.createHtmlPage(r)));case 5:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(i,o){try{var s=t[i](o),a=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}("next")})});return function(e){return t.apply(this,arguments)}}(),createHtmlPage:function(e){return'\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n            <title>txr - Transfer Files to Friends</title>\n\n            <style>\n              body {\n                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n              }\n\n              a {\n                color: inherit;\n              }\n\n              pre.hljs {\n                border-radius: 5px;\n                border: 1px solid #a0a0a0;\n                background: #f5f5f5;\n                overflow-x: scroll;\n                padding: 5px;\n              }\n\n              .container {\n                max-width: 700px;\n                margin-right: auto;\n                margin-left: auto;\n              }\n\n              .notice {\n                border-radius: 5px;\n                border: 1px solid #a0a0a0;\n                background: #28a745;\n                color: white;\n                padding: 15px;\n                margin: 25px 0px;\n              }\n            </style>\n          </head>\n\n          <body>\n            <div class="container">\n              <div class="notice">\n                You navigated to a txr server to transfer files easily to and\n                from other machines. Learn more below or by visiting\n                <a href="https://www.npmjs.com/package/txr">https://www.npmjs.com/package/txr</a>\n              </div>\n              '+e+"\n            </div>\n          </body>\n        </html>\n      "}}}},function(e,t){e.exports=require("highlight.js")},function(e,t){e.exports=require("markdown-it")},function(e,t){e.exports=require("es6-promisify")}]);