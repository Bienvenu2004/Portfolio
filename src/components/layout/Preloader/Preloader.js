import React from "react";

const Preloader = () =>  {
    return (
        <div className="preloader">
            <div className="spinner_wrap">
                <div className="spinner" />
                <div 
                    style={{
                        color: '#fff',
                        marginTop: '20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        marginLeft: '-45px'
                    }}
                >
                    fetching page data...
                </div>
            </div>
        </div>
    );
}

export default Preloader;
