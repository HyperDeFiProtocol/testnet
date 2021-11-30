(window.webpackJsonp=window.webpackJsonp||[]).push([[33,15,16,104],{1103:function(t,e,r){"use strict";r.r(e);var n=r(78),c={name:"CTableGenesis",props:{transactions:{type:Array,required:!0}},computed:{hpLink:function(){return n.a}}},o=r(5),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.transactions.length?r("div",{staticClass:"overflow-x-auto"},[r("div",{staticClass:"align-middle inline-block min-w-full"},[r("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[r("table",{staticClass:"table-history"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.address"))+"\n          ")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),r("tbody",t._l(t.transactions,(function(e){return r("tr",[r("td",[r("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              #"),r("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),r("td",{staticClass:"font-mono"},[r("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[r("CAddress",{attrs:{value:e.account}})],1)]),t._v(" "),r("td",[r("CBN",{attrs:{value:e.amount,price:!0,padding:6}}),t._v("\n            BNB\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"5cee95e9",null);e.default=component.exports;installComponents(component,{CBN:r(836).default,CAddress:r(844).default})},832:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},833:function(t,e,r){var n=r(13),c=r(51),o=r(26),l=r(832),f=n("".replace),d="["+l+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t){return function(e){var r=o(c(e));return 1&t&&(r=f(r,h,"")),2&t&&(r=f(r,m,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},834:function(t,e,r){var content=r(841);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("7f27037d",content,!0,{sourceMap:!1})},835:function(t,e,r){"use strict";var n=r(28),c=r(7),o=r(13),l=r(153),f=r(41),d=r(29),h=r(268),m=r(97),v=r(191),_=r(425),x=r(16),y=r(126).f,N=r(79).f,C=r(40).f,E=r(839),k=r(833).trim,w="Number",A=c.Number,I=A.prototype,T=c.TypeError,$=o("".slice),R=o("".charCodeAt),D=function(t){var e=_(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,r,n,c,o,l,f,code,d=_(t,"number");if(v(d))throw T("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=k(d),43===(e=R(d,0))||45===e){if(88===(r=R(d,2))||120===r)return NaN}else if(48===e){switch(R(d,1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+d}for(l=(o=$(d,2)).length,f=0;f<l;f++)if((code=R(o,f))<48||code>c)return NaN;return parseInt(o,n)}return+d};if(l(w,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var S,B=function(t){var e=arguments.length<1?0:A(D(t)),r=this;return m(I,r)&&x((function(){E(r)}))?h(Object(e),r,B):e},j=n?y(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;j.length>F;F++)d(A,S=j[F])&&!d(B,S)&&C(B,S,N(A,S));B.prototype=I,I.constructor=B,f(c,w,B)}},836:function(t,e,r){"use strict";r.r(e);r(835),r(50),r(96),r(837),r(267),r(66),r(45),r(192);var n={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},c=(r(840),r(5)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"cbn-number"},[r("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?r("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return r("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},837:function(t,e,r){"use strict";var n=r(10),c=r(833).trim;n({target:"String",proto:!0,forced:r(838)("trim")},{trim:function(){return c(this)}})},838:function(t,e,r){var n=r(152).PROPER,c=r(16),o=r(832);t.exports=function(t){return c((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||n&&o[t].name!==t}))}},839:function(t,e,r){var n=r(13);t.exports=n(1..valueOf)},840:function(t,e,r){"use strict";r(834)},841:function(t,e,r){var n=r(64)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},844:function(t,e,r){"use strict";r.r(e);var n,c=r(1),o=(r(45),r(24),{name:"CAddress",data:function(){return{displayText:""}},props:{value:{type:String,required:!0}},mounted:(n=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setDisplayText();case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),methods:{presetName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.ido:return"ido";case this.$store.state.bsc.globalAccounts.genesis:return"genesis";case this.$store.state.bsc.globalAccounts.zero:return"zero";case this.$store.state.bsc.globalAccounts.burn:return"burn";case this.$store.state.bsc.globalAccounts.airdrop:return"airdrop";case this.$store.state.bsc.globalAccounts.tax:return"farm";case"0xC6D60f7523C5076C62D2843a76524bE0d52df865":return"mainContract";default:return null}},setDisplayText:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var text,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(text=t.presetName(t.value))){e.next=4;break}return t.displayText=t.$t("user."+text),e.abrupt("return");case 4:return e.next=6,t.$nuxt.context.app.db.holder.where("address").equals(t.value).first();case 6:if(!(r=e.sent)||!r.username){e.next=10;break}return t.displayText="@"+r.username+": "+t.value.slice(0,8)+"..."+t.value.slice(-4),e.abrupt("return");case 10:return e.abrupt("return",t.displayText=t.value);case 11:case"end":return e.stop()}}),e)})))()}}}),l=r(5),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.displayText))])}),[],!1,null,"4c435680",null);e.default=component.exports}}]);