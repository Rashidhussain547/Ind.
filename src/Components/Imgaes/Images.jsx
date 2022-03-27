import React from 'react'

const AppImage = ({img,img2, className, title}) => {
    return(
        <>
        <img src={img2} alt="" />
        <img src={img} className={className} title={title} />
        
        </>
    )
}

export default AppImage;