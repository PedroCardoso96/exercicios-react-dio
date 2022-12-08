import  styled  from "styled-components";
import {IColumn} from "./types"

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weigth: 700;
    font-size: 18px;
    line-heigth: 25px;
    color: #ffffff;
    margin-bottom: 24px;
`

export const TitleHighlights = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weigth: 700;
    font-size: 18px;
    line-heigth: 25px;
    color: #ffff70;
    margin-bottom: 24px;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weigth: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-heigth: 22px;

    color: #ffffff;
`

export const Column = styled.div<IColumn>`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`


