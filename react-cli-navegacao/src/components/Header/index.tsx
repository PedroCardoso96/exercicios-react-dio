import React from 'react'
import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";

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
  return (
    <Wrapper>
        <Container>
            <Row>
                <Logo src={logo} alt='Logo da Dio'></Logo>
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
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                    </>                    
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}
export { Header }
