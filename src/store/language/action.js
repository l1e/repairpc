const GET_LANG = 'GET_LANG';
const SET_LANG = 'SET_LANG';


export const getbase = (lang) =>{
  return{
      type: GET_LANG,
      payload: lang
  }
};


export const setLang = (lang) =>{
    return{
        type: SET_LANG,
        payload: lang
    }
};
