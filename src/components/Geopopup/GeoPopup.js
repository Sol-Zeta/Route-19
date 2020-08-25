import React, {Component} from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './GeoPopup.css';
import Button from '../Button/Button'


class GeoPopup extends Component {
  constructor(props) {
    super(props);
  this.state = {
    modalIsOpen: true
  }

}

  toggleModal() {
    this.props.setMode(4)
  }

  render(){
    return(
      <Container>
        <Modal isOpen={this.state.modalIsOpen} aria-labelledby="contained-modal-title-vcenter" centered>
        <ModalHeader toggle={this.toggleModal.bind(this)}>Geolocalización</ModalHeader>
        <ModalBody className="geo-modal" >
        <p className="modal-geo-firstsentence">
        Para poder poder utilizar esta aplicación <b>es necesario que actives  tu geolocalización.</b>
        </p>
        <p className="modal-geo-lastsentence">
          Muchas gracias por tu confianza.
        </p>
        <div className="modal-image-geo">
        <img className="imagen-geo" alt="imagen" src={'images/geo.svg'}></img>
        </div>

        </ModalBody>
        <ModalFooter>
        <Button action={this.props.getPosition} text={'Entendido, activar'} />
        </ModalFooter>
      </Modal>
      </Container>
      
    )
  }
}

export default GeoPopup;