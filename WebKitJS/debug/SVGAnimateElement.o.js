// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](792 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 792;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17SVGAnimateElementC1ERKNS_13QualifiedNameERNS_8DocumentE;
var __ZN7WebCore17SVGAnimateElementD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,196,254,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_fiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vifii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_vifii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vifiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_vifiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var __ZN7WebCore7anyNameE=env.__ZN7WebCore7anyNameE|0;
  var __ZN7WebCore8SVGNames10animateTagE=env.__ZN7WebCore8SVGNames10animateTagE|0;
  var __ZN7WebCore8SVGNames6setTagE=env.__ZN7WebCore8SVGNames6setTagE|0;
  var __ZN7WebCore8SVGNames15animateColorTagE=env.__ZN7WebCore8SVGNames15animateColorTagE|0;
  var __ZTVN7WebCore19SVGAnimationElementE=env.__ZTVN7WebCore19SVGAnimationElementE|0;
  var __ZN7WebCore8SVGNames19animateTransformTagE=env.__ZN7WebCore8SVGNames19animateTransformTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17SVGAnimateElementE=(H_BASE+8)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_iiii=env.invoke_iiii;
  var invoke_fiii=env.invoke_fiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_vifii=env.invoke_vifii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_vifiiiii=env.invoke_vifiiiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_v + 12;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vifii + 4;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vifii + 2;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_fiii + 2;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 38;
}
function __ZN7WebCore17SVGAnimateElement17clearAnimatedTypeEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 420 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i5 >> 2] = 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 424 | 0;
 i8 = i1 + 432 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i9 = HEAP32[i1 + 92 >> 2] | 0;
  do {
   if ((HEAP32[__ZN7WebCore7anyNameE >> 2] | 0) == (i9 | 0)) {
    i10 = i6;
   } else {
    if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
     i10 = i6;
     break;
    }
    if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
     i10 = i6;
     break;
    }
    i11 = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i9 + 12 | 0) | 0;
    __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerC1EPNS_10SVGElementE(i4, i2);
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(__ZN7WebCore10SVGElement33ensureAnimatedSMILStylePropertiesEv(i2) | 0, i11, 0) | 0;
    __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i2 | 0, 49152);
    i12 = __ZNK7WebCore10SVGElement19instancesForElementEv(i2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = HEAP32[i12 + 4 >> 2] | 0;
    i15 = i13 + (i14 << 2) | 0;
    L14 : do {
     if ((HEAP32[i12 + 12 >> 2] | 0) != 0) {
      L16 : do {
       if ((i14 | 0) == 0) {
        i16 = i13;
       } else {
        i17 = i13;
        while (1) {
         i18 = HEAP32[i17 >> 2] | 0;
         if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
          i16 = i17;
          break L16;
         }
         i17 = i17 + 4 | 0;
         if ((i17 | 0) == (i15 | 0)) {
          break L14;
         }
        }
       }
      } while (0);
      if ((i16 | 0) == (i15 | 0)) {
       break;
      }
      i17 = i16;
      i18 = HEAP32[i16 >> 2] | 0;
      while (1) {
       i19 = HEAP32[i18 + 24 >> 2] | 0;
       if ((i19 | 0) != 0) {
        __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(__ZN7WebCore10SVGElement33ensureAnimatedSMILStylePropertiesEv(i19) | 0, i11, 0) | 0;
        __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i19 | 0, 49152);
       }
       i19 = i17 + 4 | 0;
       if ((i19 | 0) == (i15 | 0)) {
        break L14;
       } else {
        i20 = i19;
       }
       while (1) {
        i21 = HEAP32[i20 >> 2] | 0;
        i19 = i21;
        if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
         break;
        }
        i19 = i20 + 4 | 0;
        if ((i19 | 0) == (i15 | 0)) {
         break L14;
        } else {
         i20 = i19;
        }
       }
       if ((i20 | 0) == (i15 | 0)) {
        break;
       } else {
        i17 = i20;
        i18 = i21;
       }
      }
     }
    } while (0);
    __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i4);
    i10 = HEAP32[i5 >> 2] | 0;
   }
  } while (0);
  HEAP32[i5 >> 2] = 0;
  if ((i10 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[i1 + 436 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 127](i10, i7);
  __ZN7WebCoreL42notifyTargetAndInstancesAboutAnimValChangeEPNS_10SVGElementERKNS_13QualifiedNameE(i2, i1 + 92 | 0);
 }
 i2 = i1 + 428 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i1 = HEAP32[i8 >> 2] | 0;
   i10 = i7 | 0;
   if ((i1 | 0) != 0) {
    i4 = HEAP32[i10 >> 2] | 0;
    i21 = i4 + (i1 << 4) | 0;
    i1 = i4;
    while (1) {
     i4 = i1 + 12 | 0;
     i20 = HEAP32[i4 >> 2] | 0;
     i16 = i1 + 4 | 0;
     if ((i20 | 0) != 0) {
      i9 = HEAP32[i16 >> 2] | 0;
      i6 = i9 + (i20 << 2) | 0;
      i20 = i9;
      while (1) {
       i9 = HEAP32[i20 >> 2] | 0;
       do {
        if ((i9 | 0) != 0) {
         i15 = i9 + 4 | 0;
         i11 = i15 | 0;
         i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
         if ((i13 | 0) != 0) {
          HEAP32[i11 >> 2] = i13;
          break;
         }
         i13 = i15 - 4 | 0;
         if ((i13 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 127](i13);
        }
       } while (0);
       i20 = i20 + 4 | 0;
       if ((i20 | 0) == (i6 | 0)) {
        break;
       }
      }
      HEAP32[i4 >> 2] = 0;
     }
     i6 = HEAP32[i16 >> 2] | 0;
     if ((i6 | 0) != 0) {
      HEAP32[i16 >> 2] = 0;
      HEAP32[i1 + 8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i6);
     }
     i1 = i1 + 16 | 0;
     if ((i1 | 0) == (i21 | 0)) {
      break;
     }
    }
    HEAP32[i8 >> 2] = 0;
   }
   i21 = HEAP32[i10 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i21);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17SVGAnimateElement17resetAnimatedTypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i1 + 436 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i1;
  i11 = i1 + 96 | 0;
  __ZN7WebCore18SVGAnimatorFactory6createEPNS_19SVGAnimationElementEPNS_10SVGElementENS_20AnimatedPropertyTypeE(i3, i10, HEAP32[i11 >> 2] | 0, HEAP32[i1 + 404 >> 2] | 0);
  i12 = i3 | 0;
  i3 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  i13 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i3;
  if ((i13 | 0) == 0) {
   i14 = i3;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
   i14 = HEAP32[i8 >> 2] | 0;
  }
  HEAP32[i12 >> 2] = 0;
  i15 = i14;
  i16 = i11;
  i17 = i10;
 } else {
  i15 = i9;
  i16 = i1 + 96 | 0;
  i17 = i1;
 }
 i9 = HEAP32[i16 >> 2] | 0;
 i16 = i1 + 92 | 0;
 i10 = i16;
 i11 = __ZN7WebCore19SVGAnimationElement20shouldApplyAnimationEPNS_10SVGElementERKNS_13QualifiedNameE(i17, i9, i10) | 0;
 if ((i11 | 0) == 2) {
  i14 = i1 + 424 | 0;
  __ZN7WebCore23SVGAnimatedTypeAnimator38findAnimatedPropertiesForAttributeNameEPNS_10SVGElementERKNS_13QualifiedNameE(i4, i15, i9, i10);
  i12 = i1 + 432 | 0;
  i8 = i4 + 8 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i8 >> 2] = i13;
  i13 = i14 | 0;
  i8 = i4 | 0;
  i12 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i8 >> 2] = i12;
  i12 = i1 + 428 | 0;
  i8 = i4 + 4 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i8 >> 2] = i13;
  __ZN3WTF6VectorIN7WebCore28SVGElementAnimatedPropertiesELj0ENS_15CrashOnOverflowEED1Ev(i4);
  i4 = i1 + 420 | 0;
  i13 = HEAP32[i4 >> 2] | 0;
  if ((i13 | 0) != 0) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] & 31](i15, i14, i13);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 28 >> 2] & 127](i15, i14);
   STACKTOP = i2;
   return;
  }
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 31](i5, i15, i14);
  i14 = i5 | 0;
  i5 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  i13 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = i5;
  if ((i13 | 0) == 0) {
   HEAP32[i14 >> 2] = 0;
   STACKTOP = i2;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
  i13 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  if ((i13 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
  STACKTOP = i2;
  return;
 } else if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 } else {
  i13 = i6 | 0;
  HEAP32[i13 >> 2] = 0;
  if ((i11 | 0) == 1) {
   __ZN7WebCore19SVGAnimationElement23computeCSSPropertyValueEPNS_10SVGElementENS_13CSSPropertyIDERN3WTF6StringE(i17, i9, __ZN7WebCore13cssPropertyIDERKN3WTF6StringE((HEAP32[i16 >> 2] | 0) + 12 | 0) | 0, i6);
  }
  i16 = i1 + 420 | 0;
  i1 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i1 | 0) == 0) {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 31](i7, i15, i6);
    i9 = i7 | 0;
    i17 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    i11 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = i17;
    if ((i11 | 0) == 0) {
     HEAP32[i9 >> 2] = 0;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
    i11 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
   } else {
    __ZN7WebCore15SVGAnimatedType16setValueAsStringERKNS_13QualifiedNameERKN3WTF6StringE(i1, i10, i6) | 0;
   }
  } while (0);
  i6 = HEAP32[i13 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i13 = i6 | 0;
  i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i6);
   STACKTOP = i2;
   return;
  } else {
   HEAP32[i13 >> 2] = i10;
   STACKTOP = i2;
   return;
  }
 }
}
function __ZN7WebCore18SVGAnimatorFactory6createEPNS_19SVGAnimationElementEPNS_10SVGElementENS_20AnimatedPropertyTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 switch (i4 | 0) {
 case 12:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore28SVGAnimatedPointListAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 13:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore38SVGAnimatedPreserveAspectRatioAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 14:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore23SVGAnimatedRectAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 15:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore25SVGAnimatedStringAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 16:
  {
   i4 = __ZN3WTF10fastMallocEj(20) | 0;
   __ZN7WebCore32SVGAnimatedTransformListAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 0:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore24SVGAnimatedAngleAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 8:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore25SVGAnimatedNumberAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 9:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore29SVGAnimatedNumberListAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 5:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore41SVGAnimatedIntegerOptionalIntegerAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 7:
  {
   i4 = __ZN3WTF10fastMallocEj(20) | 0;
   __ZN7WebCore29SVGAnimatedLengthListAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 6:
  {
   i4 = __ZN3WTF10fastMallocEj(20) | 0;
   __ZN7WebCore25SVGAnimatedLengthAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 4:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore26SVGAnimatedIntegerAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 2:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore24SVGAnimatedColorAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 1:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore26SVGAnimatedBooleanAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 10:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore39SVGAnimatedNumberOptionalNumberAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 11:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore23SVGAnimatedPathAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 case 3:
  {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore30SVGAnimatedEnumerationAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i4, i2, i3);
   HEAP32[i1 >> 2] = i4;
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   return;
  }
 }
}
function __ZN7WebCore17SVGAnimateElement20applyResultsToTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 420 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 432 >> 2] | 0) != 0) {
  i6 = HEAP32[i1 + 436 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] & 127](i6, i1 + 424 | 0);
  __ZN7WebCoreL42notifyTargetAndInstancesAboutAnimValChangeEPNS_10SVGElementERKNS_13QualifiedNameE(HEAP32[i1 + 96 >> 2] | 0, i1 + 92 | 0);
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i1 + 96 >> 2] | 0;
 __ZN7WebCore15SVGAnimatedType13valueAsStringEv(i4, i5);
 i5 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((HEAP32[__ZN7WebCore7anyNameE >> 2] | 0) != (i5 | 0)) {
   if ((HEAP32[i6 + 12 >> 2] & 256 | 0) == 0) {
    break;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) == 0) {
    break;
   }
   i1 = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i5 + 12 | 0) | 0;
   __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerC1EPNS_10SVGElementE(i3, i6);
   if (__ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(__ZN7WebCore10SVGElement33ensureAnimatedSMILStylePropertiesEv(i6) | 0, i1, i4, 0, 0) | 0) {
    __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i6 | 0, 49152);
   }
   i7 = __ZNK7WebCore10SVGElement19instancesForElementEv(i6) | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = i8 + (i9 << 2) | 0;
   L15 : do {
    if ((HEAP32[i7 + 12 >> 2] | 0) != 0) {
     L17 : do {
      if ((i9 | 0) == 0) {
       i11 = i8;
      } else {
       i12 = i8;
       while (1) {
        i13 = HEAP32[i12 >> 2] | 0;
        if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
         i11 = i12;
         break L17;
        }
        i12 = i12 + 4 | 0;
        if ((i12 | 0) == (i10 | 0)) {
         break L15;
        }
       }
      }
     } while (0);
     if ((i11 | 0) == (i10 | 0)) {
      break;
     }
     i12 = i11;
     i13 = HEAP32[i11 >> 2] | 0;
     while (1) {
      i14 = HEAP32[i13 + 24 >> 2] | 0;
      do {
       if ((i14 | 0) != 0) {
        if (!(__ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(__ZN7WebCore10SVGElement33ensureAnimatedSMILStylePropertiesEv(i14) | 0, i1, i4, 0, 0) | 0)) {
         break;
        }
        __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i14 | 0, 49152);
       }
      } while (0);
      i14 = i12 + 4 | 0;
      if ((i14 | 0) == (i10 | 0)) {
       break L15;
      } else {
       i15 = i14;
      }
      while (1) {
       i16 = HEAP32[i15 >> 2] | 0;
       i14 = i16;
       if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
        break;
       }
       i14 = i15 + 4 | 0;
       if ((i14 | 0) == (i10 | 0)) {
        break L15;
       } else {
        i15 = i14;
       }
      }
      if ((i15 | 0) == (i10 | 0)) {
       break;
      } else {
       i12 = i15;
       i13 = i16;
      }
     }
    }
   } while (0);
   __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i3);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i16 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i16;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore19SVGAnimationElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = __ZTVN7WebCore19SVGAnimationElementE + 8;
 HEAP32[i1 + 316 >> 2] = __ZTVN7WebCore19SVGAnimationElementE + 752;
 i2 = HEAP32[i1 + 388 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 384 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = i1 + 380 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 372 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 376 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 368 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 360 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 364 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 356 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 348 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 352 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 344 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 336 | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i2 << 2) | 0;
  i2 = i5;
  while (1) {
   i5 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i9 = i1 + 256 | 0;
  __ZN7WebCore8SVGTestsD2Ev(i9);
  i10 = i1 | 0;
  __ZN7WebCore14SVGSMILElementD2Ev(i10);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 340 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i9 = i1 + 256 | 0;
 __ZN7WebCore8SVGTestsD2Ev(i9);
 i10 = i1 | 0;
 __ZN7WebCore14SVGSMILElementD2Ev(i10);
 return;
}
function __ZN7WebCore8SVGTestsD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 48 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 40 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 28 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 20 | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i6 >> 2] | 0;
  i5 = i3 + (i4 << 2) | 0;
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i8 = i3 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i5 = i1 | 0;
 if ((i6 | 0) != 0) {
  i4 = HEAP32[i5 >> 2] | 0;
  i3 = i4 + (i6 << 2) | 0;
  i6 = i4;
  while (1) {
   i4 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore17SVGAnimateElement24calculateFromAndByValuesERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 96 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i1;
 i9 = i1 + 400 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) == 4) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 668 >> 2] & 255](i1) | 0) {
    i11 = HEAP32[i9 >> 2] | 0;
    break;
   } else {
    i7 = 0;
    STACKTOP = i4;
    return i7 | 0;
   }
  } else {
   i11 = i10;
  }
 } while (0);
 L10 : do {
  if ((i11 | 0) == 2) {
   switch (HEAP32[i1 + 404 >> 2] | 0) {
   case 1:
   case 3:
   case 13:
   case 15:
   case 17:
    {
     i7 = 0;
     STACKTOP = i4;
     return i7 | 0;
    }
   case 0:
   case 2:
   case 4:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
   case 11:
   case 12:
   case 14:
   case 16:
    {
     break L10;
     break;
    }
   default:
    {
     _WTFCrash();
     return 0;
    }
   }
  }
 } while (0);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 700 >> 2] & 31](i8, i2, i3);
 i11 = i1 + 436 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore18SVGAnimatorFactory6createEPNS_19SVGAnimationElementEPNS_10SVGElementENS_20AnimatedPropertyTypeE(i5, i8, HEAP32[i6 >> 2] | 0, HEAP32[i1 + 404 >> 2] | 0);
  i6 = i5 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i8 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i5;
  if ((i8 | 0) == 0) {
   i12 = i5;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
   i12 = HEAP32[i11 >> 2] | 0;
  }
  HEAP32[i6 >> 2] = 0;
  i13 = i12;
 } else {
  i13 = i10;
 }
 __ZN7WebCore23SVGAnimatedTypeAnimator24calculateFromAndByValuesERNSt3__110unique_ptrINS_15SVGAnimatedTypeENS1_14default_deleteIS3_EEEES7_RKN3WTF6StringESB_(i13, i1 + 408 | 0, i1 + 412 | 0, i2, i3);
 i7 = 1;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN7WebCoreL42notifyTargetAndInstancesAboutAnimValChangeEPNS_10SVGElementERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 >> 2] | 0) == (HEAP32[__ZN7WebCore7anyNameE >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerC1EPNS_10SVGElementE(i4, i1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 612 >> 2] & 127](i1, i2);
 i5 = __ZNK7WebCore10SVGElement19instancesForElementEv(i1) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 i7 = i1 + (i6 << 2) | 0;
 L10 : do {
  if ((HEAP32[i5 + 12 >> 2] | 0) != 0) {
   L12 : do {
    if ((i6 | 0) == 0) {
     i8 = i1;
    } else {
     i9 = i1;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L12;
      }
      i9 = i9 + 4 | 0;
      if ((i9 | 0) == (i7 | 0)) {
       break L10;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i11 = i8;
   }
   while (1) {
    i9 = HEAP32[(HEAP32[i11 >> 2] | 0) + 24 >> 2] | 0;
    if ((i9 | 0) != 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 612 >> 2] & 127](i9, i2);
    }
    i9 = i11 + 4 | 0;
    if ((i9 | 0) == (i7 | 0)) {
     break L10;
    } else {
     i12 = i9;
    }
    while (1) {
     i9 = HEAP32[i12 >> 2] | 0;
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      break;
     }
     i9 = i12 + 4 | 0;
     if ((i9 | 0) == (i7 | 0)) {
      break L10;
     } else {
      i12 = i9;
     }
    }
    if ((i12 | 0) == (i7 | 0)) {
     break;
    } else {
     i11 = i12;
    }
   }
  }
 } while (0);
 __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19isSVGAnimateElementERKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = (HEAP32[i1 + 12 >> 2] & 4 | 0) == 0;
 if (i2) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore8SVGNames10animateTagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore8SVGNames15animateColorTagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore8SVGNames19animateTransformTagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore8SVGNames6setTagE >> 2] | 0;
 if ((i2 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
 return i3 | 0;
}
function __ZNK7WebCore17SVGAnimateElement29determineAnimatedPropertyTypeEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 616 >> 2] & 31](i2, i1 + 92 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i8 = 17;
 } else {
  i2 = HEAP32[i4 >> 2] | 0;
  i9 = HEAP32[i1 + 44 >> 2] | 0;
  i1 = HEAP32[__ZN7WebCore8SVGNames15animateColorTagE >> 2] | 0;
  do {
   if ((i9 | 0) == (i1 | 0)) {
    i10 = 0;
    i11 = 5;
   } else {
    if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
     i11 = 6;
     break;
    }
    i10 = (HEAP32[i9 + 16 >> 2] | 0) != (HEAP32[i1 + 16 >> 2] | 0);
    i11 = 5;
   }
  } while (0);
  if ((i11 | 0) == 5) {
   if (i10 | (i2 | 0) == 2) {
    i11 = 6;
   } else {
    i12 = 17;
   }
  }
  L8 : do {
   if ((i11 | 0) == 6) {
    do {
     if ((i2 | 0) == 16) {
      i10 = HEAP32[__ZN7WebCore8SVGNames19animateTransformTagE >> 2] | 0;
      if ((i9 | 0) == (i10 | 0)) {
       break;
      }
      if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
       i12 = 17;
       break L8;
      }
      if ((HEAP32[i9 + 16 >> 2] | 0) != (HEAP32[i10 + 16 >> 2] | 0)) {
       i12 = 17;
       break L8;
      }
     }
    } while (0);
    i12 = i2;
   }
  } while (0);
  HEAP32[i7 >> 2] = 0;
  i8 = i12;
 }
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return i8 | 0;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore17SVGAnimateElement31calculateToAtEndOfDurationValueERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i1 + 436 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore18SVGAnimatorFactory6createEPNS_19SVGAnimationElementEPNS_10SVGElementENS_20AnimatedPropertyTypeE(i4, i1, HEAP32[i1 + 96 >> 2] | 0, HEAP32[i1 + 404 >> 2] | 0);
  i9 = i4 | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i4;
  if ((i10 | 0) == 0) {
   i11 = i4;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
   i11 = HEAP32[i6 >> 2] | 0;
  }
  HEAP32[i9 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = i8;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 31](i5, i12, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i12 = i1 + 416 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i5;
 if ((i1 | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 i7 = 1;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN3WTF6VectorIN7WebCore28SVGElementAnimatedPropertiesELj0ENS_15CrashOnOverflowEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 4) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 + 12 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = i3 + 4 | 0;
   if ((i7 | 0) != 0) {
    i9 = HEAP32[i8 >> 2] | 0;
    i10 = i9 + (i7 << 2) | 0;
    i7 = i9;
    while (1) {
     i9 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i11 = i9 + 4 | 0;
       i12 = i11 | 0;
       i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       if ((i13 | 0) != 0) {
        HEAP32[i12 >> 2] = i13;
        break;
       }
       i13 = i11 - 4 | 0;
       if ((i13 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 127](i13);
      }
     } while (0);
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i3 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   i3 = i3 + 16 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore17SVGAnimateElement24calculateFromAndToValuesERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 96 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i1;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 700 >> 2] & 31](i8, i2, i3);
 i9 = i1 + 436 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore18SVGAnimatorFactory6createEPNS_19SVGAnimationElementEPNS_10SVGElementENS_20AnimatedPropertyTypeE(i5, i8, HEAP32[i6 >> 2] | 0, HEAP32[i1 + 404 >> 2] | 0);
  i6 = i5 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i8 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i5;
  if ((i8 | 0) == 0) {
   i11 = i5;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
   i11 = HEAP32[i9 >> 2] | 0;
  }
  HEAP32[i6 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = i10;
 }
 __ZN7WebCore23SVGAnimatedTypeAnimator24calculateFromAndToValuesERNSt3__110unique_ptrINS_15SVGAnimatedTypeENS1_14default_deleteIS3_EEEES7_RKN3WTF6StringESB_(i12, i1 + 408 | 0, i1 + 412 | 0, i2, i3);
 i7 = 1;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN7WebCore17SVGAnimateElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 316 >> 2] = H_BASE + 760;
 i2 = i1 + 436 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 }
 __ZN3WTF6VectorIN7WebCore28SVGElementAnimatedPropertiesELj0ENS_15CrashOnOverflowEED1Ev(i1 + 424 | 0);
 i3 = i1 + 420 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = i1 + 416 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 }
 i3 = i1 + 412 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = i1 + 408 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  __ZN7WebCore19SVGAnimationElementD2Ev(i4);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 i4 = i1;
 __ZN7WebCore19SVGAnimationElementD2Ev(i4);
 return;
}
function __ZN7WebCore17SVGAnimateElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 316 >> 2] = H_BASE + 760;
 i2 = i1 + 436 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 }
 __ZN3WTF6VectorIN7WebCore28SVGElementAnimatedPropertiesELj0ENS_15CrashOnOverflowEED1Ev(i1 + 424 | 0);
 i3 = i1 + 420 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = i1 + 416 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 }
 i3 = i1 + 412 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = i1 + 408 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  __ZN7WebCore19SVGAnimationElementD2Ev(i4);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 i4 = i1;
 __ZN7WebCore19SVGAnimationElementD2Ev(i4);
 return;
}
function __ZN7WebCore17SVGAnimateElement22calculateAnimatedValueEfjPNS_14SVGSMILElementE(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0;
 i5 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i6 = i4;
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i7 = HEAP32[__ZN7WebCore8SVGNames6setTagE >> 2] | 0;
 do {
  if ((i4 | 0) == (i7 | 0)) {
   d8 = +1;
  } else {
   if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
    d8 = d2;
    break;
   }
   d8 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0) ? +1 : d2;
  }
 } while (0);
 if ((HEAP32[i1 + 396 >> 2] | 0) == 0) {
  d9 = +(d8 >= +.5 | 0);
 } else {
  d9 = d8;
 }
 i7 = i1 + 436 | 0;
 HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] = i5;
 if ((HEAP32[i1 + 432 >> 2] | 0) != 0) {
  i5 = HEAP32[i7 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 127](i5, i1 + 424 | 0);
 }
 i5 = HEAP32[i1 + 416 >> 2] | 0;
 i4 = HEAP32[i1 + 412 >> 2] | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 FUNCTION_TABLE_vifiiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] & 1](i10, d9, i3, HEAP32[i1 + 408 >> 2] | 0, i4, (i5 | 0) == 0 ? i4 : i5, HEAP32[i6 + 420 >> 2] | 0);
 return;
}
function __ZN7WebCore17SVGAnimateElement16setAttributeNameERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore19SVGAnimationElement16setAttributeNameERKNS_13QualifiedNameE(i1, i2);
 i2 = i1 + 408 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 }
 i3 = i1 + 412 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = i1 + 416 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 }
 i3 = i1 + 436 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 15;
  i5 = i1 + 404 | 0;
  HEAP32[i5 >> 2] = i4;
  return;
 }
 i4 = __ZNK7WebCore17SVGAnimateElement29determineAnimatedPropertyTypeEPNS_10SVGElementE(i1, i2) | 0;
 i5 = i1 + 404 | 0;
 HEAP32[i5 >> 2] = i4;
 return;
}
function __ZN7WebCore17SVGAnimateElement16setTargetElementEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore19SVGAnimationElement16setTargetElementEPNS_10SVGElementE(i1, i2);
 i2 = i1 + 408 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 }
 i3 = i1 + 412 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = i1 + 416 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 }
 i3 = i1 + 436 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 15;
  i5 = i1 + 404 | 0;
  HEAP32[i5 >> 2] = i4;
  return;
 }
 i4 = __ZNK7WebCore17SVGAnimateElement29determineAnimatedPropertyTypeEPNS_10SVGElementE(i1, i2) | 0;
 i5 = i1 + 404 | 0;
 HEAP32[i5 >> 2] = i4;
 return;
}
function __ZN7WebCore17SVGAnimateElement25resetAnimatedPropertyTypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 408 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 }
 i3 = i1 + 412 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = i1 + 416 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 }
 i3 = i1 + 436 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 15;
  i5 = i1 + 404 | 0;
  HEAP32[i5 >> 2] = i4;
  return;
 }
 i4 = __ZNK7WebCore17SVGAnimateElement29determineAnimatedPropertyTypeEPNS_10SVGElementE(i1, i2) | 0;
 i5 = i1 + 404 | 0;
 HEAP32[i5 >> 2] = i4;
 return;
}
function __ZN7WebCore17SVGAnimateElement17calculateDistanceERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i6 | 0) == 0) {
  d7 = +-1;
  STACKTOP = i4;
  return +d7;
 }
 i8 = i1 + 436 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore18SVGAnimatorFactory6createEPNS_19SVGAnimationElementEPNS_10SVGElementENS_20AnimatedPropertyTypeE(i5, i1, i6, HEAP32[i1 + 404 >> 2] | 0);
  i1 = i5 | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i6 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i5;
  if ((i6 | 0) == 0) {
   i10 = i5;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
   i10 = HEAP32[i8 >> 2] | 0;
  }
  HEAP32[i1 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = i9;
 }
 d7 = +FUNCTION_TABLE_fiii[HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] & 3](i11, i2, i3);
 STACKTOP = i4;
 return +d7;
}
function __ZN7WebCore17SVGAnimateElement14ensureAnimatorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 436 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore18SVGAnimatorFactory6createEPNS_19SVGAnimationElementEPNS_10SVGElementENS_20AnimatedPropertyTypeE(i3, i1, HEAP32[i1 + 96 >> 2] | 0, HEAP32[i1 + 404 >> 2] | 0);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
 }
 HEAP32[i1 >> 2] = 0;
 i5 = HEAP32[i4 >> 2] | 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore17SVGAnimateElement10isAdditiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 400 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 4 | (i2 | 0) == 2) {
   switch (HEAP32[i1 + 404 >> 2] | 0) {
   case 0:
   case 2:
   case 4:
   case 5:
   case 6:
   case 7:
   case 8:
   case 9:
   case 10:
   case 11:
   case 12:
   case 14:
   case 16:
    {
     break L1;
     break;
    }
   case 1:
   case 3:
   case 13:
   case 15:
   case 17:
    {
     i3 = 0;
     return i3 | 0;
    }
   default:
    {
     _WTFCrash();
     return 0;
    }
   }
  }
 } while (0);
 i3 = __ZNK7WebCore19SVGAnimationElement10isAdditiveEv(i1) | 0;
 return i3 | 0;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZNK7WebCore17SVGAnimateElement36animatedPropertyTypeSupportsAdditionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 switch (HEAP32[i1 + 404 >> 2] | 0) {
 case 1:
 case 3:
 case 13:
 case 15:
 case 17:
  {
   i2 = 0;
   return i2 | 0;
  }
 case 0:
 case 2:
 case 4:
 case 5:
 case 6:
 case 7:
 case 8:
 case 9:
 case 10:
 case 11:
 case 12:
 case 14:
 case 16:
  {
   i2 = 1;
   return i2 | 0;
  }
 default:
  {
   _WTFCrash();
   return 0;
  }
 }
 return 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore17SVGAnimateElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __Znwj(440) | 0;
 __ZN7WebCore19SVGAnimationElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i4, i2, i3);
 HEAP32[i4 >> 2] = H_BASE + 16;
 HEAP32[i4 + 316 >> 2] = H_BASE + 760;
 HEAP32[i4 + 404 >> 2] = 15;
 _memset(i4 + 408 | 0, 0, 32) | 0;
 HEAP32[i1 >> 2] = i4;
 return;
}
function viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore17SVGAnimateElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore19SVGAnimationElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 316 >> 2] = H_BASE + 760;
 HEAP32[i1 + 404 >> 2] = 15;
 _memset(i1 + 408 | 0, 0, 32) | 0;
 return;
}
function __ZN7WebCore17SVGAnimateElementC1ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore19SVGAnimationElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 316 >> 2] = H_BASE + 760;
 HEAP32[i1 + 404 >> 2] = 15;
 _memset(i1 + 408 | 0, 0, 32) | 0;
 return;
}
function iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore17SVGAnimateElement21hasValidAttributeTypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 96 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 404 >> 2] | 0) == 17) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 392 | 0] & 1) == 0;
 return i2 | 0;
}
function viii___ZN7WebCore19SVGAnimationElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore19SVGAnimationElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function __ZThn316_N7WebCore19SVGAnimationElement37setExternalResourcesRequiredBaseValueERKbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 - 408 + 420 | 0;
 HEAP8[i4] = HEAP8[i2] & 1;
 i2 = i4 + 1 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 return;
}
function vifii___ZN7WebCore19SVGAnimationElement15updateAnimationEfjPNS_14SVGSMILElementE__wrapper(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore19SVGAnimationElement15updateAnimationEfjPNS_14SVGSMILElementE(i1 | 0, +d2, i3 | 0, i4 | 0);
}
function __ZN7WebCore19SVGAnimationElement37setExternalResourcesRequiredBaseValueERKbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 + 328 | 0;
 HEAP8[i4] = HEAP8[i2] & 1;
 i2 = i4 + 1 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 return;
}
function viii___ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore19SVGAnimationElement27determinePropertyValueTypesERKN3WTF6StringES4___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore19SVGAnimationElement27determinePropertyValueTypesERKN3WTF6StringES4_(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_vifiiiii(i1, i2, d3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_vifiiiii[i1 & 1](i2 | 0, +d3, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3_(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore19SVGAnimationElement19svgAttributeChangedERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore19SVGAnimationElement19svgAttributeChangedERKNS_13QualifiedNameE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore14SVGSMILElement12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore14SVGSMILElement12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore14SVGSMILElement11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14SVGSMILElement11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element5focusEbNS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore19SVGAnimationElement29synchronizeRequiredExtensionsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGTests29synchronizeRequiredExtensionsEPNS_10SVGElementE(i1 + 256 | 0, i1 | 0);
 return;
}
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
}
function iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore19SVGAnimationElement27synchronizeRequiredFeaturesEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGTests27synchronizeRequiredFeaturesEPNS_10SVGElementE(i1 + 256 | 0, i1 | 0);
 return;
}
function __ZN7WebCore19SVGAnimationElement25synchronizeSystemLanguageEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGTests25synchronizeSystemLanguageEPNS_10SVGElementE(i1 + 256 | 0, i1 | 0);
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore4Node22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
}
function vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function v___ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper() {
 __ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE();
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vi___ZN7WebCore19SVGAnimationElement25animationAttributeChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimationElement25animationAttributeChangedEv(i1 | 0);
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv(i1 | 0) | 0;
}
function viii___ZN7WebCore7Element9setActiveEbb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setActiveEbb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function dynCall_vifii(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_vifii[i1 & 7](i2 | 0, +d3, i4 | 0, i5 | 0);
}
function viii___ZN7WebCore7Element9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element21updateFocusAppearanceEb(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore14SVGSMILElement21hasValidAttributeNameEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore14SVGSMILElement21hasValidAttributeNameEv(i1 | 0) | 0;
}
function __ZThn316_N7WebCore17SVGAnimateElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 316 | 0;
 __ZN7WebCore17SVGAnimateElementD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function vi___ZN7WebCore19SVGAnimationElement21startedActiveIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimationElement21startedActiveIntervalEv(i1 | 0);
}
function __ZN7WebCore19SVGAnimationElement27localAttributeToPropertyMapEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore19SVGAnimationElement22attributeToPropertyMapEv() | 0;
}
function ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement15accessKeyActionEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv(i1 | 0) | 0;
}
function vi___ZN7WebCore19SVGAnimationElement19updateAnimationModeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimationElement19updateAnimationModeEv(i1 | 0);
}
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper() {
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv();
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function dynCall_fiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return +FUNCTION_TABLE_fiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function vi___ZN7WebCore14SVGSMILElement20buildPendingResourceEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SVGSMILElement20buildPendingResourceEv(i1 | 0);
}
function v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper() {
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE();
}
function v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper() {
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE();
}
function vii___ZN7WebCore7Element13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element13setScrollLeftEi(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10SVGElement16isMouseFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement17svgLoadEventTimerEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element20shouldUseInputMethodEv(i1 | 0) | 0;
}
function vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10SVGElement21finishParsingChildrenEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element10setHoveredEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setHoveredEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function b8(i1, d2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(8);
}
function vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element23removeAllEventListenersEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vii___ZNK7WebCore10SVGElement5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10SVGElement5titleEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore7Element8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element8nodeNameEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18offsetInCharactersEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18maxCharacterOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore7Element7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element7baseURIEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element8setFocusEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14shadowPseudoIdEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14imageSourceURLEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element20beginParsingChildrenEv(i1 | 0);
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element13supportsFocusEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willAttachRenderersEv(i1 | 0);
}
function ii___ZN7WebCore7Element13focusDelegateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element13focusDelegateEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didAttachRenderersEv(i1 | 0);
}
function __ZThn316_NK7WebCore19SVGAnimationElement34externalResourcesRequiredBaseValueEv(i1) {
 i1 = i1 | 0;
 return i1 - 408 + 420 | 0;
}
function ii___ZNK7WebCore7Element11isFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element11isFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function ii___ZN7WebCore13StyledElement5styleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore13StyledElement5styleEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore17SVGAnimateElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SVGAnimateElementD2Ev(i1);
 __ZdlPv(i1 | 0);
 return;
}
function __ZThn316_N7WebCore17SVGAnimateElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SVGAnimateElementD2Ev(i1 - 316 | 0);
 return;
}
function ii___ZN7WebCore7Element10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element10scrollLeftEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper() {
 __ZN7WebCore10SVGElement22customStyleForRendererEv();
}
function ii___ZNK7WebCore7Element8tabIndexEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8tabIndexEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8nodeTypeEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element9scrollTopEv(i1 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore14SVGSMILElement16rendererIsNeededERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function ii___ZN7WebCore7Element7onfocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onfocusEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element7onerrorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onerrorEv(i1 | 0) | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function __ZNK7WebCore19SVGAnimationElement34externalResourcesRequiredBaseValueEv(i1) {
 i1 = i1 | 0;
 return i1 + 328 | 0;
}
function __ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore7Element6onloadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onloadEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element6onblurEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onblurEv(i1 | 0) | 0;
}
function __ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore7Element12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 16 | 0;
}
function __ZNK7WebCore7Element6targetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
 return 0;
}
function __ZNK7WebCore7Element9localNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 12 | 0;
}
function __ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function vi___ZN7WebCore7Element4blurEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element4blurEv(i1 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function b5(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element30willStopBeingFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function b1(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(1);
 return +0;
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore10SVGElement20isSVGGraphicsElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element25isValidFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10SVGElement21supplementalTransformEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore7Element26didBecomeFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element22isDefaultButtonForFormEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isRequiredFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isOptionalFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isDisabledFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14SVGSMILElement13isSMILElementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element19isSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement15supportsMarkersEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element18isFrameElementBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement14isGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement14isFilterEffectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element17isTextFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement13isTextContentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element20mediaVolumeDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12willValidateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12isOutOfRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isPluginElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isMediaControlsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement7isValidEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}
function __ZNK7WebCore7Element9isInRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,__ZN7WebCore17SVGAnimateElement24calculateFromAndByValuesERKN3WTF6StringES4_,b0,__ZN7WebCore17SVGAnimateElement24calculateFromAndToValuesERKN3WTF6StringES4_,b0,iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper,b0];
  var FUNCTION_TABLE_fiii = [b1,b1,__ZN7WebCore17SVGAnimateElement17calculateDistanceERKN3WTF6StringES4_,b1];
  var FUNCTION_TABLE_vi = [b2,b2,vi___ZN7WebCore19SVGAnimationElement25animationAttributeChangedEv__wrapper,b2,__ZN7WebCore19SVGAnimationElement27synchronizeRequiredFeaturesEv,b2,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b2,__ZThn316_N7WebCore17SVGAnimateElementD0Ev,b2,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b2,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b2,__ZN7WebCore7Element22visibilityStateChangedEv,b2,vi___ZN7WebCore19SVGAnimationElement21startedActiveIntervalEv__wrapper,b2,__ZN7WebCore19SVGAnimationElement25synchronizeSystemLanguageEv,b2,vi___ZN7WebCore14SVGSMILElement20buildPendingResourceEv__wrapper,b2,__ZN7WebCore17SVGAnimateElementD2Ev,b2,__ZThn316_N7WebCore17SVGAnimateElementD1Ev,b2,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b2,__ZN7WebCore4Node24startLoadingDynamicSheetEv
  ,b2,vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper,b2,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b2,__ZN7WebCore17SVGAnimateElement17resetAnimatedTypeEv,b2,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b2,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b2,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b2,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b2,vi___ZN7WebCore19SVGAnimationElement19updateAnimationModeEv__wrapper,b2,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b2,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b2,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b2,vi___ZN7WebCore7Element4blurEv__wrapper,b2,__ZN7WebCore17SVGAnimateElement20applyResultsToTargetEv,b2,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper
  ,b2,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b2,__ZN7WebCore17SVGAnimateElementD0Ev,b2,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b2,__ZN7WebCore19SVGAnimationElement29synchronizeRequiredExtensionsEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore17SVGAnimateElement17clearAnimatedTypeEPNS_10SVGElementE,b3,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,__ZNK7WebCore7Element6targetEv,b3,vii___ZNK7WebCore7Element8nodeNameEv__wrapper,b3,vii___ZN7WebCore14SVGSMILElement11removedFromERNS_13ContainerNodeE__wrapper,b3,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b3,vii___ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b3,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b3,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b3,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b3,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b3,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper
  ,b3,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b3,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b3,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b3,vii___ZN7WebCore19SVGAnimationElement19svgAttributeChangedERKNS_13QualifiedNameE__wrapper,b3,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b3,__ZN7WebCore17SVGAnimateElement16setAttributeNameERKNS_13QualifiedNameE,b3,vii___ZNK7WebCore10SVGElement5titleEv__wrapper,b3,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b3,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b3,vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper,b3,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b3,vii___ZN7WebCore7Element8setFocusEb__wrapper,b3,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b3,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b3,__ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb
  ,b3,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b3,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b3,__ZN7WebCore17SVGAnimateElement16setTargetElementEPNS_10SVGElementE,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper,b4,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b4,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b4,__ZNK7WebCore14SVGSMILElement13isSMILElementEv,b4,__ZNK7WebCore10SVGElement14isFilterEffectEv,b4,__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv,b4,ii___ZN7WebCore7Element7onerrorEv__wrapper,b4,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b4,__ZNK7WebCore4Node14customPseudoIdEv,b4,__ZNK7WebCore4Node21isMediaControlElementEv,b4,__ZNK7WebCore4Node19isFrameOwnerElementEv,b4,__ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv,b4,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b4,ii___ZN7WebCore7Element9scrollTopEv__wrapper
  ,b4,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b4,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b4,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b4,__ZNK7WebCore7Element17isTextFormControlEv,b4,__ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv,b4,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b4,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b4,__ZThn316_NK7WebCore19SVGAnimationElement34externalResourcesRequiredBaseValueEv,b4,__ZNK7WebCore7Element6prefixEv,b4,__ZNK7WebCore7Element21isDisabledFormControlEv,b4,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b4,__ZNK7WebCore7Element12namespaceURIEv,b4,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b4,__ZNK7WebCore4Node22scriptExecutionContextEv,b4,__ZNK7WebCore7Element12isOutOfRangeEv
  ,b4,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b4,__ZNK7WebCore4Node15isPluginElementEv,b4,ii___ZN7WebCore14SVGSMILElement21hasValidAttributeNameEv__wrapper,b4,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b4,__ZN7WebCore4Node11sheetLoadedEv,b4,__ZNK7WebCore7Element23canContainRangeEndPointEv,b4,__ZNK7WebCore4Node20isInsertionPointNodeEv,b4,ii___ZN7WebCore7Element6onloadEv__wrapper,b4,__ZNK7WebCore7Element9isInRangeEv,b4,__ZNK7WebCore7Element20isFormControlElementEv,b4,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b4,ii___ZNK7WebCore7Element13supportsFocusEv__wrapper,b4,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b4,ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper,b4,__ZNK7WebCore7Element21isOptionalFormControlEv
  ,b4,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b4,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b4,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b4,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b4,__ZNK7WebCore10SVGElement14isGradientStopEv,b4,__ZNK7WebCore7Element18isFrameElementBaseEv,b4,__ZNK7WebCore4Node16nonRendererStyleEv,b4,__ZNK7WebCore10SVGElement15supportsMarkersEv,b4,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b4,__ZNK7WebCore7Element21isRequiredFormControlEv,b4,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b4,ii___ZN7WebCore7Element7onfocusEv__wrapper,b4,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b4,__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv,b4,ii___ZN7WebCore4Node14toInputElementEv__wrapper
  ,b4,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b4,__ZNK7WebCore10SVGElement13isTextContentEv,b4,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b4,__ZNK7WebCore7Element12willValidateEv,b4,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b4,__ZN7WebCore7Element25isValidFormControlElementEv,b4,ii___ZNK7WebCore7Element8tabIndexEv__wrapper,b4,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b4,__ZNK7WebCore17SVGAnimateElement10isAdditiveEv,b4,__ZNK7WebCore7Element19isSpinButtonElementEv,b4,__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv,b4,ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper,b4,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b4,__ZNK7WebCore4Node19isCharacterDataNodeEv,b4,__ZNK7WebCore7Element9localNameEv
  ,b4,ii___ZN7WebCore4Node6toNodeEv__wrapper,b4,__ZN7WebCore19SVGAnimationElement27localAttributeToPropertyMapEv,b4,__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv,b4,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b4,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b4,ii___ZN7WebCore7Element6onblurEv__wrapper,b4,__ZNK7WebCore10SVGElement7isValidEv,b4,__ZNK7WebCore4Node15isMediaControlsEv,b4,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b4,__ZN7WebCore10SVGElement21supplementalTransformEv,b4,__ZNK7WebCore4Node15isAttributeNodeEv,b4,__ZNK7WebCore19SVGAnimationElement34externalResourcesRequiredBaseValueEv,b4,__ZN7WebCore17SVGAnimateElement21hasValidAttributeTypeEv,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_vifii = [b5,b5,__ZN7WebCore17SVGAnimateElement22calculateAnimatedValueEfjPNS_14SVGSMILElementE,b5,vifii___ZN7WebCore19SVGAnimationElement15updateAnimationEfjPNS_14SVGSMILElementE__wrapper,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore19SVGAnimationElement37setExternalResourcesRequiredBaseValueERKbb,b6,__ZN7WebCore17SVGAnimateElementC2ERKNS_13QualifiedNameERNS_8DocumentE,b6,viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper,b6,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b6,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b6,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b6,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b6,viii___ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE__wrapper,b6,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b6,__ZThn316_N7WebCore19SVGAnimationElement37setExternalResourcesRequiredBaseValueERKbb,b6,viii___ZN7WebCore19SVGAnimationElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper,b6,viii___ZN7WebCore19SVGAnimationElement27determinePropertyValueTypesERKN3WTF6StringES4___wrapper,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b7,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b7,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b7,v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper,b7,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b7,v___ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_vifiiiii = [b8,b8];
  var FUNCTION_TABLE_iiiii = [b9,b9,iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b9,iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b9,b9,b9];
  var FUNCTION_TABLE_iii = [b10,b10,iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper,b10,__ZN7WebCore14SVGSMILElement16rendererIsNeededERKNS_11RenderStyleE,b10,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b10,iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b10,iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b10,iii___ZN7WebCore14SVGSMILElement12insertedIntoERNS_13ContainerNodeE__wrapper,b10,iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b10,iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper,b10,iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper,b10,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b10,__ZN7WebCore17SVGAnimateElement31calculateToAtEndOfDurationValueERKN3WTF6StringE,b10,__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE,b10,b10,b10,b10
  ,b10,b10,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b11,viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b11,b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_fiii: dynCall_fiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_vifii: dynCall_vifii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_vifiiiii: dynCall_vifiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_fiii": invoke_fiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_vifii": invoke_vifii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_vifiiiii": invoke_vifiiiii, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore7anyNameE": __ZN7WebCore7anyNameE, "__ZN7WebCore8SVGNames10animateTagE": __ZN7WebCore8SVGNames10animateTagE, "__ZN7WebCore8SVGNames6setTagE": __ZN7WebCore8SVGNames6setTagE, "__ZN7WebCore8SVGNames15animateColorTagE": __ZN7WebCore8SVGNames15animateColorTagE, "__ZTVN7WebCore19SVGAnimationElementE": __ZTVN7WebCore19SVGAnimationElementE, "__ZN7WebCore8SVGNames19animateTransformTagE": __ZN7WebCore8SVGNames19animateTransformTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_fiii = Module["dynCall_fiii"] = asm["dynCall_fiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vifii = Module["dynCall_vifii"] = asm["dynCall_vifii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vifiiiii = Module["dynCall_vifiiiii"] = asm["dynCall_vifiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore17SVGAnimateElement17clearAnimatedTypeEPNS_10SVGElementE","__ZN7WebCore19SVGAnimationElement27synchronizeRequiredFeaturesEv","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZThn316_N7WebCore17SVGAnimateElementD0Ev","__ZNK7WebCore10SVGElement14isFilterEffectEv","__ZN7WebCore14SVGSMILElement16rendererIsNeededERKNS_11RenderStyleE","__ZNK7WebCore7Element6targetEv","__ZN7WebCore17SVGAnimateElement24calculateFromAndByValuesERKN3WTF6StringES4_","_memcpy","__ZN7WebCore19SVGAnimationElement37setExternalResourcesRequiredBaseValueERKbb","__ZThn316_N7WebCore19SVGAnimationElement37setExternalResourcesRequiredBaseValueERKbb","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZN7WebCore17SVGAnimateElement22calculateAnimatedValueEfjPNS_14SVGSMILElementE","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZN7WebCore17SVGAnimateElementC2ERKNS_13QualifiedNameERNS_8DocumentE","__ZN7WebCoreL42notifyTargetAndInstancesAboutAnimValChangeEPNS_10SVGElementERKNS_13QualifiedNameE","__ZN7WebCore19SVGAnimationElementD2Ev","__ZThn316_NK7WebCore19SVGAnimationElement34externalResourcesRequiredBaseValueEv","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZN7WebCore19SVGAnimationElement25synchronizeSystemLanguageEv","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN7WebCore18SVGAnimatorFactory6createEPNS_19SVGAnimationElementEPNS_10SVGElementENS_20AnimatedPropertyTypeE","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN3WTF6VectorIN7WebCore28SVGElementAnimatedPropertiesELj0ENS_15CrashOnOverflowEED1Ev","__ZN7WebCore8SVGTestsD2Ev","__ZN7WebCore17SVGAnimateElementD2Ev","__ZNK7WebCore17SVGAnimateElement29determineAnimatedPropertyTypeEPNS_10SVGElementE","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZN7WebCore17SVGAnimateElement24calculateFromAndToValuesERKN3WTF6StringES4_","__ZNK7WebCore7Element12isOutOfRangeEv","__ZThn316_N7WebCore17SVGAnimateElementD1Ev","__ZNK7WebCore7Element12willValidateEv","__ZN7WebCore19SVGAnimationElement27localAttributeToPropertyMapEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZNK7WebCore7Element6prefixEv","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZNK7WebCore14SVGSMILElement13isSMILElementEv","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv","__ZNK7WebCore10SVGElement14isGradientStopEv","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore10SVGElement15supportsMarkersEv","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore17SVGAnimateElement16setAttributeNameERKNS_13QualifiedNameE","_memset","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZNK7WebCore7Element12namespaceURIEv","__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv","__ZN7WebCore17SVGAnimateElement17resetAnimatedTypeEv","__ZN7WebCore17SVGAnimateElement25resetAnimatedPropertyTypeEv","__ZN7WebCore17SVGAnimateElement6createERKNS_13QualifiedNameERNS_8DocumentE","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZNK7WebCore10SVGElement13isTextContentEv","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore17SVGAnimateElement20applyResultsToTargetEv","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZN7WebCore17SVGAnimateElement31calculateToAtEndOfDurationValueERKN3WTF6StringE","__ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCore19isSVGAnimateElementERKNS_4NodeE","__ZNK7WebCore17SVGAnimateElement10isAdditiveEv","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZN7WebCore17SVGAnimateElement17calculateDistanceERKN3WTF6StringES4_","__ZN7WebCore17SVGAnimateElement16setTargetElementEPNS_10SVGElementE","__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE","__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv","__ZN7WebCore17SVGAnimateElementD0Ev","__ZNK7WebCore10SVGElement7isValidEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore10SVGElement21supplementalTransformEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZNK7WebCore19SVGAnimationElement34externalResourcesRequiredBaseValueEv","__ZN7WebCore17SVGAnimateElement21hasValidAttributeTypeEv","__ZNK7WebCore17SVGAnimateElement36animatedPropertyTypeSupportsAdditionEv","__ZN7WebCore17SVGAnimateElement14ensureAnimatorEv","__ZN7WebCore19SVGAnimationElement29synchronizeRequiredExtensionsEv"]
