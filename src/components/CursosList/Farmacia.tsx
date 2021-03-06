import React from 'react'

//Estilos
import * as S from './styled'

const Farmacia = () => {
  return (
    <S.CursosWrapper>
      <S.ItemsLeftWrapper>
        <ul>
          <li>
            <div>
              <h3>Farmácia Clínica com Atenção Farmacêutica</h3>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
            </div>
          </li>
          <li>
            <div>
              <h3>Farmácia Hospitalar</h3>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
            </div>
          </li>
        </ul>
      </S.ItemsLeftWrapper>

      <S.ImageWrapper>
        <img src="/img/farmacia.png" alt="Imagem" />
      </S.ImageWrapper>

      <S.ItemsRightWrapper>
        <ul></ul>
      </S.ItemsRightWrapper>
    </S.CursosWrapper>
  )
}

export default Farmacia
