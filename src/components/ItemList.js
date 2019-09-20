import React from "react";

const ItemList = (item) => {
    return(
        <div className="col-md-12">
            <div className="col-md-3">{item.id} </div>
            <div className="col-md-3">{item.thumbnailUrl}</div>
            <div className="col-md-3">{item.title} </div>
            <div className="col-md-3">{item.url} </div>
        </div>
    )
}

export default ItemList;