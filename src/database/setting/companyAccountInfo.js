'use strict';
export default {
  beneficiaryName:{
    key:'beneficiaryName',
    _rules:{
      required:true,
    }
  },
  beneficiaryAccount:{
    key:'beneficiaryAccount',
    _rules:{
      required:true,
    }
  },
  beneficiaryAddress:{
     key:'beneficiaryAddress',
  },
  beneficiaryBankName:{
    key:'beneficiaryBankName',
    _rules:{
      required:true,
    }
  },
  beneficiaryBankSWIFT:{
    key:'beneficiaryBankSwift'
  },
  accountType:{
    key:'accountType'
  },
  currency:{
    key:'currency'
  },
  id:{
    key:'id',
    _hide:true
  },
  version:{
    key:'version',
    _hide:true
  }
}
