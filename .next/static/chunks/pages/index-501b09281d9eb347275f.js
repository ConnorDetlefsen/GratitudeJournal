(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9691:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,{default:function(){return h}});var s=n(9008),i=n(5893);function o(e){var t=e.user,n=e.color,r=e.gratitudes,a=e.hasSubmittedToday;return(0,i.jsxs)("div",{className:"text-white text-6xl p-6",children:[(0,i.jsxs)("h1",{children:["Hello, ",(0,i.jsx)("span",{className:n,children:t.name}),"!"]}),a?(0,i.jsxs)("h2",{className:"font-black",children:["Today you're grateful for ",r.slice(-1)[0]]}):(0,i.jsx)("h2",{className:"font-black",children:"What are you grateful for today?"})]})}function l(e){var t=e.gratitude,n=e.onDelete;return(0,i.jsxs)("div",{className:"w-full h-auto bg-pink-200 flex flex-row justify-between  items-center shadow-lg p-4 rounded-md flex-wrap text-black",children:[(0,i.jsx)("h1",{className:"pr-20 ",children:t}),(0,i.jsx)("button",{onClick:function(e){e.preventDefault(),n(t)},className:"text-sm bg-white h-16 w-16 rounded-md hover:bg-red-400",children:"Delete"})]})}function u(e){var t=e.gratitudes,n=e.onDelete;return(0,i.jsxs)("div",{className:"text-white text-6xl p-6",children:[(0,i.jsx)("h2",{className:"font-black",children:"Previous gratitudes: "}),(0,i.jsx)("span",{className:"flex flex-col p-5 items-center",children:t.map((function(e,r){return(0,i.jsx)("div",{className:"p-3 ",children:(0,i.jsx)(l,{gratitude:t[r],onDelete:n})},r)}))})]})}var c=n(7294);function d(e){var t=e.handleSubmit,n=(0,c.useState)(""),r=n[0],a=n[1];return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),a("")},className:"p-5",children:[(0,i.jsx)("input",{placeholder:"enter a gratitude",type:"text",value:r,onChange:function(e){return a(e.target.value)},className:"rounded px-3 py-3 mr-1"}),(0,i.jsx)("button",{type:"submit",className:"bg-pink-300 rounded px-12 py-3 hover:bg-pink-400",children:"Save"})]})}function f(e){var t=e.onAddAnother;return(0,i.jsx)("div",{children:(0,i.jsx)("button",{onClick:t,className:"bg-pink-300 rounded px-12 py-3 hover:bg-pink-400",children:"Add Another Gratitude"})})}function h(){var e=(0,c.useState)({name:"Connor",email:"detlefsen@chapman.edu"}),t=e[0],n=(e[1],(0,c.useState)([])),r=n[0],l=n[1],h=(0,c.useState)(!1),m=h[0],x=h[1];return(0,i.jsxs)("div",{className:"bg-gray-700 min-h-screen min-w-screen",children:[(0,i.jsxs)(s.default,{children:[(0,i.jsxs)("title",{children:[t.name,"'s Gratitude Journal"]}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:"flex flex-col p-1 items-center",children:[(0,i.jsx)(o,{color:"text-pink-800",user:t,gratitudes:r,hasSubmittedToday:m}),!m&&(0,i.jsx)(d,{handleSubmit:function(e){if(0===e.replace(/\s+/g,"").length)alert("You must enter something to submit!");else{var t=[].concat(a(r),[e]);l(t),x(!0)}}}),m&&(0,i.jsx)(f,{onAddAnother:function(){x(!1)}}),r.length>0&&(0,i.jsx)(u,{className:"p-3",gratitudes:r,onDelete:function(e){var t=r.indexOf(e),n=a(r);n.splice(t,1),l(n),0===n.length&&x(!1)}})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9691)}])},9008:function(e,t,n){e.exports=n(639)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);