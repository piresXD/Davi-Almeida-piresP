import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav"
import NavBarra from "../components/NavBarra"
import './RegistroProduto.module.css'

import {useNavigate } from "react-router-dom"



const url = "http://localhost:5000/listProd"



const Cadastro = () => {
    // variaveis pro usuario 
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [tipo, setTipo] = useState("")


    // variaveis pro alerta 
    const [alertaClass, setAlertaClass] = useState("mb-3 d-none")
    const [alertaMensagem, setAlertaMensagem] = useState("")
    

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(!nome == ""){
          if (!preco == ""){
            if(!tipo == ""){
              const list = {nome, preco, tipo}
              const res = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(list)
              })
              alert("item cadastrado com sucesso")
              setNome("")
              setPreco("")
              setTipo("")
              navigate("/Produtos")

            }
        }
    }
    }
  return (
    <div>
       <NavBarra/>
    <Container>
    <span class="material-symbols-outlined">add_box</span>
        <form onSubmit={handleSubmit}>
        {/* caixinha do nome  */}
        <FloatingLabel
        controlId="floatingInputName"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) =>{
            setNome(e.target.value);
        }}
        />
      </FloatingLabel>

        {/* caixinha de preço  */}
      <FloatingLabel
        controlId="floatingInputEmail"
        label="Preço"
        className="mb-3"
      >
        <Form.Control type="text"
        value={preco}
        onChange={(e) =>{
            setPreco(e.target.value);
        }} 
        />
      </FloatingLabel>

      {/* caixinha da tipo  */}
      <FloatingLabel controlId="floatingPassword"
       label="Tipo"
       className="mb-3"
        >
        <Form.Control type="text"
        value={tipo}
        onChange={(e) =>{
            setTipo(e.target.value);
        }} 
        />
      </FloatingLabel>
 
      <Alert key="danger" variant="danger" className={alertaClass}>
        {alertaMensagem}
      </Alert>

      <Button variant="primary" type="submit">Cadastrar</Button>
    </form>
    </Container>

    </div>
  )

}
    

export default Cadastro
