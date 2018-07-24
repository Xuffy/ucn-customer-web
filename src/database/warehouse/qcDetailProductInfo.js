export default{
    id: {
        _hide: true
    },
    skuId:{
        _hide:true
    },
    orderNo:{
        _hide:true
    },
    purchaserHandle:{
        _hide:true
    },
    inboundSkuId:{
        _hide:true
    },
    skuQcResultDictCode: {
        key: 'skuQcResultDictCode',
        type: 'String'
    },
    skuInventoryStatusDictCode:{
        key: 'skuInventoryStatusDictCode',
        type: 'String',
        _sort:false
    },
    skuCode: {
        key: 'skuCode',
        type: 'String'
    },
    customerSkuCode: {
        key: 'customerSkuCode',
        type: 'String'
    },
    factorySkuCode: {
        key: 'factorySkuCode',
        type: 'String'
    },
    skuNameCn: {
        key: 'skuNameCn',
        type: 'String'
    },
    skuBrand: {
        key: 'skuBrand',
        type: 'String'
    },
    skuDesign: {
        key: 'skuDesign',
        type: 'String'
    },
    packingMethodCn: {
        key: 'packingMethodCn',
        type: 'String'
    },
    innerCartonPackingMethodCn: {
        key: 'innerCartonPackingMethodCn',
        type: 'String'
    },
    deliveryDate: {
        key: 'deliveryDate',
        type: 'String'
    },
    unit: {
        key: 'skuUnitDictCode',
        type: 'String'
    },
    lengthUnitDictCode: {
        key: 'lengthUnitDictCode',
        type: 'String'
    },
    volumeUnitDictCode: {
        key: 'volumeUnitDictCode',
        type: 'String'
    },
    weightUnitDictCode: {
        key: 'weightUnitDictCode',
        type: 'String'
    },
    inboundNo: {
        key: 'inboundNo',
        type: 'String'
    },
    orderSkuQuantity: {
        key: 'orderSkuQty',
        type: 'Number',
        _calculate:true
    },
    expectQcQty: {
        key: 'expectQcQty',
        type: 'Number',
        _calculate:true
    },
    samplingRate: {
        key: 'samplingRate',
        type: 'String'
    },
    unqualifiedProcessingMode: {
        key: 'unqualifiedProcessingMode',
        type: 'String'
    },
    outerCartonTotalQty: {
        key: 'outerCartonTotalQty',
        type: 'Number'
    },
    skuLength: {
        key: 'skuLength',
        type: 'Number'
    },
    skuWidth: {
        key: 'skuWidth',
        type: 'Number'
    },
    skuHeight: {
        key: 'skuHeight',
        type: 'Number'
    },
    skuNetWeight:{
        key: 'skuNetWeight',
        type: 'Number'
    },
    outerCartonSkuQty:{
        key: 'outerCartonSkuQty',
        type: 'Number'
    },
    actOuterCartonSkuQty:{
        key: 'actOuterCartonSkuQty',
        type: 'Number'
    },
    outerCartonInnerBoxQty:{
        key: 'outerCartonInnerBoxQty',
        type: 'Number'
    },
    actQuantityOfInnerBoxOuterCarton:{
        key: 'actOuterCartonInnerBoxQty',
        type: 'Number'
    },
    innerCartonSkuQty:{
        key: 'innerCartonSkuQty',
        type: 'Number'
    },
    actualQuantityInnerCarton:{
        key: 'actInnerCartonSkuQty',
        type: 'Number'
    },
    innerCartonLength:{
        key: 'innerCartonLength',
        type: 'Number'
    },
    innerCartonWidth:{
        key: 'innerCartonWidth',
        type: 'Number'
    },
    innerCartonHeight:{
        key: 'innerCartonHeight',
        type: 'Number'
    },
    innerCartonNetWeight:{
        key: 'innerCartonNetWeight',
        type: 'Number'
    },
    innerCartonGrossWeight:{
        key: 'innerCartonGrossWeight',
        type: 'Number'
    },
    innerCartonVolume:{
        key: 'innerCartonVolume',
        type: 'Number'
    },
    outerCartonLength:{
        key: 'outerCartonLength',
        type: 'Number'
    },
    outerCartonWidth:{
        key: 'outerCartonWidth',
        type: 'Number'
    },
    outerCartonHeight:{
        key: 'outerCartonHeight',
        type: 'Number'
    },
    netWeightOfOuterCarton:{
        key: 'outerCartonNetWeight',
        type: 'Number'
    },
    volumeOfOuterCarton:{
        key: 'outerCartonVolume',
        type: 'Number'
    },
    grossWeightofOuterCarton:{
        key: 'outerCartonGrossWeight',
        type: 'Number'
    },
    actualProductTotalCTNS:{
        key: 'actSkuCartonTotalQty',
        type: 'Number',
        _calculate:true
    },
    qualifiedProductsTotalCTNS:{
        key: 'qualifiedSkuCartonTotalQty',
        type: 'Number',
        _calculate:true
    },
    unqualifiedProductTotalCTNS:{
        key: 'unqualifiedSkuCartonTotalQty',
        type: 'Number',
        _calculate:true
    },
    actProductQuantity:{
        key: 'actSkuQty',
        type: 'Number',
        _calculate:true
    },
    qualifiedProductsTotalQTYS:{
        key: 'qualifiedSkuQty',
        type: 'Number',
        _calculate:true
    },
    unqualifiedProductsQTY:{
        key: 'unqualifiedSkuQty',
        type: 'Number',
        _calculate:true
    },
    qualifiedProductTotalNW:{
        key: 'qualifiedSkuNetWeight',
        type: 'Number',
        _calculate:true
    },
    unqualifiedProductTotalNW:{
        key: 'unqualifiedSkuNetWeight',
        type: 'Number',
        _calculate:true
    },
    qualifiedProductsTotalCBM:{
        key: 'qualifiedSkuVolume',
        type: 'Number'
    },
    unqualifiedProductsTotalCBM:{
        key: 'unqualifiedSkuVolume',
        type: 'Number',
        _calculate:true
    },
    qualifiedProductTotalGW:{
        key: 'qualifiedSkuGrossWeight',
        type: 'Number',
        _calculate:true
    },
    unqualifiedProductTotalGW:{
        key: 'unqualifiedSkuGrossWeight',
        type: 'Number',
        _calculate:true
    }, 
    unqualifiedType:{
        key: 'unqualifiedType',
        type: 'String',
    },
    skuBarCode:{
        key: 'skuBarCode',
        type: 'String'
    },
    productBarCodeResults:{
        key: 'skuBarCodeResultDictCode',
        type: 'String'
    },
    skuLabel:{
        key: 'skuLabel',
        type: 'String'
    },
    productLabelResults:{
        key: 'skuLabelResultDictCode',
        type: 'String'
    },
    innerPackingBarCode:{
        key: 'innerPackingBarCode',
        type: 'String'
    },
    innerPackingBarCodeResults:{
        key: 'innerPackingBarCodeResultDictCode',
        type: 'String'
    },
    outerCartonBarCode:{
        key: 'outerCartonBarCode',
        type: 'String'
    },
    outerCartonBarCodeResults:{
        key: 'outerCartonBarCodeResultDictCode',
        type: 'String'
    },
    shippingMark:{
        key: 'shippingMark',
        type: 'String'
    },
    outerCartonMarksResults:{
        key: 'shippingMarkResultDictCode',
        type: 'String'
    },
    qcPics:{
        key: 'qcPics',
        type: 'String',
        _image:true,
        _sort:false
    },
    checkOuterCartons:{
        key: 'checkOuterCartonQty',
        type: 'Number',
        _calculate:true
    },
    remark:{
        key: 'remark',
        type: 'String',
    },
}