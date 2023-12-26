import React from "react";
import './style.css';

const EmptyData = ({children}) => {
    return (
        <div>
            <h2 className="h2-label">{`Your movie list is empty`}</h2>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button type='button' className='add-new-movie'>{`Add a new movie`}</button>
            </div>
        </div>
    )
}

export default EmptyData;