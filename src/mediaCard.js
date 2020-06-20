import React from "react";


function MediaCard({title, body, imageUrl}) {
    return <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={imageUrl} className ="imagrurl" alt="IMG5 Url" />
    </div> ;
}

export default MediaCard;