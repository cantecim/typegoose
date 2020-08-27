(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(199)),i={id:"is-document",title:"Is Document"},c={id:"api/functions/typeguards/is-document",isDocsHomePage:!1,title:"Is Document",description:"isDocument",source:"@site/../docs/api/functions/typeguards/isDocument.md",permalink:"/typegoose/docs/api/functions/typeguards/is-document",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/typeguards/isDocument.md",sidebar:"docs",previous:{title:"Get Name For Class",permalink:"/typegoose/docs/api/functions/get-name"},next:{title:"Is Ref-Type",permalink:"/typegoose/docs/api/functions/typeguards/is-ref-type"}},s=[{value:"isDocument",id:"isdocument",children:[]},{value:"isDocumentArray",id:"isdocumentarray",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"isdocument"},"isDocument"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isDocument(doc: any)"),": Checks if the supplied value is a valid Model(/Document) (mainly for ",Object(a.b)("inlineCode",{parentName:"p"},"Ref<T>")," fields)."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'class Cat {\n  @prop({ ref: \'Cat\' })\n  public partner: Ref<Cat>;\n\n  public hasPartner(): boolean {\n    if (isDocument(this.partner)) {\n      // "this.partner" now has the type of "Cat"\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n')),Object(a.b)("p",null,"-> this could be minified, but for demonstration purposes this will stay the long version"),Object(a.b)("h2",{id:"isdocumentarray"},"isDocumentArray"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isDocumentArray(doc: any[])")," is the same as ",Object(a.b)("inlineCode",{parentName:"p"},"isDocument"),", only that it checks if it is an array ",Object(a.b)("strong",{parentName:"p"},"AND")," all of the items are Documents."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'class Cat {\n  @prop({ ref: \'Cat\' })\n  public kittens: Ref<Cat>;\n\n  public areAllKittensExisting(): boolean {\n    if (isDocumentArray(this.kittens)) {\n      // "this.kittens" now has the type of "Cat"\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n')),Object(a.b)("p",null,"-> this could be minified, but for demonstration purposes this will stay the long version"))}p.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||m[b]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);