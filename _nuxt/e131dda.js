(window.webpackJsonp=window.webpackJsonp||[]).push([[72,8,11,56,84,85],{1001:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=(n(22),n(20),n(71),n(16)),l=n.n(c),d=n(70),f={name:"SAirdrop",data:function(){return{transactions:[]}},computed:{hdfLink:function(){return d.a},summed:function(){return new l.a(this.$store.state.bsc.supply.airdrop).add(new l.a(this.amount)).toString()},summedMarketValue:function(){return new l.a(this.summed).mul(this.$store.state.bsc.metadata.bnPrice).div(this.$store.state.bsc.metadata.bnDiv).toString()}},watch:{"$store.state.bsc.blockNumber":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.sync();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.sync();case 2:case"end":return e.stop()}}),e)})))()},methods:{sync:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.syncAirdrop();case 2:return e.next=4,t.$nuxt.context.app.db.airdrop.reverse().limit(10).toArray();case 4:t.transactions=e.sent;case 5:case"end":return e.stop()}}),e)})))()}}},v=(n(956),n(5)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"py-16 px-4 sm:py-24"},[n("CH2",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n          "+t._s(t.$t("sAirdrop.tag"))+"\n        ")]},proxy:!0},{key:"desc",fn:function(){return[t._v("\n          "+t._s(t.$t("sAirdrop.descUpTo"))+"\n          "),n("CBN",{attrs:{value:String(t.$store.state.bsc.global.airdropMax),token:!0}}),t._v(" HyperDeFi\n          "+t._s(t.$t("sAirdrop.descUpPerAddress_"))+"\n          "+t._s(t.$t("sAirdrop.descWill__"))+"\n          "),n("CBN",{attrs:{value:t.summed,token:!0}}),t._v(" HyperDeFi\n          "+t._s(t.$t("sAirdrop.descFirstCame__"))+"\n        ")]},proxy:!0}])},[n("span",{staticClass:"text-violet-400"},[t._v("\n          "+t._s(t.$t("sAirdrop.title"))+"\n        ")]),t._v(" "),n("span",["0"===t.$store.state.bsc.supply.airdrop?n("span",[t._v("\n            "+t._s(t.$t("sAirdrop.titleEnded"))+"\n          ")]):n("span",[t._v("\n            "+t._s(t.$t("sAirdrop.titleOngoing"))+"\n          ")])])]),t._v(" "),n("dl",{staticClass:"hdf-stat grid grid-cols-1 lg:max-w-7xl",class:{"xl:grid-cols-3":t.$store.state.stat.airdrop.count,"xl:grid-cols-1":!t.$store.state.stat.airdrop.count}},[n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sAirdrop.remaining"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:String(t.$store.state.bsc.supply.airdrop),token:!0}})],1)]),t._v(" "),t.$store.state.stat.airdrop.count?n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sAirdrop.airdropped"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.stat.airdrop.amount,token:!0}})],1)]):t._e(),t._v(" "),t.$store.state.stat.airdrop.count?n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sAirdrop.airdropTransfer"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.stat.airdrop.count}})],1)]):t._e()]),t._v(" "),t.transactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-violet-400 tracking-wide uppercase"},[t._v("\n          "+t._s(t.$t("txTable.latest"))+"\n          "+t._s(t.transactions.length)+"\n          "+t._s(t.$t("sAirdrop.txAirdropHistory"))+"\n        ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.transactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconSolidGift")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                    HyperDeFi\n                  ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])]),t._v(" "),n("p",{staticClass:"p-tx"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreToken4address(e.account)}},[t._v("\n                    "+t._s(e.account.slice(0,8))+"..."+t._s(e.account.slice(-4))+"\n                  ")])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.block"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.address"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.amount"))+"\n                  ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreToken4address(e.account)}},[t._v(t._s(e.account))])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                    HyperDeFi\n                  ")],1)])})),0)])])])])]):t._e()],1)],1)}),[],!1,null,"2affa06e",null);e.default=component.exports;installComponents(component,{CBN:n(768).default,CH2:n(915).default,HeroIconSolidGift:n(776).default,LAutoWidth:n(164).default})},765:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},766:function(t,e,n){var r=n(45),o=n(23),c="["+n(765)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),f=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},767:function(t,e,n){var content=n(773);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("09dabbb3",content,!0,{sourceMap:!1})},768:function(t,e,n){"use strict";n.r(e);n(769),n(50),n(91),n(770),n(237),n(71),n(51),n(165);var r={name:"CBN",props:{value:{type:[String,Number],required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(772),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"711baa99",null);e.default=component.exports},769:function(t,e,n){"use strict";var r=n(26),o=n(15),c=n(133),l=n(38),d=n(27),f=n(92),v=n(238),h=n(132),_=n(377),m=n(14),x=n(93),y=n(109).f,C=n(72).f,w=n(34).f,$=n(766).trim,k="Number",N=o.Number,A=N.prototype,I=f(x(A))==k,E=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,c,l,d,code,f=_(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=$(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(k,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var S,T=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof T&&(I?m((function(){A.valueOf.call(n)})):f(n)!=k)?v(new N(E(e)),n,T):E(e)},H=r?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),B=0;H.length>B;B++)d(N,S=H[B])&&!d(T,S)&&w(T,S,C(N,S));T.prototype=A,A.constructor=T,l(o,k,T)}},770:function(t,e,n){"use strict";var r=n(8),o=n(766).trim;r({target:"String",proto:!0,forced:n(771)("trim")},{trim:function(){return o(this)}})},771:function(t,e,n){var r=n(14),o=n(765);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},772:function(t,e,n){"use strict";n(767)},773:function(t,e,n){var r=n(82)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-711baa99]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-711baa99]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},776:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidGift"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{d:"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"}})])}),[],!1,null,"3d7b52f6",null);e.default=component.exports},915:function(t,e,n){"use strict";n.r(e);var r={name:"CH2"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch2"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h2",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"2d1f6548",null);e.default=component.exports},928:function(t,e,n){var content=n(957);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("f4399936",content,!0,{sourceMap:!1})},956:function(t,e,n){"use strict";n(928)},957:function(t,e,n){var r=n(82)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.hdf-stat div dt[data-v-2affa06e]{\n  --tw-text-opacity:1;\n  color:rgba(199, 210, 254, var(--tw-text-opacity))\n}\ntbody tr[data-v-2affa06e]:nth-child(odd){\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\ntbody tr[data-v-2affa06e]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(76, 29, 149, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-2affa06e]{\n  --tw-text-opacity:1;\n  color:rgba(221, 214, 254, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);