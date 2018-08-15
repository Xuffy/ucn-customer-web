export default {
  id: {
    _hide: true
  },
  inquiryId: {
    _hide: true
  },
  inquiryNo: { // 系统自动生成 询价母单号

  },
  quotationNo: { // 系统带入：当前询价单的子单号

  },
  entryDt: { // 创建时间
    transForm: 'time'
  },
  status: { // 系统带入，共四个状态及其触发： 询价状态
    transForm: 'INQUIRY_STATUS'
  },
  supplierName: { // 系统带入：当前询价单所选的供应商（多个供应商用逗号隔开） 供应商名称

  },
  skuCode: { // 产品编码 系统带入：inquiry中的sku 编码

  },
  skuCustomerSkuCode: { // 客户货号

  },
  skuNameEN: { // 系统带入：inquiry中的sku 名称 产品英文品名
    key: 'skuNameEn'
  },
  qty: {
    key: 'skuQty',
    type: 'Number'
  },
  totalAmount: {
    key: 'totalAmount',
    type: 'Number'
  },
  totalCtn: {
    key: 'totalCtn',
    type: 'Number'
  },
  totalVolume: {
    key: 'totalVolume',
    type: 'Number'
  },
  totalNetWeight: {
    key: 'totalNetWeight',
    type: 'Number'
  },
  totalGrossWeight: {
    key: 'totalGrossWeight',
    type: 'Number'
  },
  skuFobCurrency: { // FOB币种
    transForm: 'CY_UNIT'
  },
  skuFobPrice: { // FOB价格
    _toFixed: 4
  },
  skuExwCurrency: { // EXW币种
    transForm: 'CY_UNIT'
  },
  skuExwPrice: { // EXW价格
    _toFixed: 4
  },
  skuCifCurrency: { // CIF币种
    transForm: 'CY_UNIT'
  },
  skuCifPrice: { // CIF价格
    _toFixed: 4
  },
  skuDduCurrency: { // DDU币种
    transForm: 'CY_UNIT'
  },
  skuDduPrice: { // DDU价格
    _toFixed: 4
  },
  skuRefFobPrice: { // Fob参考价格
    _toFixed: 4
  },
  skuRefCifPrice: { // Cif参考价格
    _toFixed: 4
  },
  skuRefDduPrice: { // DDU参考价格
    _toFixed: 4
  },
  minimumOrderQuantity: {
    key: 'skuMinOrderQty',
    type: 'Number',
    _toFixed: 1
  },
  deliveryDays: {
    key: 'skuDeliveryDates',
    type: 'Number'
  },
  useDisplayBoxOrNot: {
    key: 'skuUseDisplayBox',
    type: 'Select',
    transForm: 'UDB_IS'
  },
  skuQuantityInDisplayBox: {
    key: 'skuDisplayBoxQty',
    type: 'Number',
    _toFixed: 1
  },
  specialTransportRequirements: {
    key: 'skuSpecialTransportRequire'
  },
  packingMethodCn: {
    key: 'skuMethodPkgCn'
  },
  packingMethodEn: {
    key: 'skuMethodPkgEn'
  },
  skuQuantityOfInnerCarton: {
    key: 'skuInnerCartonQty',
    type: 'Number',
    _toFixed: 1
  },
  packingMethodOfInnerCartonCn: {
    key: 'skuInnerCartonMethodCn',
    type: 'String',
  },
  packingMethodOfInnerCartonEn: {
    key: 'skuInnerCartonMethodEn',
    type: 'String',
  },
  skuQuantityOfOuterCarton: {
    key: 'skuOuterCartonQty'
  },
  netWeightOfOuterCarton: {
    key: 'skuOuterCartonNetWeight'
  },
  grossWeightOfOuterCarton: {
    key: 'skuOuterCartonRoughWeight'
  },
  volumeOfOuterCarton: {
    key: 'skuOuterCartonVolume'
  },
  packingMethodOfOuterCartonCn: {
    key: 'skuOuterCartonMethodCn'
  },
  packingMethodOfOuterCartonEn: {
    key: 'skuOuterCartonMethodEn'
  },
  oem: {
    key: 'skuOem',
    type: 'Select',
    transForm: 'OEM_IS'
  },
  oemQty: {
    key: 'skuOemQty',
    type: 'Number',
    _toFixed: 1
  },
  currency: { // 币种 系统带入：当前inquiry选的币种
    transForm: 'CY_UNIT'
  },
  incoterm: { // 付款条款 系统带入，当前inquiry所选的付款条款
    transForm: 'ITM'
  },
  departurePort: { // 发运港口 系统带入，当前inquiry所选的发运港口

  },
  destinationPort: { // 目的港口 系统带入，当前inquiry所选目的港口

  },
  inquiryRemark: { // 询价备注 系统带入，当前inquiry所填的询价备注
    key: 'remark'
  }
};
