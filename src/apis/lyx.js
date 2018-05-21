export default {
  // logistic
  gei_plan_list: ['/logistics/plan/pageByPlanNo', 'BASE_DEV'],
  get_transportation_list: ['/logistics/plan/pageByUnit', 'BASE_DEV'],
  get_sku_list: ['/logistics/plan/pageBySkuCode', 'BASE_DEV'],
  get_dictionary: ['/code/part', 'UMETA_URL'],
  delete_by_ids: ['/logistics/plan/deleteByIds', 'BASE_DEV'],
  get_new_logistics_no: ['/logistics/plan/getNo', 'BASE_DEV'],
  get_currency: ['/currency/all', 'UMETA_URL'],
  get_container_type: ['/containertype/all', 'UMETA_URL'],
  get_plan_details: ['/logistics/plan/get/', 'BASE_DEV'],
  get_payment_list: ['/payment/list/', 'BASE_DEV'],
  get_product_history: ['/logistics/plan/getProductHistory', 'BASE_DEV'],
  get_order_list_with_page: ['/order/skuAllPage', 'BASE_DEV'],
  get_loading_list_plan: ['/logistics/order/pageByPlanNo', 'BASE_DEV'],
  get_loading_list_unit: ['/logistics/order/pageByUnit', 'BASE_DEV'],
  get_loading_list_sku: ['/logistics/order/pageBySkuCode', 'BASE_DEV'],
  update_logistic_plan: ['/logistics/plan/update', 'BASE_DEV'],
  send_logistic_plan: ['/logistics/plan/send', 'BASE_DEV'],
  send_draft_logistic_plan: ['/logistics/plan/sendDraft', 'BASE_DEV'],
  save_draft_logistic_plan: ['/logistics/plan/saveDraft', 'BASE_DEV'],
  get_payment_no: ['/payment/genNo', 'BASE_DEV'],
  save_plan_payment: ['/payment/save', 'BASE_DEV'],
  update_plan_payment: ['/payment/update', 'BASE_DEV'],
  abandon_plan_payment: ['/payment/abandon', 'BASE_DEV'],
  recover_plan_payment: ['/payment/recover', 'BASE_DEV'],
  get_supplier: ['/logistics/plan/getSupplier', 'BASE_DEV']
}
