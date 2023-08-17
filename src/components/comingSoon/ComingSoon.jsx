import Optin from "./Optin/Optin";
import Timer from "./Countdown/Timer";
import React from 'react'

const ComingSoon = () => {
    return (
        <div className="Apps">
            <div className="containers">
                <h1 className="coming-soonH1">
                    Page<br/>Coming Soon
                </h1>
                <Timer />
                <Optin />
            </div>
        </div>
    )
}

export default ComingSoon
