import {Button, ButtonGroup} from "react-bootstrap"
import React from 'react'

const TopNav = () => {
  return (
    <ButtonGroup>
        <Button variant="primary" >Visos uzduotyd</Button>
        <Button variant="danger">Aktyvios</Button>
        <Button variant="success">Uzbaigtos</Button>
    </ButtonGroup>
  )
}

export default TopNav