(window.webpackJsonp=window.webpackJsonp||[]).push([[102,7,8,12,14,85],{1059:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=(n(21),n(74)),l={scrollToTop:!0,name:"HistoryTax",data:function(){return{transactions:[],pageSize:20,pageRecords:0}},computed:{explorer:function(){return c.a},hdfLink:function(){return c.a},pageNumber:function(){if(this.$route.params.page&&this.$route.params.page>"1"){var t=parseInt(this.$route.params.page);if(t>1)return t}return 1},pageOffset:function(){return this.pageSize*(this.pageNumber-1)}},watch:{"$store.state.bsc.synchronizing":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.transfer.where("fromAccount").equals(t.$store.state.bsc.globalAccounts.tax).or("toAccount").equals(t.$store.state.bsc.globalAccounts.tax).reverse().offset(t.pageOffset).limit(t.pageSize).toArray();case 2:return t.transactions=e.sent,e.next=5,t.$nuxt.context.app.db.transfer.where("fromAccount").equals(t.$store.state.bsc.globalAccounts.tax).or("toAccount").equals(t.$store.state.bsc.globalAccounts.tax).count();case 5:t.pageRecords=e.sent;case 6:case"end":return e.stop()}}),e)})))()}}},d=n(5),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"py-10 md:py-20"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        On Chain\n      ")]},proxy:!0}])},[t._v("\n      "+t._s(t.$t("siteNav.taxHarvestHistory"))+"\n\n      ")]),t._v(" "),t.transactions.length?n("div",{staticClass:"mt-10 lg:mt-24 overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                "+t._s(t.$t("txTable.block"))+"\n              ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                "+t._s(t.$t("txTable.type"))+"\n              ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                "+t._s(t.$t("txTable.address"))+"\n              ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                "+t._s(t.$t("txTable.amount"))+"\n              ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                  #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),e.fromAccount===t.$store.state.bsc.globalAccounts.tax?n("td",{staticClass:"text-emerald-400"},[t._v("\n                "+t._s(t.$t("txTable.harvest"))+"\n              ")]):n("td",[t._v("\n                "+t._s(t.$t("txTable.accumulate"))+"\n              ")]),t._v(" "),e.fromAccount===t.$store.state.bsc.globalAccounts.tax?n("td",{staticClass:"font-mono text-emerald-400"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[n("CAddress",{attrs:{value:e.toAccount}})],1)]):n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[n("CAddress",{attrs:{value:e.fromAccount}})],1)]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                HyperDeFi\n              ")],1)])})),0)])])])]):t._e(),t._v(" "),n("CPagination",{staticClass:"mt-8 lg:mt-12",attrs:{records:t.pageRecords,size:t.pageSize,number:t.pageNumber,path:"/history/tax"}})],1)],1)}),[],!1,null,"6a923c46",null);e.default=component.exports;installComponents(component,{CH3:n(777).default,CBN:n(772).default,CAddress:n(928).default,CPagination:n(919).default,LAutoWidth:n(164).default})},768:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},769:function(t,e,n){var r=n(44),o=n(23),c="["+n(768)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),f=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},770:function(t,e,n){var content=n(776);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("7f27037d",content,!0,{sourceMap:!1})},771:function(t,e,n){"use strict";var r=n(27),o=n(16),c=n(133),l=n(38),d=n(28),f=n(93),h=n(239),m=n(132),v=n(380),_=n(15),x=n(94),y=n(109).f,N=n(76).f,C=n(35).f,w=n(769).trim,A="Number",$=o.Number,k=$.prototype,T=f(x(k))==A,E=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,c,l,d,code,f=v(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=w(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(A,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var I,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(T?_((function(){k.valueOf.call(n)})):f(n)!=A)?h(new $(E(e)),n,S):E(e)},R=r?y($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;R.length>O;O++)d($,I=R[O])&&!d(S,I)&&C(S,I,N($,I));S.prototype=k,k.constructor=S,l(o,A,S)}},772:function(t,e,n){"use strict";n.r(e);n(771),n(51),n(92),n(773),n(238),n(75),n(52),n(165);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(775),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},773:function(t,e,n){"use strict";var r=n(9),o=n(769).trim;r({target:"String",proto:!0,forced:n(774)("trim")},{trim:function(){return o(this)}})},774:function(t,e,n){var r=n(15),o=n(768);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},775:function(t,e,n){"use strict";n(770)},776:function(t,e,n){var r=n(72)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},777:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},778:function(t,e,n){var content=n(781);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("c4f062c4",content,!0,{sourceMap:!1})},780:function(t,e,n){"use strict";n(778)},781:function(t,e,n){var r=n(72)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.c-pagination[data-v-3c929f77]{\n  display:grid;\n  width:100%;\n  grid-template-columns:repeat(3, minmax(0, 1fr));\n  gap:2.5rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-3c929f77]{\n  width:100%;\n  max-width:20rem;\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  border-radius:0.375rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(55, 65, 81, var(--tw-border-opacity));\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-3c929f77]:focus{\n  outline:2px solid transparent;\n  outline-offset:2px\n}\n.c-pagination a[data-v-3c929f77]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\n.c-pagination span[data-v-3c929f77]{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},919:function(t,e,n){"use strict";n.r(e);n(771);var r={name:"CPagination",props:{path:{type:String,required:!0},number:{type:Number,required:!0},size:{type:Number,required:!0},records:{type:Number,required:!0}},computed:{pages:function(){return Math.ceil(this.records/this.size)},pathToPrevious:function(){var t=this.number-1;return t>0?this.path+"/"+t:null},pathToNext:function(){var t=this.number+1;return t<=this.pages?this.path+"/"+t:null}}},o=(n(780),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pages>1?n("div",{staticClass:"c-pagination"},[n("div",{staticClass:"flex items-center justify-start"},[t.pathToPrevious?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToPrevious)}},[t._v("\n      Previous Page\n    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("span",[t._v("\n      Page "+t._s(t.number)+" of "+t._s(t.pages)+"\n    ")])]),t._v(" "),n("div",{staticClass:"flex items-center justify-end"},[t.pathToNext?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToNext)}},[t._v("\n      Next Page\n    ")]):t._e()],1)]):t._e()}),[],!1,null,"3c929f77",null);e.default=component.exports},928:function(t,e,n){"use strict";n.r(e);var r={name:"CAddress",props:{value:{type:String,required:!0}},computed:{display:function(){var text=this.addressName(this.value);return text?this.$t("user."+text):this.value}},methods:{addressName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.presale:return"presale";case this.$store.state.bsc.globalAccounts.fund:return"fund";case this.$store.state.bsc.globalAccounts.zero:return"zero";case this.$store.state.bsc.globalAccounts.burn:return"burn";default:return null}}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.display))])}),[],!1,null,"2810b3b5",null);e.default=component.exports}}]);