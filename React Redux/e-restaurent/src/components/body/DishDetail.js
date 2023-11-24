import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';

const DishDetail = (props) => {
  return (
    <div>
        <Card className='my-2'>
            <CardImg
                alt={props.dish.name}
                src={props.dish.image}
                style={{
                    height: '100%',
                }}
                top
                width='100%'
            />
            <CardBody style={{textAlign: 'left'}}>
                <CardTitle tag='h5'>{ props.dish.name }</CardTitle>
                <CardText>{ props.dish.description }</CardText>
                <CardText>Price: { props.dish.price }/-</CardText>
                <hr />
                <h4>Comments</h4>
                <LoadComments comments={props.comments}/>
                <hr />
                <CommentForm dishId={props.dish.id} addComment={props.addComment}/>
            </CardBody>
        </Card>
    </div>
  )
}

export default DishDetail;