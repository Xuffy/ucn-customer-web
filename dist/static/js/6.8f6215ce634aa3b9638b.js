webpackJsonp([6],{"++DM":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bookmark"},[o("div",{staticClass:"title"},[o("span",[t._v(t._s(t.title))]),t._v(" "),o("el-button",{staticClass:"title-btn",attrs:{type:"text"},on:{click:t.switchDisplay}},[t._v(t._s(t.btnInfo)+"\n        ")])],1),t._v(" "),o("div",[o("el-form",{ref:"productFormTop",attrs:{model:t.productForm,rules:t.productFormRules,"label-width":"190px"}},[o("el-row",{staticClass:"speZone"},t._l(t.$db.product.buyerBasic,function(e){return e.isDefaultShow&&"sellerProductOverview"===e.belongPage?o("el-col",{key:e.key,attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[o("el-form-item",{attrs:{prop:e.key,label:e.label}},["dropdown"===e.showType?o("drop-down",{ref:"dropDown",refInFor:!0,attrs:{list:t.dropData,defaultProps:t.defaultProps},model:{value:t.productForm[e.key],callback:function(o){t.$set(t.productForm,e.key,o)},expression:"productForm[v.key]"}}):t._e(),t._v(" "),"input"===e.showType?o("el-input",{attrs:{size:"mini"},model:{value:t.productForm[e.key],callback:function(o){t.$set(t.productForm,e.key,o)},expression:"productForm[v.key]"}}):t._e(),t._v(" "),"select"===e.showType?o("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"不限"},model:{value:t.productForm[e.key],callback:function(o){t.$set(t.productForm,e.key,o)},expression:"productForm[v.key]"}},t._l(e.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})):t._e()],1)],1):t._e()}))],1)],1),t._v(" "),o("div",{staticClass:"body",class:{hide:t.hideBody}},[o("el-form",{ref:"productForm",attrs:{rule:t.productFormRules,model:t.productForm,"label-width":"190px"}},[o("el-row",{staticClass:"speZone"},t._l(t.$db.product.buyerBasic,function(e){return e.isDefaultShow||"sellerProductOverview"!==e.belongPage?t._e():o("el-col",{key:e.key,attrs:{xs:24,sm:12,md:12,lg:8,xl:8}},[o("el-form-item",{attrs:{prop:e.key,label:e.label}},["dropdown"===e.showType?o("drop-down",{ref:"dropDown",refInFor:!0,attrs:{list:t.dropData}}):t._e(),t._v(" "),"input"===e.showType?o("el-input",{attrs:{size:"mini"},model:{value:t.productForm[e.key],callback:function(o){t.$set(t.productForm,e.key,o)},expression:"productForm[v.key]"}}):t._e(),t._v(" "),"select"===e.showType?o("el-select",{staticClass:"speSelect",attrs:{size:"mini",placeholder:"请选择"},model:{value:t.productForm[e.key],callback:function(o){t.$set(t.productForm,e.key,o)},expression:"productForm[v.key]"}},t._l(e.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})):t._e(),t._v(" "),"exwNumber"===e.showType?o("div",{staticClass:"section-number"},[o("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:t.productForm.minExwPrice,callback:function(e){t.$set(t.productForm,"minExwPrice",e)},expression:"productForm.minExwPrice"}}),t._v(" "),o("div",{staticClass:"section-line"},[t._v("--")]),t._v(" "),o("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:t.productForm.maxExwPrice,callback:function(e){t.$set(t.productForm,"maxExwPrice",e)},expression:"productForm.maxExwPrice"}})],1):t._e(),t._v(" "),"fobNumber"===e.showType?o("div",{staticClass:"section-number"},[o("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:t.productForm.minFobPrice,callback:function(e){t.$set(t.productForm,"minFobPrice",e)},expression:"productForm.minFobPrice"}}),t._v(" "),o("div",{staticClass:"section-line"},[t._v("--")]),t._v(" "),o("el-input",{staticClass:"section-input",attrs:{size:"mini"},model:{value:t.productForm.maxFobPrice,callback:function(e){t.$set(t.productForm,"maxFobPrice",e)},expression:"productForm.maxFobPrice"}})],1):t._e(),t._v(" "),"number"===e.showType?o("el-input",{attrs:{size:"mini"},model:{value:t.productForm[e.key],callback:function(o){t.$set(t.productForm,e.key,o)},expression:"productForm[v.key]"}}):t._e()],1)],1)}))],1)],1),t._v(" "),o("div",{staticClass:"btn-group"},[o("el-button",{attrs:{loading:t.disabledSearch,type:"primary"},on:{click:t.search}},[t._v(t._s(t.$i.product.search))]),t._v(" "),o("el-button",{attrs:{type:"info",plain:""},on:{click:t.clear}},[t._v(t._s(t.$i.product.clear))])],1),t._v(" "),o("div",{staticClass:"footer"},[t.hideBtn?t._e():o("div",{staticClass:"btns"},[o("el-button",{on:{click:t.addNewProduct}},[t._v(t._s(t.$i.product.createInquiry))]),t._v(" "),o("el-button",[t._v(t._s(t.$i.product.createOrder))]),t._v(" "),o("el-button",{attrs:{disabled:t.disabledCompare}},[t._v(t._s(t.$i.product.compare))]),t._v(" "),o("el-button",{attrs:{disabled:t.disabledAddBookmark},on:{click:t.addToBookmark}},[t._v(t._s(t.$i.product.addToBookmark))]),t._v(" "),o("el-button",[t._v(t._s(t.$i.product.download+"("+t.downloadBtnInfo+")"))])],1),t._v(" "),o("v-table",{attrs:{data:t.tableDataList,buttons:[{label:"detail",type:1}]},on:{"change-checked":t.changeChecked,action:t.btnClick}}),t._v(" "),t.hideBtn?o("div",{staticClass:"footer-btn"},[o("el-button",{attrs:{type:"primary"},on:{click:t.postData}},[t._v("OK")]),t._v(" "),o("el-button",{on:{click:t.cancel}},[t._v("Cancel")])],1):t._e()],1)])},a=[];i._withStripped=!0;var r={render:i,staticRenderFns:a};e.a=r},"1nbe":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section-number"},[o("el-form-item",{attrs:{label:t.$t("product.page.exwPrice")}},[o("el-input-number",{staticClass:"numberInput",attrs:{min:0,controls:!1},model:{value:t.data.max,callback:function(e){t.$set(t.data,"max",e)},expression:"data.max"}})],1)],1)},a=[];i._withStripped=!0;var r={render:i,staticRenderFns:a};e.a=r},"4zFU":function(t,e,o){"use strict";function i(t){s||o("MsKt")}var a=o("l+5M"),r=o("++DM"),s=!1,n=o("Z0/y"),c=i,l=n(a.a,r.a,!1,c,"data-v-6ce2534f",null);l.options.__file="src\\views\\product\\addProduct.vue",e.a=l.exports},Cldd:function(t,e,o){"use strict";function i(t){s||o("n5EH")}var a=o("TD7D"),r=o("1nbe"),s=!1,n=o("Z0/y"),c=i,l=n(a.a,r.a,!1,c,"data-v-5ae062dd",null);l.options.__file="src\\views\\product\\sectionNumber.vue",e.a=l.exports},MsKt:function(t,e,o){var i=o("O6u8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("FIqI")("97954d92",i,!1,{})},O6u8:function(t,e,o){e=t.exports=o("UTlt")(!1),e.push([t.i,".bookmark[data-v-6ce2534f]{padding-right:20px}.title[data-v-6ce2534f]{font-weight:700;font-size:18px;height:32px;line-height:32px;color:#666}.title-btn[data-v-6ce2534f]{float:right;margin-right:5px}.head-list label[data-v-6ce2534f]{width:190px;display:inline-block;height:42px;line-height:42px;text-align:right;font-size:14px;color:#606266;padding:0 12px 0 0;-webkit-box-sizing:border-box;box-sizing:border-box;float:left}.head-list .content[data-v-6ce2534f]{margin-left:190px;height:42px}.head-list .content[data-v-6ce2534f] input{height:42px}.section-number .section-input[data-v-6ce2534f]{float:left;width:40%}.section-number .section-line[data-v-6ce2534f]{float:left}.outGroup .label[data-v-6ce2534f]{width:190px;float:left}.body[data-v-6ce2534f]{overflow:hidden;max-height:320px;display:block;-webkit-transition:max-height .5s cubic-bezier(.445,.05,.55,.95);transition:max-height .5s cubic-bezier(.445,.05,.55,.95)}.body .numberInput[data-v-6ce2534f]{width:80px;text-align:left}.body .numberInput[data-v-6ce2534f] input{padding:0}.hide[data-v-6ce2534f]{max-height:0}.form-spelist[data-v-6ce2534f]{margin-bottom:10px!important}.form-spelist[data-v-6ce2534f] .ivu-form-item-content{line-height:normal}.form-list[data-v-6ce2534f]{margin-bottom:10px}.speSelect[data-v-6ce2534f]{width:100%}.btn-group[data-v-6ce2534f]{text-align:center;margin-top:10px;padding-bottom:15px;border-bottom:1px solid #e0e0e0}.btn-group .search[data-v-6ce2534f]{margin-right:30px}.footer .btns[data-v-6ce2534f]{padding:10px 0}.footer-btn[data-v-6ce2534f]{text-align:center}",""])},PdhJ:function(t,e,o){"use strict";var i=o("4zFU");console.log("sourcing"),e.a={name:"sourcing",components:{product:i.a},data:function(){return{title:this.$i.product.title,type:"product"}},methods:{}}},TD7D:function(t,e,o){"use strict";e.a={name:"section-number",props:{data:{type:Object,default:{}}},data:function(){return{}},methods:{}}},Wu4X:function(t,e,o){e=t.exports=o("UTlt")(!1),e.push([t.i,"",""])},aEYZ:function(t,e,o){"use strict";function i(t){s||o("uatv")}Object.defineProperty(e,"__esModule",{value:!0});var a=o("PdhJ"),r=o("lGOr"),s=!1,n=o("Z0/y"),c=i,l=n(a.a,r.a,!1,c,"data-v-9793ddaa",null);l.options.__file="src\\views\\product\\sourcing\\sourcing.vue",e.default=l.exports},kGFj:function(t,e,o){e=t.exports=o("UTlt")(!1),e.push([t.i,"",""])},"l+5M":function(t,e,o){"use strict";var i=o("QGvi"),a=o("bGai"),r=o("Cldd");e.a={name:"overview",components:{dropDown:a.d,sectionNumber:r.a,VTable:i.a},props:{title:{type:String,default:""},type:{type:String,default:"product"},hideBtn:{type:Boolean,default:!1},disabledLine:{type:Array,default:function(){return[]}}},data:function(){return{hideBody:!0,btnInfo:this.$i.product.advanced,disabledSearch:!1,selectList:[],downloadBtnInfo:"All",disabledAddBookmark:!0,disabledCompare:!0,productForm:{categoryId:"",nameCnLike:"",readilyAvailable:"",customerSkuCodeLike:"",minExwPrice:"",maxExwPrice:"",codeLike:"",nameEnLike:"",minFobPrice:"",maxFobPrice:"",materialEnLike:"",country:"",supplierNameLike:"",outerCartonMethodEnLike:"",methodPkgEnLike:"",deliveryDates:"",descEnLike:"",descCnLike:"",pn:1,ps:50,recycle:!1},productFormRules:{nameCn:[{max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}]},dropData:[],defaultProps:{label:"name",children:"children"},tableDataList:[],dataColumn:[]}},methods:{switchDisplay:function(){this.hideBody=!this.hideBody},clear:function(){this.$refs.productFormTop.resetFields(),this.$refs.productForm.resetFields(),this.$set(this.productForm,"categoryId",""),this.$set(this.productForm,"minExwPrice",""),this.$set(this.productForm,"maxExwPrice",""),this.$set(this.productForm,"minFobPrice",""),this.$set(this.productForm,"maxFobPrice","")},search:function(){var t=this;console.log(this.productForm),this.disabledSearch=!0,this.$ajax.post(this.$apis.get_buyerProductList,this.productForm).then(function(e){e.datas.forEach(function(t){0===t.status?t.status="下架(暂时中文)":1===t.status&&(t.status="上架")}),t.tableDataList=t.$getDB(t.$db.product.indexTable,e.datas),t.disabledSearch=!1}).catch(function(e){t.disabledSearch=!1})},handleChange:function(t){console.log(t)},changeChecked:function(t){this.selectList=t},postData:function(){this.$refs.productFormTop.resetFields(),this.$emit("handleOK",this.selectList)},cancel:function(){this.$emit("handleCancel")},getCategoryId:function(){var t=this;this.$ajax.get(this.$apis.getCategory,{}).then(function(e){t.dropData=e}).catch(function(t){console.log(t)})},getData:function(){var t=this;this.$ajax.post(this.$apis.get_buyerProductList,{recycle:!1}).then(function(e){t.tableDataList=t.$getDB(t.$db.product.indexTable,e.datas),t.disabledLine.length>0&&t.disabledLine.forEach(function(e){t.tableDataList.forEach(function(t){t.id.value===e&&(t._disabled=!0)})})}).catch(function(t){console.log(t)})},addToBookmark:function(){console.log(this.selectList)},btnClick:function(t){t._disabled||this.windowOpen("/product/sourcingDetail",{id:t.id.value})},addNewProduct:function(){}},created:function(){this.getData(),this.getCategoryId()},watch:{hideBody:function(t){this.btnInfo=t?this.$i.product.advanced:this.$i.product.hideTheAdvanced},selectList:function(t){0===t.length?(this.downloadBtnInfo="All",this.disabledAddBookmark=!0):(this.downloadBtnInfo=t.length,this.disabledAddBookmark=!1),t.length>=2?this.disabledCompare=!1:this.disabledCompare=!0}}}},lGOr:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("product",{attrs:{title:t.title,type:t.type}})],1)},a=[];i._withStripped=!0;var r={render:i,staticRenderFns:a};e.a=r},n5EH:function(t,e,o){var i=o("Wu4X");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("FIqI")("68b0bad0",i,!1,{})},uatv:function(t,e,o){var i=o("kGFj");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("FIqI")("8924bd6c",i,!1,{})}});