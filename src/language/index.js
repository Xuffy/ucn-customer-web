import {localStore} from 'service/store';

const lang = localStore.get('language') || 'en';
export default _.extend(
  {workbench: require(`./${lang}/workbench`)},
  require(`./${lang}/workbench.pending`),
  {setting: require(`./${lang}/setting`)},
  { baseText: require(`./${lang}/baseText`) },
  { basePlaceholder: require(`./${lang}/basePlaceholder`) },
  { inquiry: require(`./${lang}/inquiry/index`) },
  require(`./${lang}/inquiry/viewByInqury.pending`),
  require(`./${lang}/inquiry/viewBySKU.pending`),
  require(`./${lang}/inquiry/detail/basicInfo.pending`),
  require(`/${lang}/inquiry/create/basicInfo.pending`)
)
