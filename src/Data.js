import React, { useState } from "react";
import ShowCard from "./ShowCard";
import {
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
export default function Data({ cartItems }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <button onClick={toggle}>Cart {cartItems.length}</button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Row xs="3">
            {cartItems.map((value) => {
              return (
                <Col>
                  <ShowCard value={value} />
                </Col>
              );
            })}
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
