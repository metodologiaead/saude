import React from 'react'

//Estilos
import * as S from './styled'

const Fisioterapia = () => {
  return (
    <S.CursosWrapper>
      <S.ItemsLeftWrapper>
        <ul>
          <li>
            <div>
              <h3>Fisioterapia Aplicada a Mulher</h3>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
            </div>
          </li>
          <li>
            <div>
              <h3>Fisioterapia Dermato-Funcional</h3>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
            </div>
          </li>
          <li>
            <div>
              <h3>Fisioterapia do Trabalho</h3>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
            </div>
          </li>
          <li>
            <div>
              <h3>Fisioterapia em Geriatria e Gerontologia</h3>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
            </div>
          </li>
          <li>
            <div>
              <h3>Fisioterapia intensiva</h3>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
            </div>
          </li>
        </ul>
      </S.ItemsLeftWrapper>

      <S.ImageWrapper>
        <img src="/img/fisioterapia.png" alt="Imagem" />
      </S.ImageWrapper>

      <S.ItemsRightWrapper>
        <ul>
          <li>
            <div>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
              <h3>Fisioterapia Neurológica Adulta</h3>
            </div>
          </li>
          <li>
            <div>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
              <h3>Fisioterapia Respiratória</h3>
            </div>
          </li>
          <li>
            <div>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
              <h3>Fisioterapia Traumato-Ortopédica</h3>
            </div>
          </li>
          <li>
            <div>
              <img src="/img/estetoscopio.svg" alt="Ícone Estetoscopio" />
              <h3>Fisioterapia Uroginecológica</h3>
            </div>
          </li>
        </ul>
      </S.ItemsRightWrapper>
    </S.CursosWrapper>
  )
}

export default Fisioterapia
