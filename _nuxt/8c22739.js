(window.webpackJsonp=window.webpackJsonp||[]).push([[129,14,15,19,22,31,104],{1027:function(t,e,n){"use strict";n.r(e);var r=n(82),o={name:"CTableFomo",props:{transactions:{type:Array,required:!0}},computed:{hpLink:function(){return r.a}}},c=n(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.transactions.length?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.type"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.addressOrHash"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),e.sender===t.$store.state.bsc.globalAccounts.fomo?n("td",{staticClass:"text-emerald-400"},[t._v("\n            "+t._s(t.$t("txTable.winner"))+"\n          ")]):n("td",[t._v("\n            "+t._s(t.$t("txTable.accumulate"))+"\n          ")]),t._v(" "),e.sender===t.$store.state.bsc.globalAccounts.fomo?n("td",{staticClass:"font-mono text-emerald-400"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[n("CAddress",{attrs:{value:e.recipient}})],1)]):n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              "+t._s(e.txHash.slice(0,44))+"..."+t._s(e.txHash.slice(-4))+"\n            ")])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"d539c806",null);e.default=component.exports;installComponents(component,{CBN:n(864).default,CAddress:n(873).default})},1201:function(t,e,n){"use strict";n.r(e);var r,o=n(0),c=(n(25),n(73)),l={scrollToTop:!0,name:"HistoryFomo",data:function(){return{transactions:[],pageSize:20,pageRecords:0}},computed:{pageNumber:function(){if(this.$route.params.page&&this.$route.params.page>"1"){var t=parseInt(this.$route.params.page);if(t>1)return t}return 1},pageOffset:function(){return this.pageSize*(this.pageNumber-1)}},watch:{"$store.state.bsc.synchronizing.fromBlock":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.wait(1e3);case 2:return t.next=4,this.load();case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.transfer.where("sender").equals(t.$store.state.bsc.globalAccounts.fomo).or("recipient").equals(t.$store.state.bsc.globalAccounts.fomo).reverse().offset(t.pageOffset).limit(t.pageSize).toArray();case 2:return t.transactions=e.sent,e.next=5,t.$nuxt.context.app.db.transfer.where("sender").equals(t.$store.state.bsc.globalAccounts.fomo).or("recipient").equals(t.$store.state.bsc.globalAccounts.fomo).count();case 5:t.pageRecords=e.sent;case 6:case"end":return e.stop()}}),e)})))()}}},d=n(5),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"py-10 md:py-20"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        On Chain\n      ")]},proxy:!0}])},[t._v("\n      "+t._s(t.$t("siteNav.fomoHistory"))+"\n\n      ")]),t._v(" "),n("CTableFomo",{staticClass:"mt-10 lg:mt-24",attrs:{transactions:t.transactions}}),t._v(" "),n("CPagination",{staticClass:"mt-8 lg:mt-12",attrs:{records:t.pageRecords,size:t.pageSize,number:t.pageNumber,path:"/history/fomo"}})],1)],1)}),[],!1,null,"6c2502f8",null);e.default=component.exports;installComponents(component,{CH3:n(871).default,CTableFomo:n(1027).default,CPagination:n(878).default,LAutoWidth:n(152).default})},861:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},862:function(t,e,n){var r=n(13),o=n(52),c=n(27),l=n(861),d=r("".replace),f="["+l+"]",h=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),v=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,h,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},863:function(t,e,n){var content=n(870);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("7f27037d",content,!0,{sourceMap:!1})},864:function(t,e,n){"use strict";n.r(e);n(865),n(51),n(97),n(866),n(271),n(58),n(45),n(197);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(869),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},865:function(t,e,n){"use strict";var r=n(28),o=n(6),c=n(13),l=n(154),d=n(41),f=n(30),h=n(272),m=n(98),v=n(196),x=n(438),_=n(16),y=n(128).f,w=n(83).f,C=n(37).f,$=n(868),N=n(862).trim,T="Number",k=o.Number,A=k.prototype,E=o.TypeError,I=c("".slice),R=c("".charCodeAt),O=function(t){var e=x(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,o,c,l,d,code,f=x(t,"number");if(v(f))throw E("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=N(f),43===(e=R(f,0))||45===e){if(88===(n=R(f,2))||120===n)return NaN}else if(48===e){switch(R(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=I(f,2)).length,d=0;d<l;d++)if((code=R(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(l(T,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var S,F=function(t){var e=arguments.length<1?0:k(O(t)),n=this;return m(A,n)&&_((function(){$(n)}))?h(Object(e),n,F):e},P=r?y(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;P.length>z;z++)f(k,S=P[z])&&!f(F,S)&&C(F,S,w(k,S));F.prototype=A,A.constructor=F,d(o,T,F)}},866:function(t,e,n){"use strict";var r=n(10),o=n(862).trim;r({target:"String",proto:!0,forced:n(867)("trim")},{trim:function(){return o(this)}})},867:function(t,e,n){var r=n(153).PROPER,o=n(16),c=n(861);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},868:function(t,e,n){var r=n(13);t.exports=r(1..valueOf)},869:function(t,e,n){"use strict";n(863)},870:function(t,e,n){var r=n(66)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},871:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},872:function(t,e,n){var content=n(875);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("279d30bc",content,!0,{sourceMap:!1})},873:function(t,e,n){"use strict";n.r(e);var r,o=n(0),c=(n(45),n(25),{name:"CAddress",data:function(){return{displayText:""}},props:{value:{type:String,required:!0}},mounted:(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setDisplayText();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{presetName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.ido:return"ido";case this.$store.state.bsc.globalAccounts.genesis:return"genesis";case this.$store.state.bsc.globalAccounts.zero:return"zero";case this.$store.state.bsc.globalAccounts.burn:return"burn";case this.$store.state.bsc.globalAccounts.airdrop:return"airdrop";case this.$store.state.bsc.globalAccounts.tax:return"farm";case"0x99999999f678F56beF0Da5EB96F4c1300Cf8D69a":return"mainContract";default:return null}},setDisplayText:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var text,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(text=t.presetName(t.value))){e.next=4;break}return t.displayText=t.$t("user."+text),e.abrupt("return");case 4:return e.next=6,t.$nuxt.context.app.db.holder.where("address").equals(t.value).first();case 6:if(!(n=e.sent)||!n.username){e.next=10;break}return t.displayText="@"+n.username+": "+t.value.slice(0,8)+"..."+t.value.slice(-4),e.abrupt("return");case 10:return e.abrupt("return",t.displayText=t.value);case 11:case"end":return e.stop()}}),e)})))()}}}),l=n(5),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.displayText))])}),[],!1,null,"4c435680",null);e.default=component.exports},874:function(t,e,n){"use strict";n(872)},875:function(t,e,n){var r=n(66)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.c-pagination[data-v-8de8c8aa]{\n  display:grid;\n  width:100%;\n  grid-template-columns:repeat(3, minmax(0, 1fr));\n  gap:2.5rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-8de8c8aa]{\n  width:100%;\n  max-width:20rem;\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  border-radius:0.375rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(55, 65, 81, var(--tw-border-opacity));\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-8de8c8aa]:focus{\n  outline:2px solid transparent;\n  outline-offset:2px\n}\n.c-pagination a[data-v-8de8c8aa]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\n.c-pagination span[data-v-8de8c8aa]{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},878:function(t,e,n){"use strict";n.r(e);n(865);var r=n(18),o=(n.n(r).a.BigInt,{name:"CPagination",props:{path:{type:String,required:!0},number:{type:Number,required:!0},size:{type:Number,required:!0},records:{type:Number,required:!0}},computed:{pages:function(){return Math.ceil(this.records/this.size)},pathToPrevious:function(){var t=this.number-1;return t>0?this.path+"/"+t:null},pathToNext:function(){var t=this.number+1;return t<=this.pages?this.path+"/"+t:null}}}),c=(n(874),n(5)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pages>1?n("div",{staticClass:"c-pagination"},[n("div",{staticClass:"flex items-center justify-start"},[t.pathToPrevious?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToPrevious)}},[t._v("\n      Previous Page\n    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("span",[t._v("\n      Page "+t._s(t.number)+" of "+t._s(t.pages)+"\n    ")])]),t._v(" "),n("div",{staticClass:"flex items-center justify-end"},[t.pathToNext?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToNext)}},[t._v("\n      Next Page\n    ")]):t._e()],1)]):t._e()}),[],!1,null,"8de8c8aa",null);e.default=component.exports}}]);