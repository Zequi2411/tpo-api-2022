import React from 'react'

const ItemDetail = ({ Item }) => {
    return (
        <div className="ItemPadre">
            <div className="ItemHijo">
                <img width={"200px"} src={Item.image} alt={Item.title} />
                <h2>{Item.title}</h2>
                <h3>{Item.price}</h3>
                <h3>{Item.description}</h3>
                <button>Contratar clase</button>
            </div>
        </div>
    )
}

export default ItemDetail
