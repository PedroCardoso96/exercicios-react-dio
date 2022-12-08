import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, TextContent, TitleHighlights, Title } from "./styles";


const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlights>#Ranking 5 da semana</TitleHighlights>
            <UserInfo percentual={95} nome="Pedro Cardoso" image="https://avatars.githubusercontent.com/u/50971161?v=4" />
            <UserInfo percentual={5} nome="Pedro Cardoso" image="https://avatars.githubusercontent.com/u/50971161?v=4" />
            <UserInfo percentual={56} nome="Pedro Cardoso" image="https://avatars.githubusercontent.com/u/50971161?v=4" />
            <UserInfo percentual={71} nome="Pedro Cardoso" image="https://avatars.githubusercontent.com/u/50971161?v=4" />
            <UserInfo percentual={32} nome="Pedro Cardoso" image="https://avatars.githubusercontent.com/u/50971161?v=4" />
            <UserInfo percentual={17} nome="Pedro Cardoso" image="https://avatars.githubusercontent.com/u/50971161?v=4" />
            </Column>
        </Container>
       
        </>)
}

export {Feed}