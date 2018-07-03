export default {
  UNREADMESSAGE_QUERY: ['/companymessage/query', 'UMESSAGE_URL'], // 查询未读消息
  UNREADMESSAGE_UPDATEUNREAD: ['/companymessage/updateunread', 'UMESSAGE_URL'], // 标记消息已读
  USER_PRIVILEGE: ['/user/privilege', 'UUSER_URL'],
  UTASK_PAGELIST: ['/utask/pageList', 'UWORKBENCH_URL'],
  UTASK_TYPELIST: ['/utask/typeList', 'UWORKBENCH_URL'],
  UTASK_GETBYTYPEANDMODULE: ['/utask/getByTypeAndModule', 'UWORKBENCH_URL'],
  UDA_FINDDATAANALYSISLIST: ['/uda/findDataAnalysisList', 'UWORKBENCH_URL'],
  ITEMFAVORITE_PART: ['/itemfavorite/part', 'UMETA_URL'],
  ITEMFAVORITE_UPDATE: ['/itemfavorite/update', 'UMETA_URL'],
  CHATMESSAGE_QUERY: ['/chatmessage/query', 'UMESSAGE_URL'], // 获取留言板
  CHATMESSAGE_ADD: ['/chatmessage/add', 'UMESSAGE_URL'], // 发送留言板消息
  TIMEZONE_ALL: ['/timezone/all', 'UMETA_URL'], // 查询时区
  OSS_TOKEN: ['/oss/token', 'UMETA_URL'], // OSS签名参数
  GRIDFIELDSETTING_PART: ['/gridfieldsetting/part', 'UMETA_URL'],
  GRIDFAVORITE_UPDATE: ['/gridfavorite/update', 'UMETA_URL'],
  IMPORTFILE_IMPORTTASKE: ['/importfile/importtaske', 'UIE_URL'],
  GRIDFAVORITE_LIST: ['/gridfieldsetting/list', 'UMETA_URL'],
  IMPORTFILE_GETIMPORTTASK: ['/importfile/getimporttask', 'UIE_URL'],
  IMPORTTEMPLATE_DOWNLOADURL: ['/importtemplate/loadByCodes', 'UIE_URL'],
  USER_CUSTOMER_ISSETUSERINFO: ['/user/customer/isSetUserInfo?type={type}', 'UWORKBENCH_URL'],
  USER_DISABLE: ['/user/disable/{userId}', 'UUSER_URL'],
  USER_ENABLE: ['/user/enable/{userId}', 'UUSER_URL'],
  PRIVILEGE_DATA_BIZDOMAIN: ['/privilege/data/biz-domain', 'UUSER_URL'],
  PRIVILEGE_RESOURCE: ['/privilege/resource', 'UUSER_URL'],
  ROLE_PRIVILEGE: ['/role/privilege', 'UUSER_URL'],
  PAYMENT_GETORDERBYPAYMENTNOS: ['/payment/getOrderByPaymentNos', 'UWORKBENCH_URL']
}
