import React from "react";

import TableBox from "./TableBox";
import Sdata from "./Sdata";



const App=()=>{
    const ncard=(val)=>{
        return(
            <TableBox 
            name={val.name}
            profilepicture={val.profilepicture} />
        )
    }
return(
<div>
    <div className="main_div">
        <div className="center_div">
            <h1>Select an account</h1>
            <div className="info">
                {Sdata.map(ncard)}
            
            </div>
            

        </div>

    </div>
</div>

);
};

export default App;