import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import { useNavigate } from 'react-router-dom';
const url = "http://localhost:5000/usuarios";

const Login = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailc = 'admin@gmail.com';
    const senhac = '4321';

    if (email === emailc && senha === senhac)
    {
      alert('Login bem-sucedido!');
      navigate('./produtos'); // Redireciona para a rota '/Home'
    } else {
      setErrorMessage('Credenciais incorretas. Tente novamente.');
    }
  }
    return (
        <div>
            <Container>
                <span className="material-symbols-outlined" style={{ fontSize: '200px' }}>
                    Login
                </span>

                <form onSubmit={handleSubmit}>
                    {/* Caixinha do email */}
                    <FloatingLabel
                        controlId="floatingInputEmail"
                        label="Digite seu email"
                        className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); }}
                        />
                    </FloatingLabel>

                    {/* Caixinha da senha */}
                    <FloatingLabel controlId="floatingPassword" label="Senha">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className="mb-3"
                            value={senha}
                            onChange={(e) => { setSenha(e.target.value); }}
                        />
                    </FloatingLabel>
                    <Button variant="primary" type="submit">
                        Logar
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default Login;
