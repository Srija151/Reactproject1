import React from 'react'
function BoilingPoint({temperature}) {
    if(temperature>=100){
        return <div>The Water Would Boiled</div>;
    }
    return <div>The Water Would not Boiled</div>
}

export default BoilingPoint