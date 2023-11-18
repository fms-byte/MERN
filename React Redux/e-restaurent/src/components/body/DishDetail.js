import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = ({dish, comments}) => {
  return (
    <div>
        <Card className='my-2'>
            <CardImg
                alt={dish.name}
                src={dish.image}
                style={{
                    height: '100%',
                }}
                top
                width='100%'
            />
            <CardBody style={{textAlign: 'left'}}>
                <CardTitle tag='h5'>{ dish.name }</CardTitle>
                <CardText>{ dish.description }</CardText>
                <CardText>Price: { dish.price }/-</CardText>
                <hr />
                <h4>Comments</h4>
                <LoadComments comments={comments}/>
            </CardBody>
        </Card>
    </div>
  )
}

export default DishDetail;