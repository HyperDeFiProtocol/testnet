(window.webpackJsonp=window.webpackJsonp||[]).push([[107,16,44,78,104],{1e3:function(t,e,n){var content=n(1029);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("4ddd158e",content,!0,{sourceMap:!1})},1028:function(t,e,n){"use strict";n(1e3)},1029:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.hdf-stat div dt[data-v-05b7a1a2]{\n  --tw-text-opacity:1;\n  color:rgba(209, 250, 229, var(--tw-text-opacity))\n}\ntbody tr[data-v-05b7a1a2]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(6, 78, 59, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-05b7a1a2]{\n  --tw-text-opacity:1;\n  color:rgba(167, 243, 208, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},1075:function(t,e,n){"use strict";n.r(e);var r,o=n(1),l=(n(24),n(76)),c=n(123),d={name:"STaxBurn",data:function(){return{marketValue:"0",transactions:[]}},computed:{hpLink:function(){return l.a}},watch:{"$store.state.bsc.synchronizing.fromBlock":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.wait(1e3);case 2:return t.next=4,this.load();case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.transfer.where({toAccount:t.$store.state.bsc.globalAccounts.burn}).reverse().limit(10).toArray();case 2:t.transactions=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},f=(n(1028),n(5)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-emerald-50 text-emerald-700"},[n("HeroIconOutlineBreaker",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header2"},[n("h2",{staticClass:"text-emerald-500"},[t._v("\n            "+t._s(t.$t("sTaxBurn.title"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sTaxBurn.text"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"body1 to-emerald-900 from-green-900 text-emerald-300"},[n("h3",[t._v("\n            "+t._s(t.$t("sTax.forEachTransaction"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sTaxBurn.burn"))+"\n            "),t.$store.state.bsc.takerTax.destroy>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerTax.destroy)+"%\n              "+t._s(t.$t("sTax.fromTaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.makerTax.destroy>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerTax.destroy)+"%\n              "+t._s(t.$t("sTax.fromMaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleTax.destroy>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleTax.destroy)+"%\n              "+t._s(t.$t("sTax.fromWhale"))+"\n            ")]):t._e(),t._v("\n            "+t._s(t.$t("sTaxBurn.destroy__"))+"\n          ")]),t._v(" "),t.$store.state.stat.burn.count?n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("nuxt-link",{staticClass:"hdf-a-track bg-emerald-700 hover:bg-emerald-600 space-x-2",attrs:{to:t.localeLocation("/history/burn")}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n                "+t._s(t.$t("sTax.trackAll"))+"\n                "+t._s(t.$store.state.stat.burn.count)+"\n                "+t._s(t.$t("sTaxBurn.trackBurnTransfers"))+"\n              ")])],1)],1):t._e()])]),t._v(" "),t.$store.state.stat.burn.count?n("dl",{staticClass:"hdf-stat lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2"},[n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sTaxBurn.statTotalBurned"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.bsc.supply.burned,token:!0}})],1)]),t._v(" "),n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sTaxBurn.statBurnTransfers"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.stat.burn.count}})],1)])]):t._e(),t._v(" "),t.transactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-emerald-500 tracking-wide uppercase"},[t._v("\n          "+t._s(t.$t("txTable.latest"))+"\n          "+t._s(t.transactions.length)+"\n          "+t._s(t.$t("sTaxBurn.burnHistory"))+"\n        ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.transactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconOutlineBreaker")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                    HyperDeFi\n                  ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.block"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.txHash"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.amount"))+"\n                  ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n                      "+t._s(e.txHash.slice(0,36))+"..."+t._s(e.txHash.slice(-4))+"\n                    ")])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                    HyperDeFi\n                  ")],1)])})),0)])])])])]):t._e()])],1)}),[],!1,null,"05b7a1a2",null);e.default=component.exports;installComponents(component,{HeroIconOutlineBreaker:n(975).default,HeroIconSolidCursorClick:n(829).default,CBN:n(816).default,LAutoWidth:n(149).default})},812:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},813:function(t,e,n){var r=n(13),o=n(50),l=n(26),c=n(812),d=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),m=function(t){return function(e){var n=l(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,h,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},814:function(t,e,n){var content=n(821);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("7f27037d",content,!0,{sourceMap:!1})},815:function(t,e,n){"use strict";var r=n(28),o=n(7),l=n(13),c=n(151),d=n(40),f=n(29),v=n(262),h=n(93),m=n(188),_=n(417),x=n(16),k=n(122).f,w=n(77).f,C=n(39).f,y=n(819),T=n(813).trim,$="Number",N=o.Number,B=N.prototype,I=o.TypeError,E=l("".slice),H=l("".charCodeAt),A=function(t){var e=_(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,o,l,c,d,code,f=_(t,"number");if(m(f))throw I("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=T(f),43===(e=H(f,0))||45===e){if(88===(n=H(f,2))||120===n)return NaN}else if(48===e){switch(H(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=E(f,2)).length,d=0;d<c;d++)if((code=H(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c($,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var R,M=function(t){var e=arguments.length<1?0:N(A(t)),n=this;return h(B,n)&&x((function(){y(n)}))?v(Object(e),n,M):e},S=r?k(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;S.length>L;L++)f(N,R=S[L])&&!f(M,R)&&C(M,R,w(N,R));M.prototype=B,B.constructor=M,d(o,$,M)}},816:function(t,e,n){"use strict";n.r(e);n(815),n(49),n(92),n(817),n(261),n(61),n(48),n(189);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(820),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},817:function(t,e,n){"use strict";var r=n(10),o=n(813).trim;r({target:"String",proto:!0,forced:n(818)("trim")},{trim:function(){return o(this)}})},818:function(t,e,n){var r=n(150).PROPER,o=n(16),l=n(812);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},819:function(t,e,n){var r=n(13);t.exports=r(1..valueOf)},820:function(t,e,n){"use strict";n(814)},821:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},829:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidCursorClick"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"4c064797",null);e.default=component.exports},975:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineBreaker"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}})])}),[],!1,null,"1a972104",null);e.default=component.exports}}]);