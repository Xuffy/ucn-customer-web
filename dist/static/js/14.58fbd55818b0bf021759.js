webpackJsonp([14],{"+Mie":function(t,e,a){var s=a("ZOyh");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("8bSs")("8855bcb8",s,!1)},"04QK":function(t,e,a){"use strict";function s(t){i||a("+Mie")}var r=a("ZMJk"),n=a("zQ7w"),i=!1,o=a("/Xao"),c=s,l=o(r.a,n.a,!1,c,"data-v-44ba65cc",null);l.options.__file="src\\components\\common\\image.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=l.exports},"1nkq":function(t,e,a){var s=a("wDhi");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("8bSs")("6d4069e5",s,!1)},FGw9:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,"",""])},HCy0:function(t,e,a){"use strict";function s(t){i||a("1nkq")}var r=a("kWYF"),n=a("OtLT"),i=!1,o=a("/Xao"),c=s,l=o(r.a,n.a,!1,c,"data-v-378415f7",null);l.options.__file="src\\components\\order\\addTag.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=l.exports},KEEv:function(t,e,a){var s=a("FGw9");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("8bSs")("45a51d22",s,!1)},OtLT:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tx-order-add-tag"},[a("Form",{attrs:{"label-width":90}},[t.readonly?t._e():a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"添加标签："}},[a("Input",{staticStyle:{"max-width":"200px","margin-right":"10px"},attrs:{placeholder:"自定义标签"},model:{value:t.addTagName,callback:function(e){t.addTagName=e},expression:"addTagName"}}),t._v(" "),a("Button",{attrs:{type:"ghost",loading:t.addTagLoading},on:{click:function(e){t.addTag()}}},[t._v("添加")])],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"已选标签："}},t._l(t.selected,function(e){return a("Tag",{key:e.id||e,attrs:{closable:!t.readonly,color:t.readonly?"default":"blue"},on:{"on-close":function(a){t.deleteTag(e)}}},[t._v("\n        "+t._s(e.tagName||e)+"\n      ")])})),t._v(" "),t.readonly?t._e():a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"推荐标签："}},t._l(t.recommendList,function(e){return a("Tag",{key:e.id,attrs:{color:t.isSelected(e)?"blue":"default"},nativeOn:{click:function(a){t.addTag(e)}}},[t._v(t._s(e.tagName)+"\n      ")])}))],1)],1)},r=[];s._withStripped=!0;var n={render:s,staticRenderFns:r};e.a=n},ZMJk:function(t,e,a){"use strict";e.a={name:"commonImage",props:{src:{type:String},width:{type:Number,default:0},height:{type:Number,default:0},round:{type:Boolean,default:!1},icon:{type:String,default:"image"},backColor:{type:String,default:"#F4F4F4"},fill:{type:Boolean,default:!0}},data:function(){return{imgSrc:"",isComplete:!1}},mounted:function(){this.imgSrc=this.ossFilter(this.src)},watch:{src:function(t){this.imgSrc=this.ossFilter(t)}},methods:{getData:function(t){},ossFilter:function(t){var e=this;return this.$nextTick(function(){e.$refs.image.onload=function(){e.isComplete=!0}}),!t||t.indexOf("tailorx.cn")<0||!this.width&&!this.height?t:(t+=t.indexOf("?")>-1?"&":"?",t.replace("https://","//"),t.replace("http://","//"),this.isComplete=!1,t+"x-oss-process=image/resize,w_"+this.width+",h_"+this.height+(this.fill?",m_fill":""))}}}},ZOyh:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".tx-order-common-image[data-v-44ba65cc]{text-align:center;position:relative;display:inline-block}.tx-order-common-image img[data-v-44ba65cc]{max-width:100%;max-height:100%}.tx-order-common-image i[data-v-44ba65cc],.tx-order-common-image img[data-v-44ba65cc]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tx-order-common-image i[data-v-44ba65cc]{color:#eaeaea}.tx-order-common-image.no-url[data-v-44ba65cc]{background:none!important}.tx-order-common-image.no-url i[data-v-44ba65cc]{color:#f4f4f4}.tx-order-common-image.isRound[data-v-44ba65cc],.tx-order-common-image.isRound img[data-v-44ba65cc]{border-radius:50%}",""])},ZvfZ:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"works-list tx-container"},[a("div",{staticClass:"tx-form-search"},[a("Form",{ref:"formSearch",staticStyle:{"max-width":"1300px"},attrs:{model:t.formSearch,"label-width":65,inline:""}},[a("FormItem",{attrs:{label:"关键字"}},[a("Input",{attrs:{placeholder:"搜索标签、主题、设计师"},model:{value:t.formSearch.searchTerm,callback:function(e){t.$set(t.formSearch,"searchTerm",e)},expression:"formSearch.searchTerm"}})],1),t._v(" "),a("FormItem",{attrs:{label:"性别标签"}},[a("Select",{attrs:{clearable:"",placeholder:"全部"},model:{value:t.formSearch.sexTagId,callback:function(e){t.$set(t.formSearch,"sexTagId",e)},expression:"formSearch.sexTagId"}},t._l(t.tagList,function(e){return 1==e.tagType?a("Option",{key:e.tagId,attrs:{value:e.tagId}},[t._v("\n            "+t._s(e.tagName)+"\n          ")]):t._e()}))],1),t._v(" "),a("FormItem",{attrs:{label:"款式标签"}},[a("Select",{attrs:{clearable:"",placeholder:"全部"},model:{value:t.formSearch.styleTagId,callback:function(e){t.$set(t.formSearch,"styleTagId",e)},expression:"formSearch.styleTagId"}},t._l(t.tagList,function(e){return 2==e.tagType?a("Option",{key:e.tagId,attrs:{value:e.tagId}},[t._v("\n            "+t._s(e.tagName)+"\n          ")]):t._e()}))],1),t._v(" "),a("FormItem",{attrs:{label:"季节标签"}},[a("Select",{attrs:{clearable:"",placeholder:"全部"},model:{value:t.formSearch.seasonTagId,callback:function(e){t.$set(t.formSearch,"seasonTagId",e)},expression:"formSearch.seasonTagId"}},t._l(t.tagList,function(e){return 3==e.tagType?a("Option",{key:e.tagId,attrs:{value:e.tagId}},[t._v("\n            "+t._s(e.tagName)+"\n          ")]):t._e()}))],1),t._v(" "),a("FormItem",{attrs:{label:"发布状态"}},[a("Select",{attrs:{clearable:"",placeholder:"全部"},model:{value:t.formSearch.status,callback:function(e){t.$set(t.formSearch,"status",e)},expression:"formSearch.status"}},[a("Option",{attrs:{value:"2"}},[t._v("已发布")]),t._v(" "),a("Option",{attrs:{value:"1"}},[t._v("未发布")])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"作品来源"}},[a("Select",{attrs:{clearable:"",placeholder:"全部"},model:{value:t.formSearch.sourceType,callback:function(e){t.$set(t.formSearch,"sourceType",e)},expression:"formSearch.sourceType"}},[a("Option",{attrs:{value:"1"}},[t._v("上传")]),t._v(" "),a("Option",{attrs:{value:"2"}},[t._v("资讯")]),t._v(" "),a("Option",{attrs:{value:"3"}},[t._v("图库")])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"创建时间"}},[a("DatePicker",{staticStyle:{width:"240px"},attrs:{type:"daterange",confirm:"",placement:"bottom-end",placeholder:"选择时间范围"},model:{value:t.formSearch.time,callback:function(e){t.$set(t.formSearch,"time",e)},expression:"formSearch.time"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.getDataList(1)}}},[t._v("查询")]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},on:{click:function(e){t.handleReset()}}},[t._v("重置")]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"success"},on:{click:function(e){t.$router.push({path:"/works/edit"})}}},[t._v("\n          上传作品\n        ")])],1)],1)],1),t._v(" "),a("Table",{ref:"orderTable",staticStyle:{"margin-top":"20px"},attrs:{border:"",loading:t.listLoading,columns:t.listTitle,data:t.dataList.data}}),t._v(" "),a("div",{staticStyle:{"text-align":"right",width:"100%","margin-top":"30px"}},[a("Page",{attrs:{total:t.dataList.totalSize,current:t.formSearch.page+1,"show-total":"","show-elevator":"","show-sizer":"",placement:"top"},on:{"on-change":t.getDataList,"on-page-size-change":t.changePageSize}})],1)],1)},r=[];s._withStripped=!0;var n={render:s,staticRenderFns:r};e.a=n},bSdk:function(t,e,a){"use strict";e.a={name:"systemTag",props:{readonly:{type:Boolean,default:!1},sexTag:String,styleTag:String,seasonTag:String},data:function(){return{tagList:{},sexTagId:this.sexTag||"",styleTagId:this.styleTag||"",seasonTagId:this.seasonTag||""}},mounted:function(){var t=this;this.$getTags(1).then(function(e){t.tagList=e})},watch:{sexTag:function(t){this.sexTagId=t||""},styleTag:function(t){this.styleTagId=t||""},seasonTag:function(t){this.seasonTagId=t||""}},methods:{getData:function(){return{sexTagId:this.sexTagId,styleTagId:this.styleTagId,seasonTagId:this.seasonTagId}},validate:function(){return this.sexTagId?this.styleTagId?!!this.seasonTagId||(this.$Message.warning("请选择季节标签"),!1):(this.$Message.warning("请选择款式标签"),!1):(this.$Message.warning("请选择性别标签"),!1)}}}},fmLf:function(t,e,a){var s=a("m8p8");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("8bSs")("543150e6",s,!1)},hrEj:function(t,e,a){"use strict";function s(t){i||a("KEEv")}var r=a("bSdk"),n=a("nNgm"),i=!1,o=a("/Xao"),c=s,l=o(r.a,n.a,!1,c,"data-v-d9adf4c6",null);l.options.__file="src\\components\\order\\systemTag.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=l.exports},kWYF:function(t,e,a){"use strict";(function(t){e.a={name:"addTag",props:{readonly:{type:Boolean,default:!1},dataList:{type:Array,default:[]},maxNum:{type:Number,default:5}},data:function(){return{selected:t.compact(this.dataList||[]),addTagName:"",recommendList:null,addTagLoading:!1}},mounted:function(){var t=this;this.$getTags(2).then(function(e){t.recommendList=e})},watch:{dataList:function(e,a){if(t.isEqual(e,a))return this.selected;this.selected=e||[]}},methods:{getData:function(e){return t.map(this.selected,function(t){switch(e){case 2:return t.tagName||t;case 3:return t.id||t}return t})},validate:function(){return!t.isEmpty(this.selected)||(this.$Message.warning("请选择自定义标签"),!1)},isSelected:function(e){return!!t.find(this.selected,function(a){return t.isString(a)?e.tagName===a:e.id===a.id})},deleteTag:function(e){this.selected=t.filter(this.selected,function(a){return t.isString(a)?a!==e:a.id!==e.id})},addTag:function(e){var a=this;return!t.isEmpty(this.selected)&&this.selected.length>=this.maxNum?this.$Message.warning("最多选择"+this.maxNum+"个标签！"):e?t.findWhere(this.selected,{id:e.id})?this.$Message.warning("标签已选择！"):this.selected.push(e):this.addTagName?t.findWhere(this.selected,{tagName:this.addTagName})||-1!==t.indexOf(this.selected,this.addTagName)?this.$Message.warning("标签已存在！"):(this.addTagLoading=!0,void this.ajax.post("/v3/store/tag/searchOrAddCommonTag",{tagName:this.addTagName}).then(function(t){a.selected.push(t)}).finally(function(){a.addTagLoading=!1})):this.$Message.warning("请输入自定义标签名称！")}}}}).call(e,a("u47Y"))},m651:function(t,e,a){"use strict";function s(t){i||a("fmLf")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("wRuZ"),n=a("ZvfZ"),i=!1,o=a("/Xao"),c=s,l=o(r.a,n.a,!1,c,"data-v-350865f4",null);l.options.__file="src\\views\\works\\index.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=l.exports},m8p8:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,"",""])},nNgm:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.tagList.sex||t.tagList.style||t.tagList.season?a("div",{staticClass:"tx-order-system-tag"},[a("Form",{attrs:{"label-width":90}},[a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"性别标签："}},[t.readonly?a("Tag",{attrs:{color:"default"}},[t._v(t._s(t.sexTagId))]):t._e(),t._v(" "),t.readonly?t._e():a("RadioGroup",{model:{value:t.sexTagId,callback:function(e){t.sexTagId=e},expression:"sexTagId"}},t._l(t.tagList.sex,function(e,s){return a("Radio",{key:e.id,staticStyle:{"margin-right":"20px"},attrs:{label:e.id}},[t._v("\n          "+t._s(e.tagName)+"\n        ")])}))],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"款式标签："}},[t.readonly?a("Tag",{attrs:{color:"default"}},[t._v(t._s(t.styleTagId))]):t._e(),t._v(" "),t.readonly?t._e():a("RadioGroup",{model:{value:t.styleTagId,callback:function(e){t.styleTagId=e},expression:"styleTagId"}},t._l(t.tagList.style,function(e){return a("Radio",{key:e.id,staticStyle:{"margin-right":"20px"},attrs:{label:e.id}},[t._v(t._s(e.tagName)+"\n        ")])}))],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"季节标签："}},[t.readonly?a("Tag",{attrs:{color:"default"}},[t._v(t._s(t.seasonTagId))]):t._e(),t._v(" "),t.readonly?t._e():a("RadioGroup",{model:{value:t.seasonTagId,callback:function(e){t.seasonTagId=e},expression:"seasonTagId"}},t._l(t.tagList.season,function(e){return a("Radio",{key:e.id,staticStyle:{"margin-right":"20px"},attrs:{label:e.id}},[t._v(t._s(e.tagName)+"\n        ")])}))],1)],1)],1):t._e()},r=[];s._withStripped=!0;var n={render:s,staticRenderFns:r};e.a=n},wDhi:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,"",""])},wRuZ:function(t,e,a){"use strict";(function(t){var s=a("hrEj"),r=a("HCy0"),n=a("04QK");e.a={name:"works",components:{VSystemTag:s.a,VAddTag:r.a,VImage:n.a},data:function(){var t=this;return{listLoading:!0,dataList:[],tagList:[],formSearch:{searchTerm:"",page:0,pageLength:10,sexTagId:"",styleTagId:"",seasonTagId:"",startTime:"",endTime:"",status:"",sourceType:"",time:[]},listTitle:[{title:"序号",type:"index",width:60,align:"center"},{title:"来源",key:"sourceType",align:"center",render:function(t,e){switch(e.row.sourceType){case 1:return"上传";case 2:return"资讯";case 3:return"图库";default:return"未知"}}},{title:"标题",key:"title",align:"center",render:function(t,e){return e.row.title||"--"}},{title:"参考照片",align:"center",render:function(t,e){var a=e.row.referencePictures;return a=a?a.split(";")[0]:"",t(n.a,{props:{src:a,width:80,height:60}})}},{title:"设计稿",align:"center",render:function(t,e){var a=e.row.designUrl;return a=a?a.split(",")[0]:"",t(n.a,{props:{src:a,width:80,height:60}})}},{title:"系统标签",align:"center",render:function(t,e){var a=e.row;return(a.genderName||"")+(a.genderName?" - ":"")+(a.styleName||"")+(a.styleName?" - ":"")+(a.seasonName||"")}},{title:"自定义标签",align:"center",render:function(t,e){return e.row.commonName?e.row.commonName.replace(/,/g,"/"):"-"}},{title:"创建时间",align:"center",key:"createDateStr"},{title:"价格",align:"center",key:"price"},{title:"状态",align:"center",key:"status",render:function(t,e){switch(e.row.status){case 1:return"未发布";case 2:return"已发布";default:return"未知状态"}}},{title:"操作",align:"center",render:function(e,a){var s=t,r=[],n=a.row;switch(n.status){case 1:r.push(t.createBtn(e,"编辑",function(){t.$router.push({path:"/works/edit",query:{id:n.id}})})),r.push(t.createBtn(e,"发布",function(){t.$Modal.confirm({title:"发布提示",content:"是否确认发布？",onOk:function(){s.updateStatus(2,n.id,"发布")}})}));break;case 2:r.push(t.createBtn(e,"下架",function(){t.$Modal.confirm({title:"下架提示",content:"是否确认下架？",onOk:function(){s.updateStatus(1,n.id,"下架")}})}))}return e("div",r)}}]}},created:function(){var e=this.$sessionStore.get("works_list_search");t.isEmpty(e)||(this.formSearch=e),this.getDataList(),this.getTagList()},methods:{getDataList:function(e){var a=this,s=void 0;t.isNumber(e)&&(this.formSearch.page=e-1),s=t.clone(this.formSearch),s.time[0]&&(s.startTime=this.$dateFormat(s.time[0],"yyyy-mm-dd")),s.time[1]&&(s.endTime=this.$dateFormat(s.time[1],"yyyy-mm-dd")),s.searchTerm=s.searchTerm.trim(),this.listLoading=!0,this.ajax.post("/v3/store/designerWork/findList",s).then(function(t){a.listLoading=!1,t.data=t.data||[],a.dataList=t,a.$sessionStore.set("works_list_search",s)})},updateStatus:function(t,e,a){var s=this;this.ajax.post("/v3/store/designerWork/updateStatus",{designerWorkId:e,status:t}).then(function(){s.getDataList(),s.$Message.success(a+"成功！")}).catch(function(){s.$Message.success(a+"失败，请重试！")})},getTagList:function(){var t=this;this.ajax.get("/v3/store/tag/getSearchTagList").then(function(e){t.tagList=e})},changePageSize:function(t){this.formSearch.pageLength=t,this.formSearch.page=0,this.getDataList()},handleReset:function(){this.formSearch=this.$options.data().formSearch,this.getDataList()},createBtn:function(t,e,a){return t("Button",{props:{type:"text",size:"small"},on:{click:function(){a&&a()}}},e)}}}}).call(e,a("u47Y"))},zQ7w:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tx-order-common-image",class:{"no-url":!t.imgSrc,isRound:t.round},style:{width:0===t.width?"100%":t.width+"px",height:0===t.height?"100%":t.height+"px","background-color":t.backColor}},[t.isComplete?t._e():a("Icon",{style:{"font-size":t.width/2+"px"},attrs:{type:t.icon}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],ref:"image",attrs:{src:t.imgSrc}})],1)},r=[];s._withStripped=!0;var n={render:s,staticRenderFns:r};e.a=n}});