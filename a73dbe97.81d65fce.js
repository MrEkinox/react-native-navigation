/*! For license information please see a73dbe97.81d65fce.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),o=(n(0),n(171)),r=n(175),i=n(176);const l={id:"orientation",title:"Orientation",sidebar_label:"Orientation"},c={id:"orientation",title:"Orientation",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/orientation.mdx",permalink:"/react-native-navigation/docs/orientation",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/orientation.mdx",sidebar_label:"Orientation",sidebar:"docs",previous:{title:"StatusBar",permalink:"/react-native-navigation/docs/statusBar-docs"},next:{title:"Animations",permalink:"/react-native-navigation/docs/docs-animations"}},s=[{value:"Locking orientation",id:"locking-orientation",children:[]},{value:"Changing orientation dynamically",id:"changing-orientation-dynamically",children:[]}],u={rightToc:s};function p({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"locking-orientation"},"Locking orientation"),Object(o.b)("p",null,"Orientation can be locked either in the layout level, or across the app via default options. You can declare orientations you'd like your app to support in default options."),Object(o.b)(r.a,{defaultValue:"defaultOptions",values:[{label:"Locking orientation in default options",value:"defaultOptions"},{label:"Locking root layout orientation",value:"root"},{label:"Showing landscape modal",value:"modal"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"defaultOptions",mdxType:"TabItem"},Object(o.b)("p",null,"Setting orientation in default options will affect all screens in all hierarchy levels. It's still possible to override orientation for specific screens."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setDefaultOptions({\n  layout: {\n    orientation: ['portrait']\n  }\n});\n"))),Object(o.b)(i.a,{value:"modal",mdxType:"TabItem"},Object(o.b)("p",null,"The following example demonstrates how to show a modal in landscape orientation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.showModal({\n  component: {\n    name: 'VideoPlayer'\n    options: {\n      layout: {\n        orientation: ['landscape']\n      }\n    }\n  }\n});\n"))),Object(o.b)(i.a,{value:"root",mdxType:"TabItem"},Object(o.b)("p",null,"Applying orientation in the root level will affect all screens in the root hierarchy level. It ",Object(o.b)("strong",{parentName:"p"},"will not")," apply to modals."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    bottomTabs: {\n      options: {\n        layout: {\n          orientation: ['portrait']\n        }\n      },\n      children: [\n        ...\n      ]\n    }\n  }\n});\n")))),Object(o.b)("h2",{id:"changing-orientation-dynamically"},"Changing orientation dynamically"),Object(o.b)("p",null,"Changing orientation dynamically through ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.mergeOption()")," is supported only on Android."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(this.props.componentId, {\n  layout: {\n    orientation: ['landscape']\n  }\n});\n")))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(f,l({ref:t},s,{components:n})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},172:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},175:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(172),i=n.n(r),l=n(93),c=n.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:r,values:l}=e,[p,b]=Object(a.useState)(r),d=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:i()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>b(e),onClick:()=>b(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},176:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);