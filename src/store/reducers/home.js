
const initialState = {
    BorrowMoney:0,
    BorrowHistory:[],
    isLoan:false
}

export default(state = initialState,action)=>{
    let totalBorrow = state.BorrowMoney;
    
    
    switch (action.type){
        case 'BorrowMoney':
           
            let History = state.BorrowHistory;
          
            let borrowInfo = {
                money:action.val,
                time:action.time
            }
            History.push(borrowInfo);
            return{
                ...state,
                BorrowMoney: totalBorrow + action.val,
                BorrowHistory:History
            }
        case 'changeLoan':
            return {
                ...state,
                isLoan:action.val
            }
        default:
            return state;
    }
}