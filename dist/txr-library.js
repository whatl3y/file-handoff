!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("es6-promisify")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("socket.io-stream")},function(e,t){e.exports=require("socket.io-client")},function(e,t){e.exports=require("highlight.js")},function(e,t){e.exports=require("zip-dir")},function(e,t){e.exports=require("markdown-it")},function(e,t){e.exports=require("readline")},function(e,t,r){e.exports=r(11)},function(e,t){e.exports=require("colors")},function(e,t,r){"use strict";r.r(t);var n=r(4),s=r.n(n),i=r(3),o=r.n(i),a={filepath:process.env.TXR_PATH||process.env["win32"==process.platform?"USERPROFILE":"HOME"],server:{port:process.env.PORT||8e3,web_conc:process.env.WEB_CONCURRENCY||1,host:process.env.TXR_HOST||"https://txr.euphoritech.com"},redis:{url:process.env.REDIS_URL||"redis://localhost:6379"},logger:{options:{name:process.env.APP_NAME||"txr",level:process.env.LOGGING_LEVEL||"info",stream:process.stdout}}},c=r(0),l=r.n(c),u=r(2),d=r.n(u),f=r(1),h=r.n(f),g=r(6),m=r.n(g),p=r(5),y=r.n(p),w=r(7);const x=new(r.n(w).a)({highlight:function(e,t){if(t&&y.a.getLanguage(t))try{return`<pre class="hljs"><code>${y.a.highlight(t,e,!0).value}</code></pre>`}catch(e){}return""}}),v=h()(l.a.readFile);var b={getFileName(e,t=Date.now()){const r=e.lastIndexOf("."),n=e.substring(r);return`${e.substring(0,r)}_${t}${n}`},expressjs:{async convertReadmeToHtml(e){const t=await v("README.md","utf8"),r=x.render(t);return e.send(this.createHtmlPage(r))},createHtmlPage:e=>`\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n            <title>txr - Transfer Files to Friends</title>\n\n            <style>\n              body {\n                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n              }\n\n              a {\n                color: inherit;\n              }\n\n              pre.hljs {\n                border-radius: 5px;\n                border: 1px solid #a0a0a0;\n                background: #f5f5f5;\n                overflow-x: scroll;\n                padding: 5px;\n              }\n\n              .container {\n                max-width: 700px;\n                margin-right: auto;\n                margin-left: auto;\n              }\n\n              .notice {\n                border-radius: 5px;\n                border: 1px solid #a0a0a0;\n                background: #28a745;\n                color: white;\n                padding: 15px;\n                margin: 25px 0px;\n              }\n            </style>\n          </head>\n\n          <body>\n            <div class="container">\n              <div class="notice">\n                You navigated to a txr server to transfer files easily to and\n                from machines/servers. Learn more below or by visiting\n                <a href="https://github.com/whatl3y/txr">https://github.com/whatl3y/txr</a>\n              </div>\n              ${e}\n            </div>\n          </body>\n        </html>\n      `}};r(10);var k={twoLinesDifferentColors(e,t,r="blue",n="green"){this.wrapInNewlines(()=>{e.length>0&&console.log(e[r]),t.length>0&&console.log(t[n])})},singleLine(e,t="blue",r=1){this.wrapInNewlines(()=>console.log(e[t]),r)},success(e){this.wrapInNewlines(()=>console.log(e.green))},error(e){this.wrapInNewlines(()=>console.log(e.red))},progress(e){process.stdout.write(e)},chatMessage(e){this.wrapInNewlines(()=>console.log(e.cyan))},wrapInNewlines(e=(()=>{}),t=0){const r=t-1>0?new Array(t-1).fill("\n").join(""):"";t>0&&console.log(r),e(),t>0&&console.log(r)}};const j=h()(l.a.access),S=h()(l.a.lstat),$=h()(l.a.writeFile),T=h()(m.a);var F={chat:async function({client:e,user:t,targetUser:r,host:n,reject:i,resolve:o}){const c=s.a.connect(n||a.server.host),l=e({socket:c,user:t,targetUser:r,host:n,reject:i,resolve:o});if(!t)return l.reject("Make sure you pass a user (-u or --username) to listen for files that could be sent to you.\n");if(!r)return l.reject("Make sure you pass a target user (-t or --target_user) to send chat messages to.\n");c.emit("txr-regiser-listen",{user:t});const u=l.chat;if(!u)return l.reject("The interface provided does not support the chat command.\n");const d=u.normal;Object.keys(d).forEach(e=>c.on(e,d[e].bind(u)))},listen:async function({client:e,file:t,user:r,auth:n,host:i,callback:c,reject:l,resolve:u}){const d=s.a.connect(i||a.server.host),f=e({socket:d,socketStream:o.a,file:t,user:r,auth:n,host:i,callback:c,reject:l,resolve:u});if(!r)return f.reject("Make sure you pass a user (-u or --username) to listen for files that could be sent to you.\n");d.emit("txr-regiser-listen",{user:r,auth:n});const h=f.listen,g=h.normal,m=h.stream;Object.keys(g).forEach(e=>d.on(e,g[e].bind(h))),Object.keys(m).forEach(e=>o()(d).on(e,m[e].bind(h)))},send:async function({client:e,file:t,user:r,host:n,reject:i,resolve:c}){const u=s.a.connect(n||a.server.host),f=o.a.createStream(),h=e({socket:u,socketStream:o.a,writeStream:f,file:t,user:r,host:n,reject:i,resolve:c}),g=t,m=r;if(!g)return h.reject("Make sure you pass an absolute filepath (-f or --file) to send a file.\n");if(!m)return h.reject("Make sure you pass a user (-u or --username) to send a file to.\n");if(!await(async e=>{try{return await j(g),!0}catch(e){return!1}})())return h.reject(`We couldn't find a file or directory located in the following location:\n${g}\n`);const p=await S(g),y=p.isDirectory(),w=p.isFile();let x,v,F,M=p.size;if(y)k.success(`We are zipping and sending the directory: ${g}. This may take some time depending on how large the directory is...`),x=await T(g),v=b.getFileName(`${g}.zip`),F=!0,M=`${M} (directory)`;else{if(!w)return h.reject(`The path specified is not a file or directory. The specified path needs to be a file or directory.\n${g}\n`);x=g,v=g}x instanceof Buffer&&await $(v,x);const O={filename:d.a.basename(v),filesizebytes:M,user:m};u.emit("txr-send-file-check-auth",O);const E=l.a.createReadStream(v),N=h.send;N.finalFilename=v,N.dataForFileToSend=O,N.deleteFileAfterSend=F;const A=N.normal,P=N.stream;Object.keys(A).forEach(e=>u.on(e,A[e].bind(N))),Object.keys(P).forEach(e=>E.on(e,P[e].bind(N))),E.pipe(f)}},M=r(8),O=r.n(M);function E(e=process.stdin,t=process.stdout){return{rl:O.a.createInterface({input:e,output:t}),ask(e,t=!0){return new Promise((r,n)=>{this.rl.question(e,e=>{r(e),t&&this.close()})})},close(){this.rl.close()}}}const N=h()(l.a.unlink),A=e=>{k.error.bind(k)(e),process.exit()},P=process.exit,U=()=>{};var _={cli:function({socket:e,socketStream:t,writeStream:r,file:n,user:s,targetUser:i,auth:o,host:c,reject:u,resolve:f}){return{reject:u=u||A,resolve:f=f||P,chat:{readline:null,async waitAndSendMessage(){this.readline&&this.readline.close(),this.readline=E();const t=await this.readline.ask(`[${s}]: `);if(["end","exit","quit"].includes(t)&&(k.success("Goodbye!"),f()),0===t.length)return await this.waitAndSendMessage();e.emit("txr-send-chat-message",{user:s,targetUser:i,message:t}),await this.waitAndSendMessage()},normal:{"txr-user-taken":function(){u(`The user you chose, ${s}, is already registered with the server. Please try another username.`)},"txr-destination-user-not-registered":function(e){u(`(There is no user currently registered with the username ${e}.)`)},"txr-receive-chat-message":async function({targetUser:e,message:t}){k.chatMessage(`[${e}]: ${t}`),await this.waitAndSendMessage()},"txr-receive-reply":async function({user:e,replyMessage:t}){this.readline&&(this.readline.close(),this.readonly=null),k.chatMessage(`[${e}]: ${t}`),await this.waitAndSendMessage()},"txr-user-registered-success":async function(e){k.success(`Successfully registered name: ${e}. You can now send messages to ${i} below.\n`),k.success("(type 'exit' or 'quit' to stop sending messages)"),await this.waitAndSendMessage()}}},listen:{readline:null,async askToReply(t){this.readline&&this.readline.close(),this.readline=E();const r=await this.readline.ask(`reply to ${t} - [${s}]: `);r.length>0?(e.emit("txr-reply-to-chat-message",{user:t,replyMessage:r}),k.success(`Thanks, your reply was sent to ${t}!`)):await this.askToReply(t)},normal:{"txr-user-taken":function(){u(`The user you chose, ${s}, is already registered with the server. Please try another username.`)},"txr-user-registered-success":function(e){k.success(`Successfully registered name: ${e}. You are now listening for files.`)},"txr-file-permission":async function(t){delete t.user;const r=await E().ask(`\nSomeone wants to send you a file. Are you okay receiving a file with this data: ${JSON.stringify(t)} -- answer (yes/no): `);k.success(`You answered '${r}', we're letting the server and sender know now.`),e.emit("txr-file-permission-response",r)},"txr-receive-chat-message":async function({targetUser:e,message:t}){k.chatMessage(`[${e}]: ${t}`),await this.askToReply(e)},disconnect:function(){u("You were disconnected from the server.")}},stream:{"txr-file":function(e,t={}){delete t.user,k.success(`Starting to receive file with data: ${JSON.stringify(t)}`);const r=b.getFileName(t.filename||"txr.file"),n=d.a.join(a.filepath,d.a.basename(r)),s=l.a.createWriteStream(n);let i=0;e.on("data",e=>{i+=e.length,k.progress(".")}),e.on("error",e=>k.error(`\nError reading stream: ${e.toString()}`)),e.on("end",()=>{k.success(`\nFinished receiving file with data: ${JSON.stringify(t)}`),k.success(`Target file path: ${n}`)}),e.pipe(s)}}},send:{bytesTracker:0,dataForFileToSend:null,deleteFileAfterSend:!1,finalFilename:null,async exitGracefully(e=(()=>{})){this.deleteFileAfterSend&&await N(this.finalFilename),e(),f()},normal:{"txr-no-user":function(e){this.exitGracefully(()=>k.error(`No user registered with username: ${e.user}`))},"txr-file-permission-granted":function(){t(e).emit("txr-upload",r,this.dataForFileToSend)},"txr-file-permission-waiting":function(){k.success("Waiting for user to grant or reject receiving the file.")},"txr-file-permission-denied":function(){this.exitGracefully(()=>k.error("User did not grant permission to send file."))},"txr-file-data-hash-mismatch":function(){this.exitGracefully(()=>k.error("We can't validate the file you're sending."))},"txr-finished-uploading":function(){this.exitGracefully(()=>k.success(`Your file has successfully sent to ${s}!`))},disconnect:function(){this.exitGracefully(()=>k.error("You were disconnected from the server."))}},stream:{data:function(e){this.bytesTracker=this.bytesTracker+e.length,k.progress(".")},end:function(){k.success(`\nAll bytes have been read from file: ${this.finalFilename}.`)}}}}},library:function({socket:e,socketStream:t,writeStream:r,file:n,user:s,targetUser:i,host:o,logger:c,callback:u,reject:f,resolve:h}){return c=c||{debug:U,info:U},{reject:f,resolve:h,listen:{normal:{"txr-user-taken":function(){f(`The user you chose, ${s}, is already registered with the server. Please try another username.`)},disconnect:function(){f("You were disconnected from the server.")}},stream:{"txr-file":function(e,t={}){const r="function"==typeof u?u:h,n=b.getFileName(t.filename||"txr.file"),s=d.a.join(a.filepath,d.a.basename(n)),i=l.a.createWriteStream(s);let o=0;e.on("data",e=>{o+=e.length,c.debug(".")}),e.on("error",f),e.on("end",()=>r(s)),e.pipe(i)}}},send:{bytesTracker:0,dataForFileToSend:null,normal:{"txr-no-user":function(e){f(`No user registered with username: ${e.user}`)},"txr-file-permission-granted":function(){t(e).emit("txr-upload",r,this.dataForFileToSend)},"txr-file-permission-waiting":function(){c.info("Waiting for user to grant or reject receiving the file.")},"txr-file-permission-denied":function(){f("User did not grant permission to send file.")},"txr-file-data-hash-mismatch":function(){f("We can't validate the file you're sending.")},"txr-finished-uploading":function(){h(`Your file has successfully sent to ${s}!`)},disconnect:function(){f("You were disconnected from the server.")}},stream:{data:function(e){this.bytesTracker=this.bytesTracker+e.length,c.debug(".")},end:function(){c.info(`All bytes have been read from file: ${this.finalFilename}.`)}}}}}};async function R(e){return await new Promise(async(t,r)=>{const n=e.c||e.command,s=e.f||e.file||e.d||e.dir,i=e.u||e.username||e.user,o=e.t||e.target_user||e.targetUser,a=e.a||e.auth,c=e.h||e.host,l=e.l||e.logger,u=e.callback;try{await async function({typeInterface:e,command:t,file:r,user:n,targetUser:s,auth:i,host:o,logger:a,callback:c,reject:l,resolve:u}){if(!e||!_[e])throw new Error(`We don't recognize the interface provided: ${e}`);{const d=_[e];if(!t||!F[t])throw new Error(`We don't recognize the command provided: ${t}`);await F[t]({client:d,file:r,user:n,targetUser:s,auth:i,host:o,logger:a,callback:c,reject:l,resolve:u})}}({typeInterface:"library",command:n,file:s,user:i,targetUser:o,auth:a,host:c,logger:l,callback:u,reject:r,resolve:t})}catch(e){r(e)}})}r.d(t,"default",function(){return R})}]);