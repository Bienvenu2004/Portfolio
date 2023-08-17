import { useRouter } from "next/router";
import React from "react";

const Optin = ()=>  {

    const router = useRouter()

    const handleClick = ()=>{
        router.push("/skills")
    }   

    return (
        <div className="optin" style={{
            marginTop: '7px',
            "&.hover":{
                cursor: "pointer"
            }
        }}>
            <p>Click the button below to visit an available page.</p>
            <button  style={{borderRadius:'8px', textTransform:'none', marginTop: '7px'}} onClick={handleClick}>Visit Skills</button>
            <div id="modal">
            </div>
        </div>
    );
}

export default Optin;
