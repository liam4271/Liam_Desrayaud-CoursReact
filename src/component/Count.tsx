import {ReactNode} from "react";

function Count({handleCount, children}: {handleCount : () => void , children : ReactNode}) {
   


    return (
    <button onClick={handleCount}>
    count is {children}
    </button>
    )
  }

export default Count

  
  
