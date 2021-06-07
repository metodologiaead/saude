import Conclusao from 'components/Conclusao'
import Cursos from 'components/Cursos'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Inscricao from 'components/Inscricao'
import Qualidades from 'components/Qualidades'
import Copy from 'components/Copy'
import React from 'react'
import CursosMobile from 'components/CursosMobile'
import Valor from 'components/Valor'

const Index = () => (
  <>
    <Header />
    <Cursos />
    <CursosMobile />
    <Conclusao />
    <Qualidades />
    <Inscricao />
    <Valor />
    <Footer />
    <Copy />
  </>
)

export default Index
