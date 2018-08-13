export default {
    label:{
        _important:true,
        _title:'Remark'
    },
    _remark:{
        _hide:true
    },
    skuSysCode:{
        _hide:true
    },
    skuId:{
        _hide:true
    },
    skuSupplierCode:{
        _hide:true
    },
    entryDt:{
        _hide:true
    },
    skuFormation:{
        _hide:true
    },
    skuPic:{
        _slot:'skuPictures',
        type:'pic',
        _image:true,
        key:'skuPictures',
        _upload: {
            readonly:true,
        }
    },
    skuNotes:{
        mustShowColumn:true,
        _upload:{
            limit:20
        }
    },
    skuBarCode:{ },
    skuNameEn:{
        _disabled:true
    },
    skuNameCn:{
        _slot:'skuNameCn',
        _disabled:true
    },
    skuDescEn:{
        _disabled:true
    },
    skuDescCustomer:{
        _rules:{
            required:true
        }
    },
    skuNameCustomer:{
        _rules:{
            required:true
        }
    },
    skuCustomerSkuCode:{
        _rules:{
            required:true
        }
    },
    skuCode:{
        _disabled:true
    },
    skuSupplierName:{
        _disabled:true
    },
    skuFobCurrency:{
        _slot:'skuFobCurrency',
        type:'currency'
    },
    skuFobPrice:{
        _slot:'skuFobPrice',
    },
    skuFobPort:{},
    skuExwCurrency:{
        _slot:'skuExwCurrency',
        type:'currency'
    },
    skuExwPrice:{
        _slot:'skuExwPrice',
    },
    skuCifCurrency:{
        _slot:'skuCifCurrency',
    },
    skuCifPrice:{
        _slot:'skuCifPrice',
    },
    skuCifPort:{},
    skuDduCurrency:{
        _slot:'skuDduCurrency',
    },
    skuDduPrice:{
        _slot:'skuDduPrice',
    },
    skuDduPort:{},
    skuUnit:{
        _slot:'skuUnit',
    },
    skuMaterialEn:{},
    skuQty:{
        _slot:'skuQty',
        _calculate:true
    },
    skuPrice:{
        _slot:'skuPrice',
        _calculate:true
    },
    skuQualifiedQty:{
        _disabled:true,
        _calculate:true
    },
    skuUntestedQty:{
        _disabled:true,
        _calculate:true
    },
    skuDeliveredQty:{
        _disabled:true,
        _calculate:true
    },
    skuUndeliveredQty:{
        _disabled:true,
        _calculate:true
    },
    skuColourEn:{},
    skuDeliveryDates:{
        _slot:'skuDeliveryDates',
    },
    skuDesign:{},
    skuCategoryId:{
        _disabled:true
    },
    skuCategoryName:{
        _hide:true
    },
    totalCtnCbm:{       //新增
        mustShowColumn:true
    },
    totalCtnGw:{        //新增
        mustShowColumn:true
    },
    totalCtnNw:{        //新增
        mustShowColumn:true
    },
    skuCartonQty:{
        mustShowColumn:true,
        _slot:'skuCartonQty'
    },
    skuCustomsCode:{
        _disabled:true
    },
    skuCustomsNameCn:{},
    skuTradeMarkEn:{},
    skuCommodityInspectionEn:{},
    skuOrigin:{},
    skuInspectQuarantineCategory:{
        _slot:'skuInspectQuarantineCategory'
    },
    skuUnitWeight:{
        _slot:'skuUnitWeight',
    },
    skuUnitLength:{
        _slot:'skuUnitLength',
    },
    skuUnitVolume:{
        _slot:'skuUnitVolume',
    },
    skuLength:{
        _slot:'skuLength',
    },
    skuWidth:{
        _slot:'skuWidth',
    },
    skuHeight:{
        _slot:'skuHeight',
    },
    skuNetWeight:{
        _slot:'skuNetWeight',
    },
    // skuGrossWeight:{},
    skuVolume:{
        _slot:'skuVolume',
    },
    skuMethodPkgEn:{},
    skuInnerCartonQty:{
        _slot:'skuInnerCartonQty',
    },
    skuInnerCartonLength:{
        _slot:'skuInnerCartonLength',
    },
    skuInnerCartonWidth:{
        _slot:'skuInnerCartonWidth',
    },
    skuInnerCartonHeight:{
        _slot:'skuInnerCartonHeight',
    },
    skuInnerCartonWeightNet:{
        _slot:'skuInnerCartonWeightNet',
    },
    skuInnerCartonRoughWeight:{
        _slot:'skuInnerCartonRoughWeight',
    },
    skuInnerCartonVolume:{
        _slot:'skuInnerCartonVolume',
    },
    skuInnerCartonDesc:{},
    skuInnerCartonMethodEn:{},
    skuOuterCartonDesc:{},
    skuInnerCartonOuterNum:{
        _slot:'skuInnerCartonOuterNum',
    },
    skuOuterCartonQty:{
        _slot:'skuOuterCartonQty',
    },
    skuOuterCartonLength:{
        _slot:'skuOuterCartonLength',
    },
    skuOuterCartonWidth:{
        _slot:'skuOuterCartonWidth',
    },
    skuOuterCartonHeight:{
        _slot:'skuOuterCartonHeight',
    },
    skuOuterCartonNetWeight:{
        _slot:'skuOuterCartonNetWeight',
    },
    skuOuterCartonRoughWeight:{
        _slot:'skuOuterCartonRoughWeight',
    },
    skuOuterCartonVolume:{
        _slot:'skuOuterCartonVolume',
    },
    skuOuterCartonMethodEn:{},
    skuBrand:{},
    skuApplicableAge:{
        _slot:'skuApplicableAge',
    },
    skuExpireDates:{
        _slot:'skuExpireDates',
    },
    skuExpireUnit:{
        _slot:'skuExpireUnit',
    },
    skuComments:{},
    skuStatus:{
        _hide:true
    },
    skuLabel:{},
    skuInnerPackBarCode:{},
    skuInnerPackLabel:{},
    skuShippingMarks:{},
    skuOuterCartonBarCode:{},
    skuLabelPics:{
        _slot:'skuLabelPic',
        _upload: {
            limit:20
        }
    },
    skuLabelDesc:{},
    skuPkgMethodPic:{
        _slot:'skuPkgMethodPic',
        _image:true,
        _upload: {
            limit:1
        }
    },
    skuInnerCartonPic:{
        _slot:'skuInnerCartonPic',
        _image:true,
        _upload: {
            limit:1
        }
    },
    skuOuterCartonPic:{
        _slot:'skuOuterCartonPic',
        _image:true,
        _upload: {
            limit:1
        }
    },
    skuSample:{
        _slot:'skuSample',
    },
    skuSampleQty:{
        _slot:'skuSampleQty',
        _calculate:true
    },
    skuSamplePrice:{
        _slot:'skuSamplePrice',
    },
    skuQuotationNo:{
        _disabled:true
    },
    skuRemarkOne:{
        mustShowColumn:true
    },
    skuRemarkTwo:{
        mustShowColumn:true
    },
    skuRemarkThree:{
        mustShowColumn:true
    },
    skuAdditionalOne:{
        _slot:'skuAdditionalOne',
        _image:true,
        _upload: {
            limit:1
        }
    },
    skuAdditionalTwo:{
        _slot:'skuAdditionalTwo',
        _image:true,
        _upload: {
            limit:1
        }
    },
    skuAdditionalThree:{
        _slot:'skuAdditionalThree',
        _image:true,
        _upload: {
            limit:1
        }
    },
    skuAdditionalFour:{
        _slot:'skuAdditionalFour',
        _image:true,
        _upload: {
            limit:1
        }
    },
}