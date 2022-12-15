import React from 'react'
import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";
import { useNavigate } from 'react-router-dom';

import {IHeader} from "./types"

import {
    BuscarInputContainer,
    Container,
    Input,
    Logo,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper

} from './styles'

const Header = ({autenticado}: IHeader) => {

    const navigate = useNavigate();

    const handleClickRegister = () => {
        navigate('/register')
    }
    const handleClickHome = () => {
        navigate('/')
    }
    const handleClickSingIn = () => {
        navigate('/login')
    }
    
  return (
    <Wrapper>
        <Container>
            <Row>
                <Logo src={logo} alt='Logo da Dio' onClick={handleClickHome}></Logo>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'></Input>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>

                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/50971161?v=4' />
                    ) : (
                        <>
                        <MenuRight href='/' >Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSingIn}/>
                        <Button title="Cadastrar" onClick={handleClickRegister}/>
                    </>                    
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}
export { Header }
