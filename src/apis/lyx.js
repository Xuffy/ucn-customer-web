export default {
  // logistic
  gei_plan_list: ['/logistics/plan/pageByPlanNo', 'BASE_LJ', 'UPURCHASE_URL'],
  get_transportation_list: ['/logistics/plan/pageByUnit', 'BASE_LJ', 'UPURCHASE_URL'],
  get_SKU_list: ['/logistics/plan/pageBySkuCode', 'BASE_LJ', 'UPURCHASE_URL'],
  get_dictionary: ['/code/part', 'UMETA_URL'],
  delete_by_ids: ['/logistics/plan/deleteByIds', 'UPURCHASE_URL'],
  get_new_logistics_no: ['/logistics/plan/getNo', 'UPURCHASE_URL']
}
