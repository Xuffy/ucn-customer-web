webpackJsonp([12],{"0sRL":function(t,s,l){var a=l("R+3L");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);l("FIqI")("0489f544",a,!1,{})},"2mPI":function(t,s,l){var a=l("RvXE");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);l("FIqI")("0569ad9b",a,!1,{})},"4yZW":function(t,s,l){"use strict";var a=function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("div",[l("div",[l("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:t.createRemark}},[t._v("新增")])],1),t._v(" "),l("br"),t._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[l("el-table-column",{attrs:{prop:"time",label:"Time",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"remark",label:"Remark",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"submiter",label:"Submiter",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(s){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:t.checkRemark}},[t._v("查看")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"},on:{click:t.editRemark}},[t._v("修改")]),t._v(" "),l("el-button",{attrs:{type:"text",size:"small"},on:{click:t.deleteRemark}},[t._v("删除")])]}}])})],1),t._v(" "),l("br"),t._v(" "),l("el-pagination",{attrs:{"current-page":t.currentPage1,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),l("el-dialog",{attrs:{title:"新增备注",visible:t.addRemarkFormVisible,center:"",width:"500px"},on:{"update:visible":function(s){t.addRemarkFormVisible=s}}},[l("el-form",{attrs:{model:t.form}},[l("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[l("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.form.name,callback:function(s){t.$set(t.form,"name",s)},expression:"form.name"}})],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(s){t.addRemarkFormVisible=!1}}},[t._v("提交")]),t._v(" "),l("el-button",{on:{click:function(s){t.addRemarkFormVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),l("el-dialog",{attrs:{title:"备注查看",visible:t.checkRemarkFormVisible,center:"",width:"500px"},on:{"update:visible":function(s){t.checkRemarkFormVisible=s}}},[l("el-form",{attrs:{model:t.form}},[l("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[t._v("\n                "+t._s(t.form.name)+"\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur debitis deleniti ea, eligendi est magnam numquam perferendis quidem suscipit, veniam voluptatem voluptatibus! Assumenda, corporis impedit in iste minus neque.\n            ")])],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(s){t.checkRemarkFormVisible=!1}}},[t._v("关 闭")])],1)],1),t._v(" "),l("el-dialog",{attrs:{title:"修改备注",visible:t.editRemarkFormVisible,center:"",width:"500px"},on:{"update:visible":function(s){t.editRemarkFormVisible=s}}},[l("el-form",{attrs:{model:t.form}},[l("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[l("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.form.name,callback:function(s){t.$set(t.form,"name",s)},expression:"form.name"}})],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(s){t.editRemarkFormVisible=!1}}},[t._v("提交")]),t._v(" "),l("el-button",{on:{click:function(s){t.editRemarkFormVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),l("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%","before-close":t.handleClose,center:""},on:{"update:visible":function(s){t.dialogVisible=s}}},[l("span",[t._v("确定删除这条备注吗？")]),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(s){t.dialogVisible=!1}}},[t._v("确 定")]),t._v(" "),l("el-button",{on:{click:function(s){t.dialogVisible=!1}}},[t._v("取 消")])],1)])],1)},e=[];a._withStripped=!0;var X={render:a,staticRenderFns:e};s.a=X},"7mMj":function(t,s,l){"use strict";s.a={name:"compare-list",props:{config:{type:Object,default:{showCompareList:!1}}},data:function(){return{show:!0,tags:[{name:"标签一",type:""},{name:"标签二",type:""},{name:"标签三",type:""},{name:"标签四",type:""},{name:"标签五",type:""}]}},methods:{hideList:function(){this.config.showCompareList=!1},startCompare:function(){this.$router.push("/product/compare")},handleClose:function(t){this.tags.splice(this.tags.indexOf(t),1)}}}},"7wdQ":function(t,s,l){"use strict";var a=function(){var t=this,s=t.$createElement,l=t._self._c||s;return t.config.showCompareList?l("div",{staticClass:"compare-list"},[l("i",{staticClass:"el-icon-d-arrow-right",on:{click:t.hideList}}),t._v(" "),t._l(t.tags,function(s){return l("el-tag",{key:s.name,attrs:{closable:"",type:s.type},on:{close:function(l){t.handleClose(s)}}},[t._v("\n        "+t._s(s.name)+"\n    ")])}),t._v(" "),l("el-button",{staticClass:"btn",attrs:{type:"primary",size:"mini"},on:{click:t.startCompare}},[t._v("Go Compare")])],2):t._e()},e=[];a._withStripped=!0;var X={render:a,staticRenderFns:e};s.a=X},HGHS:function(t,s,l){"use strict";var a=l("hdVR"),e=l("Yp1e");s.a={name:"detail",components:{addTable:a.a,compareList:e.a},data:function(){return{value1:0,tabName:"Basic Info",tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],currentPage1:1,compareConfig:{showCompareList:!1}}},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)},handleClick:function(){},addCompare:function(){this.compareConfig.showCompareList=!0}}}},"R+3L":function(t,s,l){s=t.exports=l("UTlt")(!1),s.push([t.i,".compare-list[data-v-1ac172b2]{position:fixed;bottom:0;left:0;right:0;z-index:2000;height:35px;line-height:35px;background:hsla(0,0%,60%,.447058823529412);padding-left:50px}.compare-list .btn[data-v-1ac172b2]{float:right;margin-top:4px;margin-right:20px}.compare-list .el-tag[data-v-1ac172b2]{background-color:#f4f4f4;color:#666;border:1px solid #f4f4f4;margin-left:10px}",""])},RvXE:function(t,s,l){s=t.exports=l("UTlt")(!1),s.push([t.i,".el-dialog__wrapper .el-dialog__header{border-bottom:1px solid #e9eaec}.el-dialog__wrapper .el-dialog__body{padding:16px}.el-dialog__wrapper .el-form-item--small.el-form-item{margin-bottom:0}.el-dialog__wrapper .el-dialog__footer{padding:12px 18px}",""])},Yp1e:function(t,s,l){"use strict";function a(t){i||l("0sRL")}var e=l("7mMj"),X=l("7wdQ"),i=!1,n=l("Z0/y"),r=a,o=n(e.a,X.a,!1,r,"data-v-1ac172b2",null);o.options.__file="src\\views\\product\\compareList.vue",s.a=o.exports},YvGK:function(t,s,l){"use strict";function a(t){i||l("lZ0z")}Object.defineProperty(s,"__esModule",{value:!0});var e=l("HGHS"),X=l("g3VH"),i=!1,n=l("Z0/y"),r=a,o=n(e.a,X.a,!1,r,"data-v-b0bd44b8",null);o.options.__file="src\\views\\product\\sourcing\\detail.vue",s.default=o.exports},eq8P:function(t,s,l){s=t.exports=l("UTlt")(!1),s.push([t.i,"",""])},g3VH:function(t,s,l){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"Details"},[a("div",{staticClass:"head"},[a("div",{staticClass:"title"},[t._v("\n            Workbenchware（SKU name)\n        ")]),t._v(" "),a("div",{staticClass:"detail"},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-carousel",{attrs:{trigger:"click",height:"200px"}},t._l(4,function(t){return a("el-carousel-item",{key:t},[a("img",{staticStyle:{width:"100%"},attrs:{src:l("qAtO"),alt:""}})])}))],1),t._v(" "),a("el-col",{attrs:{span:18}},[a("el-row",{staticClass:"right"},[a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[t._v("\n                            品名：xxxx\n                        ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[t._v("\n                            工厂货号 :xxxx\n                        ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[t._v("\n                            颜色: xxxx\n                        ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[t._v("\n                            价格: xxxx\n                        ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[t._v("\n                            价格条款: xxxx\n                        ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[t._v("\n                            价格条款区域: xxxx\n                        ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[t._v("\n                            数量单位: xxxx\n                        ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[t._v("\n                            MOQ: xxxx\n                        ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[t._v("\n                            供应商名称: xxxx\n                        ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t._v("\n                            描述: xxxx\n                        ")])],1)],1)],1),t._v(" "),a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"}},[t._v("Create Inquiry")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("Create Order")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addCompare}},[t._v("Add to Compare")]),t._v(" "),a("el-button",{attrs:{round:""}},[t._v("Add to Bookmark")])],1)],1)]),t._v(" "),a("div",{staticClass:"body"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.tabName,callback:function(s){t.tabName=s},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"Basic Info",name:"Basic Info"}},[a("el-row",[a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品条码 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        英文品名 : XXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t._v("\n                        产品英文描述 : XXXXXXXXXXXXXXXXXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        客户语言品名 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        客户货号 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t._v("\n                        客户语言描述 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        供应商编号 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        供应商简称 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        供应商货号 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        计量单位 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品组成 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        英文材质 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        英文颜色 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        起订量 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        交货期 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品设计 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        一级分类名称 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        二级分类名称 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        三级分类名称 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        四级分类名称 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        FOB币种 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        FOB单价 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        FOB港口 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        EXW单价 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        EXW币种 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        不可销售国家 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        适用年龄 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        保质期 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        保质期单位 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t._v("\n                        说明 : XXXXXXXXXXXXXXXXXXXXXXXX\n                    ")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Customer Info",name:"Customer Info"}},[a("el-row",[a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        增值税率% : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        退税率% : XXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        海关编码 : XXXXXXXXXXXXXXXXXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        报关中文品名 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        报关英文品名 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中文商标 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        英文商标 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        商检中文品名 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        商检英文品名 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        申报要素 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        原产地 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        检验检疫类别 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        品牌 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        品牌备注 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        相关品牌 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        认证 : XXXXXX\n                    ")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Price Info",name:"Price Info"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"FOB币种",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"FOB单价",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"FOB港口",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"EXW单价",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"EXW币种",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"其他价格条款",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"其他价格条款单价",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"其他价格条款区域",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"其他价格条款币种",width:"180px"}})],1),t._v(" "),a("br"),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage1,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Packing Info",name:"Packing Info"}},[a("el-row",[a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        重量单位 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        长度单位 : XXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        体积单位 : XXXXXXXXXXXXXXXXXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品长 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品宽 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品高 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品净重 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品体积 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品包装方式CN : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品包装方式EN : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包单位 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包商品数 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包长 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包宽 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包高 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包净重 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包毛重 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包体积 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包描述 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包包装方式CN : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        中包包装方式EN : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外箱单位 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外箱描述 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外箱中包数 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外箱商品数 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外箱长 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外箱宽 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外箱高 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外箱净重 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外箱毛重 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外箱体积 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外包装方式CN : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        外包装方式EN : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        可否贴牌 : XXXXXX\n                    ")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Logistic",name:"Logistic"}},[a("el-row",[a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        20GP产品数量 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        40GP产品数量 : XXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        40HQ产品数量 : XXXXXXXXXXXXXXXXXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        托盘尺寸 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        每托盘产品数量 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        特殊运输要求 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        库存成本计算方式 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        默认仓库 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        库存数量 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        安全库存 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        最低库存量 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        最大批次量 : XXXXXX\n                    ")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Other Info",name:"Other Info"}},[a("el-row",[a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        主销国家 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        主销区域 : XXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        开发时间 : XXXXXXXXXXXXXXXXXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        质量标准 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        上市年份 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        是否展示盒包装 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        展示盒内产品数 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        展示盒长宽高 : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        其他包装信息CN : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        其他包装信息EN : XXXXXX\n                    ")]),t._v(" "),a("el-col",{staticClass:"list",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[t._v("\n                        产品或包装可否调整 : XXXXXX\n                    ")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Attachment",name:"Attachment"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"History",name:"History"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"客户询价单号",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"客户合同号",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"供应商合同号",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"合同日期",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"价格条款",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"价格条款区域",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"采购币种",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"采购单价",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"采购总价",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"总数量",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"交货日期",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"验货日期",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"发运日期",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"发运数量",width:"180px"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"合同数量",width:"180px"}})],1),t._v(" "),a("br"),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage1,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Remark",name:"Remark"}},[a("add-table")],1)],1)],1),t._v(" "),a("compare-list",{attrs:{config:t.compareConfig}})],1)},e=[];a._withStripped=!0;var X={render:a,staticRenderFns:e};s.a=X},hdVR:function(t,s,l){"use strict";function a(t){i||(l("2mPI"),l("qgOP"))}var e=l("wZwn"),X=l("4yZW"),i=!1,n=l("Z0/y"),r=a,o=n(e.a,X.a,!1,r,"data-v-9be5098c",null);o.options.__file="src\\views\\product\\addlineTable.vue",s.a=o.exports},lZ0z:function(t,s,l){var a=l("wlyG");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);l("FIqI")("7b6e1ba4",a,!1,{})},qAtO:function(t,s,l){t.exports=l.p+"static/img/login-back.94e5a96.jpg"},qgOP:function(t,s,l){var a=l("eq8P");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);l("FIqI")("5c0baa96",a,!1,{})},wZwn:function(t,s,l){"use strict";s.a={name:"addline-table",data:function(){return{columns:[{title:"备注",key:"remark",align:"center"},{title:"操作人",key:"submiter",align:"center"},{title:"操作时间",key:"time",align:"center"},{title:"操作",key:"action",align:"center",render:function(t,s){return t("div",[t("Button",{props:{type:"text",size:"small"}},"查看"),t("Button",{props:{type:"text",size:"small"}},"修改"),t("Button",{props:{type:"text",size:"small"}},"删除")])}}],data:[{remark:"只有充钱你才能变得更强",submiter:"麻花藤",time:"2012-02-02"},{remark:"我从不卖假货",submiter:"强东",time:"2013-03-03"}],value:"",currentPage1:1,tableData:[{time:"2018-02-23",remark:"这是一条操作",submiter:"麻花藤"}],form:{name:"按时发生付款静安寺浩哥看暗示过看",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},addRemarkFormVisible:!1,checkRemarkFormVisible:!1,editRemarkFormVisible:!1,dialogVisible:!1,formLabelWidth:"50px"}},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)},createRemark:function(){this.addRemarkFormVisible=!0},checkRemark:function(){this.checkRemarkFormVisible=!0},editRemark:function(){this.editRemarkFormVisible=!0},deleteRemark:function(){this.dialogVisible=!0},handleClose:function(){}}}},wlyG:function(t,s,l){s=t.exports=l("UTlt")(!1),s.push([t.i,".Details[data-v-b0bd44b8]{background-color:#f4f4f4}.Details .head[data-v-b0bd44b8]{background-color:#fff;padding:0 20px}.Details .head .title[data-v-b0bd44b8]{position:relative;height:40px;line-height:40px;font-weight:700;font-size:18px;color:#666}.Details .head .title .btn[data-v-b0bd44b8]{position:absolute;right:10px;top:4px}.Details .head .detail[data-v-b0bd44b8]{margin-top:8px}.Details .head .detail .carousel-img[data-v-b0bd44b8]{height:170px}.Details .head .detail .carousel-img img[data-v-b0bd44b8]{width:100%;height:100%}.Details .head .detail .list[data-v-b0bd44b8]{padding-left:30px;font-size:14px;line-height:2.5;border-bottom:1px dotted #e0e0e0}.Details .head .detail .btns[data-v-b0bd44b8]{text-align:center;padding:15px 0}.Details .head .detail .btns>Button[data-v-b0bd44b8]{margin-right:10px}.Details .body[data-v-b0bd44b8]{margin-top:10px;margin-bottom:35px;background-color:#fff}.Details .body .list[data-v-b0bd44b8]{line-height:30px;font-size:13px}",""])}});