import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/esm/Container'
import { useEffect, useState } from 'react';
import NavBarra from "../components/NavBarra"
import './Produtos.module.css'

const url = "http://localhost:5000/listProd"


const Produtos = () => {
const [lista, setLista] = useState([])

useEffect(() => {
  async function fetchData() {
    try{
      const res = await fetch(url);
      const list = await res.json();
      setLista(list);
    } catch (error) {
      console.log(error.message);
  }
  }
  fetchData();
}, []);

  return (
    <div>
      <NavBarra/>
      <Container>
        <h1>Tabela de produtos</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>

      {lista.map((list) => ( // Corrigido para mapear os 'usuarios' e acessar a variável 'user'
                <tr key={list.id}>
                  <td>{list.id}</td>
                  <td>{list.nome}</td>
                  <td>{list.preco}</td>
                  <td>{list.tipo}</td>
                  <td>
                    <ButtonGroup size='sm'>
                      <Button variant="info">Editar</Button>
                      <Button variant="danger" onClick={async() => {
                        const res = await fetch(`http://localhost:3001/listProd/${list.id}`,
                        {
                          method: "DELETE",
                          headers: {"Content-Type":"application/json"}
                        })

                        const funcionarioRemovido = await res.json()
                        alert(`Usuário ${funcionarioRemovido.nome} foi excluido`)
                      }}>Excluir</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
      </tbody>
    </Table>
      </Container>
    </div>
  )
}

export default Produtos