import React, { Component } from "react";

class Optin extends Component {
    modal() {
        const modal = document.getElementById("modal");
        modal.classList.toggle("is_open");
    }

    render() {
        return (
        <div className="optin">
            <p>Click the button below to visit an available page.</p>
            <button style={{borderRadius:'8px'}} onClick={() => this.modal()}>Click Me</button>
            <div id="modal">
            <div className="wrapper">
                <h3>Enter Your Email</h3>
                <div className="clearfix">
                <div className="col-8" />
                <div className="col-3" />
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default Optin;
