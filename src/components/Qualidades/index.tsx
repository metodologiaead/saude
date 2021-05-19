import React from 'react'
import Image from 'next/image'

//Estilos
import * as S from './styled'
import Button from 'elements/Button'
import IconesQualidade from 'components/IconesQualidade'

const Qualidades = () => {
  return (
    <S.Container>
      <S.Content>
        <S.NotaWrapper>
          <S.Imagewrapper>
            <Image
              src="/img/qualidade_img_top.png"
              width={434}
              height={420}
              alt="Imagem estudantes sorrindo na mesa e a logo da ipemig"
            />
          </S.Imagewrapper>
          <S.HeadingsWrapper>
            <h2>nota máxima no mec</h2>
            <p>
              Reconhecimento é fruto de um intenso e dedicado trabalho realizado
              por toda equipe ao longo destes 11 anos. Nada seria possível sem a
              confiança e respeito dos nossos alunos, que são parte fundamental
              da nossa história.
            </p>
            <Button href="#form" name="Quero ser aluno!" />
            <img
              src="/img/mec.png"
              alt="Imagem de confirmnação de nota 5 no mec"
            />
          </S.HeadingsWrapper>
        </S.NotaWrapper>

        <S.NotaWrapper>
          <S.HeadingsWrapper>
            <h2>+ Facilidade para você estudar</h2>
            <p>
              A pandemia trouxe muitos desafios e transformou o mundo e a
              maneira como nos relacionamentos, trabalhamos e estudamos.
            </p>
            <Button href="#form" name="Quero ser aluno!" />
          </S.HeadingsWrapper>
          <S.Imagewrapper>
            <Image
              src="/img/ead.png"
              width={434}
              height={420}
              alt="Imagem estudantes sorrindo na mesa e a logo da ipemig"
            />
          </S.Imagewrapper>
        </S.NotaWrapper>
        <IconesQualidade />
      </S.Content>
    </S.Container>
  )
}

export default Qualidades
