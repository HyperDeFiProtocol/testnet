(window.webpackJsonp=window.webpackJsonp||[]).push([[19,47],{1e3:function(t,n,e){var r=e(66)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\ninput[data-v-42a552e0]{\n  display:block;\n  width:100%;\n  border-radius:0px;\n  border-top-left-radius:0.375rem;\n  border-bottom-left-radius:0.375rem;\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(109, 40, 217, var(--tw-text-opacity))\n}\n@media (min-width: 640px){\ninput[data-v-42a552e0]{\n    font-size:1rem;\n    line-height:1.5rem\n}\n}\n@media (min-width: 768px){\ninput[data-v-42a552e0]{\n    font-size:1.125rem;\n    line-height:1.75rem\n}\n}\n@media (min-width: 1024px){\ninput[data-v-42a552e0]{\n    font-size:1.25rem;\n    line-height:1.75rem\n}\n}\ninput[data-v-42a552e0]:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(107, 114, 128, var(--tw-border-opacity));\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(107, 114, 128, var(--tw-ring-opacity))\n}\nbutton[data-v-42a552e0]{\n  position:relative;\n  margin-left:-1px;\n  display:inline-flex;\n  align-items:center\n}\nbutton[data-v-42a552e0] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))\n}\nbutton[data-v-42a552e0]{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  border-top-right-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity));\n  font-size:0.875rem;\n  line-height:1.25rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n@media (min-width: 640px){\nbutton[data-v-42a552e0]{\n    font-size:1rem;\n    line-height:1.5rem\n}\n}\n@media (min-width: 768px){\nbutton[data-v-42a552e0]{\n    font-size:1.125rem;\n    line-height:1.75rem\n}\n}\n@media (min-width: 1024px){\nbutton[data-v-42a552e0]{\n    font-size:1.25rem;\n    line-height:1.75rem\n}\n}\nbutton[data-v-42a552e0]{\n  text-transform:uppercase\n}\nbutton[data-v-42a552e0]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity))\n}\nbutton[data-v-42a552e0]:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(107, 114, 128, var(--tw-border-opacity));\n  outline:2px solid transparent;\n  outline-offset:2px;\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(107, 114, 128, var(--tw-ring-opacity))\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},1027:function(t,n){},1037:function(t,n,e){"use strict";e.r(n);e(802),e(53),e(20),e(68);var r=e(1026),o=e.n(r),d={name:"CInputCopy",props:{label:{type:String,required:!0},value:{type:String|Number,required:!0},title:{type:String,required:!1}},computed:{xHash:function(){return this.title?"x"+o()(this.title).toString().slice(-10):"x"+o()(this.value).toString().slice(-10)}},methods:{copy:function(){this.$refs[this.xHash].select(),document.execCommand("copy")?console.log("copied..."):console.log("copy failed...")}}},l=(e(999),e(4)),component=Object(l.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("label",{staticClass:"block text-sm font-medium text-gray-400",attrs:{for:t.xHash}},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),e("div",{staticClass:"mt-2 flex rounded-md shadow-sm"},[e("div",{staticClass:"relative flex items-stretch flex-grow focus-within:z-10"},[e("input",{ref:t.xHash,attrs:{type:"text",readonly:""},domProps:{value:t.value},on:{click:t.copy}})]),t._v(" "),e("button",{attrs:{type:"button"},on:{click:t.copy}},[e("HeroIconOutlineClipboardCopy",{staticClass:"w-6 h-6 text-gray-500"}),t._v(" "),e("span",[t._v("\n        Copy\n      ")])],1)])])}),[],!1,null,"42a552e0",null);n.default=component.exports;installComponents(component,{HeroIconOutlineClipboardCopy:e(985).default})},969:function(t,n,e){var content=e(1e3);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("482c29f8",content,!0,{sourceMap:!1})},985:function(t,n,e){"use strict";e.r(n);var r={name:"HeroIconOutlineClipboardCopy"},o=e(4),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"}})])}),[],!1,null,"2e979db1",null);n.default=component.exports},999:function(t,n,e){"use strict";e(969)}}]);