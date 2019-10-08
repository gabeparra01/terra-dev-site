(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{800:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(0)),r=l(a(1)),c=l(a(2)),m=l(a(804));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,a){return t&&u(e.prototype,t),a&&u(e,a),e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=c.default.bind(m.default),N={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node},x=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(o=p(t).call(this,e))||"object"!==s(o)&&"function"!=typeof o?d(n):o).state={isExpanded:!1,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(d(a)),a.handleCodeToggle=a.handleCodeToggle.bind(d(a)),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),i(t,null,[{key:"renderHeader",value:function(e){return e?o.default.createElement("div",{className:f("header")},o.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?o.default.createElement("div",{className:f("description")},e):null}}]),i(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,a=e.example,n=e.exampleSrc,r=e.title,c=e.description,m=this.state,l=m.isExpanded,s=m.isBackgroundTransparent;return o.default.createElement("div",{className:f("template")},t.renderHeader(r),o.default.createElement("div",{className:f("content",{"dynamic-content":s})},c,a),n&&o.default.createElement("div",{className:f("footer")},o.default.createElement("div",{className:f("button-container")},o.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:f("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:f("chevron-right")}))),l&&o.default.createElement("div",{className:f("code")},n)))}}]),t}(o.default.Component);x.propTypes=N;var O=x;t.default=O},802:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(0);var n=a(196);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c={},m="wrapper";function l(e){var t=e.components,a=r(e,["components"]);return Object(n.mdx)(m,o({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("pre",{className:"language-jsx"},Object(n.mdx)("code",o({parentName:"pre"},{className:"language-jsx"}),Object(n.mdx)("span",o({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(n.mdx)("span",o({parentName:"code"},{className:"token maybe-class-name"}),"React")," ",Object(n.mdx)("span",o({parentName:"code"},{className:"token keyword module"}),"from")," ",Object(n.mdx)("span",o({parentName:"code"},{className:"token string"}),"'react'"),Object(n.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.mdx)("span",o({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.mdx)("span",o({parentName:"code"},{className:"token function-variable function"}),Object(n.mdx)("span",o({parentName:"span"},{className:"token maybe-class-name"}),"TagComp"))," ",Object(n.mdx)("span",o({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",o({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(n.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),"("),"\n  ",Object(n.mdx)("span",o({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",o({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",o({parentName:"span"},{className:"token punctuation"}),"<"),"h1"),Object(n.mdx)("span",o({parentName:"span"},{className:"token punctuation"}),">")),Object(n.mdx)("span",o({parentName:"code"},{className:"token plain-text"}),"\n    I am a test\n  "),Object(n.mdx)("span",o({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",o({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",o({parentName:"span"},{className:"token punctuation"}),"</"),"h1"),Object(n.mdx)("span",o({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.mdx)("span",o({parentName:"code"},{className:"token keyword module"}),"export")," ",Object(n.mdx)("span",o({parentName:"code"},{className:"token keyword module"}),"default")," ",Object(n.mdx)("span",o({parentName:"code"},{className:"token maybe-class-name"}),"TagComp"),Object(n.mdx)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n")))}l.isMDXComponent=!0},804:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___3KR51",header:"ExampleTemplate-module__header___3liFm",content:"ExampleTemplate-module__content___U19d7",description:"ExampleTemplate-module__description___3eh1T",footer:"ExampleTemplate-module__footer___2gHXQ","button-container":"ExampleTemplate-module__button-container___XCXdE",code:"ExampleTemplate-module__code___2S6sj","bg-toggle":"ExampleTemplate-module__bg-toggle___NyKSR","code-toggle":"ExampleTemplate-module__code-toggle___1HG6b","chevron-left":"ExampleTemplate-module__chevron-left___2UF9M","chevron-right":"ExampleTemplate-module__chevron-right___AsqqS",title:"ExampleTemplate-module__title___3JA_X","dynamic-content":"ExampleTemplate-module__dynamic-content___3KBaY"}},811:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(812),c=a.n(r),m=a(802),l=a(800),s=a.n(l);t.a=function(e){var t=e.title,a=e.description;return o.a.createElement(s.a,{title:t||"Example",description:a,example:o.a.createElement(c.a,null),exampleSrc:o.a.createElement(m.a,null)})}},812:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=a(0))&&n.__esModule?n:{default:n};var r=function(){return o.default.createElement("h1",null,"I am a test")};t.default=r},850:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));a(0);var n=a(196),o=a(811);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m={},l="wrapper";function s(e){var t=e.components,a=c(e,["components"]);return Object(n.mdx)(l,r({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",{id:"example-loader"},"Example Loader"),Object(n.mdx)("p",null,"The Example loader will take the passed in file, add it to an example template then location the source for the file in the src folder and render the example output.\nThe file must be a return a react component that has no required props to render."),Object(n.mdx)("h2",{id:"resource-query"},"Resource query"),Object(n.mdx)("p",null,Object(n.mdx)("inlineCode",{parentName:"p"},"?dev-site-example")),Object(n.mdx)("h2",{id:"props"},"Props"),Object(n.mdx)("table",null,Object(n.mdx)("thead",{parentName:"table"},Object(n.mdx)("tr",{parentName:"thead"},Object(n.mdx)("th",r({parentName:"tr"},{align:null}),"Prop"),Object(n.mdx)("th",r({parentName:"tr"},{align:null}),"type"))),Object(n.mdx)("tbody",{parentName:"table"},Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",r({parentName:"tr"},{align:null}),"title"),Object(n.mdx)("td",r({parentName:"tr"},{align:null}),"string")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",r({parentName:"tr"},{align:null}),"description"),Object(n.mdx)("td",r({parentName:"tr"},{align:null}),"string")))),Object(n.mdx)("h2",{id:"example"},"Example"),Object(n.mdx)("pre",{className:"language-jsx"},Object(n.mdx)("code",r({parentName:"pre"},{className:"language-jsx"}),Object(n.mdx)("span",r({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(n.mdx)("span",r({parentName:"code"},{className:"token maybe-class-name"}),"Example")," ",Object(n.mdx)("span",r({parentName:"code"},{className:"token keyword module"}),"from")," ",Object(n.mdx)("span",r({parentName:"code"},{className:"token string"}),"'./example?dev-site-example'"),Object(n.mdx)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.mdx)("span",r({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",r({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),"<"),Object(n.mdx)("span",r({parentName:"span"},{className:"token class-name"}),"Example"))," ",Object(n.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),"/>")),"\n\n",Object(n.mdx)("span",r({parentName:"code"},{className:"token comment"}),"// A custom title and description can be added."),"\n",Object(n.mdx)("span",r({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",r({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),"<"),Object(n.mdx)("span",r({parentName:"span"},{className:"token class-name"}),"Example"))," ",Object(n.mdx)("span",r({parentName:"span"},{className:"token attr-name"}),"title"),Object(n.mdx)("span",r({parentName:"span"},{className:"token attr-value"}),Object(n.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),"="),Object(n.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),'"'),"Custom Title",Object(n.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(n.mdx)("span",r({parentName:"span"},{className:"token attr-name"}),"description"),Object(n.mdx)("span",r({parentName:"span"},{className:"token attr-value"}),Object(n.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),"="),Object(n.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),'"'),"Custom description",Object(n.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(n.mdx)("span",r({parentName:"span"},{className:"token punctuation"}),"/>")),"\n")),Object(n.mdx)("h2",{id:"rendered-example"},"Rendered Example"),Object(n.mdx)(o.a,{mdxType:"Example"}))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=3-e37097540065dfc39a80.js.map