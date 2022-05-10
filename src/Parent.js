import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = ()=> {
    return(
        <div>
            <h2>this is in parent</h2>
            <Child />
            <Child2 />
        </div>
    )
}

export default Parent;