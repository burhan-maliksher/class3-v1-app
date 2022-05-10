const dinnerReducer =(state,action)=>{
    switch(action){
        case 'sweet':
            return state + ", sweets"
        case 'juice':
            return state + ", juice"    
    };
}

export default dinnerReducer;