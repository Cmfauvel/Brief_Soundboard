// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/main/index.js":[function(require,module,exports) {
module.exports = function run(currentModule, callback) {
  if (currentModule.parent !== null) {
    return;
  }

  callback();
};

module.exports.default = module.exports;

},{}],"js/script.js":[function(require,module,exports) {
"use strict";

var _main = _interopRequireDefault(require("main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//ici 
//import nomDuModule './nomDuModule'
//cet import export permet de lier les deux fichiers 
(0, _main.default)();
console.log(_main.default);
var btnPresse1 = document.getElementById('btn__sound-1');
var sound1 = document.getElementById('audiotag_a');
var btnPresse2 = document.getElementById('btn__sound-2');
var sound2 = document.getElementById('audiotag_z');
var btnPresse3 = document.getElementById('btn__sound-3');
var sound3 = document.getElementById('audiotag_e');
var btnPresse4 = document.getElementById('btn__sound-4');
var sound4 = document.getElementById('audiotag_r');
var btnPresse5 = document.getElementById('btn__sound-5');
var sound5 = document.getElementById('audiotag_t');
var btnPresse6 = document.getElementById('btn__sound-6');
var sound6 = document.getElementById('audiotag_y');
var btnPresse7 = document.getElementById('btn__sound-7');
var sound7 = document.getElementById('audiotag_u');
var btnPresse8 = document.getElementById('btn__sound-8');
var sound8 = document.getElementById('audiotag_i');
var btnPresse9 = document.getElementById('btn__sound-9');
var sound9 = document.getElementById('audiotag_o');
var tab = [{
  key: 'a',
  sound: sound1,
  bouton: btnPresse1
}, {
  key: 'z',
  sound: sound2,
  bouton: btnPresse2
}, {
  key: 'e',
  sound: sound3,
  bouton: btnPresse3
}, {
  key: 'r',
  sound: sound4,
  bouton: btnPresse4
}, {
  key: 't',
  sound: sound5,
  bouton: btnPresse5
}, {
  key: 'y',
  sound: sound6,
  bouton: btnPresse6
}, {
  key: 'u',
  sound: sound7,
  bouton: btnPresse7
}, {
  key: 'i',
  sound: sound8,
  bouton: btnPresse8
}, {
  key: 'o',
  sound: sound9,
  bouton: btnPresse9
}];
console.log(tab);
document.addEventListener("keydown", function (event) {
  var _loop = function _loop(i) {
    if (event.key == tab[i].key) {
      console.log();
      tab[i].sound.currentTime = 0;
      tab[i].sound.play();
      tab[i].bouton.classList.add('en_ecoute');

      tab[i].sound.onended = function () {
        tab[i].bouton.classList.remove('en_ecoute');
      };
    }
  };

  for (var i = 0; i < tab.length; i++) {
    _loop(i);
  }
}); // //-----------------Initiation touche a
//   let btnPresse1 = document.getElementById('btn__sound-1');
//   let sound1 = document.getElementById('audiotag_a');
// document.addEventListener("keydown",  event => {
// if(event.keycode == 65) {
//   sound1.play();
//   btnPresse1.classList.add('en_ecoute');
//   console.log(event);
//   sound1.onended = function() {
//   btnPresse1.classList.remove('en_ecoute')
//   }
//  }
//  });
// //-----------------Initiation touche z
// let btnPresse2 = document.getElementById('btn__sound-2');
// let sound2 = document.getElementById('audiotag_z');
// document.addEventListener("keydown", event => {
//     if(event.keyCode == 90) {
//       sound2.currentTime = 0;
//       sound2.play();
//       btnPresse2.classList.add('en_ecoute');
//       console.log(event);
//       sound2.onended = function() {
//           btnPresse2.classList.remove('en_ecoute')
//       }
//     }
//   });
//   //-----------------Initiation touche e
//  let btnPresse3 = document.getElementById('btn__sound-3');
//  let sound3 = document.getElementById('audiotag_e');
// document.addEventListener("keydown", event => {
//     if(event.keyCode == 69) {
//       sound3.play();
//       btnPresse3.classList.add('en_ecoute');
//       console.log(event);
//       sound3.onended = function() {
//           btnPresse3.classList.remove('en_ecoute')
//       }
//     }
//   });
//   //-----------------Initiation touche r
//   let btnPresse4 = document.getElementById('btn__sound-4');
//   let sound4 = document.getElementById('audiotag_r');
//     document.addEventListener("keydown", event => {
//     if(event.keyCode == 82) {
//       sound4.play();
//       btnPresse4.classList.add('en_ecoute');
//       console.log(event);
//       sound4.onended = function() {
//           btnPresse4.classList.remove('en_ecoute')
//       }
//     }
//   });
//   //-----------------Initiation touche t
//     let btnPresse5 = document.getElementById('btn__sound-5');
//     let sound5 = document.getElementById('audiotag_t');
//     document.addEventListener("keydown", event => {
//     if(event.keyCode == 84) {
//       sound5.play();
//       btnPresse5.classList.add('en_ecoute');
//       console.log(event);
//       sound5.onended = function() {
//           btnPresse5.classList.remove('en_ecoute')
//       }
//     }
//   });
//   //-----------------Initiation touche y
//     let btnPresse6 = document.getElementById('btn__sound-6');
//     let sound6 = document.getElementById('audiotag_y');
//     document.addEventListener("keydown", event => {
//     if(event.keyCode == 89) {
//       sound6.play();
//       btnPresse6.classList.add('en_ecoute');
//       console.log(event);
//       sound6.onended = function() {
//           btnPresse6.classList.remove('en_ecoute')
//       }
//     }
//   });
//   //-----------------Initiation touche u
//   let btnPresse7 = document.getElementById('btn__sound-7');
//   let sound7 = document.getElementById('audiotag_u');
//     document.addEventListener("keydown", event => {
//     if(event.keyCode == 85) {
//       sound7.play();
//       btnPresse7.classList.add('en_ecoute');
//       console.log(event);
//       sound7.onended = function() {
//           btnPresse7.classList.remove('en_ecoute')
//       }
//     }
//   });
//   //-----------------Initiation touche i
//     let btnPresse8 = document.getElementById('btn__sound-8');
//     let sound8 = document.getElementById('audiotag_i');
//     document.addEventListener("keydown", event => {
//     if(event.keyCode == 73) {
//       sound8.play();
//       btnPresse8.classList.add('en_ecoute');
//       console.log(event);
//       sound8.onended = function() {
//           btnPresse8.classList.remove('en_ecoute')
//       }
//     }
//   });
//   //-----------------Initiation touche o
//     let btnPresse9 = document.getElementById('btn__sound-9');
//     let sound9 = document.getElementById('audiotag_o');
//     document.addEventListener("keydown", event => {
//     if(event.keyCode == 79) {
//       sound9.play();
//       btnPresse9.classList.add('en_ecoute');
//       console.log(event);
//       sound9.onended = function() {
//           btnPresse9.classList.remove('en_ecoute')
//       }
//     }
// });
},{"main":"node_modules/main/index.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51301" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map