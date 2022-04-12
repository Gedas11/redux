import React from 'react'
import {Button, Modal, Form, FormGroup, ModalFooter} from "react-bootstrap"
import { useState } from 'react'


const AddTodo = () => {
    const [modal, setModal] = useState(false)
  const handleShow = () =>{
      setModal(true)
  }

  const handleClose = () => {
      setModal(false)
  }
  return (
    <div>
        <Button onClick={handleShow}>Nauja uzduotis</Button>
        <Modal show={modal} onHide={handleClose}>
            <Modal.Header>Uzduoties sukurimas</Modal.Header>
            <Form>
            <Modal.Body>
             
                   <Form.Group>
                       <Form.Label>Pavadinimas</Form.Label>
                       <Form.Control
                       type="text"
                       name="title"

                       />
                   </Form.Group>
                   <Form.Group>
                       <Form.Label>Uzduoties aprasymas</Form.Label>
                       <Form.Control
                       type="textarea"
                       name="description"
                       
                       />
                   </Form.Group>
             
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Uzdaryti</Button>
                <Button variant="primary" type="submit">Prideti</Button>
            </Modal.Footer>
            </Form>
        </Modal>
    </div>
  )
}

export default AddTodo