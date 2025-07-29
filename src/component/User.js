import { useState } from "react";
const User=(props)=>{
      const [count]=useState(0);
      const [count1]=useState(1);
    return(
         <div> 
           <h1>count={count};</h1>
            <h1>Name:{props.Name}</h1>
            <h1>Location:{props.Location}</h1>
            <h1>Contact:{props.NameContact}</h1>
        </div>
    );
}
export default User;
