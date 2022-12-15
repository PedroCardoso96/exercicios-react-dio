import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { Container, Title, Wrapper, Row, Column, CriarText, TitleLogin, SubTitleLogin, GreenText } from "./styles";

import { api } from "../../services/api";
import { IFormData } from "./types";

const schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail não é valido").required("Campo obrigatório"),
    password: yup.string().min(3, "Minimo de 3 caracteres").required("Campo obrigatório"),
  }).required();


const Register = () => {

    const navigate = useNavigate();
    
    const hadleClickGoToFeed = () => {
        navigate('/feed')
    }

    const handleClickSingIn = () => {
        navigate('/login')
    }

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });


    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?nome=${formData.nome}&email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1) {
                navigate('/register')                
            } else{
                alert("E-mail ou senha invalido.")
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                   A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" control={control} placeholder="Nome Completo" type="name" leftIcon={<MdAccountCircle />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail />}/>
                        <Input name="password"  errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="secondary" type="submit" onClick={hadleClickGoToFeed}/>
                        
                    </form>
                        <Column>
                    <Row>
                        <CriarText>
                        Ao clicar em "criar minha conta", declaro que aceito as Politicas de Privaciadade e os termos de uso da DIO.
                        </CriarText>
                    </Row>
                    <Row>
                        <p>Já tenho conta.</p>
                        <GreenText onClick={handleClickSingIn}>Fazer login</GreenText>
                    </Row>
                        </Column>
                </Wrapper>
            </Column>
        </Container>
       
        </>)
}

export {Register}