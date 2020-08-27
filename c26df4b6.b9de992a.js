(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),i=(n(0),n(199)),a={id:"get-model-with-string",title:"Get Model With String"},l={id:"api/functions/get-model-with-string",isDocsHomePage:!1,title:"Get Model With String",description:"getModelWithString(key) retrieves a model with the given key. If no Mongoose model exists in Typegoose's internal cache, it will return undefined.",source:"@site/../docs/api/functions/getModelWithString.md",permalink:"/typegoose/docs/api/functions/get-model-with-string",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/getModelWithString.md",sidebar:"docs",previous:{title:"Set Global Options",permalink:"/typegoose/docs/api/functions/set-global-options"},next:{title:"Get Name For Class",permalink:"/typegoose/docs/api/functions/get-name"}},c=[{value:"Example",id:"example",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"getModelWithString(key)")," retrieves a model with the given key. If no Mongoose model exists in Typegoose's internal cache, it will return ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'class Kitten {\n  @prop()\n  public name?: string;\n}\n\nconst KittenModel = getModelForClass(Kitten);\n\nconst KittenModelNew = getModelWithString(KittenModel.modelName);\n// OR with the internal utils.getName(class)\nconst KittenModelNew = getModelWithString(utils.getName(Kitten));\n// BUT when you have the class at your disposal, you should use "getModelForClass" - it will return the already compiled model\n')))}p.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return n?o.a.createElement(g,l(l({ref:t},s),{},{components:n})):o.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);