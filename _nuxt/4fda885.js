(window.webpackJsonp=window.webpackJsonp||[]).push([[119,19,63,69],{1030:function(t,e,n){var content=n(1090);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("1b087960",content,!0,{sourceMap:!1})},1046:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineMicrophone"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"}})])}),[],!1,null,"8b448f8c",null);e.default=component.exports},1047:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineTemplate"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"}})])}),[],!1,null,"7afe6ebc",null);e.default=component.exports},1089:function(t,e,n){"use strict";n(1030)},1090:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\na[data-v-3590fa13]{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center\n}\na[data-v-3590fa13] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))\n}\na[data-v-3590fa13]{\n  padding:1.5rem;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\na[data-v-3590fa13]:hover{\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\na:hover p[data-v-3590fa13]{\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},1116:function(t,e,n){"use strict";n.r(e);var r=n(74),o={name:"community",data:function(){return{}},computed:{hdfLink:function(){return r.a},telegramChannel:function(){return"hyperdefiprotocol"}},methods:{}},l=(n(1089),n(5)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LAutoWidth",{staticClass:"py-10 md:py-20"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n      Online\n    ")]},proxy:!0}])},[n("span",[t._v("\n      "+t._s(t.$t("siteNav.community"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"mt-12 md:mt-24 mx-auto max-w-3xl px-4 grid grid-cols-2 md:grid-cols-3 gap-6"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.twitter()}},[n("IconTwitter",{staticClass:"w-20 h-20"}),t._v(" "),n("p",[t._v("\n        Twitter\n      ")])],1),t._v(" "),n("a",{attrs:{target:"_blank",href:t.hdfLink.discord()}},[n("IconDiscord",{staticClass:"w-20 h-20"}),t._v(" "),n("p",[t._v("\n        Discord\n      ")])],1),t._v(" "),n("a",{attrs:{target:"_blank",href:t.hdfLink.clubHouseRoom()}},[n("HeroIconOutlineMicrophone",{staticClass:"w-20 h-20"}),t._v(" "),n("p",[t._v("\n        ClubHouse\n      ")])],1),t._v(" "),n("a",{attrs:{target:"_blank",href:t.hdfLink.telegram(t.telegramChannel)}},[n("HeroIconOutlineSpeakerphone",{staticClass:"w-20 h-20"}),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("siteNav.telegramChannel"))+"\n      ")])],1),t._v(" "),n("a",{attrs:{target:"_blank",href:t.hdfLink.telegram()}},[n("IconTelegram",{staticClass:"w-20 h-20"}),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("siteNav.telegramGroup"))+"\n      ")])],1),t._v(" "),n("a",{attrs:{target:"_blank",href:t.hdfLink.discord()}},[n("IconReddit",{staticClass:"w-20 h-20"}),t._v(" "),n("p",[t._v("\n        Reddit\n      ")])],1),t._v(" "),n("a",{attrs:{target:"_blank",href:t.hdfLink.githubToForum()}},[n("HeroIconOutlineTemplate",{staticClass:"w-20 h-20"}),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("siteNav.githubForum"))+"\n      ")])],1)])],1)}),[],!1,null,"3590fa13",null);e.default=component.exports;installComponents(component,{CH3:n(813).default,IconTwitter:n(416).default,IconDiscord:n(417).default,HeroIconOutlineMicrophone:n(1046).default,HeroIconOutlineSpeakerphone:n(419).default,IconTelegram:n(420).default,IconReddit:n(418).default,HeroIconOutlineTemplate:n(1047).default,LAutoWidth:n(143).default})},813:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports}}]);