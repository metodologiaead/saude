import React from 'react'

//Estilos
import * as S from './styled'

const Nutricao = () => {
  return (
    <S.CursosWrapper>
      <S.ItemsLeftWrapper>
        <ul>
          <li>
            <div>
              <h3>Análises Clínicas</h3>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
            </div>
          </li>
          <li>
            <div>
              <h3>Nutrição Clínica e Estética</h3>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
            </div>
          </li>
          <li>
            <div>
              <h3>Nutrição com Ênfase em Alimentação Escolar</h3>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
            </div>
          </li>
        </ul>
      </S.ItemsLeftWrapper>

      <S.ImageWrapper>
        <img src="/img/nutricao.png" alt="Imagem" />
      </S.ImageWrapper>

      <S.ItemsRightWrapper>
        <ul>
          <li>
            <div>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
              <h3>Nutrição com Ênfase em Obesidade Pediátrica</h3>
            </div>
          </li>
          <li>
            <div>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
              <h3>Nutrição Esportiva</h3>
            </div>
          </li>
          <li>
            <div>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
              <h3>Nutrição Ortomolecular</h3>
            </div>
          </li>
        </ul>
      </S.ItemsRightWrapper>
    </S.CursosWrapper>
  )
}

export default Nutricao
