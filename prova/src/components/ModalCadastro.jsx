import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Table from 'react-bootstrap/Table';

const url = "http://localhost:5000/usuarios"

const ModalCadastro = (props) => {
    const [nome, setNome] = useState("")
    const [categoria, setCategoria] = useState("")
    const [preco, setpreco] = useState("")

    const handleCadastrar = async () => {
        if(nome != "" && categoria != "", preco != ""){
            const user = {nome, categoria, preco}
              const res = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)
              })
              setNome("")
              setCategoria("")
              setpreco("")
              alert("Cadastrado com sucesso")
              props.onHide()
        }else{
            alert("Cadastrado com sucesso")
        }
    }

    
  return (
    <div>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadrastrar Produto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* caixinha do nome  */}
        <FloatingLabel
        controlId="floatingInputName"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text"
        placeholder="nome produto"
        value={nome}
        onChange={(e) =>{
            setNome(e.target.value);
        }}
        />
      </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCadastrar}>Cadastrar</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModalCadastro