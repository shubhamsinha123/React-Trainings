import React from 'react';
import '../assets/css/Name.css';

function Name({className,length,name}) {
    return (
        <p className={className}>
                { length > 12 ? name.substring(0,12)+"..." : name}
        </p>
    );
}

export default Name;