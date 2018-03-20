webpackJsonp([6],{"+8Vz":function(t,e,a){var i=a("2DY4");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("1f834f3f",i,!1)},"+Mie":function(t,e,a){var i=a("ZOyh");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("8855bcb8",i,!1)},"/Vwx":function(t,e,a){"use strict";(function(t){var i=a("2Dkn"),s=a("7quG"),o=a("04QK");e.a={name:"commonUpload",props:{readonly:{type:Boolean,default:!1},dataList:{type:[Array,String]},valueKey:String,maxNum:{type:Number,default:1},width:{type:Number,default:80},height:{type:Number,default:80}},components:{VImage:o.a,VPreviewImage:s.a},data:function(){return{uploadList:[],uploadParams:{data:{type:1},action:i.a.ENV.api+"/v2/store/file/uploadFiles",headers:{"utouu-open-client-ticket":this.$localStore.get("ticket")}}}},mounted:function(){var e=this,a=t.clone(this.dataList);t.isString(a)&&(a=a?[this.dataList]:[]),this.uploadList=t.map(t.compact(a),function(t){return{url:e.valueKey?t[e.valueKey]:t}})},watch:{dataList:function(e){var a=this;t.isString(e)&&(e=e?[e]:[]),this.uploadList=t.map(t.compact(e),function(t){return{url:a.valueKey?t[a.valueKey]:t}})}},methods:{getData:function(e){return t.map(this.uploadList,function(t){return t.url}).join(e||",")},validate:function(){return t.isEmpty(this.uploadList)?(this.$Message.warning("请上传图片"),!1):!(this.uploadList.length>this.maxNum)||(this.$Message.warning("图片上传异常，请重新上传！"),!1)},uploadDelete:function(e){this.uploadList=t.filter(this.uploadList,function(t){return t.url!==e.url})},uploadBefore:function(){if(this.uploadList.length>=this.maxNum&&1!==this.maxNum)return this.$alert("只能上传"+this.maxNum+"张图片"),!1},uploadProgress:function(){var e=this;1===this.maxNum&&this.$refs.commonUpload.fileList.length>0?this.uploadList=[t.last(this.$refs.commonUpload.fileList)]:t.map(this.$refs.commonUpload.fileList,function(a){if(e.uploadList.length>=e.maxNum&&1!==e.maxNum)return e.$alert("只能上传"+e.maxNum+"张图片"),!1;t.findWhere(e.uploadList,{uid:a.uid})||e.uploadList.push(a)})},uploadSuccess:function(e,a){a.url=e.data[0],this.$refs.commonUpload.fileList=t.filter(this.$refs.commonUpload.fileList,function(t){return"finished"!==t.status})}}}}).call(e,a("u47Y"))},"04QK":function(t,e,a){"use strict";function i(t){n||a("+Mie")}var s=a("ZMJk"),o=a("zQ7w"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-44ba65cc",null);d.options.__file="src\\components\\common\\image.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},"1nkq":function(t,e,a){var i=a("wDhi");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("6d4069e5",i,!1)},"1pFO":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tx-order-preview-image"},[t.imageModal?a("div",{staticClass:"image-carousel",on:{click:function(e){t.imageModal=!1}}},[a("div",{staticClass:"carousel-box",on:{click:function(e){e.stopPropagation(),t.imageModal=!0}}},[a("Carousel",{attrs:{loop:"",dots:1===t.dataList.length?"none":"outside",value:t.index,arrow:1===t.dataList.length?"never":"hover"}},t._l(t.dataList,function(e,i){return a("CarouselItem",{key:i},[a("div",{staticClass:"image-box"},[a("img",{staticStyle:{"max-width":"800px"},style:{"max-height":.9*t.windowHeight+"px"},attrs:{src:t.valueKey?e[t.valueKey]:e}})])])}))],1)]):t._e()])},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},"2ChV":function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,'.design-images .ivu-col[data-v-8cccd99a]{height:150px;margin-right:20px;margin-bottom:20px}.design-images .ivu-col-span-5[data-v-8cccd99a]{width:240px}.design-images .show-box[data-v-8cccd99a]{height:100%;width:100%;background-position:50%;background-size:cover;position:relative}.design-images .show-box[data-v-8cccd99a]:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;display:none;background-color:rgba(0,0,0,.7)}.design-images .show-box i[data-v-8cccd99a]{color:#fff;position:absolute;top:50%;left:50%;font-size:30px;display:none;cursor:pointer;z-index:6;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.design-images .show-box:hover i[data-v-8cccd99a],.design-images .show-box[data-v-8cccd99a]:hover:before{display:block}',""])},"2DY4":function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".common-upload-list[data-v-4507e4ee]{display:inline-block;text-align:center;border:1px solid transparent;border-radius:4px;overflow:hidden;background-color:#f4f4f4;position:relative;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.4);box-shadow:0 1px 1px rgba(0,0,0,.4);width:250px;height:144px;margin-right:10px;margin-bottom:10px}.common-upload-list img[data-v-4507e4ee]{width:100%;height:100%}.common-upload-list-cover[data-v-4507e4ee]{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.common-upload-list:hover .common-upload-list-cover[data-v-4507e4ee]{display:block}.common-upload-list-cover .icon-box[data-v-4507e4ee]{color:#fff;cursor:pointer;position:absolute;width:60%;top:50%;left:0;font-size:40px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.common-upload-list-cover .icon-box[data-v-4507e4ee]:last-child{left:40%}.common-upload-list-cover span.readonly[data-v-4507e4ee]{width:100%;left:0}.format-text[data-v-4507e4ee]{font-size:50px;font-weight:700;text-shadow:1px 1px 1px #fff;color:#eaeaea}",""])},"3MfA":function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".common-upload-list[data-v-20d91652]{display:inline-block;text-align:center;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.2);box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:10px;margin-bottom:10px}.common-upload-list img[data-v-20d91652]{width:100%;height:100%}.common-upload-list-cover[data-v-20d91652]{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.common-upload-list:hover .common-upload-list-cover[data-v-20d91652]{display:block}.common-upload-list-cover .icon-box[data-v-20d91652]{color:#fff;position:absolute;top:50%;left:25%;line-height:1;cursor:pointer;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.common-upload-list-cover .icon-box[data-v-20d91652]:last-child{left:65%}.common-upload-list-cover span.readonly[data-v-20d91652]{width:100%;left:0;text-align:center}",""])},"3cXf":function(t,e,a){t.exports={default:a("I4CF"),__esModule:!0}},"50eh":function(t,e,a){"use strict";function i(t){n||a("+8Vz")}var s=a("QaVi"),o=a("DI2z"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-4507e4ee",null);d.options.__file="src\\components\\common\\uploadFile.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},"5H2H":function(t,e,a){var i=a("3MfA");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("0d7755c6",i,!1)},"7quG":function(t,e,a){"use strict";function i(t){n||(a("voQX"),a("WIru"))}var s=a("H3hZ"),o=a("1pFO"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-7117b9f8",null);d.options.__file="src\\components\\common\\previewImage.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},"9MTC":function(t,e,a){var i=a("2ChV");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("02f5d341",i,!1)},DI2z:function(t,e,a){"use strict";var i=function(){var t=this,e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"tx-order-common-upload-file"},[e.readonly?e._e():i("ul",{staticStyle:{"margin-bottom":"10px"}},[i("li",[e._v("\n      选择尺码：\n      "),i("CheckboxGroup",{staticStyle:{display:"inline-block"},model:{value:e.selectSize,callback:function(t){e.selectSize=t},expression:"selectSize"}},e._l(e.sizeList,function(t){return i("Checkbox",{key:t.size,staticStyle:{"margin-right":"20px"},attrs:{label:t.val,disabled:e.isUploading}},[e._v(e._s(t.size)+"\n        ")])}))],1)]),e._v(" "),e.readonly?e._e():i("Upload",{ref:"commonUploadFile",staticStyle:{width:"250px",display:"inline-block","vertical-align":"top","margin-right":"10px","margin-bottom":"10px"},attrs:{name:"files","max-size":51200,action:e.uploadParams.action,data:e.uploadParams.data,headers:e.uploadParams.headers,"show-upload-list":!1,"on-success":e.uploadSuccess,"before-upload":e.uploadBefore,"on-progress":e.uploadProgress,"on-exceeded-size":function(){t.$alert("请上传50MB以内的文件！")},multiple:1!==e.maxNum,type:"drag"}},[i("div",{staticStyle:{padding:"20px 0"}},[i("Icon",{staticStyle:{"font-size":"60px"},attrs:{type:"ios-folder",size:parseInt(.3*e.width)}}),e._v(" "),i("p",{staticStyle:{"margin-top":"20px","font-size":"16px"}},[e._v(e._s(e.uploadList.length)+" / "+e._s(e.maxNum))])],1)]),e._v(" "),e._l(e.uploadList,function(t,a){return i("div",{staticClass:"common-upload-list"},[t.status&&"finished"!==t.status?i("div",{style:{"line-height":e.height+"px"}},[t.showProgress?i("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()],1):[t.name?i("p",{staticClass:"format-text",domProps:{textContent:e._s(t.name.split(".")[1].toUpperCase())}}):e._e(),e._v(" "),i("h3",{staticClass:"size-text",domProps:{textContent:e._s(t.sizeStr)}}),e._v(" "),i("p",{staticClass:"name-text",domProps:{textContent:e._s(t.name)}}),e._v(" "),i("div",{staticClass:"common-upload-list-cover",style:{"line-height":e.height+"px"}},[i("span",{staticClass:"icon-box",class:{readonly:e.readonly},on:{click:function(a){e.downloadFile(t.url)}}},[i("Icon",{attrs:{type:"android-download"}})],1),e._v(" "),i("span",{staticClass:"icon-box",on:{click:function(a){e.uploadDelete(t)}}},[e.readonly?e._e():i("Icon",{attrs:{type:"ios-trash-outline"}})],1)])]],2)})],2)},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},FGw9:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,"",""])},FSDW:function(t,e,a){"use strict";var i=function(){var t=this,e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"tx-order-common-upload"},[e.readonly?e._e():i("Upload",{ref:"commonUpload",staticStyle:{display:"inline-block",position:"relative","vertical-align":"top","margin-right":"10px"},style:{width:e.width-2+"px"},attrs:{name:"files",format:["jpg","jpeg","png"],"max-size":2048,action:e.uploadParams.action,data:e.uploadParams.data,headers:e.uploadParams.headers,"show-upload-list":!1,"on-success":e.uploadSuccess,"on-format-error":function(){t.$alert("请上传图片文件！")},"on-exceeded-size":function(){t.$alert("请上传2MB以内的图片！")},"before-upload":e.uploadBefore,"on-progress":e.uploadProgress,multiple:1!==e.maxNum,type:"drag"}},[i("div",{style:{width:e.width-2+"px",height:e.height-2+"px","line-height":e.height-2+"px"}},[i("Icon",{attrs:{type:"images",size:parseInt(.3*e.width)}})],1),e._v(" "),i("span",{staticStyle:{"font-size":"14px",position:"absolute",bottom:"0",left:"0",color:"#999",width:"100%","text-align":"center"}},[e._v("\n      "+e._s(e.uploadList.length)+" / "+e._s(e.maxNum))])]),e._v(" "),e._l(e.uploadList,function(t,a){return i("div",{staticClass:"common-upload-list",style:{width:e.width+"px",height:e.height+"px","font-size":parseInt(.2*(e.width>e.height?e.width:e.height))+"px"}},[t.status&&"finished"!==t.status?i("div",{style:{"line-height":e.height+"px"}},[t.showProgress?i("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()],1):[i("v-image",{attrs:{src:t.url,width:e.width,height:e.height}}),e._v(" "),i("div",{staticClass:"common-upload-list-cover",style:{"line-height":e.height+"px"}},[i("span",{staticClass:"icon-box",class:{readonly:e.readonly},on:{click:function(t){e.$refs.previewImage.show(e.uploadList,"url",a)}}},[i("Icon",{attrs:{type:"ios-eye-outline"}})],1),e._v(" "),i("span",{staticClass:"icon-box",on:{click:function(a){e.uploadDelete(t)}}},[e.readonly?e._e():i("Icon",{attrs:{type:"ios-trash-outline"}})],1)])]],2)}),e._v(" "),i("v-preview-image",{ref:"previewImage"})],2)},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},GruV:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".tx-order-preview-image .ivu-carousel-track{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},H3hZ:function(t,e,a){"use strict";(function(t){e.a={name:"previewImage",props:{},data:function(){return{dataList:[],valueKey:null,index:0,imageModal:!1,windowHeight:window.innerHeight}},created:function(){},methods:{show:function(e,a,i){if(!t.isArray(e)&&!t.isString(e))throw Error("v-preview-image params error");t.isString(e)&&(e=[e]),t.isString(a)?this.valueKey=a:t.isNumber(a)&&(this.index=a),t.isNumber(i)&&(this.index=i),this.dataList=e,this.imageModal=!0}}}}).call(e,a("u47Y"))},HCy0:function(t,e,a){"use strict";function i(t){n||a("1nkq")}var s=a("kWYF"),o=a("OtLT"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-378415f7",null);d.options.__file="src\\components\\order\\addTag.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},I4CF:function(t,e,a){var i=a("0nnt"),s=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},KEEv:function(t,e,a){var i=a("FGw9");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("45a51d22",i,!1)},OtLT:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tx-order-add-tag"},[a("Form",{attrs:{"label-width":90}},[t.readonly?t._e():a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"添加标签："}},[a("Input",{staticStyle:{"max-width":"200px","margin-right":"10px"},attrs:{placeholder:"自定义标签"},model:{value:t.addTagName,callback:function(e){t.addTagName=e},expression:"addTagName"}}),t._v(" "),a("Button",{attrs:{type:"ghost",loading:t.addTagLoading},on:{click:function(e){t.addTag()}}},[t._v("添加")])],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"已选标签："}},t._l(t.selected,function(e){return a("Tag",{key:e.id||e,attrs:{closable:!t.readonly,color:t.readonly?"default":"blue"},on:{"on-close":function(a){t.deleteTag(e)}}},[t._v("\n        "+t._s(e.tagName||e)+"\n      ")])})),t._v(" "),t.readonly?t._e():a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"推荐标签："}},t._l(t.recommendList,function(e){return a("Tag",{key:e.id,attrs:{color:t.isSelected(e)?"blue":"default"},nativeOn:{click:function(a){t.addTag(e)}}},[t._v(t._s(e.tagName)+"\n      ")])}))],1)],1)},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},QaVi:function(t,e,a){"use strict";(function(t){var i=a("2Dkn"),s=a("7quG"),o=a("04QK");e.a={name:"commonUploadFile",props:{readonly:{type:Boolean,default:!1},dataList:{type:Array,default:[]},valueKey:String,maxNum:{type:Number,default:1},width:{type:Number,default:80},height:{type:Number,default:80}},components:{VImage:o.a,VPreviewImage:s.a},data:function(){return{isUploading:!1,selectSize:[],sizeList:[{val:10,size:"XXS"},{val:20,size:"XS"},{val:30,size:"S"},{val:40,size:"M"},{val:50,size:"L"},{val:60,size:"XL"},{val:70,size:"XXL"},{val:80,size:"XXXL"},{val:90,size:"均码"}],uploadList:[],uploadParams:{data:{type:1,orderNo:this.$route.query.id},action:i.a.ENV.api+"/v2/store/file/uploadFilesUrl",headers:{"utouu-open-client-ticket":this.$localStore.get("ticket")}}}},mounted:function(){this.uploadList=this.dataList},watch:{dataList:function(t,e){this.uploadList=t}},methods:{getData:function(){var e=[];return t.map(this.uploadList,function(t){e.push({val:t.val,sizeName:t.sizeName,sizeStr:t.sizeStr,url:t.url,name:t.name})}),e},validate:function(){},uploadDelete:function(e){this.uploadList=t.filter(this.uploadList,function(t){return t.url!==e.url})},uploadBefore:function(){return this.uploadList.length>=this.maxNum&&1!==this.maxNum?(this.$alert("只能上传"+this.maxNum+"张图片"),!1):t.isEmpty(this.selectSize)?(this.$alert("请选择尺码！"),!1):void(this.isUploading=!0)},uploadProgress:function(){var e=this;t.map(this.$refs.commonUploadFile.fileList,function(a){if(e.uploadList.length>=e.maxNum&&1!==e.maxNum)return e.$alert("只能上传"+e.maxNum+"个文件"),!1;t.findWhere(e.uploadList,{uid:a.uid})||e.uploadList.push(a)})},uploadSuccess:function(){var e=this;this.isUploading=!1,this.uploadList=t.map(this.uploadList,function(a){var i=void 0,s=[];return a.response&&(i=a.response.data[0],a.url=i.fileName,a.name=i.description,a.val=e.selectSize.join(","),t.map(e.sizeList,function(a){-1!==t.indexOf(e.selectSize,a.val)&&s.push(a.size)}),a.sizeName=s.join("/")+"码：",a.sizeStr=s.join("/")),a}),this.$refs.commonUploadFile.fileList=t.filter(this.$refs.commonUploadFile.fileList,function(t){return"finished"!==t.status})},downloadFile:function(t){window.open(t)}}}}).call(e,a("u47Y"))},V3s3:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"templet-detail tx-container"},[a("div",{staticClass:"tx-content"},[a("h2",{staticClass:"tx-title"},[t._v("设计稿")]),t._v(" "),a("div",{staticClass:"tx-content-box"},[a("v-upload",{ref:"designUpload",attrs:{"data-list":t.designUploadList,"max-num":20,width:248,height:144}})],1),t._v(" "),a("h2",{staticClass:"tx-title"},[t._v("设计说明")]),t._v(" "),a("div",{staticClass:"tx-content-box"},[a("Input",{staticStyle:{width:"60%"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"设计说明"},model:{value:t.replaceData.description,callback:function(e){t.$set(t.replaceData,"description",e)},expression:"replaceData.description"}})],1),t._v(" "),a("h2",{staticClass:"tx-title"},[t._v("标签")]),t._v(" "),a("div",{staticClass:"tx-content-box"},[t.systemTagsList?a("v-system-tag",{ref:"systemTag",attrs:{"sex-tag":t.replaceData.sex,"style-tag":t.replaceData.style,"season-tag":t.replaceData.season}}):t._e(),t._v(" "),t.commonTagsList?a("v-add-tag",{ref:"addTag",attrs:{"recommend-list":t.commonTagsList,"data-list":t.replaceData.common}}):t._e()],1),t._v(" "),a("h2",{staticClass:"tx-title"},[t._v("版式图")]),t._v(" "),a("div",{staticClass:"tx-content-box"},[t.templateUploadList?a("v-upload-file",{ref:"cadFile",attrs:{"data-list":t.templateUploadList,"max-num":5}}):t._e()],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("Button",{staticStyle:{width:"150px"},on:{click:function(e){t.cancle()}}},[t._v("取消")]),t._v(" "),a("Button",{staticStyle:{width:"150px"},attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("保存")])],1)]),t._v(" "),t.templetEditLoading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},WIru:function(t,e,a){var i=a("GruV");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("f61e895a",i,!1)},ZMJk:function(t,e,a){"use strict";e.a={name:"commonImage",props:{src:{type:String},width:{type:Number,default:0},height:{type:Number,default:0},round:{type:Boolean,default:!1},icon:{type:String,default:"image"},backColor:{type:String,default:"#F4F4F4"},fill:{type:Boolean,default:!0}},data:function(){return{imgSrc:"",isComplete:!1}},mounted:function(){this.imgSrc=this.ossFilter(this.src)},watch:{src:function(t){this.imgSrc=this.ossFilter(t)}},methods:{getData:function(t){},ossFilter:function(t){var e=this;return this.$nextTick(function(){e.$refs.image.onload=function(){e.isComplete=!0}}),!t||t.indexOf("tailorx.cn")<0||!this.width&&!this.height?t:(t+=t.indexOf("?")>-1?"&":"?",t.replace("https://","//"),t.replace("http://","//"),this.isComplete=!1,t+"x-oss-process=image/resize,w_"+this.width+",h_"+this.height+(this.fill?",m_fill":""))}}}},ZOyh:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".tx-order-common-image[data-v-44ba65cc]{text-align:center;position:relative;display:inline-block}.tx-order-common-image img[data-v-44ba65cc]{max-width:100%;max-height:100%}.tx-order-common-image i[data-v-44ba65cc],.tx-order-common-image img[data-v-44ba65cc]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tx-order-common-image i[data-v-44ba65cc]{color:#eaeaea}.tx-order-common-image.no-url[data-v-44ba65cc]{background:none!important}.tx-order-common-image.no-url i[data-v-44ba65cc]{color:#f4f4f4}.tx-order-common-image.isRound[data-v-44ba65cc],.tx-order-common-image.isRound img[data-v-44ba65cc]{border-radius:50%}",""])},Zok3:function(t,e,a){"use strict";function i(t){n||a("5H2H")}var s=a("/Vwx"),o=a("FSDW"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-20d91652",null);d.options.__file="src\\components\\common\\upload.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},bSdk:function(t,e,a){"use strict";e.a={name:"systemTag",props:{readonly:{type:Boolean,default:!1},sexTag:String,styleTag:String,seasonTag:String},data:function(){return{tagList:{},sexTagId:this.sexTag||"",styleTagId:this.styleTag||"",seasonTagId:this.seasonTag||""}},mounted:function(){var t=this;this.$getTags(1).then(function(e){t.tagList=e})},watch:{sexTag:function(t){this.sexTagId=t||""},styleTag:function(t){this.styleTagId=t||""},seasonTag:function(t){this.seasonTagId=t||""}},methods:{getData:function(){return{sexTagId:this.sexTagId,styleTagId:this.styleTagId,seasonTagId:this.seasonTagId}},validate:function(){return this.sexTagId?this.styleTagId?!!this.seasonTagId||(this.$Message.warning("请选择季节标签"),!1):(this.$Message.warning("请选择款式标签"),!1):(this.$Message.warning("请选择性别标签"),!1)}}}},hrEj:function(t,e,a){"use strict";function i(t){n||a("KEEv")}var s=a("bSdk"),o=a("nNgm"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-d9adf4c6",null);d.options.__file="src\\components\\order\\systemTag.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.a=d.exports},jCQU:function(t,e,a){"use strict";function i(t){n||a("9MTC")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("n9TN"),o=a("V3s3"),n=!1,r=a("/Xao"),l=i,d=r(s.a,o.a,!1,l,"data-v-8cccd99a",null);d.options.__file="src\\views\\templet\\edit.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=d.exports},kWYF:function(t,e,a){"use strict";(function(t){e.a={name:"addTag",props:{readonly:{type:Boolean,default:!1},dataList:{type:Array,default:[]},maxNum:{type:Number,default:5}},data:function(){return{selected:t.compact(this.dataList||[]),addTagName:"",recommendList:null,addTagLoading:!1}},mounted:function(){var t=this;this.$getTags(2).then(function(e){t.recommendList=e})},watch:{dataList:function(e,a){if(t.isEqual(e,a))return this.selected;this.selected=e||[]}},methods:{getData:function(e){return t.map(this.selected,function(t){switch(e){case 2:return t.tagName||t;case 3:return t.id||t}return t})},validate:function(){return!t.isEmpty(this.selected)||(this.$Message.warning("请选择自定义标签"),!1)},isSelected:function(e){return!!t.find(this.selected,function(a){return t.isString(a)?e.tagName===a:e.id===a.id})},deleteTag:function(e){this.selected=t.filter(this.selected,function(a){return t.isString(a)?a!==e:a.id!==e.id})},addTag:function(e){var a=this;return!t.isEmpty(this.selected)&&this.selected.length>=this.maxNum?this.$Message.warning("最多选择"+this.maxNum+"个标签！"):e?t.findWhere(this.selected,{id:e.id})?this.$Message.warning("标签已选择！"):this.selected.push(e):this.addTagName?t.findWhere(this.selected,{tagName:this.addTagName})||-1!==t.indexOf(this.selected,this.addTagName)?this.$Message.warning("标签已存在！"):(this.addTagLoading=!0,void this.ajax.post("/v3/store/tag/searchOrAddCommonTag",{tagName:this.addTagName}).then(function(t){a.selected.push(t)}).finally(function(){a.addTagLoading=!1})):this.$Message.warning("请输入自定义标签名称！")}}}}).call(e,a("u47Y"))},n9TN:function(t,e,a){"use strict";(function(t){var i=a("3cXf"),s=a.n(i),o=(a("2Dkn"),a("hrEj")),n=a("HCy0"),r=a("Zok3"),l=a("50eh");e.a={name:"templetEdit",components:{VSystemTag:o.a,VAddTag:n.a,VUpload:r.a,VUploadFile:l.a},data:function(){return{templetEditLoading:!1,systemTagsList:null,commonTagsList:null,editId:this.$route.query.id,editType:Number(this.$route.query.type),existData:null,replaceData:{six:"",style:"",season:"",common:[],description:""},designUploadList:[],templateUploadList:[]}},mounted:function(){this.getSystemTagList(),this.getcommonTagList(),2===this.editType&&this.getDataList()},methods:{getSystemTagList:function(){var t=this;this.templetEditLoading=!0,this.ajax.get("/v3/store/tag/getSystemTags").then(function(e){t.systemTagsList=e,t.templetEditLoading=!1})},getcommonTagList:function(){var t=this;this.templetEditLoading=!0,this.ajax.get("/v3/store/tag/listDefaultCommonTags").then(function(e){t.commonTagsList=e,t.templetEditLoading=!1})},cancle:function(){this.$router.go(-1)},getDataList:function(){var e=this;this.templetEditLoading=!0,this.replaceData.common=[],this.ajax.post("/v3/store/plateType/getPlateTypeInfo",{id:this.editId}).then(function(a){e.existData=a,t.map(a.tagSystems,function(t){switch(t.type){case 1:e.replaceData.sex=t.id;break;case 2:e.replaceData.style=t.id;break;case 3:e.replaceData.season=t.id}}),e.replaceData.common=a.tagCommons,t.map(a.plateTypePicList,function(t){t.url&&e.designUploadList.push(t.url)}),t.map(a.plateTypeBokes,function(t){var a={};a.name=t.fileName,a.sizeName=t.sizeStr+"码",a.sizeStr=t.sizeStr,a.url=t.url,a.val=t.size,e.templateUploadList.push(a)}),e.templateUploadList=a.plateTypeBokes,e.templetEditLoading=!1}).catch(function(){e.templetEditLoading=!1})},saveEdit:function(){var e=this;if(this.$refs.systemTag.validate()&&this.$refs.addTag.validate()){this.templetEditLoading=!0;var a={},i=this.$refs.systemTag.getData(),o=this.$refs.addTag.getData(),n=this.$refs.designUpload.getData(),r=[],l=this.$refs.cadFile.getData(),d=[];t.map(o,function(t){r.push(t.id)}),t.map(l,function(t){var e={};e.size=t.val,e.sizeName=t.sizeName,e.sizeStr=t.sizeStr,e.url=t.url,e.fileName=t.name,d.push(e)}),a.picUrls=n,a.description=this.replaceData.description,a.tagSystems=i.sexTagId+","+i.styleTagId+","+i.seasonTagId,a.tagCommons=r.join(","),a.boke=s()(d),a.type=this.editType,a.id=this.editId,this.editId?this.ajax.post("/v3/store/plateType/updatePlateType",a).then(function(t){e.$Message.success("编辑成功！"),e.$router.push({path:"/templet/index"}),e.templetEditLoading=!1}).catch(function(){e.templetEditLoading=!1}):this.ajax.post("/v3/store/plateType/add",a).then(function(t){e.$Message.success("添加成功！"),e.$router.push({path:"/templet/index"}),e.templetEditLoading=!1}).catch(function(){e.templetEditLoading=!1})}}}}}).call(e,a("u47Y"))},nNgm:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.tagList.sex||t.tagList.style||t.tagList.season?a("div",{staticClass:"tx-order-system-tag"},[a("Form",{attrs:{"label-width":90}},[a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"性别标签："}},[t.readonly?a("Tag",{attrs:{color:"default"}},[t._v(t._s(t.sexTagId))]):t._e(),t._v(" "),t.readonly?t._e():a("RadioGroup",{model:{value:t.sexTagId,callback:function(e){t.sexTagId=e},expression:"sexTagId"}},t._l(t.tagList.sex,function(e,i){return a("Radio",{key:e.id,staticStyle:{"margin-right":"20px"},attrs:{label:e.id}},[t._v("\n          "+t._s(e.tagName)+"\n        ")])}))],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"款式标签："}},[t.readonly?a("Tag",{attrs:{color:"default"}},[t._v(t._s(t.styleTagId))]):t._e(),t._v(" "),t.readonly?t._e():a("RadioGroup",{model:{value:t.styleTagId,callback:function(e){t.styleTagId=e},expression:"styleTagId"}},t._l(t.tagList.style,function(e){return a("Radio",{key:e.id,staticStyle:{"margin-right":"20px"},attrs:{label:e.id}},[t._v(t._s(e.tagName)+"\n        ")])}))],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"季节标签："}},[t.readonly?a("Tag",{attrs:{color:"default"}},[t._v(t._s(t.seasonTagId))]):t._e(),t._v(" "),t.readonly?t._e():a("RadioGroup",{model:{value:t.seasonTagId,callback:function(e){t.seasonTagId=e},expression:"seasonTagId"}},t._l(t.tagList.season,function(e){return a("Radio",{key:e.id,staticStyle:{"margin-right":"20px"},attrs:{label:e.id}},[t._v(t._s(e.tagName)+"\n        ")])}))],1)],1)],1):t._e()},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o},voQX:function(t,e,a){var i=a("xTDf");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("6b2b77d2",i,!1)},wDhi:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,"",""])},xTDf:function(t,e,a){e=t.exports=a("BkJT")(!1),e.push([t.i,".tx-order-preview-image .image-carousel[data-v-7117b9f8]{position:fixed;width:100%;height:100%;top:0;left:0;z-index:9999;text-align:center;background-color:rgba(0,0,0,.7)}.tx-order-preview-image .carousel-box[data-v-7117b9f8]{max-width:800px;width:800px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},zQ7w:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tx-order-common-image",class:{"no-url":!t.imgSrc,isRound:t.round},style:{width:0===t.width?"100%":t.width+"px",height:0===t.height?"100%":t.height+"px","background-color":t.backColor}},[t.isComplete?t._e():a("Icon",{style:{"font-size":t.width/2+"px"},attrs:{type:t.icon}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],ref:"image",attrs:{src:t.imgSrc}})],1)},s=[];i._withStripped=!0;var o={render:i,staticRenderFns:s};e.a=o}});