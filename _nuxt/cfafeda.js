(window.webpackJsonp=window.webpackJsonp||[]).push([[32,13,14,108],{1069:function(t,e,r){"use strict";r.r(e);var n=r(77),c={name:"CTableTax",props:{transactions:{type:Array,required:!0}},computed:{hdfLink:function(){return n.a}}},l=r(4),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.transactions.length?r("div",{staticClass:"overflow-x-auto"},[r("div",{staticClass:"align-middle inline-block min-w-full"},[r("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[r("table",{staticClass:"table-history"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.type"))+"\n          ")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.address"))+"\n          ")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),r("tbody",t._l(t.transactions,(function(e){return r("tr",[r("td",[r("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n              #"),r("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),e.fromAccount===t.$store.state.bsc.globalAccounts.tax?r("td",{staticClass:"text-emerald-400"},[t._v("\n            "+t._s(t.$t("txTable.harvest"))+"\n          ")]):r("td",[t._v("\n            "+t._s(t.$t("txTable.accumulate"))+"\n          ")]),t._v(" "),e.fromAccount===t.$store.state.bsc.globalAccounts.tax?r("td",{staticClass:"font-mono text-emerald-400"},[r("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[r("CAddress",{attrs:{value:e.toAccount}})],1)]):r("td",{staticClass:"font-mono"},[r("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[r("CAddress",{attrs:{value:e.fromAccount}})],1)]),t._v(" "),r("td",[r("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"dcef42b2",null);e.default=component.exports;installComponents(component,{CBN:r(803).default,CAddress:r(810).default})},799:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},800:function(t,e,r){var n=r(47),c=r(24),l="["+r(799)+"]",o=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),d=function(t){return function(e){var r=c(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(f,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},801:function(t,e,r){var content=r(807);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("7f27037d",content,!0,{sourceMap:!1})},802:function(t,e,r){"use strict";var n=r(27),c=r(16),l=r(143),o=r(37),f=r(30),d=r(102),h=r(254),m=r(179),v=r(409),x=r(15),_=r(88),y=r(117).f,A=r(78).f,N=r(36).f,C=r(800).trim,T="Number",k=c.Number,$=k.prototype,w=d(_($))==T,E=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,c,l,o,f,code,d=v(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=C(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+d}for(o=(l=d.slice(2)).length,f=0;f<o;f++)if((code=l.charCodeAt(f))<48||code>c)return NaN;return parseInt(l,n)}return+d};if(l(T,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var I,R=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof R&&(w?x((function(){$.valueOf.call(r)})):d(r)!=T)?h(new k(E(e)),r,R):E(e)},D=n?y(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;D.length>S;S++)f(k,I=D[S])&&!f(R,I)&&N(R,I,A(k,I));R.prototype=$,$.constructor=R,o(c,T,R)}},803:function(t,e,r){"use strict";r.r(e);r(802),r(54),r(101),r(804),r(253),r(68),r(53),r(180);var n={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},c=(r(806),r(4)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"cbn-number"},[r("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?r("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return r("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},804:function(t,e,r){"use strict";var n=r(9),c=r(800).trim;n({target:"String",proto:!0,forced:r(805)("trim")},{trim:function(){return c(this)}})},805:function(t,e,r){var n=r(142).PROPER,c=r(15),l=r(799);t.exports=function(t){return c((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||n&&l[t].name!==t}))}},806:function(t,e,r){"use strict";r(801)},807:function(t,e,r){var n=r(66)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},810:function(t,e,r){"use strict";r.r(e);var n,c=r(0),l=(r(53),r(22),{name:"CAddress",data:function(){return{displayText:""}},props:{value:{type:String,required:!0}},mounted:(n=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setDisplayText();case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),methods:{presetName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.presale:return"presale";case this.$store.state.bsc.globalAccounts.burn:return"burn";case this.$store.state.bsc.globalAccounts.airdrop:return"airdrop";case this.$store.state.bsc.globalAccounts.tax:return"tax";case"0x28482439A078af79BA246F6d914a771FB59bC2c4":return"mainContract";default:return null}},setDisplayText:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var text,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(text=t.presetName(t.value))){e.next=4;break}return t.displayText=t.$t("user."+text),e.abrupt("return");case 4:return e.next=6,t.$nuxt.context.app.db.holder.where("address").equals(t.value).first();case 6:if(!(r=e.sent)||!r.username){e.next=10;break}return t.displayText="@"+r.username+": "+t.value.slice(0,8)+"..."+t.value.slice(-4),e.abrupt("return");case 10:return e.abrupt("return",t.displayText=t.value);case 11:case"end":return e.stop()}}),e)})))()}}}),o=r(4),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.displayText))])}),[],!1,null,"17d027d0",null);e.default=component.exports}}]);