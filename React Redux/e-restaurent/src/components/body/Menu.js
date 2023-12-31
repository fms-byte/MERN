import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail.js";
import { Alert, Button, Col, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import { connect } from "react-redux";
import { addComment, fetchDishes, fetchComments } from "../../redux/actionCreators";
import Loading from "./Loading";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
      fetchDishes: () => dispatch(fetchDishes()),
      fetchComments: () => dispatch(fetchComments())
  }
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

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
  }

  render() {
    document.title = "Menu";
    if (this.props.dishes.isLoading) {
      return (
        <Loading />
      );
    }
    else if( this.props.dishes.errMess != null){
      return (
        <Alert color="danger">{this.props.dishes.errMess}</Alert>
      );
    }
    else {
      const menu = this.props.dishes.dishes.map((dish) => {
        return (
          <Col key={dish.id}  xs={12} sm={6} md={4} >
          <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id} />
          </Col>
        );
      });
  
      let dishDetail = null;
      if(this.state.selectedDish != null){
        const comments = this.props.comments.comments.filter(comment => {
          return comment.dishId === this.state.selectedDish.id;
        })
        dishDetail = <DishDetail 
          dish={this.state.selectedDish} 
          comments={comments}
          addComment={this.props.addComment}
          commentsIsLoading={this.props.comments.isLoading} />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
