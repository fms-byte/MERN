import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail.js";
import { Button, Col, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
}

class Menu extends Component {
  state = {
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
    const menu = this.props.dishes.map((dish) => {
      return (
        <Col key={dish.id}  xs={12} sm={6} md={4} >
        <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id} />
        </Col>
      );
    });

    let dishDetail = null;
    if(this.state.selectedDish != null){
      const comments = this.props.comments.filter(comment => {
        return comment.dishId === this.state.selectedDish.id;
      })
      dishDetail = <DishDetail dish={this.state.selectedDish} comments={comments}/>
    }

    return (
      <div className="container">
        <Row className="justify-content-center">{menu}</Row>
        <Modal isOpen={this.state.modalOpen}>
          <ModalBody>{dishDetail}</ModalBody>
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

export default connect(mapStateToProps)(Menu);
