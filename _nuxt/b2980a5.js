(window.webpackJsonp=window.webpackJsonp||[]).push([[13,15,16,32,104],{1e3:function(t,e,n){"use strict";n.r(e);var r=n(79),o={name:"CTableFomo",props:{transactions:{type:Array,required:!0}},computed:{hpLink:function(){return r.a}}},c=n(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.transactions.length?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.type"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.addressOrHash"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),e.sender===t.$store.state.bsc.globalAccounts.fomo?n("td",{staticClass:"text-emerald-400"},[t._v("\n            "+t._s(t.$t("txTable.winner"))+"\n          ")]):n("td",[t._v("\n            "+t._s(t.$t("txTable.accumulate"))+"\n          ")]),t._v(" "),e.sender===t.$store.state.bsc.globalAccounts.fomo?n("td",{staticClass:"font-mono text-emerald-400"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[n("CAddress",{attrs:{value:e.recipient}})],1)]):n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              "+t._s(e.txHash.slice(0,44))+"..."+t._s(e.txHash.slice(-4))+"\n            ")])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"d539c806",null);e.default=component.exports;installComponents(component,{CBN:n(837).default,CAddress:n(845).default})},1112:function(t,e,n){"use strict";n.r(e);var r,o,c=n(1),l=(n(24),{name:"CAccountFomo",props:{account:{type:Object,required:!0}},watch:{"$store.state.bsc.synchronizing.fromBlock":(o=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==this.$store.state.bsc.synchronizing.fromBlock){t.next=3;break}return t.next=3,this.load();case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},data:function(){return{transactions:[]}},mounted:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{load:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.transfer.where({sender:t.$store.state.bsc.globalAccounts.fomo,recipient:t.account.address}).reverse().toArray();case 2:t.transactions=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}}),f=n(5),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.transactions.length?n("CTableFomo",{attrs:{transactions:t.transactions,hash:!0}}):n("div",{staticClass:"font-mono text-center text-gray-600"},[t._v("\n    No data\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CTableFomo:n(1e3).default})},833:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},834:function(t,e,n){var r=n(13),o=n(51),c=n(26),l=n(833),f=r("".replace),d="["+l+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t){return function(e){var n=c(o(e));return 1&t&&(n=f(n,h,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},835:function(t,e,n){var content=n(842);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7f27037d",content,!0,{sourceMap:!1})},836:function(t,e,n){"use strict";var r=n(28),o=n(6),c=n(13),l=n(152),f=n(41),d=n(29),h=n(269),m=n(96),v=n(193),x=n(426),_=n(16),y=n(126).f,k=n(80).f,C=n(40).f,N=n(840),$=n(834).trim,w="Number",A=o.Number,T=A.prototype,E=o.TypeError,I=c("".slice),R=c("".charCodeAt),O=function(t){var e=x(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,o,c,l,f,code,d=x(t,"number");if(v(d))throw E("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=$(d),43===(e=R(d,0))||45===e){if(88===(n=R(d,2))||120===n)return NaN}else if(48===e){switch(R(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=I(d,2)).length,f=0;f<l;f++)if((code=R(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(l(w,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var B,F=function(t){var e=arguments.length<1?0:A(O(t)),n=this;return m(T,n)&&_((function(){N(n)}))?h(Object(e),n,F):e},D=r?y(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;D.length>S;S++)d(A,B=D[S])&&!d(F,B)&&C(F,B,k(A,B));F.prototype=T,T.constructor=F,f(o,w,F)}},837:function(t,e,n){"use strict";n.r(e);n(836),n(50),n(95),n(838),n(268),n(66),n(45),n(194);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(841),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},838:function(t,e,n){"use strict";var r=n(10),o=n(834).trim;r({target:"String",proto:!0,forced:n(839)("trim")},{trim:function(){return o(this)}})},839:function(t,e,n){var r=n(151).PROPER,o=n(16),c=n(833);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},840:function(t,e,n){var r=n(13);t.exports=r(1..valueOf)},841:function(t,e,n){"use strict";n(835)},842:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},845:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=(n(45),n(24),{name:"CAddress",data:function(){return{displayText:""}},props:{value:{type:String,required:!0}},mounted:(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setDisplayText();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{presetName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.ido:return"ido";case this.$store.state.bsc.globalAccounts.genesis:return"genesis";case this.$store.state.bsc.globalAccounts.zero:return"zero";case this.$store.state.bsc.globalAccounts.burn:return"burn";case this.$store.state.bsc.globalAccounts.airdrop:return"airdrop";case this.$store.state.bsc.globalAccounts.tax:return"farm";case"0x8016B04b73375B4Cfc97101B0a0C0A4986827Fe8":return"mainContract";default:return null}},setDisplayText:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var text,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(text=t.presetName(t.value))){e.next=4;break}return t.displayText=t.$t("user."+text),e.abrupt("return");case 4:return e.next=6,t.$nuxt.context.app.db.holder.where("address").equals(t.value).first();case 6:if(!(n=e.sent)||!n.username){e.next=10;break}return t.displayText="@"+n.username+": "+t.value.slice(0,8)+"..."+t.value.slice(-4),e.abrupt("return");case 10:return e.abrupt("return",t.displayText=t.value);case 11:case"end":return e.stop()}}),e)})))()}}}),l=n(5),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.displayText))])}),[],!1,null,"4c435680",null);e.default=component.exports}}]);