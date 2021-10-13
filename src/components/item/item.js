import React from 'react'
import Card from 'react-bootstrap/Card'

const Item = ({data}) => {
    return (
        <Card style={{ width: '18rem', height: 'auto', position: 'relative' }} key={data.id}>
        <Card.Img variant="top" src={data.image} style={{maxHeight: '300px', width: 'auto'}}/>
            <Card.Body style={{ maxHeight: '200px'  }}>
                <Card.Title style={{ maxHeight: '50px' }} className="overflow-hidden"> {data.title}</Card.Title>
            </Card.Body>  
        </Card>
    )
}

export default Item
