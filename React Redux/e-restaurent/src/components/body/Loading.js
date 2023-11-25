import React from 'react';

const Loading = () => {
    return (
        <div className="col-12" style={{padding: "60px"}}>
            <span className="fa fa-spinner fa-pulse fa-5x fa-fw text-primary"></span>
            <p>Loading...</p>
        </div>
    );
}

export default Loading;