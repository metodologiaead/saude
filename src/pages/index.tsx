import Conclusao from 'components/Conclusao'
import Cursos from 'components/Cursos'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Inscricao from 'components/Inscricao'
import Qualidades from 'components/Qualidades'
import Copy from 'components/Copy'
import React from 'react'
import CursosMobile from 'components/CursosMobile'

const Index = () => (
  <>
    <Header />
    <Cursos />
    <CursosMobile />
    <Conclusao />
    <Qualidades />
    <Inscricao />
    <Footer />
    <Copy />
  </>
)

export default Index
