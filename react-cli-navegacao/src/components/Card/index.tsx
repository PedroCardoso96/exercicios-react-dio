import React from 'react'

import { CardContainer,
         Content, 
         HasInfo, 
         ImageBackground, 
         UserInfo, 
         UserPicture, 
         PostInfo } from './styles'

import {FiThumbsUp} from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://broadwayinfosys.com/blog/wp-content/uploads/2018/12/reacth-js-trends-in-2019.png'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/50971161?v=4'/>
                <div>
                    <h4>Pedro Cardoso</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto React</h4>
                <p>Projeto feito no curso de React no bootcamp Orange Tech+</p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript #React</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>    
  )
}

export {Card}
