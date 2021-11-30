(window.webpackJsonp=window.webpackJsonp||[]).push([[8,90],{1004:function(e,t,r){"use strict";r.r(t);var n=r(1),c=(r(24),{name:"BtnSubmitUsername",props:{username:{type:String,required:!0}},data:function(){return{pending:!1}},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.username){t.next=4;break}return t.next=3,e.$store.dispatch("warning/SET_WARNING",{title:e.$t("modal.error"),message:e.$t("modal.usernameEmpty")});case 3:return t.abrupt("return");case 4:if(!(4>e.username.length)){t.next=8;break}return t.next=7,e.$store.dispatch("warning/SET_WARNING",{title:e.$t("modal.error"),message:e.$t("modal.usernameLengthMin")});case 7:return t.abrupt("return");case 8:if(!(15<e.username.length)){t.next=12;break}return t.next=11,e.$store.dispatch("warning/SET_WARNING",{title:e.$t("modal.error"),message:e.$t("modal.usernameLengthMax")});case 11:return t.abrupt("return");case 12:if(!e.pending){t.next=16;break}return t.next=15,e.$store.dispatch("warning/SET_WARNING",{title:e.$t("modal.info"),message:e.$t("modal.pending")});case 15:return t.abrupt("return");case 16:if(!e.$store.state.wallet.username){t.next=20;break}return t.next=19,e.$store.dispatch("warning/SET_WARNING",{title:e.$t("modal.error"),message:e.$t("modal.usernameChange")});case 19:return t.abrupt("return");case 20:return e.pending=!0,t.next=23,e.$nuxt.context.app.token.methods.getAccountByUsername(e.username).call().catch(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.pending=!1,e.next=3,this.$store.dispatch("warning/SET_WARNING",{title:this.$t("modal.error"),message:t.message});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}());case 23:if(t.sent.account===e.$store.state.bsc.globalAccounts.zero){t.next=29;break}return e.pending=!1,t.next=28,e.$store.dispatch("warning/SET_WARNING",{title:e.$t("modal.error"),message:e.$t("modal.usernameTaken")});case 28:return t.abrupt("return");case 29:return t.next=31,e.$nuxt.context.app.token.methods.setUsername(e.username).send({from:e.$store.state.wallet.account}).on("receipt",e.onReceipt).on("error",e.onError).catch(e.onError);case 31:case"end":return t.stop()}}),t)})))()},onReceipt:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log(">>> onReceipt:",e),!e.status){r.next=4;break}return r.next=4,t.$nuxt.context.app.conn.tokenSync();case 4:case"end":return r.stop()}}),r)})))()},onError:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.pending=!1,r.next=3,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.txError")+" #"+e.code,message:e.message});case 3:case"end":return r.stop()}}),r)})))()}}}),o=r(5),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"space-x-2",on:{click:e.submit}},[e._t("default",(function(){return[e._v(e._s(e.$t("sUsername.submit")))]})),e._v(" "),r("IconDiceHyperSpin",{directives:[{name:"show",rawName:"v-show",value:e.pending,expression:"pending"}],staticClass:"inline w-6 h-6"})],2)}),[],!1,null,"5a2a02da",null);t.default=component.exports;installComponents(component,{IconDiceHyperSpin:r(847).default})},847:function(e,t,r){"use strict";r.r(t);var n={name:"IconDiceHyperSpin"},c=r(5),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"}},[t("g",{staticStyle:{"transform-origin":"50% 50%",transform:"rotate(0deg) scale(0.8, 0.8)"}},[t("g",{staticStyle:{"transform-origin":"512px 512px",transform:"rotate(0deg)",animation:"1.66667s linear 0s infinite normal forwards running spin-1c9b16c3-3b0c-4d0f-8d7b-bf997165f8c8"}},[t("path",{attrs:{fill:"currentColor",d:"M769.143,152l-514.286,-0c-56.812,-0 -102.857,46.045 -102.857,102.857l-0,514.286c-0,56.812 46.045,102.857 102.857,102.857l514.286,0c56.812,0 102.857,-46.045 102.857,-102.857l0,-514.286c0,-56.812 -46.045,-102.857 -102.857,-102.857Zm-385.714,617.143c-28.399,-0 -77.143,-48.745 -77.143,-77.143c-0,-28.398 48.744,-77.143 77.143,-77.143c28.398,0 77.142,48.745 77.142,77.143c0,28.398 -48.744,77.143 -77.142,77.143Zm257.142,-154.286c-28.398,0 -77.142,-48.745 -77.142,-77.143c-0,-28.398 48.744,-77.143 77.142,-77.143c28.399,0 77.143,48.745 77.143,77.143c0,28.399 -48.744,77.143 -77.143,77.143Zm0,-205.714c-28.398,-0 -77.142,-48.745 -77.142,-77.143c-0,-28.398 48.744,-77.143 77.142,-77.143c28.399,0 77.143,48.745 77.143,77.143c0,28.398 -48.744,77.143 -77.143,77.143Z"}})])])])}),[],!1,null,"7c38ba44",null);t.default=component.exports}}]);