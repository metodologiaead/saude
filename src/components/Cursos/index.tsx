
import Fisioterapia from 'components/CursosList/Fisioterapia'
import Farmacia from 'components/CursosList/Farmacia'
import Nutricao from 'components/CursosList/Nutricao'
import Enfermagem from 'components/CursosList/Enfermagem'
import React from 'react'

//Estilos
import * as S from './styled'

const Cursos = () => {

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
        <S.ButtonsWrapper>
          <ul>
            <li>
              <button className={show == 1 ? "active" : ""} onClick={() => setShow(1)}>
                <span>•</span>Fisioterapia
              </button>
            </li>
            <li>
              <button className={show == 2 ? "active" : ""} onClick={() => setShow(2)}>
                <span>•</span>Farmácia
              </button>
            </li>
            <li>
              <button className={show == 3 ? "active" : ""} onClick={() => setShow(3)}>
                <span>•</span>Nutrição
              </button>
            </li>
            <li>
              <button className={show == 4 ? "active" : ""} onClick={() => setShow(4)}>
                <span>•</span>Enfermagem
              </button>
            </li>
          </ul>
        </S.ButtonsWrapper>
        {show == 1 && <Fisioterapia /> }
        {show == 2 && <Farmacia /> }
        {show == 3 && <Nutricao /> }
        {show == 4 && <Enfermagem /> }
      </S.Content>
    </S.Container>
  )
}

export default Cursos
