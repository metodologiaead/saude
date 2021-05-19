import React from 'react'

//Estilos
import * as S from './styled'

//Componentes
import { Items } from './mock'

const IconesQualidade = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ItemWrapper>
          {Items.map((item) => {
            return (
              <S.Item key={item.name}>
                <img src={item.icon} alt={item.description} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </S.Item>
            )
          })}
        </S.ItemWrapper>
      </S.Content>
    </S.Container>
  )
}

export default IconesQualidade
