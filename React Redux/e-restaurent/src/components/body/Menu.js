import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes.js";
import COMMENTS from "../../data/comments.js";
import DishDetail from "./DishDetail.js";
import { Button, Col, Modal, ModalFooter, Row } from "reactstrap";

class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
    selectedDish: null,
    modalOpen: false,
  };
  onSelectDish = (dish) => {
    this.setState({
      selectedDish: dish,
      modalOpen: true,
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    document.title = "Menu";
    const menu = this.state.dishes.map((dish) => {
      return (
        <Col key={dish.id}  xs={12} sm={6} md={4} >
        <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id} />
        </Col>
      );
    });

    let dishDetail = null;
    if(this.state.selectedDish != null){
      const comments = this.state.comments.filter(comment => {
        return comment.dishId === this.state.selectedDish.id;
      })
      dishDetail = <DishDetail dish={this.state.selectedDish} comments={comments}/>
    }

    return (
      <div className="container">
        <Row className="justify-content-center">{menu}</Row>
        <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
          {dishDetail}
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Menu;
