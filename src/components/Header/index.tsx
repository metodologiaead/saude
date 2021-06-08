import React from 'react'
import Image from 'next/image'

//Estilos
import * as S from './styled'
import Button from 'elements/Button'

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.HeadingWrapper>
          <img className="logo" src="/img/logo_metodologiaead.png" alt="Logo Metodologia EAD"/>
          <h1>VENHA EVOLUIR NA ÁREA DA SAÚDE, VALORES IMPERDÍVEIS</h1>
          <p>
            Faça sua Pós-Graduação totalmente ONLINE. <br /> Conclusão de 6 a 18
            meses, TCC opcional.
          </p>
          <S.ButtonsWrapper>
            <Button href="#form" name="Matricule-se Já!" />
            <Button href="https://api.whatsapp.com/send?phone=5582988686985&text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos" name="WhatsApp" />
          </S.ButtonsWrapper>
        </S.HeadingWrapper>

        <S.ImageWrapper>
          <Image
            src="/img/modelo.png"
            alt="Imagem Modelo"
            width={438}
            height={539}
          />
        </S.ImageWrapper>
      </S.Content>
    </S.Container>
  )
}

export default Header
