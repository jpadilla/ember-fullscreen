define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,r,i){"use strict";var a;t["default"].MODEL_FACTORY_INJECTIONS=!0,a=t["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:n["default"]}),r["default"](a,i["default"].modulePrefix),e["default"]=a}),define("dummy/components/fullscreen-img",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({tagName:"img",attributeBindings:["src","width","height"],click:function(){this.fullscreen.toggle(this.element)}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({actions:{toggleFullscreen:function(){this.fullscreen.toggle()}}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var r=n["default"].String.classify,i=!1;e["default"]={name:"App Version",initialize:function(e,a){if(!i){var l=r(a.toString());n["default"].libraries.register(l,t["default"].APP.version),i=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function r(e,r){var i=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[i]&&(window[i]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/initializers/fullscreen",["exports","ember-fullscreen/initializers/fullscreen"],function(e,t){"use strict";e["default"]=t["default"],e.initialize=t.initialize}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){}),e["default"]=r}),define("dummy/services/fullscreen",["exports","ember-fullscreen/services/fullscreen"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var r=e.createTextNode("ember-fullscreen");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h3"),r=e.createTextNode("Page fullscreen");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("button"),r=e.createTextNode("Toggle fullscreen");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),r=e.createTextNode("Fullscreen ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h3"),r=e.createTextNode("Element fullscreen");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),r=e.createTextNode("Click the cat to make it fullscreen.");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var r=t.dom,i=t.hooks,a=i.element,l=i.get,d=i.inline;r.detectNamespace(n);var o;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(o=this.build(r),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=r.cloneNode(this.cachedFragment,!0))):o=this.build(r);var c=r.childAt(o,[4]),u=r.createMorphAt(r.childAt(o,[6]),1,1),s=r.createMorphAt(o,12,12,n);return a(t,c,e,"action",["toggleFullscreen"],{}),d(t,u,e,"if",[l(t,e,"fullscreen.isEnabled"),"enabled","disabled"],{}),d(t,s,e,"fullscreen-img",[],{src:"cat-55239e3bb63dea7279d317578829ac95.jpg",id:"demo-img"}),o}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),i=JSON.parse(unescape(r));return{"default":i}}catch(a){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-fullscreen",version:"0.0.1.df86da87"});