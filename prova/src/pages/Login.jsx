import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:5000/usuarios";

const Login = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const [alertaClass, setAlertaClass] = useState('mb-3 d-none');const [alertaMensagem, setAlertaMensagem] = useState('');const [alertaVariante, setAlertaVariante] = useState('danger');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === 'docemel@sodoce.com.br' && senha === 'brigadeiro123'){
        console.log("Entrou");
        setAlertaClass('mb-3 alert-success'); // Classe atualizada para sucesso
        setAlertaMensagem('Login efetuado com sucesso');
        setAlertaVariante('success');
        alert("LOGIN FEITO COM SUCESSO");
    }else{
        setAlertaClass('mb-3 alert-danger'); // Classe de erro
        setAlertaMensagem("Usuário ou senha inválidos");
        setAlertaVariante('danger');

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

                    <Alert key={alertaVariante} variant={alertaVariante} className={alertaClass}>
                        {alertaMensagem}
                    </Alert>

                    <Button variant="primary" type="submit">
                        Logar
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default Login;
