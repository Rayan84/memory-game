import React from "react";
import {Link} from "react-router-dom";

function Menu () {

    return (
        <ul>
            <li>
                <Link to="./Easy">
                    Easy
                </Link>
            </li>
        </ul>
    );

}

export default Menu; 
