
import React from 'react'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const RegistroProduto = () => {
  return (
    <div>
       <Container>
        <h1>Lsta de profutos</h1>
    <div>
            <Button variant="primary" 
            size='lg'
            className='mb-3 
            d-inline-flex 
            justify-content-center'
            onClick={() =>{
              setModalCadastrar(true)
              }}
              >
              <span className= "material-symbols-outlined" style={{fontSize: '30px'}}>
                    add_circle
              </span>
              Cadastrar
            </Button>
          </div>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>aaa</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>aaaaa</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}></td>
          <td></td>
        </tr>
      </tbody>
      {usuarios.map((user) => ( // Corrigido para mapear os 'usuarios' e acessar a variável 'user'
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.categoria}</td>
                  <td>{user.preco}</td>

                  <td>
                    <ButtonGroup size='sm'>
                      <Button variant="info">Editar</Button>
                      <Button variant="danger" onClick={async() => {
                        const res = await fetch(`http://localhost:5000/usuarios/${user.id}`,
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
      </Container>
    </Table>
    </div>
  )
}


export default RegistroProduto