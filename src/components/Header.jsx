import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [buttonName, setButtonName]=useState("login")

    return (
        <div className='header'>
            <div className='logo'>
                <img
                    src={LOGO_URL}
                    style={{ height: '100px', width: '170px' }}
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        if(buttonName==="login"){

                            setButtonName("logout");
                        }
                        else{
                            setButtonName("login");  
                        }
                    }}>{buttonName}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;
