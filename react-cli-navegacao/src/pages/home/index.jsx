import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import bannerImg from "../../assets/banner-img.png";


import { Container, TextContent, Title, TitleHighlights, Banner } from "./styles";


const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <br />
                    <TitleHighlights>
                        Implemente
                        <br />
                    </TitleHighlights>
                    o seu futuro agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilisadas pelas empresas mais invadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null} />
            </div>
            <div>
                <Banner src={bannerImg} alt="Banner" />
            </div>
        </Container>
       
        </>)
}

export {Home}