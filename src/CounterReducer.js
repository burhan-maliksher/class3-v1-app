//  import React from 'react';
// creating reducer

const counterReducer = (state, action)=>{
    switch (action) {
        case 'INCREMENT':
            return state + 1
    };
}

export default counterReducer;