(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[7],{82:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(1);var r=n(9),o=n(83),i=n.n(o),c=n(5);function s(e){e.type;var t=e.message,n=e.duration,o=e.setType;return Object(c.jsx)(i.a,{duration:n,persistOnHover:!0,children:Object(c.jsx)("div",{className:"notificationContainer",children:Object(c.jsxs)("div",{className:"notification success",children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)(r.n,{onClick:function(){return o("none")}})})]})})})}},83:function(e,t,n){e.exports=function(){var e={433:function(e,t,n){"use strict";var r=n(642);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},74:function(e,t,n){e.exports=n(433)()},642:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},368:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var o=n(1),i=r.n(o),c=r(74);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(c,e);var t,n,r,o=(n=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(r){var o=l(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return a(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={isVisible:!0},t.hide=t.hide.bind(f(t)),t.resumeTimer=t.resumeTimer.bind(f(t)),t.pauseTimer=t.pauseTimer.bind(f(t)),t}return(t=[{key:"componentDidMount",value:function(){var e=this.props.duration;this.remaining=e,this.resumeTimer()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"hide",value:function(){this.setState({isVisible:!1})}},{key:"resumeTimer",value:function(){window.clearTimeout(this.timer),this.start=new Date,this.timer=setTimeout(this.hide,this.remaining)}},{key:"pauseTimer",value:function(){this.props.persistOnHover&&(clearTimeout(this.timer),this.remaining-=new Date-this.start)}},{key:"render",value:function(){var e=this.state.isVisible,t=this.props.children;return e?i().createElement("div",{onMouseEnter:this.pauseTimer,onMouseLeave:this.resumeTimer},t):null}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(c.prototype,t),c}(o.Component);p.defaultProps={duration:5e3,children:null,persistOnHover:!0},p.propTypes={children:c.node,duration:c.number,persistOnHover:c.bool};var d=p}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(368)}()},87:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n(13),o=n(15),i=n.n(o),c=n(1),s=n(82),u=n(5);function a(e){var t=e.API_KEY,n=Object(c.useState)("none"),o=Object(r.a)(n,2),a=o[0],f=o[1],l=Object(c.useState)("no message"),p=Object(r.a)(l,2),d=p[0],h=p[1];return Object(u.jsxs)("div",{className:"content",children:["none"!==a&&Object(u.jsx)(s.a,{type:a,message:d,duration:"5000",setType:f}),Object(u.jsxs)("div",{className:"contentContainer",children:[Object(u.jsx)("p",{children:"Push this button to accept the pairing of the requested app"}),Object(u.jsxs)("div",{className:"linkbtn",onClick:function(){i.a.put("/api/".concat(t,"/config"),{linkbutton:{lastlinkbuttonpushed:Date.now()/1e3|0}}).then((function(e){console.log(e.data),h("Pairing is allowed for 30 seconds"),f("none"),f("success")})).catch((function(e){console.error(e),h("Error occured, check browser console"),f("none"),f("error")}))},children:["Link App",Object(u.jsx)("div",{class:"linkbtn2"})]})]})]})}}}]);
//# sourceMappingURL=7.bcfeca8c.chunk.js.map