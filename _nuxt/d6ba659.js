(window.webpackJsonp=window.webpackJsonp||[]).push([[75,8,22,53,83],{741:function(t,e,n){var content=n(749);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("fb44e342",content,!0,{sourceMap:!1})},742:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},743:function(t,e,n){var r=n(44),o="["+n(742)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},744:function(t,e,n){"use strict";n.r(e);n(745),n(48),n(91),n(746),n(234),n(90),n(49),n(164);var r={name:"CBN",props:{value:{type:[String,Number],required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(748),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"4ae9153e",null);e.default=component.exports},745:function(t,e,n){"use strict";var r=n(26),o=n(18),l=n(133),c=n(37),d=n(27),f=n(92),h=n(235),v=n(131),m=n(15),_=n(93),x=n(132).f,k=n(69).f,w=n(33).f,C=n(743).trim,y="Number",$=o.Number,N=$.prototype,B=f(_(N))==y,F=function(t){var e,n,r,o,l,c,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l(y,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var I,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(B?m((function(){N.valueOf.call(n)})):f(n)!=y)?h(new $(F(e)),n,E):F(e)},T=r?x($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),H=0;T.length>H;H++)d($,I=T[H])&&!d(E,I)&&w(E,I,k($,I));E.prototype=N,N.constructor=E,c(o,y,E)}},746:function(t,e,n){"use strict";var r=n(10),o=n(743).trim;r({target:"String",proto:!0,forced:n(747)("trim")},{trim:function(){return o(this)}})},747:function(t,e,n){var r=n(15),o=n(742);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},748:function(t,e,n){"use strict";n(741)},749:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,".cbn-decimal[data-v-4ae9153e]{\n  margin-right:.25rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-4ae9153e]:last-child{\n  margin-right:0\n}",""]),r.locals={},t.exports=r},751:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidCursorClick"},o=n(7),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"32f487c0",null);e.default=component.exports},911:function(t,e,n){var content=n(946);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("07be0065",content,!0,{sourceMap:!1})},917:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineBreaker"},o=n(7),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}})])}),[],!1,null,"06b41dfb",null);e.default=component.exports},945:function(t,e,n){"use strict";n(911)},946:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,".hdf-stat div dt[data-v-417cd0e5]{\n  --tw-text-opacity:1;\n  color:rgba(209, 250, 229, var(--tw-text-opacity))\n}\ntbody tr[data-v-417cd0e5]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(6, 78, 59, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-417cd0e5]{\n  --tw-text-opacity:1;\n  color:rgba(167, 243, 208, var(--tw-text-opacity))\n}",""]),r.locals={},t.exports=r},981:function(t,e,n){"use strict";n.r(e);var r,o=n(1),l=(n(21),n(90),n(22),n(38)),c=n.n(l),d=n(68),f=c.a.utils.BN,h={name:"SFeeBurn",data:function(){return{counter:0,amount:"0",marketValue:"0",transactions:[]}},computed:{hdfLink:function(){return d.a}},watch:{"$store.state.bsc.blockNumber":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,l,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.token.getPastEvents("Transfer",{filter:{to:t.$store.state.bsc.globalAccounts.burn},fromBlock:0,toBlock:"latest"}).catch(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.error(">>> SFeeBurn:",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:if(n=e.sent){for(n.reverse(),r=new f,l=[],i=0;i<n.length;i++)r=r.add(new f(n[i].returnValues.value)),i<10&&l.push({blockNumber:n[i].blockNumber,txHash:n[i].transactionHash,account:n[i].returnValues.from,amount:n[i].returnValues.value});t.transactions=l,t.counter=n.length,t.amount=r.toString(),t.marketValue=r.mul(t.$store.state.bsc.metadata.bnPrice).div(t.$store.state.bsc.metadata.bnDiv).toString()}case 4:case"end":return e.stop()}}),e)})))()}}},v=(n(945),n(7)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-emerald-50 text-emerald-700"},[n("HeroIconOutlineBreaker",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header2"},[n("h2",{staticClass:"text-emerald-500"},[t._v("\n            "+t._s(t.$t("sFeeBurn.title"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sFeeBurn.text"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"body1 to-emerald-900 from-green-900 text-emerald-300"},[n("h3",[t._v("\n            "+t._s(t.$t("sFee.forEachTransaction"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sFeeBurn.burn"))+"\n            "),t.$store.state.bsc.takerFee.destroy>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerFee.destroy)+"%\n              "+t._s(t.$t("sFee.fromTaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.makerFee.destroy>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerFee.destroy)+"%\n              "+t._s(t.$t("sFee.fromMaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleFee.destroy>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleFee.destroy)+"%\n              "+t._s(t.$t("sFee.fromWhale"))+"\n            ")]):t._e(),t._v("\n            "+t._s(t.$t("sFeeBurn.destroy__"))+"\n          ")]),t._v(" "),t.counter?n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("a",{staticClass:"hdf-a-track bg-emerald-700 hover:bg-emerald-600 space-x-2",attrs:{target:"_blank",href:t.hdfLink.exploreToken4address(t.$store.state.bsc.globalAccounts.burn)}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n                "+t._s(t.$t("sFee.trackAll"))+"\n                "+t._s(t.counter)+"\n                "+t._s(t.$t("sFeeBurn.trackBurnTransfers"))+"\n              ")])],1)]):t._e()])]),t._v(" "),t.counter?n("dl",{staticClass:"hdf-stat lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2"},[n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sFeeBurn.statTotalBurned"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.bsc.supply.burned,token:!0}})],1)]),t._v(" "),n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sFeeBurn.statBurnTransfers"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.counter}})],1)])]):t._e(),t._v(" "),t.transactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-emerald-500 tracking-wide uppercase"},[t._v("\n          "+t._s(t.$t("txTable.latest"))+"\n          "+t._s(t.transactions.length)+"\n          "+t._s(t.$t("sFeeBurn.burnHistory"))+"\n        ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.transactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconOutlineBreaker")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                    HyperDeFi\n                  ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.block"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.txHash"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.amount"))+"\n                  ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("#\n                      "),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n                      "+t._s(e.txHash.slice(0,36))+"..."+t._s(e.txHash.slice(-4))+"\n                    ")])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                    HyperDeFi\n                  ")],1)])})),0)])])])])]):t._e()])],1)}),[],!1,null,"417cd0e5",null);e.default=component.exports;installComponents(component,{HeroIconOutlineBreaker:n(917).default,HeroIconSolidCursorClick:n(751).default,CBN:n(744).default,LAutoWidth:n(163).default})}}]);