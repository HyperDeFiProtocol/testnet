(window.webpackJsonp=window.webpackJsonp||[]).push([[99,48,72,74],{1009:function(t,e,n){"use strict";n(976)},1010:function(t,e,n){var r=n(66)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.hdf-stat div dt[data-v-35895604]{\n  --tw-text-opacity:1;\n  color:rgba(253, 230, 138, var(--tw-text-opacity))\n}\ntbody tr[data-v-35895604]:nth-child(odd){\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\ntbody tr[data-v-35895604]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(124, 45, 18, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-35895604]{\n  --tw-text-opacity:1;\n  color:rgba(254, 215, 170, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},1056:function(t,e,n){"use strict";n.r(e);var r,o=n(0),l=(n(22),n(798)),c=n.n(l),d=n(77),m=n(181),f={name:"SFeeFomo",data:function(){return{oCounter:0,oAmount:"0",oMarketValue:"0",oTransactions:[],iCounter:0,iAmount:"0",iMarketValue:"0",timerStep:{h:"0",m:"0",s:"0"}}},computed:{explorer:function(){return d.a},next:function(){return this.isZero(this.$store.state.bsc.fomo.next)?"0x...":this.$store.state.bsc.fomo.next},fomo:function(){return this.$store.state.bsc.fomo}},watch:{"$store.state.bsc.blockNumber":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.wait(1e3);case 2:return t.next=4,this.load();case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{isZero:function(address){return address===this.$store.state.bsc.globalAccounts.zero},load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.a.duration(1e3*t.$store.state.bsc.fomo.timestampStep),t.timerStep.s=n.seconds(),t.timerStep.m=n.minutes(),t.timerStep.h=n.hours(),e.next=6,t.$nuxt.context.app.db.transfer.where({fromAccount:t.$store.state.bsc.globalAccounts.fomo}).reverse().limit(10).toArray();case 6:t.oTransactions=e.sent;case 7:case"end":return e.stop()}}),e)})))()}}},h=(n(1009),n(4)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-orange-50 text-orange-700"},[n("HeroIconOutlineClock",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header1"},[n("h2",{staticClass:"text-orange-400"},[t._v("\n          "+t._s(t.$t("sFeeFomo.title"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sFeeFomo.text"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"body2 to-orange-900 from-yellow-800 text-orange-300"},[n("h3",[t._v("\n          "+t._s(t.$t("sFee.forEachTransaction"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sFee.take"))+"\n          "),t.$store.state.bsc.takerFee.fomo>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.takerFee.fomo)+"%\n            "+t._s(t.$t("sFee.fromTaker"))+"\n          ")]):t._e(),t._v(" "),t.$store.state.bsc.makerFee.fomo>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.makerFee.fomo)+"%\n            "+t._s(t.$t("sFee.fromMaker"))+"\n          ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleFee.fomo>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.whaleFee.fomo)+"%\n            "+t._s(t.$t("sFee.fromWhale"))+"\n          ")]):t._e(),t._v("\n          "+t._s(t.$t("sFeeFomo.thenDeposit__"))+"\n          "),t.timerStep.h>"0"?n("span",[t._v(t._s(t.timerStep.h)+" "+t._s(t.$t("sFeeFomo.hours")))]):t._e(),t._v(" "),t.timerStep.m>"0"?n("span",[t._v(t._s(t.timerStep.m)+" "+t._s(t.$t("sFeeFomo.minutes")))]):t._e(),t._v(" "),t.timerStep.s>"0"?n("span",[t._v(t._s(t.timerStep.s)+" "+t._s(t.$t("sFeeFomo.seconds")))]):t._e(),t._v("\n          "+t._s(t.$t("sFeeFomo.ifNoOther__"))+"\n        ")]),t._v(" "),t.$store.state.bsc.supply.fomo>"0"?n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("nuxt-link",{staticClass:"hdf-a-track bg-yellow-700 hover:bg-yellow-600 space-x-2",attrs:{to:t.localeLocation("/history/fomo")}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n              "+t._s(t.$t("sFee.trackAll"))+"\n              "+t._s(t.$store.state.stat.fomo.out.count+t.$store.state.stat.fomo.in.count)+"\n              "+t._s(t.$t("sFeeFomo.trackFomoTransfers"))+"\n            ")])],1)],1):t._e()])]),t._v(" "),t.$store.state.stat.fomo.out.count?n("dl",{staticClass:"hdf-stat lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2"},[n("div",[n("dt",[t._v("\n          "+t._s(t.$t("sFeeFomo.statFomoPool"))+"\n        ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.bsc.supply.fomo,token:!0}})],1)]),t._v(" "),n("div",[n("dt",{staticClass:"order-2 mt-1 text-base leading-6 font-medium text-yellow-100"},[t._v("\n          "+t._s(t.$t("sFeeFomo.statFomoPrizeTransfers"))+"\n        ")]),t._v(" "),n("dd",{staticClass:"order-1 text-3xl font-extrabold text-white"},[n("CBN",{attrs:{value:t.$store.state.stat.fomo.out.count}})],1)])]):t._e(),t._v(" "),t.oTransactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-orange-400 tracking-wide uppercase"},[t._v("\n        "+t._s(t.$t("txTable.latest"))+"\n        "+t._s(t.oTransactions.length)+"\n        "+t._s(t.$t("sFeeFomo.fomoPrizeHistory"))+"\n      ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.oTransactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconSolidBadgeCheck")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                  HyperDeFi\n                ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                    #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])]),t._v(" "),n("p",{staticClass:"p-tx"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.toAccount)}},[t._v("\n                  "+t._s(e.toAccount.slice(0,8))+"..."+t._s(e.toAccount.slice(-4))+"\n                ")])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.block"))+"\n                ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.address"))+"\n                ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.amount"))+"\n                ")])])]),t._v(" "),n("tbody",t._l(t.oTransactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                    #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.toAccount)}},[t._v(t._s(e.toAccount))])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                  HyperDeFi\n                ")],1)])})),0)])])])])]):t._e()])],1)}),[],!1,null,"35895604",null);e.default=component.exports;installComponents(component,{HeroIconOutlineClock:n(963).default,HeroIconSolidCursorClick:n(815).default,CBN:n(803).default,HeroIconSolidBadgeCheck:n(965).default,LAutoWidth:n(141).default})},801:function(t,e,n){var content=n(807);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("7f27037d",content,!0,{sourceMap:!1})},803:function(t,e,n){"use strict";n.r(e);n(802),n(54),n(101),n(804),n(253),n(68),n(53),n(180);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(806),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},804:function(t,e,n){"use strict";var r=n(9),o=n(800).trim;r({target:"String",proto:!0,forced:n(805)("trim")},{trim:function(){return o(this)}})},805:function(t,e,n){var r=n(142).PROPER,o=n(15),l=n(799);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},806:function(t,e,n){"use strict";n(801)},807:function(t,e,n){var r=n(66)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},815:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidCursorClick"},o=n(4),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"32f487c0",null);e.default=component.exports},962:function(t,e,n){var map={"./af":817,"./af.js":817,"./ar":818,"./ar-dz":819,"./ar-dz.js":819,"./ar-kw":820,"./ar-kw.js":820,"./ar-ly":821,"./ar-ly.js":821,"./ar-ma":822,"./ar-ma.js":822,"./ar-sa":823,"./ar-sa.js":823,"./ar-tn":824,"./ar-tn.js":824,"./ar.js":818,"./az":825,"./az.js":825,"./be":826,"./be.js":826,"./bg":827,"./bg.js":827,"./bm":828,"./bm.js":828,"./bn":829,"./bn-bd":830,"./bn-bd.js":830,"./bn.js":829,"./bo":831,"./bo.js":831,"./br":832,"./br.js":832,"./bs":833,"./bs.js":833,"./ca":834,"./ca.js":834,"./cs":835,"./cs.js":835,"./cv":836,"./cv.js":836,"./cy":837,"./cy.js":837,"./da":838,"./da.js":838,"./de":839,"./de-at":840,"./de-at.js":840,"./de-ch":841,"./de-ch.js":841,"./de.js":839,"./dv":842,"./dv.js":842,"./el":843,"./el.js":843,"./en-au":844,"./en-au.js":844,"./en-ca":845,"./en-ca.js":845,"./en-gb":846,"./en-gb.js":846,"./en-ie":847,"./en-ie.js":847,"./en-il":848,"./en-il.js":848,"./en-in":849,"./en-in.js":849,"./en-nz":850,"./en-nz.js":850,"./en-sg":851,"./en-sg.js":851,"./eo":852,"./eo.js":852,"./es":853,"./es-do":854,"./es-do.js":854,"./es-mx":855,"./es-mx.js":855,"./es-us":856,"./es-us.js":856,"./es.js":853,"./et":857,"./et.js":857,"./eu":858,"./eu.js":858,"./fa":859,"./fa.js":859,"./fi":860,"./fi.js":860,"./fil":861,"./fil.js":861,"./fo":862,"./fo.js":862,"./fr":863,"./fr-ca":864,"./fr-ca.js":864,"./fr-ch":865,"./fr-ch.js":865,"./fr.js":863,"./fy":866,"./fy.js":866,"./ga":867,"./ga.js":867,"./gd":868,"./gd.js":868,"./gl":869,"./gl.js":869,"./gom-deva":870,"./gom-deva.js":870,"./gom-latn":871,"./gom-latn.js":871,"./gu":872,"./gu.js":872,"./he":873,"./he.js":873,"./hi":874,"./hi.js":874,"./hr":875,"./hr.js":875,"./hu":876,"./hu.js":876,"./hy-am":877,"./hy-am.js":877,"./id":878,"./id.js":878,"./is":879,"./is.js":879,"./it":880,"./it-ch":881,"./it-ch.js":881,"./it.js":880,"./ja":882,"./ja.js":882,"./jv":883,"./jv.js":883,"./ka":884,"./ka.js":884,"./kk":885,"./kk.js":885,"./km":886,"./km.js":886,"./kn":887,"./kn.js":887,"./ko":888,"./ko.js":888,"./ku":889,"./ku.js":889,"./ky":890,"./ky.js":890,"./lb":891,"./lb.js":891,"./lo":892,"./lo.js":892,"./lt":893,"./lt.js":893,"./lv":894,"./lv.js":894,"./me":895,"./me.js":895,"./mi":896,"./mi.js":896,"./mk":897,"./mk.js":897,"./ml":898,"./ml.js":898,"./mn":899,"./mn.js":899,"./mr":900,"./mr.js":900,"./ms":901,"./ms-my":902,"./ms-my.js":902,"./ms.js":901,"./mt":903,"./mt.js":903,"./my":904,"./my.js":904,"./nb":905,"./nb.js":905,"./ne":906,"./ne.js":906,"./nl":907,"./nl-be":908,"./nl-be.js":908,"./nl.js":907,"./nn":909,"./nn.js":909,"./oc-lnc":910,"./oc-lnc.js":910,"./pa-in":911,"./pa-in.js":911,"./pl":912,"./pl.js":912,"./pt":913,"./pt-br":914,"./pt-br.js":914,"./pt.js":913,"./ro":915,"./ro.js":915,"./ru":916,"./ru.js":916,"./sd":917,"./sd.js":917,"./se":918,"./se.js":918,"./si":919,"./si.js":919,"./sk":920,"./sk.js":920,"./sl":921,"./sl.js":921,"./sq":922,"./sq.js":922,"./sr":923,"./sr-cyrl":924,"./sr-cyrl.js":924,"./sr.js":923,"./ss":925,"./ss.js":925,"./sv":926,"./sv.js":926,"./sw":927,"./sw.js":927,"./ta":928,"./ta.js":928,"./te":929,"./te.js":929,"./tet":930,"./tet.js":930,"./tg":931,"./tg.js":931,"./th":932,"./th.js":932,"./tk":933,"./tk.js":933,"./tl-ph":934,"./tl-ph.js":934,"./tlh":935,"./tlh.js":935,"./tr":936,"./tr.js":936,"./tzl":937,"./tzl.js":937,"./tzm":938,"./tzm-latn":939,"./tzm-latn.js":939,"./tzm.js":938,"./ug-cn":940,"./ug-cn.js":940,"./uk":941,"./uk.js":941,"./ur":942,"./ur.js":942,"./uz":943,"./uz-latn":944,"./uz-latn.js":944,"./uz.js":943,"./vi":945,"./vi.js":945,"./x-pseudo":946,"./x-pseudo.js":946,"./yo":947,"./yo.js":947,"./zh-cn":948,"./zh-cn.js":948,"./zh-hk":949,"./zh-hk.js":949,"./zh-mo":950,"./zh-mo.js":950,"./zh-tw":951,"./zh-tw.js":951};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=962},963:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineClock"},o=n(4),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}})])}),[],!1,null,"1976f32a",null);e.default=component.exports},965:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidBadgeCheck"},o=n(4),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})])}),[],!1,null,"03c350e6",null);e.default=component.exports},976:function(t,e,n){var content=n(1010);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("dec04e8c",content,!0,{sourceMap:!1})}}]);