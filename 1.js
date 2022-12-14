(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"G",(function(){return main_js})),__webpack_require__.d(__webpack_exports__,"K",(function(){return simulate_step})),__webpack_require__.d(__webpack_exports__,"I",(function(){return set_food_density})),__webpack_require__.d(__webpack_exports__,"J",(function(){return set_reproductive_method})),__webpack_require__.d(__webpack_exports__,"E",(function(){return get_cells_data_csv})),__webpack_require__.d(__webpack_exports__,"F",(function(){return get_results_csv})),__webpack_require__.d(__webpack_exports__,"H",(function(){return render_simulator})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Simulator})),__webpack_require__.d(__webpack_exports__,"C",(function(){return __wbindgen_string_new})),__webpack_require__.d(__webpack_exports__,"l",(function(){return __wbg_log_4b5638ad60bdc54a})),__webpack_require__.d(__webpack_exports__,"B",(function(){return __wbindgen_object_drop_ref})),__webpack_require__.d(__webpack_exports__,"A",(function(){return __wbindgen_number_new})),__webpack_require__.d(__webpack_exports__,"m",(function(){return __wbg_log_89ca282a8a49b121})),__webpack_require__.d(__webpack_exports__,"g",(function(){return __wbg_eval_6dc8993472839847})),__webpack_require__.d(__webpack_exports__,"f",(function(){return __wbg_error_ef9a0be47931175f})),__webpack_require__.d(__webpack_exports__,"d",(function(){return __wbg_canvas_5400d829617630ae})),__webpack_require__.d(__webpack_exports__,"s",(function(){return __wbg_setfillStyle_53ccf2a9886c1c4d})),__webpack_require__.d(__webpack_exports__,"y",(function(){return __wbg_width_2f4b0cbbf1c850d9})),__webpack_require__.d(__webpack_exports__,"j",(function(){return __wbg_height_a81d308a000d91d0})),__webpack_require__.d(__webpack_exports__,"h",(function(){return __wbg_fillRect_c7a19e13c5242507})),__webpack_require__.d(__webpack_exports__,"r",(function(){return __wbg_save_a9bb370fb49c5df7})),__webpack_require__.d(__webpack_exports__,"c",(function(){return __wbg_beginPath_4e91b7092d0d33d9})),__webpack_require__.d(__webpack_exports__,"b",(function(){return __wbg_arc_30e550c408f151ac})),__webpack_require__.d(__webpack_exports__,"i",(function(){return __wbg_fill_8ec436f419a0d161})),__webpack_require__.d(__webpack_exports__,"e",(function(){return __wbg_closePath_d0ab75d4def749a2})),__webpack_require__.d(__webpack_exports__,"p",(function(){return __wbg_restore_556d7c38c007b3fe})),__webpack_require__.d(__webpack_exports__,"t",(function(){return __wbg_setlineWidth_64004648773fed7a})),__webpack_require__.d(__webpack_exports__,"u",(function(){return __wbg_setstrokeStyle_899ea3720dae323b})),__webpack_require__.d(__webpack_exports__,"x",(function(){return __wbg_translate_ee7d176c35f20054})),__webpack_require__.d(__webpack_exports__,"q",(function(){return __wbg_rotate_4ee681cf0dd9841a})),__webpack_require__.d(__webpack_exports__,"k",(function(){return __wbg_lineTo_dbe49320dd6e392a})),__webpack_require__.d(__webpack_exports__,"w",(function(){return __wbg_stroke_85dee7d87c4a6ead})),__webpack_require__.d(__webpack_exports__,"n",(function(){return __wbg_moveTo_15a09390bee05586})),__webpack_require__.d(__webpack_exports__,"v",(function(){return __wbg_strokeRect_972fbfb664182aea})),__webpack_require__.d(__webpack_exports__,"o",(function(){return __wbg_random_656f2ae924b2540e})),__webpack_require__.d(__webpack_exports__,"z",(function(){return __wbindgen_debug_string})),__webpack_require__.d(__webpack_exports__,"D",(function(){return __wbindgen_throw}));var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const lTextDecoder="undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder;let cachedTextDecoder=new lTextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});cachedTextDecoder.decode();let cachedUint8Memory0=new Uint8Array;function getUint8Memory0(){return 0===cachedUint8Memory0.byteLength&&(cachedUint8Memory0=new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.k.buffer)),cachedUint8Memory0}function getStringFromWasm0(_,e){return cachedTextDecoder.decode(getUint8Memory0().subarray(_,_+e))}const heap=new Array(32).fill(void 0);heap.push(void 0,null,!0,!1);let heap_next=heap.length;function addHeapObject(_){heap_next===heap.length&&heap.push(heap.length+1);const e=heap_next;return heap_next=heap[e],heap[e]=_,e}function getObject(_){return heap[_]}function dropObject(_){_<36||(heap[_]=heap_next,heap_next=_)}function takeObject(_){const e=getObject(_);return dropObject(_),e}function debugString(_){const e=typeof _;if("number"==e||"boolean"==e||null==_)return""+_;if("string"==e)return`"${_}"`;if("symbol"==e){const e=_.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=_.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(_)){const e=_.length;let t="[";e>0&&(t+=debugString(_[0]));for(let n=1;n<e;n++)t+=", "+debugString(_[n]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(_));let n;if(!(t.length>1))return toString.call(_);if(n=t[1],"Object"==n)try{return"Object("+JSON.stringify(_)+")"}catch(_){return"Object"}return _ instanceof Error?`${_.name}: ${_.message}\n${_.stack}`:n}let WASM_VECTOR_LEN=0;const lTextEncoder="undefined"==typeof TextEncoder?(0,module.require)("util").TextEncoder:TextEncoder;let cachedTextEncoder=new lTextEncoder("utf-8");const encodeString="function"==typeof cachedTextEncoder.encodeInto?function(_,e){return cachedTextEncoder.encodeInto(_,e)}:function(_,e){const t=cachedTextEncoder.encode(_);return e.set(t),{read:_.length,written:t.length}};function passStringToWasm0(_,e,t){if(void 0===t){const t=cachedTextEncoder.encode(_),n=e(t.length);return getUint8Memory0().subarray(n,n+t.length).set(t),WASM_VECTOR_LEN=t.length,n}let n=_.length,r=e(n);const c=getUint8Memory0();let o=0;for(;o<n;o++){const e=_.charCodeAt(o);if(e>127)break;c[r+o]=e}if(o!==n){0!==o&&(_=_.slice(o)),r=t(r,n,n=o+3*_.length);const e=getUint8Memory0().subarray(r+o,r+n);o+=encodeString(_,e).written}return WASM_VECTOR_LEN=o,r}let cachedInt32Memory0=new Int32Array;function getInt32Memory0(){return 0===cachedInt32Memory0.byteLength&&(cachedInt32Memory0=new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.k.buffer)),cachedInt32Memory0}function main_js(){_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.j()}function simulate_step(){_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.o()}function set_food_density(_){_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.m(_)}function set_reproductive_method(_){const e=passStringToWasm0(_,_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.e,_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.f),t=WASM_VECTOR_LEN;_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.n(e,t)}function get_cells_data_csv(){try{const t=_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.b(-16);_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.h(t);var _=getInt32Memory0()[t/4+0],e=getInt32Memory0()[t/4+1];return getStringFromWasm0(_,e)}finally{_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.b(16),_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.d(_,e)}}function get_results_csv(_,e,t){try{const c=_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.b(-16),o=passStringToWasm0(_,_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.e,_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.f),i=WASM_VECTOR_LEN;_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.i(c,o,i,e,t);var n=getInt32Memory0()[c/4+0],r=getInt32Memory0()[c/4+1];return getStringFromWasm0(n,r)}finally{_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.b(16),_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.d(n,r)}}function handleError(_,e){try{return _.apply(this,e)}catch(_){_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.c(addHeapObject(_))}}function notDefined(_){return()=>{throw new Error(_+" is not defined")}}function render_simulator(_,e,t){_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.l(addHeapObject(_),e,t)}function isLikeNone(_){return null==_}class Simulator{__destroy_into_raw(){const _=this.ptr;return this.ptr=0,_}free(){const _=this.__destroy_into_raw();_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.a(_)}}function __wbindgen_string_new(_,e){return addHeapObject(getStringFromWasm0(_,e))}function __wbg_log_4b5638ad60bdc54a(_){console.log(getObject(_))}function __wbindgen_object_drop_ref(_){takeObject(_)}function __wbindgen_number_new(_){return addHeapObject(_)}function __wbg_log_89ca282a8a49b121(_,e){console.log(getObject(_),getObject(e))}function __wbg_eval_6dc8993472839847(){return handleError((function(arg0,arg1){const ret=eval(getStringFromWasm0(arg0,arg1));return addHeapObject(ret)}),arguments)}function __wbg_error_ef9a0be47931175f(_){console.error(getObject(_))}function __wbg_canvas_5400d829617630ae(_){const e=getObject(_).canvas;return isLikeNone(e)?0:addHeapObject(e)}function __wbg_setfillStyle_53ccf2a9886c1c4d(_,e){getObject(_).fillStyle=getObject(e)}function __wbg_width_2f4b0cbbf1c850d9(_){return getObject(_).width}function __wbg_height_a81d308a000d91d0(_){return getObject(_).height}function __wbg_fillRect_c7a19e13c5242507(_,e,t,n,r){getObject(_).fillRect(e,t,n,r)}function __wbg_save_a9bb370fb49c5df7(_){getObject(_).save()}function __wbg_beginPath_4e91b7092d0d33d9(_){getObject(_).beginPath()}function __wbg_arc_30e550c408f151ac(){return handleError((function(_,e,t,n,r,c){getObject(_).arc(e,t,n,r,c)}),arguments)}function __wbg_fill_8ec436f419a0d161(_){getObject(_).fill()}function __wbg_closePath_d0ab75d4def749a2(_){getObject(_).closePath()}function __wbg_restore_556d7c38c007b3fe(_){getObject(_).restore()}function __wbg_setlineWidth_64004648773fed7a(_,e){getObject(_).lineWidth=e}function __wbg_setstrokeStyle_899ea3720dae323b(_,e){getObject(_).strokeStyle=getObject(e)}function __wbg_translate_ee7d176c35f20054(){return handleError((function(_,e,t){getObject(_).translate(e,t)}),arguments)}function __wbg_rotate_4ee681cf0dd9841a(){return handleError((function(_,e){getObject(_).rotate(e)}),arguments)}function __wbg_lineTo_dbe49320dd6e392a(_,e,t){getObject(_).lineTo(e,t)}function __wbg_stroke_85dee7d87c4a6ead(_){getObject(_).stroke()}function __wbg_moveTo_15a09390bee05586(_,e,t){getObject(_).moveTo(e,t)}function __wbg_strokeRect_972fbfb664182aea(_,e,t,n,r){getObject(_).strokeRect(e,t,n,r)}const __wbg_random_656f2ae924b2540e="function"==typeof Math.random?Math.random:notDefined("Math.random");function __wbindgen_debug_string(_,e){const t=passStringToWasm0(debugString(getObject(e)),_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.e,_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.f),n=WASM_VECTOR_LEN;getInt32Memory0()[_/4+1]=n,getInt32Memory0()[_/4+0]=t}function __wbindgen_throw(_,e){throw new Error(getStringFromWasm0(_,e))}}).call(this,__webpack_require__(3)(module))},function(_,e,t){"use strict";var n=t.w[_.i];_.exports=n;t(1);n.p()},function(_,e){_.exports=function(_){if(!_.webpackPolyfill){var e=Object.create(_);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(_,e,t){"use strict";t.r(e);var n=t(2),r=t(1);t.d(e,"main_js",(function(){return r.G})),t.d(e,"simulate_step",(function(){return r.K})),t.d(e,"set_food_density",(function(){return r.I})),t.d(e,"set_reproductive_method",(function(){return r.J})),t.d(e,"get_cells_data_csv",(function(){return r.E})),t.d(e,"get_results_csv",(function(){return r.F})),t.d(e,"render_simulator",(function(){return r.H})),t.d(e,"Simulator",(function(){return r.a})),t.d(e,"__wbindgen_string_new",(function(){return r.C})),t.d(e,"__wbg_log_4b5638ad60bdc54a",(function(){return r.l})),t.d(e,"__wbindgen_object_drop_ref",(function(){return r.B})),t.d(e,"__wbindgen_number_new",(function(){return r.A})),t.d(e,"__wbg_log_89ca282a8a49b121",(function(){return r.m})),t.d(e,"__wbg_eval_6dc8993472839847",(function(){return r.g})),t.d(e,"__wbg_error_ef9a0be47931175f",(function(){return r.f})),t.d(e,"__wbg_canvas_5400d829617630ae",(function(){return r.d})),t.d(e,"__wbg_setfillStyle_53ccf2a9886c1c4d",(function(){return r.s})),t.d(e,"__wbg_width_2f4b0cbbf1c850d9",(function(){return r.y})),t.d(e,"__wbg_height_a81d308a000d91d0",(function(){return r.j})),t.d(e,"__wbg_fillRect_c7a19e13c5242507",(function(){return r.h})),t.d(e,"__wbg_save_a9bb370fb49c5df7",(function(){return r.r})),t.d(e,"__wbg_beginPath_4e91b7092d0d33d9",(function(){return r.c})),t.d(e,"__wbg_arc_30e550c408f151ac",(function(){return r.b})),t.d(e,"__wbg_fill_8ec436f419a0d161",(function(){return r.i})),t.d(e,"__wbg_closePath_d0ab75d4def749a2",(function(){return r.e})),t.d(e,"__wbg_restore_556d7c38c007b3fe",(function(){return r.p})),t.d(e,"__wbg_setlineWidth_64004648773fed7a",(function(){return r.t})),t.d(e,"__wbg_setstrokeStyle_899ea3720dae323b",(function(){return r.u})),t.d(e,"__wbg_translate_ee7d176c35f20054",(function(){return r.x})),t.d(e,"__wbg_rotate_4ee681cf0dd9841a",(function(){return r.q})),t.d(e,"__wbg_lineTo_dbe49320dd6e392a",(function(){return r.k})),t.d(e,"__wbg_stroke_85dee7d87c4a6ead",(function(){return r.w})),t.d(e,"__wbg_moveTo_15a09390bee05586",(function(){return r.n})),t.d(e,"__wbg_strokeRect_972fbfb664182aea",(function(){return r.v})),t.d(e,"__wbg_random_656f2ae924b2540e",(function(){return r.o})),t.d(e,"__wbindgen_debug_string",(function(){return r.z})),t.d(e,"__wbindgen_throw",(function(){return r.D})),n.g()}]]);