import './ItemDetailContainer.css';
import { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch('../json/productos.json')
            .then(response => response.json())
            .then(productos => {
                const producto = productos.find(producto => producto.id === parseInt(id))
                setItem(producto)
            })

    }, [])

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={item} />
        </div>
    )
}