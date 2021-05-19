import React from 'react'
import Image from 'next/image'

//Estilos
import * as S from './styled'
import Subscribe from 'components/Subscribe'

const Inscricao = () => {
  return (
    <S.Container>
      <S.Content>
        <S.FormWrapper>
          <h2>fale diretamente com um consultor.</h2>
          <p>
            Estamos a um passo de começar sua nova jornada acadêmica. Preencha o
            formulário com seus dados para iniciar o processo de matrícula
            on-line.
          </p>
          <Subscribe />
        </S.FormWrapper>
        <S.ImageWrapper>
          <Image
            src="/img/enfermeira.png"
            width={438}
            height={539}
            alt="Imagem enfermeira sorrindo"
          />
        </S.ImageWrapper>
      </S.Content>
    </S.Container>
  )
}

export default Inscricao
