(window.webpackJsonp=window.webpackJsonp||[]).push([[112,5,7,11,59,68,90],{1043:function(t,e,n){"use strict";n(996)},1044:function(t,e,n){var r=n(73)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nul[data-v-1a0713a3] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(1rem * var(--tw-space-y-reverse))\n}\nli[data-v-1a0713a3]{\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\nli[data-v-1a0713a3]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\nli[data-v-1a0713a3]{\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:0.75rem;\n  padding-bottom:0.75rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},1071:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=(n(135),n(52),n(21),{scrollToTop:!0,name:"UserUsername",middleware:["user"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=n.username,e.abrupt("return",{username:r});case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{account:{address:"",isHolder:!1,isWhale:!1,isFlat:!1,isSlot:!1,username:"",balance:"",harvest:"",totalHarvest:"",totalTaxSnap:""}}},computed:{indexedUsername:function(){return this.username.startsWith("@")?this.username.slice(1):""}},mounted:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$nuxt.context.app.token.methods.getAccountByUsername(this.indexedUsername).call().catch((function(t){console.error(">>> P[/user/_username] getAccountByUsername:",t.message)}));case 2:(data=t.sent).account!==this.$store.state.bsc.globalAccounts.zero&&(this.account.address=data.account,this.account.isHolder=data.isHolder,this.account.isWhale=data.isWhale,this.account.isFlat=data.isFlat,this.account.isSlot=data.isSlot,this.account.username=data.username,this.account.balance=data.balance,this.account.harvest=data.harvest,this.account.totalHarvest=data.totalHarvest,this.account.totalTaxSnap=data.totalTaxSnap);case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),l=(n(1043),n(5)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        User Dashboard\n      ")]},proxy:!0},{key:"desc",fn:function(){return[n("div",{staticClass:"truncate"},[t._v("\n          "+t._s(t.account.address)+"\n        ")])]},proxy:!0}])},[t._v('\n      Hello, "'+t._s(t.indexedUsername)+'"\n\n      ')]),t._v(" "),n("div",{staticClass:"mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2"},[n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:t.account.balance,token:!0}}),t._v(" HyperDeFi\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sHarvest.balance_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sHarvest.inYourWallet"))+"\n        ")])]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300 inline-flex items-center space-x-2"},[t.account.harvest>"0"?n("HeroIconSolidFire",{staticClass:"inline w-6 h-6"}):t._e(),t._v(" "),n("CBN",{attrs:{value:t.account.harvest,token:!0}}),t._v(" "),n("span",[t._v("\n            HyperDeFi\n          ")])],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sHarvest.toHarvest_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sHarvest.onBlockNumber"))),n("CBN",{attrs:{value:t.$store.state.bsc.blockNumber}})],1)]),t._v(" "),t.account.harvest>"0"?n("p",{staticClass:"transition duration-300 ease-out"},[n("BtnTakeHarvest",{staticClass:"hdf-a-track bg-violet-600 hover:bg-violet-700 focus:outline-none uppercase"},[t.account.harvest>"0"?n("HeroIconSolidFire",{staticClass:"inline w-6 h-6"}):t._e(),t._v(" "),n("span",{staticClass:"hidden lg:inline"},[t._v("\n            "+t._s(t.$t("sHarvest.clickHereTo"))+"\n          ")]),t._v(" "),n("span",[t._v("\n            "+t._s(t.$t("sHarvest.harvestAll"))+"\n          ")])],1)],1):t._e(),t._v(" "),t.account.totalHarvest>"0"?n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:t.account.totalHarvest,token:!0}}),t._v(" HyperDeFi\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sHarvest.total_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sHarvest.alreadyHarvested"))+"\n        ")])]):t._e()]),t._v(" "),n("div",{staticClass:"mt-24"},[n("ul",[n("li",[t._v("\n          Balance and All Harvest History\n        ")]),t._v(" "),n("li",[t._v("\n          Lotto History\n        ")]),t._v(" "),n("li",[t._v("\n          FOMO History\n        ")])])]),t._v(" "),n("div",[t._v("\n      "+t._s(t.account)+"\n    ")])],1)],1)}),[],!1,null,"1a0713a3",null);e.default=component.exports;installComponents(component,{CH3:n(781).default,CBN:n(776).default,HeroIconSolidFire:n(933).default,BtnTakeHarvest:n(958).default,LAutoWidth:n(166).default})},772:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},773:function(t,e,n){var r=n(44),o=n(23),c="["+n(772)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),f=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},774:function(t,e,n){var content=n(780);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("7f27037d",content,!0,{sourceMap:!1})},775:function(t,e,n){"use strict";var r=n(27),o=n(16),c=n(134),l=n(38),d=n(28),f=n(93),v=n(243),m=n(133),h=n(384),_=n(15),x=n(94),w=n(110).f,y=n(76).f,H=n(35).f,C=n(773).trim,k="Number",N=o.Number,I=N.prototype,E=f(x(I))==k,$=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,c,l,d,code,f=h(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(k,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var S,R=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof R&&(E?_((function(){I.valueOf.call(n)})):f(n)!=k)?v(new N($(e)),n,R):$(e)},A=r?w(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;A.length>T;T++)d(N,S=A[T])&&!d(R,S)&&H(R,S,y(N,S));R.prototype=I,I.constructor=R,l(o,k,R)}},776:function(t,e,n){"use strict";n.r(e);n(775),n(51),n(92),n(777),n(242),n(65),n(52),n(167);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(779),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},777:function(t,e,n){"use strict";var r=n(9),o=n(773).trim;r({target:"String",proto:!0,forced:n(778)("trim")},{trim:function(){return o(this)}})},778:function(t,e,n){var r=n(15),o=n(772);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},779:function(t,e,n){"use strict";n(774)},780:function(t,e,n){var r=n(73)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},781:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},924:function(t,e,n){"use strict";n.r(e);var r={name:"IconDiceHyperSpin"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"}},[e("g",{staticStyle:{"transform-origin":"50% 50%",transform:"rotate(0deg) scale(0.8, 0.8)"}},[e("g",{staticStyle:{"transform-origin":"512px 512px",transform:"rotate(0deg)",animation:"1.66667s linear 0s infinite normal forwards running spin-1c9b16c3-3b0c-4d0f-8d7b-bf997165f8c8"}},[e("path",{attrs:{fill:"currentColor",d:"M769.143,152l-514.286,-0c-56.812,-0 -102.857,46.045 -102.857,102.857l-0,514.286c-0,56.812 46.045,102.857 102.857,102.857l514.286,0c56.812,0 102.857,-46.045 102.857,-102.857l0,-514.286c0,-56.812 -46.045,-102.857 -102.857,-102.857Zm-385.714,617.143c-28.399,-0 -77.143,-48.745 -77.143,-77.143c-0,-28.398 48.744,-77.143 77.143,-77.143c28.398,0 77.142,48.745 77.142,77.143c0,28.398 -48.744,77.143 -77.142,77.143Zm257.142,-154.286c-28.398,0 -77.142,-48.745 -77.142,-77.143c-0,-28.398 48.744,-77.143 77.142,-77.143c28.399,0 77.143,48.745 77.143,77.143c0,28.399 -48.744,77.143 -77.143,77.143Zm0,-205.714c-28.398,-0 -77.142,-48.745 -77.142,-77.143c-0,-28.398 48.744,-77.143 77.142,-77.143c28.399,0 77.143,48.745 77.143,77.143c0,28.398 -48.744,77.143 -77.143,77.143Z"}})])])])}),[],!1,null,"37337d0a",null);e.default=component.exports},933:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidFire"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clip-rule":"evenodd"}})])}),[],!1,null,"61de6311",null);e.default=component.exports},958:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(21),{name:"BtnTakeHarvest",data:function(){return{pending:!1}},methods:{getHarvest:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pending=!0,e.next=3,t.$nuxt.context.app.token.methods.takeHarvest().send({from:t.$store.state.wallet.account}).on("transactionHash",t.onTransactionHash).on("receipt",t.onReceipt).on("confirmation",t.onConfirmation).on("error",t.onError).catch(t.onError);case 3:case"end":return e.stop()}}),e)})))()},onTransactionHash:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(">>> onTransactionHash:",t);case 1:case"end":return e.stop()}}),e)})))()},onReceipt:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(">>> onReceipt:",t),t.status;case 2:case"end":return e.stop()}}),e)})))()},onConfirmation:function(t){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case 1:case"end":return t.stop()}}),t)})))()},onError:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.pending=!1,n.next=3,e.$store.dispatch("warning/SET_WARNING",{title:e.$t("modal.txError")+" #"+t.code,message:t.message});case 3:case"end":return n.stop()}}),n)})))()}}}),c=n(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"space-x-2",on:{click:t.getHarvest}},[t._t("default",(function(){return[t._v("Get Harvest")]})),t._v(" "),n("IconDiceHyperSpin",{directives:[{name:"show",rawName:"v-show",value:t.pending,expression:"pending"}],staticClass:"inline w-6 h-6"})],2)}),[],!1,null,"4ad3fdde",null);e.default=component.exports;installComponents(component,{IconDiceHyperSpin:n(924).default})},996:function(t,e,n){var content=n(1044);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("7a61af97",content,!0,{sourceMap:!1})}}]);