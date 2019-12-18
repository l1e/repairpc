const GET_LANG = 'GET_LANG';


export const base = (lang) =>{
  return{
      type: GET_LANG,
      payload: lang
  }
};
