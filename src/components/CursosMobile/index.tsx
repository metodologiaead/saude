import React from 'react'

//Estilos
import * as S from './styled'

const CursosMobile = () => {
  const [show, setShow] = React.useState(1)

  return (
    <S.Container>
      <S.Content>
        <S.HeadingWrapper>
          <h2>Cursos 100% ead</h2>
          <p>
            O cursos são estendidos aos profissionais das demais áreas que
            desejam adquirir conhecimento interdisciplinar no objeto do curso,
            TCC opcional.
          </p>
        </S.HeadingWrapper>
      </S.Content>
    </S.Container>
  )
}

export default CursosMobile
