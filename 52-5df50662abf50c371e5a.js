(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{846:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return o}));t(0);var n=t(196);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c={},p="wrapper";function o(e){var a=e.components,t=m(e,["components"]);return Object(n.mdx)(p,s({},c,t,{components:a,mdxType:"MDXLayout"}),Object(n.mdx)("h1",{id:"mdx"},"MDX"),Object(n.mdx)("p",null,"Terra dev site uses MDX as a markdown loader. MDX allows you to mix JSX syntax into your markdown documents."),Object(n.mdx)("p",null,"To use mdx syntax you must use a .mdx file extension."),Object(n.mdx)("p",null,"For example the following block will render into"),Object(n.mdx)("pre",{className:"language-md"},Object(n.mdx)("code",s({parentName:"pre"},{className:"language-md"}),Object(n.mdx)("span",s({parentName:"code"},{className:"token title important"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),"#")," Hello, *world*!"),"\n\nBelow is an example of JSX embedded in Markdown. ",Object(n.mdx)("span",s({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),"<"),"br")," ",Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),"/>"))," ",Object(n.mdx)("span",s({parentName:"code"},{className:"token bold"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),"**"),Object(n.mdx)("span",s({parentName:"span"},{className:"token content"}),"Check out\nthe background color!"),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),"**")),"\n\n",Object(n.mdx)("span",s({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(n.mdx)("span",s({parentName:"span"},{className:"token attr-name"}),"style"),Object(n.mdx)("span",s({parentName:"span"},{className:"token attr-value"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),"="),"{{")," ",Object(n.mdx)("span",s({parentName:"span"},{className:"token attr-name"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token namespace"}),"padding:"))," ",Object(n.mdx)("span",s({parentName:"span"},{className:"token attr-name"}),"'20px',")," ",Object(n.mdx)("span",s({parentName:"span"},{className:"token attr-name"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token namespace"}),"backgroundColor:"))," ",Object(n.mdx)("span",s({parentName:"span"},{className:"token attr-name"}),"'tomato'")," ",Object(n.mdx)("span",s({parentName:"span"},{className:"token attr-name"}),"}}"),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(n.mdx)("span",s({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),"<"),"h3"),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),">")),"This is JSX",Object(n.mdx)("span",s({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),"</"),"h3"),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.mdx)("span",s({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(n.mdx)("span",s({parentName:"span"},{className:"token punctuation"}),">")),"\n")),Object(n.mdx)("p",null,"With the output below:"),Object(n.mdx)("hr",null),Object(n.mdx)("h1",{id:"hello-world"},"Hello, ",Object(n.mdx)("em",{parentName:"h1"},"world"),"!"),Object(n.mdx)("p",null,"Below is an example of JSX embedded in Markdown. ",Object(n.mdx)("br",null)," ",Object(n.mdx)("strong",{parentName:"p"},"Try and change\nthe background color!")),Object(n.mdx)("div",{style:{padding:"20px",backgroundColor:"tomato"}},Object(n.mdx)("h3",null,"This is JSX")),Object(n.mdx)("hr",null),Object(n.mdx)("p",null,"For more information see ",Object(n.mdx)("a",s({parentName:"p"},{href:"https://mdxjs.com/"}),"https://mdxjs.com/")),Object(n.mdx)("h2",{id:"mdx-loader"},"MDX loader"),Object(n.mdx)("p",null,"Mdx is loaded at build time rather than interpreted at run time. The mdx loader that is used is more strict that the 'marked' library previously used."),Object(n.mdx)("p",null,"The MDX loader requires closing tags. For example the before markdown would fail because the img tag was not closed."),Object(n.mdx)("pre",{className:"language-diff"},Object(n.mdx)("code",s({parentName:"pre"},{className:"language-diff"}),Object(n.mdx)("span",s({parentName:"code"},{className:"token deleted-sign deleted"}),'- <img height="128" width="128" src="https://github.com/cerner/terra-dev-site/raw/master/terra.png" alt="terra logo" >\n'),Object(n.mdx)("span",s({parentName:"code"},{className:"token inserted-sign inserted"}),'+ <img height="128" width="128" src="https://github.com/cerner/terra-dev-site/raw/master/terra.png" alt="terra logo" />\n'))),Object(n.mdx)("p",null,"MDX also has a bug where a comment cannot directly follow a closing tag."),Object(n.mdx)("pre",{className:"language-diff"},Object(n.mdx)("code",s({parentName:"pre"},{className:"language-diff"}),Object(n.mdx)("span",s({parentName:"code"},{className:"token deleted-sign deleted"}),"-<h1>\n-hi mom\n-</h1>\n-\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n"),"\n",Object(n.mdx)("span",s({parentName:"code"},{className:"token inserted-sign inserted"}),"+<h1>\n+hi mom\n+</h1>\n"),"\n",Object(n.mdx)("span",s({parentName:"code"},{className:"token inserted-sign inserted"}),"+\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n"),"\n")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=52-5df50662abf50c371e5a.js.map