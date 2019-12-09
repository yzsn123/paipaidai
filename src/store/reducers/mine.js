import 'whatwg-fetch'

const initialState = {
  userInfo:{},
  path:null,
  isIdentify:false,
  idPath:'/home'
}

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'userInfo':
      let telTable = JSON.parse(localStorage.getItem('user')) || {};
      telTable[action.val.tel] = action.val.psd;
      localStorage.setItem('user',JSON.stringify(telTable));
      localStorage.setItem('login','true')
        return {
            ...state,
            userInfo:action.val
        }
    case 'identify':return {
        ...state,
        isIdentify:action.val
    }
    case 'changeIdPath':return{
      ...state,
      idPath:action.val
    }
    default:
      return state;
  }
  
}