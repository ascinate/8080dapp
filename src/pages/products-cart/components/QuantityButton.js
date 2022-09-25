import React, {useState} from "react";

export default function QuantityButton() {
    let [count, setCount] = useState(2);
  
    function incrementCount() {
      count = count + 1;
      setCount(count);
    }
    function decrementCount() {
      count = count - 1;
      setCount(count);
    }
    return (
      <>
       <div className="col-lg-6 mx-auto d-flex justify-content-between align-items-center">
        
                <button onClick={decrementCount}>-</button>
                   <h1>{count}</h1>
                <button onClick={incrementCount}>+</button>
        </div>
      </>
    );
}