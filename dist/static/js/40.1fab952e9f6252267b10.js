webpackJsonp([40],{"4XfS":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message"},[a("div",{staticClass:"head"},[a("el-button",{on:{click:e.manageMessage}},[e._v(e._s(e.$t("product.page.management")))]),e._v(" "),a("h1",{staticStyle:{color:"red"}},[e._v("这个页面表格要加一列title")])],1),e._v(" "),a("div",{staticClass:"body"},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:e.$t("product.page.systemMessage"),name:"System Message"}},[a("div",{staticClass:"title"},[a("el-button",[e._v(e._s(e.$t("product.page.markAsRead")))]),e._v(" "),a("el-input",{staticClass:"message-input",attrs:{placeholder:"请输入内容"},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),a("div",{staticClass:"content"},[a("v-table",{attrs:{data:e.tableDataList,"data-key":"payment.tableData"}})],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:e.$t("product.page.messageSettings"),name:"Message Settings"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.messageType,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"Message Type",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Notification Method",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("Email")]),e._v(" "),a("el-checkbox",{attrs:{disabled:""},model:{value:e.checked1,callback:function(t){e.checked1=t},expression:"checked1"}},[e._v("Platform")])]}}])})],1),e._v(" "),a("br")],1)],1)],1)])},s=[],c={render:n,staticRenderFns:s};t.a=c},fgdu:function(e,t,a){"use strict";function n(e){a("hhZt")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("nNmJ"),c=a("4XfS"),l=a("Z0/y"),i=n,o=l(s.a,c.a,!1,i,"data-v-8438e9a4",null);t.default=o.exports},hhZt:function(e,t,a){var n=a("rOCB");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("09e2c5a5",n,!0,{})},nNmJ:function(e,t,a){"use strict";var n=a("QGvi");t.a={name:"message",components:{VTable:n.a},data:function(){return{tabPosition:"left",searchValue:"",tableData3:[{content:"这是第一条日志",time:"2018-02-02"},{content:"这是第二条日志",time:"2018-02-02"},{content:"这是第三条日志",time:"2018-02-02"},{content:"这是第四条日志",time:"2018-02-02"},{content:"这是第一条日志",time:"2018-02-02"},{content:"这是第二条日志",time:"2018-02-02"},{content:"这是第三条日志",time:"2018-02-02"},{content:"这是第四条日志",time:"2018-02-02"},{content:"这是第一条日志",time:"2018-02-02"},{content:"这是第二条日志",time:"2018-02-02"},{content:"这是第三条日志",time:"2018-02-02"},{content:"这是第四条日志",time:"2018-02-02"}],activeName:"System Message",multipleSelection:[],currentPage:1,messageType:[{name:"System Message"},{name:"Pending Task"},{name:"Future Task"},{name:"FYI"},{name:"Push"}],checked:!1,checked1:!0}},methods:{handleClick:function(e,t){console.log(e,t)},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)},manageMessage:function(){this.$router.push("/message/management")}}}},rOCB:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".head[data-v-8438e9a4]{padding:10px 0}.message-input[data-v-8438e9a4]{width:300px;float:right}.speTable[data-v-8438e9a4] .el-table__header-wrapper table thead tr th{font-weight:700}",""])}});