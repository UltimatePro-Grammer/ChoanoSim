!function(e){function t(t){for(var n,o,i=t[0],c=t[1],s=0,u=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);u.length;)u.shift()()}var n={},r={0:0};var o={};var i={2:function(){return{"./index_bg.js":{__wbg_random_656f2ae924b2540e:function(){return n[1].exports.o()},__wbindgen_string_new:function(e,t){return n[1].exports.C(e,t)},__wbg_log_4b5638ad60bdc54a:function(e){return n[1].exports.l(e)},__wbindgen_object_drop_ref:function(e){return n[1].exports.B(e)},__wbindgen_number_new:function(e){return n[1].exports.A(e)},__wbg_log_89ca282a8a49b121:function(e,t){return n[1].exports.m(e,t)},__wbg_eval_6dc8993472839847:function(e,t){return n[1].exports.g(e,t)},__wbg_error_ef9a0be47931175f:function(e){return n[1].exports.f(e)},__wbg_canvas_5400d829617630ae:function(e){return n[1].exports.d(e)},__wbg_setfillStyle_53ccf2a9886c1c4d:function(e,t){return n[1].exports.s(e,t)},__wbg_width_2f4b0cbbf1c850d9:function(e){return n[1].exports.y(e)},__wbg_height_a81d308a000d91d0:function(e){return n[1].exports.j(e)},__wbg_fillRect_c7a19e13c5242507:function(e,t,r,o,i){return n[1].exports.h(e,t,r,o,i)},__wbg_save_a9bb370fb49c5df7:function(e){return n[1].exports.r(e)},__wbg_beginPath_4e91b7092d0d33d9:function(e){return n[1].exports.c(e)},__wbg_arc_30e550c408f151ac:function(e,t,r,o,i,c){return n[1].exports.b(e,t,r,o,i,c)},__wbg_fill_8ec436f419a0d161:function(e){return n[1].exports.i(e)},__wbg_closePath_d0ab75d4def749a2:function(e){return n[1].exports.e(e)},__wbg_restore_556d7c38c007b3fe:function(e){return n[1].exports.p(e)},__wbg_setlineWidth_64004648773fed7a:function(e,t){return n[1].exports.t(e,t)},__wbg_setstrokeStyle_899ea3720dae323b:function(e,t){return n[1].exports.u(e,t)},__wbg_translate_ee7d176c35f20054:function(e,t,r){return n[1].exports.x(e,t,r)},__wbg_rotate_4ee681cf0dd9841a:function(e,t){return n[1].exports.q(e,t)},__wbg_lineTo_dbe49320dd6e392a:function(e,t,r){return n[1].exports.k(e,t,r)},__wbg_stroke_85dee7d87c4a6ead:function(e){return n[1].exports.w(e)},__wbg_moveTo_15a09390bee05586:function(e,t,r){return n[1].exports.n(e,t,r)},__wbg_strokeRect_972fbfb664182aea:function(e,t,r,o,i){return n[1].exports.v(e,t,r,o,i)},__wbindgen_debug_string:function(e,t){return n[1].exports.z(e,t)},__wbindgen_throw:function(e,t){return n[1].exports.D(e,t)}}}}};function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=s);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=function(e){return c.p+""+({}[e]||e)+".js"}(e);var l=new Error;u=function(t){a.onerror=a.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return({1:[2]}[e]||[]).forEach((function(e){var n=o[e];if(n)t.push(n);else{var r,s=i[e](),u=fetch(c.p+""+{2:"c036a973045ca2b5d0f6"}[e]+".module.wasm");if(s instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(u),s]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(u,s);else{r=u.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,s)}))}t.push(o[e]=r.then((function(t){return c.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e},c.w={};var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var l=u;c(c.s=0)}([function(e,t,n){"use strict";function r(){return new Worker(n.p+"get_results.worker.worker.js")}n.r(t),n.e(1).then(n.bind(null,4)).catch(console.error).then((function(e){const t=document.getElementById("canvas");o=t.getContext("2d");const n=()=>{t.width=window.innerWidth,t.height=window.innerHeight,e.render_simulator(o,s.x,s.y)};window.onresize=()=>{n()},n(),console.log("Init complete.");const c=document.getElementById("controls"),l=document.getElementById("step"),_=document.getElementById("play"),f=document.getElementById("snapshot"),p=document.getElementById("get-results"),b=document.getElementById("results-cover"),m=document.getElementById("percent-complete"),g=Array.from(document.querySelectorAll("input[name=reproduction]")),w=document.getElementById("food-density"),y=document.getElementById("step-multiplier"),h=document.getElementById("step-multiplier-label");l.onclick=()=>{i||(c.classList.add("playing"),setTimeout(()=>{c.classList.remove("playing")},50),a(e))},_.onclick=()=>{i=!i,_.textContent=i?"Pause":"Play",c.classList.toggle("playing"),i&&a(e)},w.onchange=t=>{const n=parseInt(t.target.value);e.set_food_density(n)},g.forEach(t=>{t.onchange=t=>{const n=t.target.id;e.set_reproductive_method(n)}}),y.oninput=e=>{u=Math.pow(y.valueAsNumber,2),h.textContent="Step Multiplier: "+u.toLocaleString()},f.onclick=()=>{d("snapshot.csv",e.get_cells_data_csv())},p.onclick=()=>{b.style.display="",setTimeout(async()=>{(new r).onmessage=e=>{const{type:t}=e.data;"finished"===t?(b.style.display="none",d("data.csv",e.data.results)):"update-percent"===t&&(m.textContent=e.data.percent)}},20)},window.onkeydown=t=>{switch(t.key){case"ArrowUp":case"w":s.y-=100;break;case"ArrowDown":case"s":s.y+=100;break;case"ArrowRight":case"d":s.x+=100;break;case"ArrowLeft":case"a":s.x-=100}e.render_simulator(o,s.x,s.y)},window.onwheel=t=>{s.x-=t.deltaX,s.y-=t.deltaY,e.render_simulator(o,s.x,s.y)},window.onmousemove=n=>{1===n.buttons&&n.target===t&&(n.preventDefault(),s.x+=n.movementX,s.y+=n.movementY,e.render_simulator(o,s.x,s.y))}}));let o,i=!1,c=0;let s={x:window.innerWidth/2-400,y:20,zoom:1},u=1;function a(e){c+=u,l.textContent=`${c.toLocaleString()} step${c>1?"s":""}`;for(var t=0;t<u;t++)e.simulate_step(null);e.render_simulator(o,s.x,s.y),i&&requestAnimationFrame(()=>a(e))}const l=document.getElementById("time");function d(e,t){const n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}}]);