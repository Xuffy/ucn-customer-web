webpackJsonp([28],{"2Dkn":function(t,e,n){"use strict";e.a={ENV:{local:{path:"/static/__project",api:"http://store.test.tailorx.cn/api"},develop:{path:"/static/__project",api:"http://192.168.11.215:30704"},test:{path:"/static/__project",api:"http://store.test.tailorx.cn/api"},production:{path:"/static/__project",api:"https://store.tailorx.cn/api"}}.test,TIMEOUT:6e4,VERSION:"3.3.4.1515721861165",STORE_PREFIX:"tailorx_store_"}},"3yoA":function(t,e){},"6BiA":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar-box"},[n("Breadcrumb",{attrs:{separator:">"}},t._l(t.navBarList,function(e,a){return n("BreadcrumbItem",{key:e.path,attrs:{href:a===t.navBarList.length-1?null:e.redirect||e.path}},[t._v("\n      "+t._s(e.name)+"\n    ")])}))],1)},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};e.a=r},"7UK6":function(t,e,n){"use strict";var a=n("gd1P"),o=n("dCvN"),r=n("Fhs7");e.a={name:"layout",components:{VHeader:a.a,VMenu:o.a,NavBar:r.a},data:function(){return{}},computed:{key:function(){return void 0!==this.$route.name?this.$route.name+ +new Date:this.$route+ +new Date}}}},"7nJK":function(t,e){},AZ9P:function(t,e,n){"use strict";e.a={name:"NavBar",data:function(){return{navBarList:null}},created:function(){this.updateBreadcrumb()},methods:{updateBreadcrumb:function(){var t=this.$route.matched.filter(function(t){return t.name}),e=t[0];!e||"首页"===e.name&&""===e.path||(t=[{name:"首页",path:"/"}].concat(t)),this.navBarList=t}},watch:{$route:function(){this.updateBreadcrumb()}}}},CCn6:function(t,e,n){"use strict";(function(t){var a=n("rVsN"),o=n.n(a),r=n("x/vT");e.a={install:function(e,n){e.prototype.$getTags=function(e){var n=this,a=r.a.get("tags");return t.isEmpty(a)?this.ajax.post("/v3/store/tag/findAllTags").then(function(n){var a=t.clone(n);switch(e){case 1:a=a.systemTags;break;case 2:a=a.commonTags}return r.a.set("tags",n),a}).catch(function(){n.$getTags()}):new o.a(function(t){switch(e){case 1:return t(a.systemTags);case 2:return t(a.commonTags)}return t(a)})}}}}).call(e,n("u47Y"))},Fhs7:function(t,e,n){"use strict";function a(t){i||(n("3yoA"),n("WGR0"))}var o=n("AZ9P"),r=n("6BiA"),i=!1,c=n("/Xao"),u=a,s=c(o.a,r.a,!1,u,"data-v-a01ec3fc",null);s.options.__file="src\\components\\Layout\\navBar.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=s.exports},"G/Ze":function(t,e,n){"use strict";(function(t){var a=n("rVsN"),o=n.n(a),r=n("BMa3"),i=n.n(r),c=n("DEjr"),u=n.n(c),s=n("xbC0"),p=n("E4C3"),l=n.n(p),h=n("ve9D"),d=(n.n(h),n("IlIr")),m=(n.n(d),n("2Dkn")),f=n("x/vT"),v=i.a.create({baseURL:m.a.ENV.api,timeout:m.a.TIMEOUT,headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return t=u.a.stringify(t)}]});d.Message.config({duration:3}),l.a.configure({}),v.interceptors.request.use(function(e){var n=f.a.get("ticket");return t.isEmpty(n)&&!e.noAuth?(s.a.push("/login"),o.a.reject("登录失效，请重新登录")):(e.headers["utouu-open-client-ticket"]=n,l.a.start(),e)},function(t){l.a.done(),d.Message.warning(response.data.msg||"请求异常，请重试！"),o.a.reject(t)}),v.interceptors.response.use(function(e){if(l.a.done(),t.isEmpty(e.data))throw new Error("api data is undefined");if(t.isString(e.data)&&(e.data=JSON.parse(e.data)),"200"!==e.data.code)throw d.Message.warning(e.data.msg||"数据返回异常，请重试！"),new Error("[code - "+(e.data.code||"000")+"] "+(e.data.msg||"api request data unsuccessful"));return e.config._fullData?e.data:e.data.data},function(e){return d.Message.error(t.isObject(e)||!e?"网络异常，请稍后重试！":e),l.a.done(),o.a.reject(e)}),e.a=v}).call(e,n("u47Y"))},HS7g:function(t,e,n){"use strict";function a(t){i||n("tTC6")}var o=n("7UK6"),r=n("tDkg"),i=!1,c=n("/Xao"),u=a,s=c(o.a,r.a,!1,u,"data-v-5aa0e8a0",null);s.options.__file="src\\components\\Layout\\index.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=s.exports},I14E:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};e.a=r},IWeX:function(t,e,n){"use strict";(function(t){e.a={name:"header",data:function(){return{username:"User Name",userType:["店长","设计师","管理员"]}},created:function(){var e=this.$localStore.get("user");t.isEmpty(e)||(this.username=e.nickName,this.userType=this.userType[e.userType-1])},methods:{logout:function(){var t=this;this.$Modal.confirm({title:"系统提示",content:"是否确认退出登录",onOk:function(){t.$localStore.clearAll(),t.$localStore.clearAll(),t.$router.push("/login")}})}}}}).call(e,n("u47Y"))},JuX1:function(t,e){},M93x:function(t,e,n){"use strict";function a(t){i||n("7nJK")}var o=n("yXKM"),r=n("I14E"),i=!1,c=n("/Xao"),u=a,s=c(o.a,r.a,!1,u,null,null);s.options.__file="src\\App.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("ZLEe"),o=n.n(a),r=n("qRXP"),i=n("M93x"),c=n("xbC0"),u=n("G/Ze"),s=n("2Dkn"),p=n("ha1O"),l=n("CCn6"),h=n("Yz9C"),d=n("IlIr"),m=n.n(d),f=n("vjum"),v=(n.n(f),n("hFnu"));n.n(v);r.default.use(m.a),r.default.use(l.a),r.default.use(h.a),r.default.config.productionTip=!1,r.default.prototype.ajax=u.a,window.TxConfig=s.a,o()(p).forEach(function(t){r.default.filter(t,p[t])}),new r.default({el:"#app",router:c.a,template:"<App/>",components:{App:i.a}})},WGR0:function(t,e){},YCkI:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.routerList.length?n("div",{staticClass:"menu"},[n("Menu",{attrs:{theme:"dark","active-name":t.activeName,"open-names":t.activeOpen,accordion:!0}},[t._l(t.routerList,function(e,a){return[e.children.length&&e.noDropdown&&!e.hidden&&t.checkAuth(e.auth)?n("router-link",{attrs:{to:e.path+"/"+e.children[0].path}},[n("MenuItem",{attrs:{name:a+""}},[n("Icon",{attrs:{type:"ios-paper"}}),t._v("\n          "+t._s(e.name)+"\n        ")],1)],1):t._e(),t._v(" "),e.noDropdown||e.hidden||!t.checkAuth(e.auth)?t._e():n("Submenu",{key:a,attrs:{name:a+""}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:e.icon}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})],1),t._v(" "),t._l(e.children,function(o,r){return!e.children.length||e.noDropdown||e.hidden?t._e():[!o.hidden&&t.checkAuth(o.auth)?n("router-link",{attrs:{to:e.path+"/"+o.path}},[n("MenuItem",{key:r,attrs:{name:a+"-"+r}},[t._v("\n              "+t._s(o.name)+"\n            ")])],1):t._e()]})],2)]})],2)],1):t._e()},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};e.a=r},Yz9C:function(t,e,n){"use strict";(function(t){var a=n("7Eo0"),o=n.n(a),r=n("x/vT");e.a={install:function(e,n){var a=!1;e.prototype.$alert=function(e){if(a)return!1;t.isString(e)&&(e={content:e}),e.onClose=function(){a=!1},this.$Message.warning(e),a=!0},e.prototype.$localStore=r.a,e.prototype.$sessionStore=r.b,e.prototype.$dateFormat=o.a,e.prototype.$textToHtml=function(e){var n=void 0,a=0,o="";return t.isString(e)?(e=e.replace(/\n/g,"<br/>").replace(/\s/g,"&nbsp;"),n=e.split("&nbsp;"),t.map(n,function(t){t?(o+=t,a=0):a<4&&(a++,o+="&nbsp;")}),o):""},e.prototype.$htmlToText=function(e){return t.isString(e)?e.replace(/<br\/>/g,"\n").replace(/&nbsp;/g," "):""}}}}).call(e,n("u47Y"))},chlN:function(t,e,n){"use strict";(function(t){var a=n("xbC0");e.a={name:"header",data:function(){return{routerList:[],activeName:null,activeOpen:[]}},mounted:function(){var t=this;a.b.forEach(function(e){e.hidden||t.routerList.push(e)}),this.updateMenuActive()},methods:{updateMenuActive:function(){var e=this;this.activeOpen=[],this.activeName="",t.map(this.routerList,function(n,a){n.name===e.$route.matched[0].name&&(e.activeOpen.push(a.toString()),t.map(n.children,function(t,n){e.$route.name!==t.name&&e.$route.path!==t.redirect||(e.activeName=a+"-"+n)}),e.activeName||t.map(n.children,function(t,n){e.$route.matched[1].name===t.name&&(e.activeName=a+"-"+n)}))})},checkAuth:function(e){var n=this.$localStore.get("user");return!!t.isEmpty(e)||-1!==t.indexOf(e,n.userType)}},watch:{$route:function(){this.updateMenuActive()}}}}).call(e,n("u47Y"))},dCvN:function(t,e,n){"use strict";function a(t){i||(n("iNE8"),n("dE65"))}var o=n("chlN"),r=n("YCkI"),i=!1,c=n("/Xao"),u=a,s=c(o.a,r.a,!1,u,"data-v-21f4ba91",null);s.options.__file="src\\components\\Layout\\Menu.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=s.exports},dE65:function(t,e){},gd1P:function(t,e,n){"use strict";function a(t){i||n("JuX1")}var o=n("IWeX"),r=n("zeFN"),i=!1,c=n("/Xao"),u=a,s=c(o.a,r.a,!1,u,"data-v-460a223f",null);s.options.__file="src\\components\\Layout\\Header.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=s.exports},hFnu:function(t,e){},ha1O:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"dateFormat",function(){return a});var a=function(t,e){}},iNE8:function(t,e){},iQH9:function(t,e){t.exports="data:image/png;base64,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"},tDkg:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-wrapper"},[n("v-header"),t._v(" "),n("v-menu"),t._v(" "),n("nav-bar"),t._v(" "),n("div",{staticClass:"main-container"},[n("section",{staticClass:"app-main",staticStyle:{"min-height":"100%"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{key:t.key})],1)],1)])],1)},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};e.a=r},tTC6:function(t,e){},ve9D:function(t,e){},vjum:function(t,e){},"x/vT":function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return s});var a=n("qEhP"),o=n.n(a),r=n("2Dkn"),i=void 0,c=[n("XzpQ"),n("lNfz")],u=o.a.createStore([n("navj"),n("60Th")],c),s=o.a.createStore([n("Vlwh")],c);i=function(){return{set:function(t,e,n){return t(r.a.STORE_PREFIX+e)},get:function(t,e,n){return t(r.a.STORE_PREFIX+e)},remove:function(t,e,n){return t(r.a.STORE_PREFIX+e)}}},u.addPlugin(i),s.addPlugin(i)},xbC0:function(t,e,n){"use strict";(function(t){n.d(e,"b",function(){return u});var a=n("qRXP"),o=n("cigS"),r=n("2Dkn"),i=n("HS7g"),c=n("x/vT");a.default.use(o.a);var u=[{path:"/",component:i.a,redirect:"/home",name:"首页",hidden:!0,children:[{path:"home",component:function(t){n.e(24).then(function(){var e=[n("KR8f")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/login",hidden:!0,component:function(t){n.e(19).then(function(){var e=[n("T+/8")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/store",component:i.a,redirect:"/store/picture",name:"我的门店",icon:"home",auth:[1,3],children:[{path:"info",name:"基本信息",component:function(t){n.e(22).then(function(){var e=[n("9OuO")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"decorate",name:"门店装饰",component:function(t){n.e(10).then(function(){var e=[n("qXLy")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/picture",component:i.a,redirect:"/picture/index",name:"图库管理",icon:"tshirt",noDropdown:!0,children:[{path:"index",component:function(t){n.e(7).then(function(){var e=[n("alSk")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"图库列表"}]},{path:"/new",component:i.a,redirect:"/new/index",name:"时尚资讯",icon:"tshirt",noDropdown:!0,children:[{path:"index",component:function(t){n.e(17).then(function(){var e=[n("UXGl")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Tailorx"},{path:"detail",component:function(t){n.e(5).then(function(){var e=[n("P78M")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"资讯详情"}]},{path:"/designer",component:i.a,redirect:"/designer/index",name:"设计师管理",icon:"document-text",noDropdown:!0,children:[{path:"index",component:function(t){n.e(18).then(function(){var e=[n("R8Jb")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"设计师列表"},{path:"detail",name:"设计师详情",component:function(t){n.e(8).then(function(){var e=[n("dXJo")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/order",component:i.a,name:"订单管理",icon:"document-text",redirect:"/order/customer",children:[{path:"customer",name:"客户订单",redirect:"/order/customer",component:function(t){n.e(1).then(function(){var e=[n("56Wr")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/",component:function(t){n.e(9).then(function(){var e=[n("Yy3t")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"detail",name:"客单详情",redirect:"/order/customer/detail",component:function(t){n.e(1).then(function(){var e=[n("56Wr")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/",meta:{needParam:!0},component:function(t){n.e(12).then(function(){var e=[n("eOog")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"edit",name:"工艺单",meta:{needParam:!0},component:function(t){n.e(3).then(function(){var e=[n("f1s9")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]},{path:"sample",name:"样衣订单",redirect:"/order/sample",component:function(t){n.e(0).then(function(){var e=[n("MsEq")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/",component:function(t){n.e(15).then(function(){var e=[n("EnlS")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"detail",name:"样衣订详情",redirect:"/order/sample/detail",component:function(t){n.e(0).then(function(){var e=[n("MsEq")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/",meta:{needParam:!0},component:function(t){n.e(11).then(function(){var e=[n("1mt5")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"edit",name:"样衣单",component:function(t){n.e(2).then(function(){var e=[n("SVF9")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]}]},{path:"/material",component:i.a,icon:"social-snapchat",name:"面辅料管理",redirect:"/material/price",children:[{path:"price",name:"定价管理",component:function(t){n.e(20).then(function(){var e=[n("Wfxj")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"inventory",name:"库存查询",redirect:"/material/inventory",component:function(t){n.e(26).then(function(){var e=[n("lEuk")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/",component:function(t){n.e(13).then(function(){var e=[n("XXoL")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"detail",name:"库存详情",meta:{needParam:!0},component:function(t){n.e(21).then(function(){var e=[n("0bMz")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]},{path:"/works",component:i.a,redirect:"/works/index",name:"作品管理",icon:"document-text",noDropdown:!0,children:[{path:"index",name:"作品列表",component:function(t){n.e(14).then(function(){var e=[n("m651")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"edit",name:"编辑版库",component:function(t){n.e(4).then(function(){var e=[n("mID0")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/templet",component:i.a,redirect:"/templet/index",name:"版库管理",icon:"document-text",noDropdown:!0,children:[{path:"index",component:function(t){n.e(16).then(function(){var e=[n("IxNe")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"版库列表"},{path:"edit",component:function(t){n.e(6).then(function(){var e=[n("jCQU")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"版库修改"}]},{path:"/queue",component:i.a,redirect:"/queue/index",name:"排号管理",icon:"document-text",noDropdown:!0,children:[{path:"index",component:function(t){n.e(23).then(function(){var e=[n("wkom")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"排号列表"}]},{path:"/arrange",component:i.a,redirect:"/arrange/index",name:"排班管理",icon:"document-text",noDropdown:!0,children:[{path:"index",component:function(t){n.e(25).then(function(){var e=[n("D3ZK")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"排班列表"}]}],s=new o.a({routes:u});s.beforeResolve(function(e,n,a){var o=c.a.get("ticket"),i=c.b.get("cache_router_param")||[],u=t.findWhere(i,{path:e.path});if("/login"!==e.path||"/login"===n.path){if(c.a.get("version")!==r.a.VERSION)return a({path:"/login"});if(t.isEmpty(o))return a({path:"/login"})}if(e.meta.needParam){if(t.isEmpty(e.params)&&t.isEmpty(e.query)){if(t.isEmpty(u))return a(e.matched.length?{path:e.matched[1]?e.matched[1].redirect:e.matched[0].redirect}:{path:"/"});t.map(u.query,function(t,n){e.query[n]=t}),t.map(u.params,function(t,n){e.params[n]=t})}t.isEmpty(u)||(i=t.filter(i,function(t){return t.path!==e.path})),i.push(t.pick(e,"path","params","query")),c.b.set("cache_router_param",i)}a()}),e.a=s}).call(e,n("u47Y"))},yXKM:function(t,e,n){"use strict";e.a={name:"app",components:{}}},zeFN:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-box"},[a("Row",{attrs:{"class-name":"header"}},[a("Col",{attrs:{span:"12"}},[a("img",{staticClass:"ucn-icon logo",attrs:{src:n("iQH9")},on:{click:function(e){t.$router.push("/")}}}),t._v(" "),a("h2",{staticClass:"ucn-icon title",on:{click:function(e){t.$router.push("/")}}},[t._v("Tailorx 商家端管理系统")])]),t._v(" "),a("Col",{staticStyle:{"text-align":"right","padding-right":"20px"},attrs:{span:"12"}},[a("Dropdown",{attrs:{trigger:"click"}},[a("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n        "+t._s(t.userType)+"："+t._s(t.username||"管理员")+"\n        ")])]),t._v(" "),a("Dropdown",{attrs:{trigger:"click"}},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:t.logout}},[t._v("\n        退出\n        "),a("Icon",{attrs:{type:"log-out"}})],1)])],1)],1)],1)},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};e.a=r}},["NHnr"]);