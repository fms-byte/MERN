import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes.js";
import DishDetail from "./DishDetail.js";
import { Button, Col, Modal, ModalFooter, Row } from "reactstrap";

class Menu extends Component {
  state = {
    dishes: DISHES,
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
    const menu = this.state.dishes.map((dish) => {
      return (
        <Col key={dish.id}  xs={12} sm={6} md={4} >
        <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id} />
        </Col>
      );
    });

    const dishDetail = this.state.selectedDish ? (
      <DishDetail dish={this.state.selectedDish} />
    ) : null;

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
