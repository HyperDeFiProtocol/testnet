(window.webpackJsonp=window.webpackJsonp||[]).push([[28,14,99],{1074:function(t,e,n){"use strict";n.r(e);var r=n(74),l={name:"CTableHolderTop",props:{holders:{type:Array,required:!0}},computed:{hdfLink:function(){return r.a}}},o=n(4),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.holders.length?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.rank"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.username"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}}),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.address"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.balance"))+"\n          ")])])]),t._v(" "),n("tbody",t._l(t.holders,(function(e){return n("tr",[n("td",[t._v("\n            "+t._s(e.rank)+"\n          ")]),t._v(" "),n("td",[t._v("\n            "+t._s(e.username?"@"+e.username:"")+"\n          ")]),t._v(" "),n("td",[e.isWhale?n("IconWhale",{staticClass:"h-5 w-5"}):t._e()],1),t._v(" "),n("td",{staticClass:"font-mono"},[t._v("\n            "+t._s(e.address)+"\n          ")]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.balance,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"2eb13a72",null);e.default=component.exports;installComponents(component,{IconWhale:n(411).default,CBN:n(804).default})},800:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},801:function(t,e,n){var r=n(46),l=n(24),o="["+n(800)+"]",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),d=function(t){return function(e){var n=l(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(f,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},802:function(t,e,n){var content=n(809);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("7f27037d",content,!0,{sourceMap:!1})},803:function(t,e,n){"use strict";var r=n(26),l=n(16),o=n(144),c=n(37),f=n(29),d=n(255),h=n(180),v=n(410),m=n(15),_=n(118).f,N=n(75).f,y=n(36).f,I=n(806),C=n(801).trim,E="Number",x=l.Number,w=x.prototype,k=function(t){var e=v(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,n,r,l,o,c,f,code,d=v(t,"number");if(h(d))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(43===(e=(d=C(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+d}for(c=(o=d.slice(2)).length,f=0;f<c;f++)if((code=o.charCodeAt(f))<48||code>l)return NaN;return parseInt(o,r)}return+d};if(o(E,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var A,$=function(t){var e=arguments.length<1?0:x(k(t)),n=this;return n instanceof $&&m((function(){I(n)}))?d(Object(e),n,$):e},S=r?_(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;S.length>D;D++)f(x,A=S[D])&&!f($,A)&&y($,A,N(x,A));$.prototype=w,w.constructor=$,c(l,E,$)}},804:function(t,e,n){"use strict";n.r(e);n(803),n(51),n(101),n(805),n(254),n(67),n(50),n(181);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},l=(n(808),n(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},805:function(t,e,n){"use strict";var r=n(9),l=n(801).trim;r({target:"String",proto:!0,forced:n(807)("trim")},{trim:function(){return l(this)}})},806:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},807:function(t,e,n){var r=n(143).PROPER,l=n(15),o=n(800);t.exports=function(t){return l((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||r&&o[t].name!==t}))}},808:function(t,e,n){"use strict";n(802)},809:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);