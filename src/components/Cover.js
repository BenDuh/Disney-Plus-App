import React from 'react'

const Cover = ({image, id, gotoMovie}) => {
    return (
        <div className="padding-land cover-image">
            <img src={image} alt="" onClick={()=>gotoMovie(id)}/>
        </div>
    )
}

export default Cover
