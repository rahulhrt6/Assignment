import React from "react";
import Avatar from '@material-ui/core/Avatar';
import {Route ,Switch} from "react-router-dom";
import Profile from "./Profile";

const TableBox=(props)=>{

    const handleClick=()=>{
        return(
            <div>
                <NavLink to="/profile"></NavLink>

            </div>
            
        );
    }
    return(
        <div>
            <table>
                    <tr>
                        <th>
                            <Avatar onClick={handleClick} profilepicture={props.profilepicture}/>
                        </th>
                        <th>
                            <div className="info_name">
                                <h3>name={props.name}</h3>

                            </div>
                        </th>

                    </tr>
                    <span><br /></span>
                    
            </table>
        </div>
    )
}

export default TableBox;