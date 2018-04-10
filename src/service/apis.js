const version = ['/web/v1', '/web/v2', '/web/v3'];
import config from './config';

const apis = {
  sys_category: ['/sys/category', 'BASE_CS'],
  get_quickLink: ['/getQuickLink', 'BASE_API'],
  category: ['/category', 'BASE_CS'],
  mappingCategory: ['/category/mapping ', 'BASE_CS'],
  getCategory:['/category','BASE_CS'],
};

let list = _.mapObject(apis, val => {
  let b = ''
    , v = version[val[2] || 0];
  if (config.IS_MOCK && config.ENV_FLAG === 'local') {
    b = config.ENV.MOCK;
  } else if (_.indexOf(_.keys(config.ENV), val[1]) > -1) {
    b = config.ENV[val[1]] + v;
  } else {
    b = config.ENV.BASE_API + v;
  }
  return b + val[0];
});

export default list;
