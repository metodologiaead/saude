import React from 'react'

//Estilos
import * as S from './styled'

const Conclusao = () => {
  return (
    <S.Container>
      <S.Content>
        <S.HeadingWrapper>
          <h2>Conclusão de 6 a 12 meses</h2>
          <p>
            Nossas instituições de ensino possuem reconhecimento e atuação
            nacional com oferta de cursos presenciais e a distância, chancelados
            pela qualidade e democratização do acesso ao ensino.
          </p>
        </S.HeadingWrapper>
        <S.ImagesWrapper>
          <S.Qualidade>
            <h3>QUALIDADE</h3>
            <p>
              Plataforma própria e todo suporte que os seus alunos precisam são
              os nossos diferenciais
            </p>
          </S.Qualidade>
          <S.Conhecimento>
            <h3>CONHECIMENTO</h3>
            <p>
              Somos reconhecidos no mercado como uma instituição robusta e
              comprometida com os alunos.
            </p>
          </S.Conhecimento>
        </S.ImagesWrapper>
      </S.Content>
    </S.Container>
  )
}

export default Conclusao
