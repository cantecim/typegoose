(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),a=(n(0),n(199)),i={id:"hooks",title:"Hooks"},c={id:"api/decorators/hooks",isDocsHomePage:!1,title:"Hooks",description:"@pre",source:"@site/../docs/api/decorators/hooks.md",permalink:"/typegoose/docs/api/decorators/hooks",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/hooks.md",sidebar:"docs",previous:{title:"Model Options",permalink:"/typegoose/docs/api/decorators/model-options"},next:{title:"Indexes",permalink:"/typegoose/docs/api/decorators/indexes"}},p=[{value:"@pre",id:"pre",children:[]},{value:"@post",id:"post",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"pre"},"@pre"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@pre<T>(name: string | string[] | regexp | regexp[], method: () => any)")," is used to set Pre-Hooks"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@pre")," supports the use of an array of method names for comfort (this is not mongoose-native)")),Object(a.b)("p",null,"Note: Arrow Functions cannot be used here, because the binding of ",Object(a.b)("inlineCode",{parentName:"p"},"this")," is required to get & modify the document."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"@pre<Car>('save', function () {\n  if (this.model === 'Tesla') {\n    this.isFast = true;\n  }\n})\nclass Car {\n  @prop({ required: true })\n  public model!: string;\n\n  @prop()\n  public isFast?: boolean;\n}\n")),Object(a.b)("h2",{id:"post"},"@post"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@post<T>(name: string | string[] | regexp | regexp[], method: () => any)")," is used to set Post-Hooks"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@post")," supports the use of an array of method names for comfort (this is not mongoose-native)")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"@post<Car>('save', (car) => {\n  if (car.topSpeedInKmH > 300) {\n    console.log(car.model, 'is fast!');\n  }\n})\nclass Car {\n  @prop({ required: true })\n  public model!: string;\n\n  @prop({ required: true })\n  public topSpeedInKmH!: number;\n}\n")))}l.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);