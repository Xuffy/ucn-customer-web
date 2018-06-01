const json = ["WORKBENCH", "WORKBENCH:DATA_DASHBOARD", "PRODUCT", "PRODUCT:LOG", "PRODUCT:OVERVIEW", "PRODUCT:OVERVIEW:DOWNLOAD",
  "PRODUCT:OVERVIEW:CREATE_INQUIRY", "PRODUCT:OVERVIEW:CREATE_ORDER", "PRODUCT:OVERVIEW:COMPARE",
  "PRODUCT:OVERVIEW:ADD_BOOKMARK", "PRODUCT:DETAIL", "PRODUCT:DETAIL:CREATE_INQUIRY",
  "PRODUCT:DETAIL:CREATE_ORDER", "PRODUCT:DETAIL:ADD_BOOKMARK", "PRODUCT:DETAIL:ADD_COMPARE",
  "PRODUCT:DETAIL:DOWNLOAD", "PRODUCT:BOOKMARK_OVERVIEW", "PRODUCT:BOOKMARK_OVERVIEW:CREATE_INQUIRY",
  "PRODUCT:BOOKMARK_OVERVIEW:CREATE_ORDER", "PRODUCT:BOOKMARK_OVERVIEW:COMPARE",
  "PRODUCT:BOOKMARK_OVERVIEW:ADD_PRODUCT", "PRODUCT:BOOKMARK_OVERVIEW:MANUALLY_ADD",
  "PRODUCT:BOOKMARK_OVERVIEW:DOWNLOAD", "PRODUCT:BOOKMARK_OVERVIEW:DELETE",
  "PRODUCT:BOOKMARK_OVERVIEW:RECYCLE_BIN", "PRODUCT:BOOKMARK_OVERVIEW:UPLOAD", "PRODUCT:BOOKMARK_DETAIL",
  "PRODUCT:BOOKMARK_DETAIL:CREATE_INQUIRY", "PRODUCT:BOOKMARK_DETAIL:CREATE_ORDER",
  "PRODUCT:BOOKMARK_DETAIL:MODIFY", "PRODUCT:BOOKMARK_DETAIL:ADD_COMPARE", "PRODUCT:BOOKMARK_DETAIL:ADD_PRODUCT",
  "PRODUCT:BOOKMARK_DETAIL:MANUALLY_ADD", "PRODUCT:BOOKMARK_DETAIL:DOWNLOAD", "PRODUCT:BOOKMARK_DETAIL:DELETE",
  "PRODUCT:BOOKMARK_DETAIL:RECYCLE_BIN", "PRODUCT:BOOKMARK_DETAIL:UPLOAD", "PRODUCT:COMPARE_OVERVIEW",
  "PRODUCT:COMPARE_OVERVIEW:DELETE", "PRODUCT:COMPARE_OVERVIEW:MODIFY", "PRODUCT:COMPARE_OVERVIEW:RECYCLE_BIN",
  "PRODUCT:COMPARE_DETAIL", "PRODUCT:COMPARE_DETAIL:CREATE_INQUIRY", "PRODUCT:COMPARE_DETAIL:CREATE_ORDER",
  "PRODUCT:COMPARE_DETAIL:ADD_NEW", "PRODUCT:COMPARE_DETAIL:DELETE", "PRODUCT:COMPARE_DETAIL:SAVE", "SUPPLIER",
  "SUPPLIER:LOG", "SUPPLIER:OVERVIEW", "SUPPLIER:OVERVIEW:CREATE_INQUIRY", "SUPPLIER:OVERVIEW:CREATE_ORDER",
  "SUPPLIER:OVERVIEW:COMPARE", "SUPPLIER:OVERVIEW:ADD_BOOKMARK", "SUPPLIER:DETAIL",
  "SUPPLIER:DETAIL:CREATE_INQUIRY", "SUPPLIER:DETAIL:CREATE_ORDER", "SUPPLIER:DETAIL:ADD_BOOKMARK",
  "SUPPLIER:DETAIL:ADD_COMPARE", "SUPPLIER:DETAIL:PRODUCT", "SUPPLIER:BOOKMARK_OVERVIEW",
  "SUPPLIER:BOOKMARK_OVERVIEW:CREATE_INQUIRY", "SUPPLIER:BOOKMARK_OVERVIEW:CREATE_ORDER",
  "SUPPLIER:BOOKMARK_OVERVIEW:COMPARE", "SUPPLIER:BOOKMARK_OVERVIEW:DELETE",
  "SUPPLIER:BOOKMARK_OVERVIEW:RECYCLE_BIN", "SUPPLIER:BOOKMARK_DETAIL", "SUPPLIER:BOOKMARK_DETAIL:CREATE_INQUIRY",
  "SUPPLIER:BOOKMARK_DETAIL:CREATE_ORDER", "SUPPLIER:BOOKMARK_DETAIL:DELETE",
  "SUPPLIER:BOOKMARK_DETAIL:ADD_COMPARE", "SUPPLIER:BOOKMARK_DETAIL:PRODUCT",
  "SUPPLIER:BOOKMARK_DETAIL:RECYCLE_BIN", "SUPPLIER:COMPARE_OVERVIEW", "SUPPLIER:COMPARE_OVERVIEW:DELETE",
  "SUPPLIER:COMPARE_OVERVIEW:MODIFY", "SUPPLIER:COMPARE_OVERVIEW:RECYCLE_BIN", "SUPPLIER:COMPARE_DETAIL",
  "SUPPLIER:COMPARE_DETAIL:CREATE_INQUIRY", "SUPPLIER:COMPARE_DETAIL:CREATE_ORDER",
  "SUPPLIER:COMPARE_DETAIL:ADD_NEW", "SUPPLIER:COMPARE_DETAIL:DELETE", "SUPPLIER:COMPARE_DETAIL:SAVE", "INQUIRY",
  "INQUIRY:LOG", "INQUIRY:OVERVIEW", "INQUIRY:OVERVIEW:COMPARE", "INQUIRY:OVERVIEW:CREATE_INQUIRY",
  "INQUIRY:OVERVIEW:CANCEL_INQUIRY", "INQUIRY:OVERVIEW:DELETE", "INQUIRY:OVERVIEW:DOWNLOAD",
  "INQUIRY:OVERVIEW:DRAFT", "INQUIRY:OVERVIEW:RECYCLE_BIN", "INQUIRY:DETAIL", "INQUIRY:DETAIL:ACCEPT",
  "INQUIRY:DETAIL:ADD_COMPARE", "INQUIRY:DETAIL:COPY", "INQUIRY:DETAIL:DELETE", "INQUIRY:DETAIL:MODIFY",
  "INQUIRY:DETAIL:CREATE_INQUIRY", "INQUIRY:DETAIL:CANCEL_INQUIRY", "INQUIRY:DETAIL:MESSAGE_BOARD",
  "INQUIRY:DETAIL:DRAFT", "INQUIRY:DETAIL:RECYCLE_BIN", "INQUIRY:COMPARE_OVERVIEW",
  "INQUIRY:COMPARE_OVERVIEW:DELETE", "INQUIRY:COMPARE_OVERVIEW:MODIFY", "INQUIRY:COMPARE_OVERVIEW:RECYCLE_BIN",
  "INQUIRY:COMPARE_DETAIL", "INQUIRY:COMPARE_DETAIL:ADD_NEW", "INQUIRY:COMPARE_DETAIL:DELETE",
  "INQUIRY:COMPARE_DETAIL:SAVE", "INQUIRY:COMPARE_DETAIL:MODIFY", "PAYMENT", "PAYMENT:DOWNLOAD", "PAYMENT:URGING",
  "PAYMENT:LOG", "MESSAGE", "MESSAGE:LOG", "SETTING", "SETTING:PERSONAL", "SETTING:PERSONAL:LOG", "ORDER",
  "ORDER:LOG", "ORDER:DRAFT_OVERVIEW", "ORDER:DRAFT_OVERVIEW:DOWNLOAD", "ORDER:DRAFT_OVERVIEW:SEND",
  "ORDER:DRAFT_OVERVIEW:DELETE", "ORDER:DRAFT_OVERVIEW:ARCHIVE", "ORDER:OVERVIEW", "ORDER:OVERVIEW:DOWNLOAD",
  "ORDER:OVERVIEW:CREATE", "ORDER:OVERVIEW:DELETE", "ORDER:OVERVIEW:SHIPPED", "ORDER:OVERVIEW:DRAFT",
  "ORDER:OVERVIEW:ARCHIVE", "ORDER:DETAIL", "ORDER:DETAIL:DRAFT", "ORDER:DETAIL:ARCHIVE", "ORDER:DETAIL:MODIFY",
  "ORDER:DETAIL:CONFIRM", "ORDER:DETAIL:DOWNLOAD", "ORDER:DETAIL:CREATE", "ORDER:DETAIL:CANCEL",
  "ORDER:DETAIL:MARK_AS_IMPORTANT", "ORDER:DETAIL:RESPONSIBILITY", "ORDER:DETAIL:PRODUCT_INFO_ADD",
  "ORDER:DETAIL:PRODUCT_INFO_DELETE", "WAREHOUSE", "WAREHOUSE:LOG", "WAREHOUSE:OVERVIEW", "WAREHOUSE:DOWNLOAD",
  "WAREHOUSE:QC_ORDER_OVERVIEW", "WAREHOUSE:QC_ORDER_OVERVIEW:DOWNLOAD", "WAREHOUSE:QC_ORDER_OVERVIEW:CREATE",
  "WAREHOUSE:QC_ORDER_DETAIL", "WAREHOUSE:QC_ORDER_DETAIL:PAYMENT", "WAREHOUSE:QC_ORDER_DETAIL:PAYMENT_ADD",
  "WAREHOUSE:QC_ORDER_DETAIL:PAYMENT_MODIFY", "WAREHOUSE:QC_ORDER_DETAIL:PRODUCT",
  "WAREHOUSE:QC_ORDER_DETAIL:PRODUCT_CONFIRM_SKU", "WAREHOUSE:QC_ORDER_DETAIL:PRODUCT_RESTART_QC",
  "WAREHOUSE:QC_ORDER_DETAIL:PRODUCT_REWORK", "WAREHOUSE:QC_ORDER_DETAIL:PRODUCT_RETURN", "LOGISTICS",
  "LOGISTICS:LOG", "LOGISTICS:PLAN_DRAFT_OVERVIEW", "LOGISTICS:PLAN_DRAFT_OVERVIEW:DOWNLOAD",
  "LOGISTICS:PLAN_DRAFT_OVERVIEW:SEND", "LOGISTICS:PLAN_DRAFT_OVERVIEW:DELETE",
  "LOGISTICS:PLAN_DRAFT_OVERVIEW:ARCHIVE", "LOGISTICS:PLAN_OVERVIEW", "LOGISTICS:PLAN_OVERVIEW:DOWNLOAD",
  "LOGISTICS:PLAN_OVERVIEW:CREATE", "LOGISTICS:PLAN_OVERVIEW:DELETE", "LOGISTICS:PLAN_OVERVIEW:DRAFT",
  "LOGISTICS:PLAN_OVERVIEW:ARCHIVE", "LOGISTICS:PLAN_DETAIL", "LOGISTICS:PLAN_DETAIL:DRAFT",
  "LOGISTICS:PLAN_DETAIL:ARCHIVE", "LOGISTICS:PLAN_DETAIL:MODIFY", "LOGISTICS:PLAN_DETAIL:DOWNLOAD",
  "LOGISTICS:PLAN_DETAIL:CREATE", "LOGISTICS:PLAN_DETAIL:CANCEL", "LOGISTICS:PLAN_DETAIL:COPY",
  "LOGISTICS:PLAN_DETAIL:DELETE", "LOGISTICS:PLAN_DETAIL:PRODUCT_INFO_ADD",
  "LOGISTICS:PLAN_DETAIL:PRODUCT_INFO_DELETE",]

const authorize = {
  bind(el, binding) {
    if (_.indexOf(json, binding.value) === -1) {
      el.style.display = 'none';
    }

  }
}

const image = {
  bind(el, binding, value) {
    console.log(el, binding)
    console.log(el.style, el.clientWidth)
    el.setAttribute('onerror', 'this.src="//iph.href.lu/40x40?text=%E5%9B%BE%E7%89%87&bg=F2F2F2";this.onerror=null');
    /*if (_.indexOf(json, binding.value) === -1) {
      el.style.display = 'none';
    }*/

  }
}


export {authorize, image};
