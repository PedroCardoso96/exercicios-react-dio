import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { MdEmail, MdLock } from "react-icons/md";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { Container, Title, Wrapper, Row, Column, CriarText, EsqueciText, TitleLogin, SubTitleLogin } from "./styles";

import { api } from "../../services/api";
import { IFormData } from "./types";

const schema = yup.object({
    email: yup.string().email("E-mail não é valido").required("Campo obrigatório"),
    password: yup.string().min(3, "Minimo de 3 caracteres").required("Campo obrigatório"),
  }).required();


const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });


    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1) {
                navigate('/feed')                
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
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail />}/>
                        <Input name="password"  errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secondary" type="submit" />
                        
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senhas</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
       
        </>)
}

export {Login}