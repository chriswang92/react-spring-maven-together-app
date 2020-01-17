import { APPNAME } from '../../utils/config';
export const SET_CUURENT_DISPLAY_PAGE = `@@CHRISWANG/${APPNAME}/SET_CUURENT_DISPLAY_PAGE`;

export const setCurrentDisplayPage = pageName => ({
  type: SET_CUURENT_DISPLAY_PAGE,
  payload: pageName
});
