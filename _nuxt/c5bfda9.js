(window.webpackJsonp=window.webpackJsonp||[]).push([[14,108],{800:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},801:function(t,e,n){var r=n(46),c=n(24),l="["+n(800)+"]",o=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),h=function(t){return function(e){var n=c(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(f,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},802:function(t,e,n){var content=n(809);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("7f27037d",content,!0,{sourceMap:!1})},803:function(t,e,n){"use strict";var r=n(27),c=n(16),l=n(144),o=n(37),f=n(30),h=n(255),d=n(180),m=n(410),v=n(15),N=n(118).f,I=n(77).f,E=n(36).f,_=n(807),y=n(801).trim,x="Number",A=c.Number,w=A.prototype,C=function(t){var e=m(t,"number");return"bigint"==typeof e?e:k(e)},k=function(t){var e,n,r,c,l,o,f,code,h=m(t,"number");if(d(h))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(43===(e=(h=y(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+h}for(o=(l=h.slice(2)).length,f=0;f<o;f++)if((code=l.charCodeAt(f))<48||code>c)return NaN;return parseInt(l,r)}return+h};if(l(x,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var S,R=function(t){var e=arguments.length<1?0:A(C(t)),n=this;return n instanceof R&&v((function(){_(n)}))?h(Object(e),n,R):e},D=r?N(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;D.length>T;T++)f(A,S=D[T])&&!f(R,S)&&E(R,S,I(A,S));R.prototype=w,w.constructor=R,o(c,x,R)}},804:function(t,e,n){"use strict";n.r(e);n(803),n(53),n(101),n(805),n(254),n(67),n(52),n(181);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},c=(n(808),n(4)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},805:function(t,e,n){"use strict";var r=n(9),c=n(801).trim;r({target:"String",proto:!0,forced:n(806)("trim")},{trim:function(){return c(this)}})},806:function(t,e,n){var r=n(143).PROPER,c=n(15),l=n(800);t.exports=function(t){return c((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},807:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},808:function(t,e,n){"use strict";n(802)},809:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);