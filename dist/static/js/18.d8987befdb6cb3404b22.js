webpackJsonp([18],{"9aSr":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"orderOverview"},[a("h3",{staticClass:"hd"},[e._v("Order Overview")]),e._v(" "),a("div",{staticClass:"status"},[a("div",{staticClass:"btn-wrap"},[a("span",[e._v("Status ")]),e._v(" "),a("el-radio-group",{attrs:{size:"mini"},model:{value:e.params.status,callback:function(t){e.$set(e.params,"status",t)},expression:"params.status"}},[a("el-radio-button",{attrs:{label:"1"}},[e._v(" "+e._s(e.$i.baseText.TBCByCustomer))]),e._v(" "),a("el-radio-button",{attrs:{label:"2"}},[e._v(e._s(e.$i.baseText.TBCBySupplier))]),e._v(" "),a("el-radio-button",{attrs:{label:"3"}},[e._v(e._s(e.$i.baseText.process))]),e._v(" "),a("el-radio-button",{attrs:{label:"4"}},[e._v(e._s(e.$i.baseText.finish))]),e._v(" "),a("el-radio-button",{attrs:{label:"5"}},[e._v(e._s(e.$i.baseText.cancel))])],1)],1),e._v(" "),a("div",{staticClass:"select-wrap"},[a("selectSearch",{attrs:{options:e.options},on:{selectChange:e.selectChange,inputChange:e.inputEnter}})],1)]),e._v(" "),a("div",{staticClass:"fn"},[a("div",{staticClass:"btn-wrap"},[a("el-button",[e._v(e._s(e.$i.baseText.downloadall))]),e._v(" "),a("el-button",{on:{click:e.creat_order}},[e._v(e._s(e.$i.baseText.createOrder))]),e._v(" "),a("el-button",{attrs:{disabled:e.prodisabled}},[e._v("finish")]),e._v(" "),a("el-button",{attrs:{type:"danger",disabled:e.disabled}},[e._v(e._s(e.$i.baseText.delete))])],1),e._v(" "),a("div",{staticClass:"viewBy"},[a("span",[e._v("View by ")]),e._v(" "),a("el-radio-group",{attrs:{size:"mini"},model:{value:e.params.view,callback:function(t){e.$set(e.params,"view",t)},expression:"params.view"}},[a("el-radio-button",{attrs:{label:"1"}},[e._v(e._s(e.$i.baseText.order))]),e._v(" "),a("el-radio-button",{attrs:{label:"2"}},[e._v(e._s(e.$i.baseText.SKU))])],1),e._v(" "),a("div",{staticClass:"set"})],1)]),e._v(" "),a("v-table",{ref:"vtable",staticStyle:{marginTop:"10px"},attrs:{data:e.tabData,buttons:[{label:"detail",type:1}],loading:e.loading},on:{action:e.onAction}})],1)},i=[];s._withStripped=!0;var r={render:s,staticRenderFns:i};t.a=r},"9gTv":function(e,t,a){var s=a("Tg6J");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("FIqI")("0d336c03",s,!1,{})},GDYq:function(e,t,a){"use strict";var s=a("bGai");t.a={name:"orderOverview",components:{dropDown:s.a,VTable:s.b,selectSearch:s.c},data:function(){return{value:"",keyWord:"",disabled:!1,prodisabled:!0,tabData:[],loading:!1,options:[{id:"1",label:"Order No"},{id:"2",label:"Sku Code"}],keyType:"",params:{status:"",orderNo:"",skuCode:"",view:"1",ps:10,pn:1}}},methods:{onAction:function(e,t){console.log(e)},creat_order:function(){this.$router.push("/order/creat")},selectChange:function(e){this.keyType=e},inputEnter:function(e){console.log(e),"1"==e.keyType?this.params.orderNo=e.key:this.params.skuCode=e.key,console.log(this.params)},getdata:function(){var e=this;this.loading=!0,this.$ajax.post(this.$apis.get_orderlist,{status:"",orderNo:"",skuCode:"",view:"2",ps:10,pn:1}).then(function(t){console.log(t),e.tabData=e.$getDB(e.$db.order.overview,t.datas)}).catch(function(e){console.log(e)})}},computed:{},created:function(){this.getdata()},mounted:function(){this.loading=!1},updated:function(){},watch:{params:{handler:function(e,t){console.log(e,t),5==e.status?this.disabled=!1:3==e.status?(this.prodisabled=!1,this.disabled=!0):(this.disabled=!0,this.prodisabled=!0)},deep:!0}}}},Tg6J:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".orderOverview .hd[data-v-e00150ca]{height:50px;line-height:50px;border-bottom:1px solid #ccc;font-size:18px;color:#666}.orderOverview .status[data-v-e00150ca]{height:60px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box}.orderOverview .status .btn-wrap[data-v-e00150ca],.orderOverview .status[data-v-e00150ca]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.orderOverview .status .btn-wrap span[data-v-e00150ca]{font-size:14px}.orderOverview .status .btn-wrap button[data-v-e00150ca]{padding:2px 5px;cursor:pointer;border:1px solid #108ee9;background-color:#fff;margin-left:10px;border-radius:5px;-webkit-transition:all .5s ease;transition:all .5s ease}.orderOverview .status .btn-wrap button.active[data-v-e00150ca],.orderOverview .status .btn-wrap button[data-v-e00150ca]:hover{background-color:#108ee9;color:#fff}.orderOverview .status .select-wrap[data-v-e00150ca]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.orderOverview .status .select-wrap .select[data-v-e00150ca]{width:110px;margin-right:5px}.orderOverview .fn[data-v-e00150ca]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px 15px;-webkit-box-sizing:border-box;box-sizing:border-box}.orderOverview .fn .viewBy[data-v-e00150ca]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.orderOverview .fn .viewBy span[data-v-e00150ca]{font-size:14px;color:#666}.orderOverview .fn .viewBy .set[data-v-e00150ca]{cursor:pointer;padding-left:40px}.orderOverview .fn .viewBy .set i[data-v-e00150ca]{font-size:25px}.orderOverview .fn .viewBy .set .speDropdown[data-v-e00150ca]{display:none}.orderOverview .fn .viewBy .set .speDropdown[data-v-e00150ca],.orderOverview .fn .viewBy .set .speDropdownshow[data-v-e00150ca]{position:absolute;right:40px;background-color:#fff;z-index:2000}",""])},ekUl:function(e,t,a){var s=a("r18g");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("FIqI")("78e21086",s,!1,{})},qVt9:function(e,t,a){"use strict";function s(e){o||(a("ekUl"),a("9gTv"))}Object.defineProperty(t,"__esModule",{value:!0});var i=a("GDYq"),r=a("9aSr"),o=!1,n=a("Z0/y"),d=s,l=n(i.a,r.a,!1,d,"data-v-e00150ca",null);l.options.__file="src\\views\\order\\overView.vue",t.default=l.exports},r18g:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"[data-v-e00150ca] .el-input-group__append{padding:0!important}",""])}});