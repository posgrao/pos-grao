import { Link, useNavigate } from "react-router-dom";
import PG01 from "../assets/pg-register.png";
import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react";
import { useState } from "react";

export default function Signup() {

  const [formData, setFormData] = useState({});

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  //console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Favor preencher todos os campos acima.');
    }
    
    //Submit the form
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in')
      }
    }
    catch (error) {
      setErrorMessage(data.message);
      setLoading(false);
    }

  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*left*/}
        <div className="flex-1">
          <Link to="/">
            <img
              src={PG01}
              alt="Register PG"
              className="w-[600px] h-auto rounded-[6px]"
            />
          </Link>
          {/* <p>Inovação e qualidade em Pós Colheita de Grãos</p> */}
        </div>
        {/*right*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Usuário" />
              <TextInput
                type="text"
                placeholder="Seu usuário"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="E-mail" />
              <TextInput
                type="email"
                placeholder="email@email.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Senha" />
              <TextInput
                type="password"
                placeholder="Sua senha"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="greenToBlue"
              className="w-full"
              type="submit"
              disabled={loading}
            >
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className="pl-3">Loading...</span>
                  </>
                ) : 'Criar conta'
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sma mt-5">
            <span>Já tem uma conta?</span>
            <Link to="/sign-in" className="text-green-600">
              Entrar.
            </Link>
          </div>
          {/*Alert*/}
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}