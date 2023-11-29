import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { baseUrl } from "../../redux/baseUrl";

const MenuItem = ({ dish, onSelectDish }) => {
  return (
    <div>
      <Card inverse style={{padding:10, margin:10, cursor: 'pointer'}} onClick={() => onSelectDish(dish)}>
        <CardImg 
            width="100%" 
            src={baseUrl + dish.image} //changes image path to server images path
            alt={dish.name}
            style={{
                height: 270,
                opacity: 0.7
            }} 
        />
        <CardImgOverlay>
          <CardTitle tag="h5" style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MenuItem;
