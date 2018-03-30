import * as db from './db.js'

const title={
    'productSourcing':'Product Sourcing',
    'Workbenchware':'Workbenchware',
};

const page={
    //title
    logs:'Logs',
    productBookmark:'Product Bookmark',
    workbenchware:'Workbenchware',
    warehouseOverview:'Warehouse Overview',
    compareOverview:'Compare Overview',
    compareDetail:'Compare Detail',
    basicInfo:'Basic Info',
    customInfo:'Custom Info',
    priceInfo:'Price Info',
    markAsRead:'Mark As Read',
    qcOrderDetail:'QC Order Detail',



    //const Table Header
    content:'Content',
    time:'Time',



    //btnGroup
    add:'Add',
    downTheLogs:'Down the logs',
    edit:'Edit',
    showTheAdvance:'Show the Advance',          //切换显示隐藏按钮的文字
    hideTheAdvance:'Hide the Advance',          //切换显示隐藏按钮的文字
    search:'Search',
    clear:'Clear',
    createInquiry:'Create Inquiry',
    createOrder:'Create Order',
    addToCompare:'Add to Compare',
    addToBookmark:'Add to Bookmark',
    finish:'Finish',
    messageManagement:'Message Management',
    systemMessage:'System Message',
    messageSettings:'Message Settings',
    addNews:'Add News',
    action:'Action',


    category:'Category',
    skuName:'SKU Name',
    readilyAvailable:'Readily Available',
    skuCode:'SKU Code',
    exwPrice:'EXW Price',
    vendorSKUCode:'Vendor SKU Code',
    vendorSKUName:'Vendor SKU Name',
    incotermPrice:'Incoterm Price',
    skuMaterials:'SKU Materials',
    country:'Country',
    supplierName:'Supplier Name',
    packageType:'Package Type',
    productPackageType:'Product Package Type',
    deliveryDays:'Delivery Days',
    skuDescription:'SKU Description',
    vendorSKUDescription:'Vendor SKU Description',

    skuEnglishName:'SKU English name',
    skuStatus:'SKU status',
    color:'Color',
    incoterm:'Incoterm',
    incotermArea:'incoterm area',
    unitofMeasurement:' unit of measurement',
    skuEnglishDescription:'SKU English description',

    basicInformation:'basic information',
    price:'price',
    customInformation:'Custom Information',
    packingInfo:'Packing Info',
    logisticInfo:'Logistic Info',
    otherInfo:'Other Info',
    attachment:'Attachment',
    tradeHistory:'Trade History',
    remark:'Remark',

    //detail basicInformation
    skuNo:'SKU No',
    skuDescriptionInCustomerLanguage:'SKU description in customer language',
    skuNameInCustomerLanguage:'SKU name in customer language',
    vendorSkuCode:'vendor sku code',
    supplierCode:'supplier code',
    productFormation:'product formation',
    textureEnglish:'texture(English)',
    colourEnglish:'colour(English)',
    minimumOrderQuantity:'minimum order quantity',
    deliveryDate:'delivery date',
    productDesign:'product design',
    categoryLevel1:'category level 1',
    categoryLevel2:'category level 2',
    categoryLevel3:'category level 3',
    categoryLevel4:'category level 4',
    skuAvailable:'SKU available',
    restrictedSellingCountry:'Restricted selling country',
    applicableAge:'applicable age ',
    expirationDate:'expiration date',
    unexpirationDate:'unexpiration date',
    explain:'explain',






    //detail customerInformation
    rateOfValueAddedTax:'rate of value-added tax ',
    taxRefundRate:'tax refund rate',
    customsCode:'customs code',
    customsDeclarationNameInChinese:' customs declaration name(in Chinese)',
    customsDeclarationNameInEnglish:'customs declaration name(in English)',
    chineseTradeMark:'Chinese trade mark',
    englishTradeMark:'English trade mark',
    commodityInspectionChineseName:'commodity inspection Chinese name',
    commodityInspectionEnglishName:'commodity inspection English name',
    declareElements:'Declare elements',
    origin:'origin',
    inspectionAndQuarantineCategory:'Inspection and quarantine category',
    brand:'brand',
    brandRemark:'brand remark',
    related:'related',
    certificat:'certificat',


    //detail packingInfo
    unitOfWeight:'unit of weight',
    unitOfLength:'unit of length',
    unitOfVolume:'unit of volume',
    skuLength:'SKU length',
    skuBreadth:'SKU breadth',
    skuHeight:'SKU height',
    skuNetWeight:'SKU net weight',
    skuVolume:'SKU volume',
    packingMethodCN:'Packing method CN',
    packingMethodEN:'Packing method EN',
    unitOfMediumPackage:'unit of medium package',
    skuQuantityOfMediumPackage:'SKU quantity of medium package',
    lengthOfMediumPackage:'length of medium package',
    breadthOfMediumPackage:'breadth of medium package',
    heightOfMediumPackage:'height of medium package',
    netWeightOfMediumPackage:'net weight of medium package',
    roughWeightOfMediumPackage:'rough weight of medium package',
    volumeOfMediumPackage:'volume of medium package',
    descriptionOfMediumPackage:'description of medium package',
    packingMethodOfMediumPackageCN:'packing method of medium package CN',
    packingMethodOfMediumPackageEN:'packing method of medium package EN',
    unitOfOuterBox:'unit of outer box',
    descriptionOfOuterBox:'description of outer box',
    mediumPackageOfOuterBox:'medium package of outer box',
    skuQuantityOfOuterBox:'SKU quantity of outer box',
    lengthOfOuterBox:'length of outer box',
    breadthOfOuterBox:'breadth of outer box',
    heightOfOuterBox:'height of outer box',
    netWeightOfOuterBox:'net weight of outer box',
    roughWeightOfOuterBox:'rough weight of outer box',
    volumeOfOuterBox:'volume of outer box',
    outerPackingMethodCN:'outer packing method CN',
    outerPackingMethodEN:'outer packing method EN',
    oem:'OEM',

    //detail Logistic
    gpSKUQuantity:'GP SKU quantity',
    hqSKUQuantity:'HQ SKU quantity',
    trayDimension:'tray dimension',
    skuQuantityPerTray:'SKU quantity per tray',
    specialTransportRequirements:'Special transport requirements',
    inventoryCostCalculationMethod:'Inventory cost calculation method',
    defaultWarehouse:'default warehouse',
    warehouseQuantity:'warehouse quantity',
    safeStock:'safe stock',
    minimumStock:'minimum stock',
    maximumBatch:'Maximum batch',


    //detail otherInfo
    mainSaleCountry:'main sale country',
    mainSaleArea:'main sale area',
    productionTime:'production time',
    qualityStander:'quality stander',
    yearOfListed:'year of listed',
    useDisplayBoxOrNot:'use display box or not',
    skuQuantityInDisplayBox:'SKU quantity in display box',
    lengthWidthAndHeight:'length width and height',
    otherPackingInformationCN:'other packing information CN',
    otherPackingInformationEN:'other packing information EN',
    adjustSKUAndPackageOrNot:'adjust SKU and package or not',


    //bookmark manuallyAdd price
    fobCurrency:'FOB currency',
    fobPrice:'FOB price',
    fobPort:'FOB Port',
    exwCurrency:'EXW currency',
    otherIncoterm:'other incoterm',
    otherIncotermPrice:'other incoterm price',
    otherIncotermArea:'other incoterm area',
    otherIncotermCurrency:'other incoterm currency',


};

const btn={
    ShowTheAdvance:'Show the Advance',          //切换显示隐藏按钮的文字
    HideTheAdvance:'Hide the Advance',          //切换显示隐藏按钮的文字
    search:'Search',
    clear:'Clear',
    createInquiry:'Create Inquiry',
    createOrder:'Create Order',
    addToCompare:'Add to Compare',
    addToBookmark:'Add to Bookmark'

};




export default {
    title,
    page,
    btn,
    ...db
}
