(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{814:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=c(t(0)),o=c(t(1)),p=c(t(2)),r=c(t(815));function c(e){return e&&e.__esModule?e:{default:e}}var m=p.default.bind(r.default),s={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},d=function(e){var n=e.rows;return a.default.createElement("table",{className:m("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:m("tr")},a.default.createElement("th",{className:m("th")},"Prop Name"),a.default.createElement("th",{className:m("th")},"Type"),a.default.createElement("th",{className:m("th")},"Is Required"),a.default.createElement("th",{className:m("th")},"Default Value"),a.default.createElement("th",{className:m("th")},"Description"))),a.default.createElement("tbody",null,n.map((function(e){return a.default.createElement("tr",{className:m(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:m(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:m(["td","props-td"])},e.type()),a.default.createElement("td",{className:m(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:m(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:m(["td","props-td"])},e.description()))}))))};d.propTypes=s;var u=d;n.default=u},815:function(e,n,t){e.exports={a:"PropsTable-module__a___3jmHr",blockquote:"PropsTable-module__blockquote___2_8KB",code:"PropsTable-module__code___2KKnm",dd:"PropsTable-module__dd___3-fnr",dl:"PropsTable-module__dl___1-aK-",dt:"PropsTable-module__dt___zsqRD",h1:"PropsTable-module__h1___3_J7C",h2:"PropsTable-module__h2___3kneX",h3:"PropsTable-module__h3___3tDXn",h4:"PropsTable-module__h4___3Smpq",h5:"PropsTable-module__h5___JbW-q",h6:"PropsTable-module__h6___15tXR","icon-link":"PropsTable-module__icon-link___3AieV",anchor:"PropsTable-module__anchor___gobp1",hr:"PropsTable-module__hr___2p3zc",img:"PropsTable-module__img___BKLT1",input:"PropsTable-module__input___7QjXj",kbd:"PropsTable-module__kbd___FQBlv",li:"PropsTable-module__li___2svn5",p:"PropsTable-module__p___14TgJ",ol:"PropsTable-module__ol___Nokj5",ul:"PropsTable-module__ul___3cngA",td:"PropsTable-module__td___19-Yf",pre:"PropsTable-module__pre___2vo2i",strong:"PropsTable-module__strong___1LrkK",table:"PropsTable-module__table___391ck",th:"PropsTable-module__th___2sgD9",tr:"PropsTable-module__tr___fGO-l",icon:"PropsTable-module__icon___3ftPX",required:"PropsTable-module__required___1p1FE","props-tr":"PropsTable-module__props-tr___Av7iJ","props-td":"PropsTable-module__props-td___1tG6V"}},816:function(e,n,t){"use strict";t(0);var a=t(196),o=t(814),p=t.n(o);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.a=function(){return Object(a.mdx)(p.a,{rows:[{name:"optionalArray",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"array"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An array"))}return t.isMDXComponent=!0,t({})}},{name:"optionalBool",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"true",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A boolean"))}return t.isMDXComponent=!0,t({})}},{name:"optionalFunc",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A function"))}return t.isMDXComponent=!0,t({})}},{name:"optionalNumber",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A number"))}return t.isMDXComponent=!0,t({})}},{name:"optionalObject",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An object"))}return t.isMDXComponent=!0,t({})}},{name:"optionalString",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A string"))}return t.isMDXComponent=!0,t({})}},{name:"optionalSymbol",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"symbol"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A symbol"))}return t.isMDXComponent=!0,t({})}},{name:"optionalNode",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types."))}return t.isMDXComponent=!0,t({})}},{name:"optionalElement",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A React element."))}return t.isMDXComponent=!0,t({})}},{name:"optionalElementType",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"elementType"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A React element type (ie. MyComponent)."))}return t.isMDXComponent=!0,t({})}},{name:"optionalMessage",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"instanceOf"),Object(a.mdx)("pre",{className:"language-json"},Object(a.mdx)("code",r({parentName:"pre"},{className:"language-json"}),Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"Message"'),"\n")))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"This uses JS's instanceof operator. Instance of should be described here. instanceOf(Message)"))}return t.isMDXComponent=!0,t({})}},{name:"optionalEnum",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",{className:"language-json"},Object(a.mdx)("code",r({parentName:"pre"},{className:"language-json"}),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"["),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"News"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"Photos"'),"\n",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"]"),"\n")))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An enum of values. Values should be described here. One of ",Object(a.mdx)("inlineCode",{parentName:"p"},"News")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"Photos")))}return t.isMDXComponent=!0,t({})}},{name:"optionalUnion",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",{className:"language-json"},Object(a.mdx)("code",r({parentName:"pre"},{className:"language-json"}),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"["),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"name"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"string"'),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"name"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"number"'),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"name"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"instanceOf"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"value"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"Message"'),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"]"),"\n")))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An object that could be one of many types. Supported types should be described here. Supports string, number, and instanceOf(Message)"))}return t.isMDXComponent=!0,t({})}},{name:"optionalArrayOf",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"arrayOf"),Object(a.mdx)("pre",{className:"language-json"},Object(a.mdx)("code",r({parentName:"pre"},{className:"language-json"}),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"name"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"string"'),"\n",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"['derp']",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An array of a certain type"))}return t.isMDXComponent=!0,t({})}},{name:"optionalObjectOf",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"objectOf"),Object(a.mdx)("pre",{className:"language-json"},Object(a.mdx)("code",r({parentName:"pre"},{className:"language-json"}),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"name"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"number"'),"\n",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An object with property values of a certain type. objectOf should be described here. objectOf(PropTypes.number)"))}return t.isMDXComponent=!0,t({})}},{name:"optionalObjectWithShape",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"shape"),Object(a.mdx)("pre",{className:"language-json"},Object(a.mdx)("code",r({parentName:"pre"},{className:"language-json"}),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"color"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"name"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"string"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"required"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token boolean"}),"false"),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"fontSize"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"name"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"number"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"required"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token boolean"}),"false"),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An object taking on a particular shape"))}return t.isMDXComponent=!0,t({})}},{name:"optionalObjectWithStrictShape",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"exact"),Object(a.mdx)("pre",{className:"language-json"},Object(a.mdx)("code",r({parentName:"pre"},{className:"language-json"}),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"name"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"name"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"string"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"required"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token boolean"}),"false"),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"quantity"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"name"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),'"number"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(a.mdx)("span",r({parentName:"code"},{className:"token property"}),'"required"'),Object(a.mdx)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token boolean"}),"false"),"\n ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An object with warnings on extra properties"))}return t.isMDXComponent=!0,t({})}},{name:"requiredFunc",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Required prop"))}return t.isMDXComponent=!0,t({})}},{name:"requiredAny",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"any"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Another required prop"))}return t.isMDXComponent=!0,t({})}},{name:"intl",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"custom"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Internationalization object with translation APIs. Provided by ",Object(a.mdx)("inlineCode",{parentName:"p"},"injectIntl"),"."))}return t.isMDXComponent=!0,t({})}},{name:"mdx",type:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={},n="wrapper";function t(t){var o=t.components,p=c(t,["components"]);return Object(a.mdx)(n,r({},e,p,{components:o,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An Example of fancypants markdown in the comment"),Object(a.mdx)("pre",{className:"language-jsx"},Object(a.mdx)("code",r({parentName:"pre"},{className:"language-jsx"}),Object(a.mdx)("span",r({parentName:"code"},{className:"token tag"}),Object(a.mdx)("span",r({parentName:"span"},{className:"token tag"}),Object(a.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),"<"),"div"),Object(a.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),">")),Object(a.mdx)("span",r({parentName:"code"},{className:"token plain-text"}),"\n  "),Object(a.mdx)("span",r({parentName:"code"},{className:"token tag"}),Object(a.mdx)("span",r({parentName:"span"},{className:"token tag"}),Object(a.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),"<"),"h1"),Object(a.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),">")),Object(a.mdx)("span",r({parentName:"code"},{className:"token plain-text"}),"\n   "),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"intl",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(a.mdx)("span",r({parentName:"code"},{className:"token method function property-access"}),"formatMessage"),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"{")," id",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token string"}),"'Terra.devSite.themed.help'")," ",Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(a.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.mdx)("span",r({parentName:"code"},{className:"token plain-text"}),"\n  "),Object(a.mdx)("span",r({parentName:"code"},{className:"token tag"}),Object(a.mdx)("span",r({parentName:"span"},{className:"token tag"}),Object(a.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),"</"),"h1"),Object(a.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),">")),Object(a.mdx)("span",r({parentName:"code"},{className:"token plain-text"}),"\n"),Object(a.mdx)("span",r({parentName:"code"},{className:"token tag"}),Object(a.mdx)("span",r({parentName:"span"},{className:"token tag"}),Object(a.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(a.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),">")),"\n")))}return t.isMDXComponent=!0,t({})}}]})}}}]);
//# sourceMappingURL=0-dd3fa0dae75fe125d92f.js.map