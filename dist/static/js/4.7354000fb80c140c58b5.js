webpackJsonp([4],{"+Mie":function(t,e,a){var i=a("ZOyh");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("8855bcb8",i,!1)},"+amL":function(t,e,a){"use strict";(function(t){var i=a("04QK");e.a={name:"addMaterial",components:{VImage:i.a},props:{data:{type:Object,default:{}},type:{type:String,default:"面料"}},data:function(){return{dataInfo:{serialNumber:"",barCode:"",picture:"",genderName:"",styleName:"",typeName:"",seasonName:"",price:0,discount:1,dosage:0,remark:""},unit:"",priceParam:{},selectMaterial:{},searchLoading:!1,materialList:[],materialNumberList:[],getMaterialNumber:null,tagList:{sex:null,type:null,season:null}}},created:function(){var e=this,a=this;this.getMaterialNumber=t.throttle(function(t){var i=void 0;switch(e.type){case"面料":i=1;break;case"里料":i=2;break;case"辅料":i=3}a.ajax.post("/v3/store/material/materialNoTypeahead",{searchTerm:t,type:i}).then(function(t){a.materialNumberList=t})},500)},mounted:function(){t.isEmpty(this.data)?(this.materialList=[],this.dataInfo=this.$options.data().dataInfo):this.dataInfo=t.clone(this.data),this.getTagList()},watch:{data:function(e){t.isEmpty(e)?(this.materialList=[],this.dataInfo=this.$options.data().dataInfo):(this.dataInfo=t.clone(e),this.getMaterialList())}},methods:{getData:function(){return this.dataInfo.discount||(this.dataInfo.discount=0),this.dataInfo.barCode=this.selectMaterial.barCode,this.dataInfo.serialNumber=this.selectMaterial.no,this.dataInfo.picture=this.selectMaterial.picture,this.dataInfo._type=this.type,this.dataInfo},validate:function(){return t.isEmpty(this.selectMaterial)?(this.$Message.warning("请选择"+this.type+"！"),!1):"面料"!==this.type||this.dataInfo.genderName&&this.dataInfo.styleName&&this.dataInfo.typeName&&this.dataInfo.seasonName?"面料"!==this.type||this.dataInfo.price?this.dataInfo.dosage?!("面料"===this.type&&this.dataInfo.discount.toString().split(".")[1]&&this.dataInfo.discount.toString().split(".")[1].length>2)||(this.$Message.warning("折扣最多输入两位小数！"),!1):(this.$Message.warning("请输入"+this.type+"用量！"),!1):(this.$Message.warning("请选择价格！"),!1):(this.$Message.warning("请选择标签！"),!1)},getTagList:function(){var e=this;t.isEmpty(this.tagList.sex)&&this.ajax.get("/v3/store/tag/getSearchTagList").then(function(a){e.tagList.sex=t.where(a,{tagType:1}),e.tagList.type=t.where(a,{tagType:2}),e.tagList.season=t.where(a,{tagType:3})})},getMaterialList:function(e){var a=this,i=0;if(e&&(this.dataInfo.serialNumber=e),!this.dataInfo.serialNumber)return this.$Message.warning("请输入"+this.type+"编号");switch(this.getMaterialNumber(this.dataInfo.serialNumber),this.searchLoading=!0,this.materialList=[],this.type){case"面料":i=1;break;case"里料":i=2;break;case"辅料":i=3}this.ajax.post("/v3/store/material/search",{materialNo:this.dataInfo.serialNumber.trim(),type:i}).then(function(e){var i=void 0;t.isEmpty(e)&&a.$Message.warning("没有对应的"+a.type+"信息！"),a.materialList=e,a.searchLoading=!1,i=t.findWhere(e,{barCode:a.dataInfo.barCode}),a.selectMaterial=t.isEmpty(i)?{}:i,a.getPrice()}).catch(function(){a.searchLoading=!1})},getPrice:function(){var t=this;if(!("面料"===this.type&&this.dataInfo.serialNumber&&this.dataInfo.genderName&&this.dataInfo.typeName&&this.dataInfo.styleName))return this.priceParam={},void(this.dataInfo.price=0);this.ajax.post("/v3/store/material/getPriceInfo",{materialNo:this.dataInfo.serialNumber,genderName:this.dataInfo.genderName,typeName:this.dataInfo.typeName,styleName:this.dataInfo.styleName}).then(function(e){t.priceParam=e}).catch(function(){t.priceParam={},t.dataInfo.price=0})},clickSelect:function(t){this.selectMaterial=t,this.unit=t.unit}}}}).call(e,a("u47Y"))},"/Vwx":function(t,e,a){"use strict";(function(t){var i=a("2Dkn"),s=a("7quG"),o=a("04QK");e.a={name:"commonUpload",props:{readonly:{type:Boolean,default:!1},dataList:{type:[Array,String]},valueKey:String,maxNum:{type:Number,default:1},width:{type:Number,default:80},height:{type:Number,default:80}},components:{VImage:o.a,VPreviewImage:s.a},data:function(){return{uploadList:[],uploadParams:{data:{type:1},action:i.a.ENV.api+"/v2/store/file/uploadFiles",headers:{"utouu-open-client-ticket":this.$localStore.get("ticket")}}}},mounted:function(){var e=this,a=t.clone(this.dataList);t.isString(a)&&(a=a?[this.dataList]:[]),this.uploadList=t.map(t.compact(a),function(t){return{url:e.valueKey?t[e.valueKey]:t}})},watch:{dataList:function(e){var a=this;t.isString(e)&&(e=e?[e]:[]),this.uploadList=t.map(t.compact(e),function(t){return{url:a.valueKey?t[a.valueKey]:t}})}},methods:{getData:function(e){return t.map(this.uploadList,function(t){return t.url}).join(e||",")},validate:function(){return t.isEmpty(this.uploadList)?(this.$Message.warning("请上传图片"),!1):!(this.uploadList.length>this.maxNum)||(this.$Message.warning("图片上传异常，请重新上传！"),!1)},uploadDelete:function(e){this.uploadList=t.filter(this.uploadList,function(t){return t.url!==e.url})},uploadBefore:function(){if(this.uploadList.length>=this.maxNum&&1!==this.maxNum)return this.$alert("只能上传"+this.maxNum+"张图片"),!1},uploadProgress:function(){var e=this;1===this.maxNum&&this.$refs.commonUpload.fileList.length>0?this.uploadList=[t.last(this.$refs.commonUpload.fileList)]:t.map(this.$refs.commonUpload.fileList,function(a){if(e.uploadList.length>=e.maxNum&&1!==e.maxNum)return e.$alert("只能上传"+e.maxNum+"张图片"),!1;t.findWhere(e.uploadList,{uid:a.uid})||e.uploadList.push(a)})},uploadSuccess:function(e,a){a.url=e.data[0],this.$refs.commonUpload.fileList=t.filter(this.$refs.commonUpload.fileList,function(t){return"finished"!==t.status})}}}}).call(e,a("u47Y"))},"04QK":function(t,e,a){"use strict";function i(t){n||a("+Mie")}var s=a("ZMJk"),o=a("zQ7w"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-44ba65cc",null);d.options.__file="src\\components\\common\\image.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},"1nkq":function(t,e,a){var i=a("wDhi");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("6d4069e5",i,!1)},"1pFO":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tx-order-preview-image"},[t.imageModal?a("div",{staticClass:"image-carousel",on:{click:function(e){t.imageModal=!1}}},[a("div",{staticClass:"carousel-box",on:{click:function(e){e.stopPropagation(),t.imageModal=!0}}},[a("Carousel",{attrs:{loop:"",dots:1===t.dataList.length?"none":"outside",value:t.index,arrow:1===t.dataList.length?"never":"hover"}},t._l(t.dataList,function(e,i){return a("CarouselItem",{key:i},[a("div",{staticClass:"image-box"},[a("img",{staticStyle:{"max-width":"800px"},style:{"max-height":.9*t.windowHeight+"px"},attrs:{src:t.valueKey?e[t.valueKey]:e}})])])}))],1)]):t._e()])},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},"3MfA":function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".common-upload-list[data-v-20d91652]{display:inline-block;text-align:center;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.2);box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:10px;margin-bottom:10px}.common-upload-list img[data-v-20d91652]{width:100%;height:100%}.common-upload-list-cover[data-v-20d91652]{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.common-upload-list:hover .common-upload-list-cover[data-v-20d91652]{display:block}.common-upload-list-cover .icon-box[data-v-20d91652]{color:#fff;position:absolute;top:50%;left:25%;line-height:1;cursor:pointer;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.common-upload-list-cover .icon-box[data-v-20d91652]:last-child{left:65%}.common-upload-list-cover span.readonly[data-v-20d91652]{width:100%;left:0;text-align:center}",""])},"3cXf":function(t,e,a){t.exports={default:a("I4CF"),__esModule:!0}},"5H2H":function(t,e,a){var i=a("3MfA");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("0d7755c6",i,!1)},"7quG":function(t,e,a){"use strict";function i(t){n||(a("voQX"),a("WIru"))}var s=a("H3hZ"),o=a("1pFO"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-7117b9f8",null);d.options.__file="src\\components\\common\\previewImage.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},"9eID":function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".tx-order-add-material .ivu-select-dropdown.ivu-auto-complete{z-index:999999}",""])},AQn8:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tx-order-add-material"},[a("Form",{attrs:{"label-width":90}},[a("FormItem",{attrs:{label:"搜索"+t.type+"："}},[a("AutoComplete",{staticStyle:{width:"250px"},attrs:{data:t.materialNumberList,placeholder:"输入编号搜索"},on:{"on-search":t.getMaterialNumber,"on-select":t.getMaterialList},model:{value:t.dataInfo.serialNumber,callback:function(e){t.$set(t.dataInfo,"serialNumber",e)},expression:"dataInfo.serialNumber"}}),t._v("  \n      "),a("Button",{attrs:{type:"ghost",loading:t.searchLoading},on:{click:function(e){t.getMaterialList()}}},[t._v("查询")])],1),t._v(" "),a("FormItem",t._l(t.materialList,function(e){return a("div",{staticClass:"list-box",class:{active:e.barCode===t.selectMaterial.barCode},on:{click:function(a){t.clickSelect(e)}}},[a("Tooltip",{staticStyle:{position:"relative"},attrs:{placement:"bottom"}},[a("v-image",{attrs:{src:e.picture,width:98,height:98,"back-color":"none"}}),t._v(" "),a("Icon",{staticClass:"selected",attrs:{type:"checkmark"}}),t._v(" "),a("div",{staticClass:"material-info"},[a("p",{domProps:{textContent:t._s(e.barCode)}}),t._v(" "),a("p",{domProps:{textContent:t._s("库存："+e.stock+e.unit)}})]),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n            "+t._s(e.barCode)),a("br"),t._v("\n            "+t._s("库存："+e.stock+e.unit)+"\n          ")])],1)],1)})),t._v(" "),"面料"===t.type?a("FormItem",{attrs:{label:"选择标签："}},[a("Row",[a("Col",{staticStyle:{"padding-right":"10px"},attrs:{span:"5"}},[a("Select",{attrs:{placeholder:"性别"},on:{"on-change":function(e){t.getPrice()}},model:{value:t.dataInfo.genderName,callback:function(e){t.$set(t.dataInfo,"genderName",e)},expression:"dataInfo.genderName"}},t._l(t.tagList.sex,function(e){return a("Option",{key:e.tagId,attrs:{value:e.tagName}},[t._v(t._s(e.tagName))])}))],1),t._v(" "),a("Col",{staticStyle:{"padding-right":"10px"},attrs:{span:"5"}},[a("Select",{attrs:{placeholder:"款式"},on:{"on-change":function(e){t.getPrice()}},model:{value:t.dataInfo.styleName,callback:function(e){t.$set(t.dataInfo,"styleName",e)},expression:"dataInfo.styleName"}},[a("Option",{attrs:{value:"短款"}},[t._v("短款")]),t._v(" "),a("Option",{attrs:{value:"中长款"}},[t._v("中长款")]),t._v(" "),a("Option",{attrs:{value:"长款"}},[t._v("长款")]),t._v(" "),a("Option",{attrs:{value:"超长款"}},[t._v("超长款")]),t._v(" "),a("Option",{attrs:{value:"非常规款"}},[t._v("非常规款")])],1)],1),t._v(" "),a("Col",{staticStyle:{"padding-right":"10px"},attrs:{span:"5"}},[a("Select",{attrs:{placeholder:"分类"},on:{"on-change":function(e){t.getPrice()}},model:{value:t.dataInfo.typeName,callback:function(e){t.$set(t.dataInfo,"typeName",e)},expression:"dataInfo.typeName"}},t._l(t.tagList.type,function(e){return a("Option",{key:e.tagId,attrs:{value:e.tagName}},[t._v(t._s(e.tagName))])}))],1),t._v(" "),a("Col",{attrs:{span:"5"}},[a("Select",{attrs:{placeholder:"季节"},model:{value:t.dataInfo.seasonName,callback:function(e){t.$set(t.dataInfo,"seasonName",e)},expression:"dataInfo.seasonName"}},t._l(t.tagList.season,function(e){return a("Option",{key:e.tagId,attrs:{value:e.tagName}},[t._v(t._s(e.tagName))])}))],1)],1)],1):t._e(),t._v(" "),"面料"===t.type?a("FormItem",{attrs:{label:"价格："}},[t.priceParam.price1?a("RadioGroup",{model:{value:t.dataInfo.price,callback:function(e){t.$set(t.dataInfo,"price",e)},expression:"dataInfo.price"}},[a("Radio",{attrs:{label:t.priceParam.price1}},[t._v("¥"+t._s(t.priceParam.price1))]),t._v(" "),a("Radio",{attrs:{label:t.priceParam.price2}},[t._v("¥"+t._s(t.priceParam.price2))])],1):a("span",{staticStyle:{color:"rgb(230, 230, 230)"}},[t._v("请选择标签查询价格")])],1):t._e(),t._v(" "),a("FormItem",{attrs:{label:"用量："}},[a("InputNumber",{attrs:{min:0,precision:0},model:{value:t.dataInfo.dosage,callback:function(e){t.$set(t.dataInfo,"dosage",e)},expression:"dataInfo.dosage"}}),t._v("  "+t._s(t.unit)+"\n    ")],1),t._v(" "),"面料"===t.type?a("FormItem",{attrs:{label:"折扣："}},[a("InputNumber",{attrs:{min:0,max:1,step:.01},model:{value:t.dataInfo.discount,callback:function(e){t.$set(t.dataInfo,"discount",e)},expression:"dataInfo.discount"}}),t._v("  请输入0~1的小数\n    ")],1):t._e(),t._v(" "),a("FormItem",{attrs:{label:"备注："}},[a("Row",[a("Col",{attrs:{span:"20"}},[a("Input",{attrs:{type:"textarea",rows:4,placeholder:"请填写备注"},model:{value:t.dataInfo.remark,callback:function(e){t.$set(t.dataInfo,"remark",e)},expression:"dataInfo.remark"}})],1)],1)],1)],1)],1)},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},FGw9:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,"",""])},FRQH:function(t,e,a){var i=a("mb/V");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("46d23f5d",i,!1)},FSDW:function(t,e,a){"use strict";var i=function(){var t=this,e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"tx-order-common-upload"},[e.readonly?e._e():i("Upload",{ref:"commonUpload",staticStyle:{display:"inline-block",position:"relative","vertical-align":"top","margin-right":"10px"},style:{width:e.width-2+"px"},attrs:{name:"files",format:["jpg","jpeg","png"],"max-size":2048,action:e.uploadParams.action,data:e.uploadParams.data,headers:e.uploadParams.headers,"show-upload-list":!1,"on-success":e.uploadSuccess,"on-format-error":function(){t.$alert("请上传图片文件！")},"on-exceeded-size":function(){t.$alert("请上传2MB以内的图片！")},"before-upload":e.uploadBefore,"on-progress":e.uploadProgress,multiple:1!==e.maxNum,type:"drag"}},[i("div",{style:{width:e.width-2+"px",height:e.height-2+"px","line-height":e.height-2+"px"}},[i("Icon",{attrs:{type:"images",size:parseInt(.3*e.width)}})],1),e._v(" "),i("span",{staticStyle:{"font-size":"14px",position:"absolute",bottom:"0",left:"0",color:"#999",width:"100%","text-align":"center"}},[e._v("\n      "+e._s(e.uploadList.length)+" / "+e._s(e.maxNum))])]),e._v(" "),e._l(e.uploadList,function(t,a){return i("div",{staticClass:"common-upload-list",style:{width:e.width+"px",height:e.height+"px","font-size":parseInt(.2*(e.width>e.height?e.width:e.height))+"px"}},[t.status&&"finished"!==t.status?i("div",{style:{"line-height":e.height+"px"}},[t.showProgress?i("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()],1):[i("v-image",{attrs:{src:t.url,width:e.width,height:e.height}}),e._v(" "),i("div",{staticClass:"common-upload-list-cover",style:{"line-height":e.height+"px"}},[i("span",{staticClass:"icon-box",class:{readonly:e.readonly},on:{click:function(t){e.$refs.previewImage.show(e.uploadList,"url",a)}}},[i("Icon",{attrs:{type:"ios-eye-outline"}})],1),e._v(" "),i("span",{staticClass:"icon-box",on:{click:function(a){e.uploadDelete(t)}}},[e.readonly?e._e():i("Icon",{attrs:{type:"ios-trash-outline"}})],1)])]],2)}),e._v(" "),i("v-preview-image",{ref:"previewImage"})],2)},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},GruV:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".tx-order-preview-image .ivu-carousel-track{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},H3hZ:function(t,e,a){"use strict";(function(t){e.a={name:"previewImage",props:{},data:function(){return{dataList:[],valueKey:null,index:0,imageModal:!1,windowHeight:window.innerHeight}},created:function(){},methods:{show:function(e,a,i){if(!t.isArray(e)&&!t.isString(e))throw Error("v-preview-image params error");t.isString(e)&&(e=[e]),t.isString(a)?this.valueKey=a:t.isNumber(a)&&(this.index=a),t.isNumber(i)&&(this.index=i),this.dataList=e,this.imageModal=!0}}}}).call(e,a("u47Y"))},HCy0:function(t,e,a){"use strict";function i(t){n||a("1nkq")}var s=a("kWYF"),o=a("OtLT"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-378415f7",null);d.options.__file="src\\components\\order\\addTag.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},I4CF:function(t,e,a){var i=a("0nnt"),s=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},ILtJ:function(t,e,a){"use strict";function i(t){n||(a("UrD6"),a("spXB"))}var s=a("+amL"),o=a("AQn8"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-47b6de9a",null);d.options.__file="src\\components\\order\\addMaterial.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},KEEv:function(t,e,a){var i=a("FGw9");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("45a51d22",i,!1)},OtLT:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tx-order-add-tag"},[a("Form",{attrs:{"label-width":90}},[t.readonly?t._e():a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"添加标签："}},[a("Input",{staticStyle:{"max-width":"200px","margin-right":"10px"},attrs:{placeholder:"自定义标签"},model:{value:t.addTagName,callback:function(e){t.addTagName=e},expression:"addTagName"}}),t._v(" "),a("Button",{attrs:{type:"ghost",loading:t.addTagLoading},on:{click:function(e){t.addTag()}}},[t._v("添加")])],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"已选标签："}},t._l(t.selected,function(e){return a("Tag",{key:e.id||e,attrs:{closable:!t.readonly,color:t.readonly?"default":"blue"},on:{"on-close":function(a){t.deleteTag(e)}}},[t._v("\n        "+t._s(e.tagName||e)+"\n      ")])})),t._v(" "),t.readonly?t._e():a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"推荐标签："}},t._l(t.recommendList,function(e){return a("Tag",{key:e.id,attrs:{color:t.isSelected(e)?"blue":"default"},nativeOn:{click:function(a){t.addTag(e)}}},[t._v(t._s(e.tagName)+"\n      ")])}))],1)],1)},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},SC7Q:function(t,e,a){"use strict";(function(t){var i=a("3cXf"),s=a.n(i),o=a("hrEj"),n=a("ILtJ"),r=a("HCy0"),l=a("Zok3"),d=a("04QK");e.a={name:"edit",components:{VAddTag:r.a,VAddMaterial:n.a,VUpload:l.a,VSystemTag:o.a,VImage:d.a},data:function(){var t=this;return{dataInfo:{title:"",price:0,designerEvaluate:"",feedBack:{},commonTags:[],referencePictures:[]},systemTag:{sex:"",style:"",season:""},materialModal:{show:!1,type:"面料",isAdd:!0},materialList:[],liningList:[],accessoryList:[],materialItem:{},dataLoading:!1,saveLoading:!1,materialTitle:[{title:"图片",align:"center",render:function(t,e){return t(d.a,{props:{src:e.row.picture,width:50,height:50}})}},{title:"编号",key:"serialNumber",align:"center"},{title:"色号",key:"barCode",align:"center"},{title:"用量",key:"dosage",align:"center"},{title:"备注",key:"remark",align:"center"},{title:"操作",align:"center",render:function(e,a){var i=[],s=a.row;return s.barCode&&i.push(t.createBtn(e,"编辑",function(){t.materialItem=s,t.showModal(a.row._type,!1)})),i.push(t.createBtn(e,"删除",function(){t.deleteMaterial(a.row._type,a.index)})),e("div",i)}}]}},mounted:function(){this.$route.query.id?this.getDataInfo():this.$sessionStore.remove("cache_router_param")},methods:{getDataInfo:function(){var e=this;this.$route.query.id&&(this.dataLoading=!0,this.ajax.post("/v3/store/designerWork/detail",{designerWorkId:this.$route.query.id}).then(function(a){e.systemTag.sex=(t.findWhere(a.systemTags,{type:1})||{}).id,e.systemTag.style=(t.findWhere(a.systemTags,{type:2})||{}).id,e.systemTag.season=(t.findWhere(a.systemTags,{type:3})||{}).id,a.referencePictures=a.referencePictures.split(";"),a.designUrl=a.designUrl.split(","),e.materialList=a.material?JSON.parse(a.material):[],e.liningList=a.lining?JSON.parse(a.lining):[],e.accessoryList=a.accessory?JSON.parse(a.accessory):[],e.materialList=t.map(e.materialList,function(t){return t._type="面料",t}),e.liningList=t.map(e.liningList,function(t){return t._type="里料",t}),e.accessoryList=t.map(e.accessoryList,function(t){return t._type="辅料",t}),e.dataInfo=t.extend(e.dataInfo,a),e.dataLoading=!1}))},editMaterial:function(){var e=void 0;if(!this.$refs.addMaterial.validate())return!1;if(e=t.clone(this.$refs.addMaterial.getData()),this.materialModal.isAdd)switch(this.materialModal.type){case"面料":this.materialList.unshift(e);break;case"里料":this.liningList.unshift(e);break;case"辅料":this.accessoryList.unshift(e)}else switch(this.materialModal.type){case"面料":this.materialList=t.map(this.materialList,function(t){return t.barCode===e.barCode?e:t});break;case"里料":this.liningList=t.map(this.liningList,function(t){return t.barCode===e.barCode?e:t});break;case"辅料":this.accessoryList=t.map(this.accessoryList,function(t){return t.barCode===e.barCode?e:t})}this.materialModal.show=!1},showModal:function(t,e){this.materialModal.type=t,this.materialModal.isAdd=e,this.materialModal.show=!0,e&&(this.materialItem={})},deleteMaterial:function(e,a){switch(e){case"面料":this.materialList[a]=null,this.materialList=t.compact(this.materialList);break;case"里料":this.liningList[a]=null,this.liningList=t.compact(this.liningList);break;case"辅料":this.accessoryList[a]=null,this.accessoryList=t.compact(this.accessoryList)}},saveData:function(e){var a=this,i={};return!!this.$refs.systemTag.validate()&&(!!this.$refs.addTag.validate()&&(i.workId=this.dataInfo.id,i.title=this.dataInfo.title.trim(),i.designerDescription=this.dataInfo.designerEvaluate.trim(),i.price=this.dataInfo.price,i.commonTags=this.$refs.addTag.getData(3).join("||"),i.referencePictures=this.$refs.referenceImages.getData(";"),i.materials=s()(this.materialList),i.linings=s()(this.liningList),i.accessory=s()(this.accessoryList),i.designUrl=this.$refs.designImages.getData(","),i.feedBackPictures=this.$refs.evaluateImages.getData(";"),i=t.extend(i,this.$refs.systemTag.getData()),this.saveLoading=!0,this.ajax.post("/v3/store/designerWork/addOrUpdate",i).then(function(t){return 2!==e&&(a.$Message.success({content:"保存成功！",onClose:function(){if(a.saveLoading=!1,!a.$route.query.id&&t)return a.$router.push({path:"/works/index"})}}),a.$route.query.id&&a.getDataInfo()),t}).catch(function(){a.saveLoading=!1})))},submitData:function(){var t=this,e=this.saveData(2);if(!e.then)return!1;e.then(function(e){var a=t.$route.query.id||e;t.ajax.post("/v3/store/designerWork/updateStatus",{designerWorkId:a,status:2}).then(function(){t.$Message.success("发布成功！"),t.$router.push({path:"/works/index"})}).catch(function(){t.saveLoading=!1})})},createBtn:function(t,e,a){return t("Button",{props:{type:"text",size:"small"},on:{click:function(){a&&a()}}},e)}}}}).call(e,a("u47Y"))},UrD6:function(t,e,a){var i=a("9eID");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("14a0fc50",i,!1)},WIru:function(t,e,a){var i=a("GruV");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("f61e895a",i,!1)},ZMJk:function(t,e,a){"use strict";e.a={name:"commonImage",props:{src:{type:String},width:{type:Number,default:0},height:{type:Number,default:0},round:{type:Boolean,default:!1},icon:{type:String,default:"image"},backColor:{type:String,default:"#F4F4F4"},fill:{type:Boolean,default:!0}},data:function(){return{imgSrc:"",isComplete:!1}},mounted:function(){this.imgSrc=this.ossFilter(this.src)},watch:{src:function(t){this.imgSrc=this.ossFilter(t)}},methods:{getData:function(t){},ossFilter:function(t){var e=this;return this.$nextTick(function(){e.$refs.image.onload=function(){e.isComplete=!0}}),!t||t.indexOf("tailorx.cn")<0||!this.width&&!this.height?t:(t+=t.indexOf("?")>-1?"&":"?",t.replace("https://","//"),t.replace("http://","//"),this.isComplete=!1,t+"x-oss-process=image/resize,w_"+this.width+",h_"+this.height+(this.fill?",m_fill":""))}}}},ZOyh:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".tx-order-common-image[data-v-44ba65cc]{text-align:center;position:relative;display:inline-block}.tx-order-common-image img[data-v-44ba65cc]{max-width:100%;max-height:100%}.tx-order-common-image i[data-v-44ba65cc],.tx-order-common-image img[data-v-44ba65cc]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tx-order-common-image i[data-v-44ba65cc]{color:#eaeaea}.tx-order-common-image.no-url[data-v-44ba65cc]{background:none!important}.tx-order-common-image.no-url i[data-v-44ba65cc]{color:#f4f4f4}.tx-order-common-image.isRound[data-v-44ba65cc],.tx-order-common-image.isRound img[data-v-44ba65cc]{border-radius:50%}",""])},Zok3:function(t,e,a){"use strict";function i(t){n||a("5H2H")}var s=a("/Vwx"),o=a("FSDW"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-20d91652",null);d.options.__file="src\\components\\common\\upload.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},bSdk:function(t,e,a){"use strict";e.a={name:"systemTag",props:{readonly:{type:Boolean,default:!1},sexTag:String,styleTag:String,seasonTag:String},data:function(){return{tagList:{},sexTagId:this.sexTag||"",styleTagId:this.styleTag||"",seasonTagId:this.seasonTag||""}},mounted:function(){var t=this;this.$getTags(1).then(function(e){t.tagList=e})},watch:{sexTag:function(t){this.sexTagId=t||""},styleTag:function(t){this.styleTagId=t||""},seasonTag:function(t){this.seasonTagId=t||""}},methods:{getData:function(){return{sexTagId:this.sexTagId,styleTagId:this.styleTagId,seasonTagId:this.seasonTagId}},validate:function(){return this.sexTagId?this.styleTagId?!!this.seasonTagId||(this.$Message.warning("请选择季节标签"),!1):(this.$Message.warning("请选择款式标签"),!1):(this.$Message.warning("请选择性别标签"),!1)}}}},bfgf:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".tx-order-add-material .ivu-form-item[data-v-47b6de9a]{margin-bottom:10px}.tx-order-add-material .list-box[data-v-47b6de9a]{width:100px;display:inline-block;height:100px;margin-right:10px;margin-bottom:10px;position:relative;border:1px solid #ededed;border-radius:5px;cursor:pointer}.tx-order-add-material .material-info[data-v-47b6de9a]{position:absolute;bottom:12px;left:0;width:100%;line-height:20px;text-align:center;background-color:rgba(0,0,0,.5);color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.tx-order-add-material .material-info p[data-v-47b6de9a]{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tx-order-add-material .list-box .selected[data-v-47b6de9a]{position:absolute;top:40%;left:50%;font-size:30px;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tx-order-add-material .list-box.active[data-v-47b6de9a]{border-color:#2d8cf0}.tx-order-add-material .list-box.active .selected[data-v-47b6de9a]{opacity:1;color:#2d8cf0}",""])},hrEj:function(t,e,a){"use strict";function i(t){n||a("KEEv")}var s=a("bSdk"),o=a("nNgm"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-d9adf4c6",null);d.options.__file="src\\components\\order\\systemTag.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},kWYF:function(t,e,a){"use strict";(function(t){e.a={name:"addTag",props:{readonly:{type:Boolean,default:!1},dataList:{type:Array,default:[]},maxNum:{type:Number,default:5}},data:function(){return{selected:t.compact(this.dataList||[]),addTagName:"",recommendList:null,addTagLoading:!1}},mounted:function(){var t=this;this.$getTags(2).then(function(e){t.recommendList=e})},watch:{dataList:function(e,a){if(t.isEqual(e,a))return this.selected;this.selected=e||[]}},methods:{getData:function(e){return t.map(this.selected,function(t){switch(e){case 2:return t.tagName||t;case 3:return t.id||t}return t})},validate:function(){return!t.isEmpty(this.selected)||(this.$Message.warning("请选择自定义标签"),!1)},isSelected:function(e){return!!t.find(this.selected,function(a){return t.isString(a)?e.tagName===a:e.id===a.id})},deleteTag:function(e){this.selected=t.filter(this.selected,function(a){return t.isString(a)?a!==e:a.id!==e.id})},addTag:function(e){var a=this;return!t.isEmpty(this.selected)&&this.selected.length>=this.maxNum?this.$Message.warning("最多选择"+this.maxNum+"个标签！"):e?t.findWhere(this.selected,{id:e.id})?this.$Message.warning("标签已选择！"):this.selected.push(e):this.addTagName?t.findWhere(this.selected,{tagName:this.addTagName})||-1!==t.indexOf(this.selected,this.addTagName)?this.$Message.warning("标签已存在！"):(this.addTagLoading=!0,void this.ajax.post("/v3/store/tag/searchOrAddCommonTag",{tagName:this.addTagName}).then(function(t){a.selected.push(t)}).finally(function(){a.addTagLoading=!1})):this.$Message.warning("请输入自定义标签名称！")}}}}).call(e,a("u47Y"))},mID0:function(t,e,a){"use strict";function i(t){n||a("FRQH")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("SC7Q"),o=a("sY3G"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-1155a250",null);d.options.__file="src\\views\\works\\edit.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=d.exports},"mb/V":function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".works-edit .size-list.edit[data-v-1155a250]{padding-top:3px}.works-edit .size-list.edit li[data-v-1155a250]{width:120px}.works-edit .size-list li[data-v-1155a250]{display:inline-block;margin-right:10px}.ivu-form-item[data-v-1155a250]{margin-bottom:10px}",""])},nNgm:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.tagList.sex||t.tagList.style||t.tagList.season?a("div",{staticClass:"tx-order-system-tag"},[a("Form",{attrs:{"label-width":90}},[a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"性别标签："}},[t.readonly?a("Tag",{attrs:{color:"default"}},[t._v(t._s(t.sexTagId))]):t._e(),t._v(" "),t.readonly?t._e():a("RadioGroup",{model:{value:t.sexTagId,callback:function(e){t.sexTagId=e},expression:"sexTagId"}},t._l(t.tagList.sex,function(e,i){return a("Radio",{key:e.id,staticStyle:{"margin-right":"20px"},attrs:{label:e.id}},[t._v("\n          "+t._s(e.tagName)+"\n        ")])}))],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"款式标签："}},[t.readonly?a("Tag",{attrs:{color:"default"}},[t._v(t._s(t.styleTagId))]):t._e(),t._v(" "),t.readonly?t._e():a("RadioGroup",{model:{value:t.styleTagId,callback:function(e){t.styleTagId=e},expression:"styleTagId"}},t._l(t.tagList.style,function(e){return a("Radio",{key:e.id,staticStyle:{"margin-right":"20px"},attrs:{label:e.id}},[t._v(t._s(e.tagName)+"\n        ")])}))],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"季节标签："}},[t.readonly?a("Tag",{attrs:{color:"default"}},[t._v(t._s(t.seasonTagId))]):t._e(),t._v(" "),t.readonly?t._e():a("RadioGroup",{model:{value:t.seasonTagId,callback:function(e){t.seasonTagId=e},expression:"seasonTagId"}},t._l(t.tagList.season,function(e){return a("Radio",{key:e.id,staticStyle:{"margin-right":"20px"},attrs:{label:e.id}},[t._v(t._s(e.tagName)+"\n        ")])}))],1)],1)],1):t._e()},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},sY3G:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tx-container works-edit"},[a("div",{staticClass:"tx-content"},[a("h2",{staticClass:"tx-title"},[t._v("基本设置")]),t._v(" "),a("div",{staticClass:"tx-content-box",staticStyle:{"max-width":"600px"}},[a("Form",{attrs:{"label-width":90}},[a("FormItem",{attrs:{label:"作品标题："}},[a("Input",{attrs:{type:"text",placeholder:"填写作品标题"},model:{value:t.dataInfo.title,callback:function(e){t.$set(t.dataInfo,"title",e)},expression:"dataInfo.title"}})],1),t._v(" "),a("FormItem",{attrs:{label:"价格："}},[a("InputNumber",{attrs:{min:.01},model:{value:t.dataInfo.price,callback:function(e){t.$set(t.dataInfo,"price",e)},expression:"dataInfo.price"}}),t._v("  元\n        ")],1),t._v(" "),a("FormItem",{attrs:{label:"设计师评价："}},[a("Input",{attrs:{type:"textarea",rows:4,placeholder:"填写设计师评价"},model:{value:t.dataInfo.designerEvaluate,callback:function(e){t.$set(t.dataInfo,"designerEvaluate",e)},expression:"dataInfo.designerEvaluate"}})],1)],1),t._v(" "),a("v-system-tag",{ref:"systemTag",attrs:{"sex-tag":t.systemTag.sex,"style-tag":t.systemTag.style,"season-tag":t.systemTag.season}}),t._v(" "),t.dataInfo.commonTags?a("v-add-tag",{ref:"addTag",attrs:{"data-list":t.dataInfo.commonTags}}):t._e()],1),t._v(" "),a("h2",{staticClass:"tx-title"},[t._v("参考图片")]),t._v(" "),a("div",{staticClass:"tx-content-box"},[a("v-upload",{ref:"referenceImages",attrs:{"data-list":t.dataInfo.referencePictures,"max-num":3,width:150,height:150}})],1),t._v(" "),a("h2",{staticClass:"tx-title"},[t._v("面料信息")]),t._v(" "),a("div",{staticClass:"tx-content-box"},[a("Button",{attrs:{icon:"android-add"},on:{click:function(e){t.showModal("面料",!0)}}},[t._v("面料")]),t._v(" "),a("Table",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"},attrs:{border:"",columns:t.materialTitle,data:t.materialList}}),t._v(" "),a("Button",{attrs:{icon:"android-add"},on:{click:function(e){t.showModal("里料",!0)}}},[t._v("里料")]),t._v(" "),a("Table",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"},attrs:{border:"",columns:t.materialTitle,data:t.liningList}}),t._v(" "),a("Button",{attrs:{icon:"android-add"},on:{click:function(e){t.showModal("辅料",!0)}}},[t._v("辅料")]),t._v(" "),a("Table",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"},attrs:{border:"",columns:t.materialTitle,data:t.accessoryList}})],1),t._v(" "),a("h2",{staticClass:"tx-title"},[t._v("设计稿")]),t._v(" "),a("div",{staticClass:"tx-content-box"},[a("v-upload",{ref:"designImages",attrs:{"data-list":t.dataInfo.designUrl,"max-num":20,width:240,height:150}})],1),t._v(" "),a("h2",{staticClass:"tx-title"},[t._v("用户评价")]),t._v(" "),a("div",{staticClass:"tx-content-box"},[a("Form",{attrs:{"label-width":90}},[a("FormItem",{attrs:{label:"评价内容"}},[t._v("\n          "+t._s(t.dataInfo.feedBack.content)+"\n        ")]),t._v(" "),a("FormItem",{attrs:{label:"综合评分"}},[a("Rate",{attrs:{disabled:"","allow-half":"",value:t.dataInfo.feedBack.overallScore}})],1),t._v(" "),a("FormItem",{attrs:{label:"设计师评分"}},[a("Rate",{attrs:{disabled:"","allow-half":"",value:t.dataInfo.feedBack.designerScore}})],1),t._v(" "),a("FormItem",{attrs:{label:"工厂评分"}},[a("Rate",{attrs:{disabled:"","allow-half":"",value:t.dataInfo.feedBack.factoryScore}})],1)],1),t._v(" "),a("v-upload",{ref:"evaluateImages",attrs:{"data-list":t.dataInfo.feedBackPictures,"value-key":"picture","max-num":3,width:100,height:100}})],1),t._v(" "),a("Row",{staticStyle:{"margin-top":"30px"}},[a("Col",{attrs:{span:"3"}},[a("Button",{staticStyle:{width:"80%"},attrs:{type:"ghost"},on:{click:function(e){t.$router.go(-1)}}},[t._v("返回")])],1),t._v(" "),[a("Col",{attrs:{span:"3"}},[a("Button",{staticStyle:{width:"80%"},attrs:{type:"primary",loading:t.saveLoading},on:{click:function(e){t.saveData()}}},[t._v("保存")])],1),t._v(" "),a("Col",{attrs:{span:"3"}},[a("Button",{staticStyle:{width:"80%"},attrs:{type:"success",loading:t.saveLoading},on:{click:function(e){t.$Modal.confirm({title:"发布确认",content:"是否确认发布？",onOk:t.submitData})}}},[t._v("发布\n        ")])],1)]],2),t._v(" "),t.dataLoading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1),t._v(" "),a("Modal",{attrs:{width:"600",title:"添加"+t.materialModal.type},model:{value:t.materialModal.show,callback:function(e){t.$set(t.materialModal,"show",e)},expression:"materialModal.show"}},[a("v-add-material",{ref:"addMaterial",attrs:{data:t.materialItem,type:t.materialModal.type}}),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"ghost"},on:{click:function(e){t.materialModal.show=!1}}},[t._v("取消")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.editMaterial()}}},[t._v("确定")])],1)],1)],1)},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},spXB:function(t,e,a){var i=a("bfgf");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("717cb8d8",i,!1)},voQX:function(t,e,a){var i=a("xTDf");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("6b2b77d2",i,!1)},wDhi:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,"",""])},xTDf:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".tx-order-preview-image .image-carousel[data-v-7117b9f8]{position:fixed;width:100%;height:100%;top:0;left:0;z-index:9999;text-align:center;background-color:rgba(0,0,0,.7)}.tx-order-preview-image .carousel-box[data-v-7117b9f8]{max-width:800px;width:800px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},zQ7w:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tx-order-common-image",class:{"no-url":!t.imgSrc,isRound:t.round},style:{width:0===t.width?"100%":t.width+"px",height:0===t.height?"100%":t.height+"px","background-color":t.backColor}},[t.isComplete?t._e():a("Icon",{style:{"font-size":t.width/2+"px"},attrs:{type:t.icon}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],ref:"image",attrs:{src:t.imgSrc}})],1)},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o}});