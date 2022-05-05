import React from 'react';
// using props 
 export function Message(props){
    return (
        <div>
            <h3> Variable value is:{props.Counter}</h3>
        </div>
    )
}
// export Message;
// export method on line 10 does not work here 
// only export default Message will
//  for eport to work use it as on lie 3