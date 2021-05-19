import React from 'react'

//Estilos
import * as S from './styled'

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.SobreWrapper>
          <h2>Sobre Nós</h2>
          <p>
            O Instituto Pedagógico de Minas Gerais (IPEMIG) foi criado em 2010
            por iniciativa da professora Maria Lucimary Lage Silva com o
            objetivo de apoiar a formação de professores e profissionais que
            buscavam especialização.
          </p>
          <h3>Parceria - Metodologia EAD</h3>
          <p>
            Há 5 anos atuamos na área educacional, oferecendo cursos à
            distância, totalmente on-line. Temos mais de 3000 alunos
            certificados, que conseguiram evoluir profissionalmente.
          </p>
        </S.SobreWrapper>

        <S.CursosWrapper>
          <ul>
            <h2>Cursos</h2>
            <li>• Análises Clínicas</li>
            <li>• Nutrição Clínica e Estética</li>
            <li>• Nutrição com Ênfase em Alimentação Escolar</li>
            <li>• Nutrição com Ênfase em Obesidade Pediátrica</li>
            <li>• Nutrição Esportiva</li>
            <li>• Nutrição Ortomolecular</li>
            <li>• Enfermagem em UTI - Unidade de Terapia Intensiva</li>
            <li>• Enfermagem em UTI Neonatal e Pediátrica</li>
            <li>• Enfermagem Estética</li>
            <li>• Saúde da Mulher</li>
            <li>• Oncologia</li>
            <li>• Neuropsicologia Clínica</li>
            <li>• Farmácia Clínica com Atenção Farmacêutica</li>
            <li>• Farmácia Hospitalar</li>
            <li>• Fisioterapia Aplicada a Mulher</li>
            <li>• Fisioterapia Dermato-Funcional</li>
            <li>• Fisioterapia do Trabalho</li>
            <li>• Fisioterapia em Geriatria e Gerontologia</li>
            <li>• Fisioterapia Neurológica Adulta</li>
            <li>• Fisioterapia Respiratória</li>
            <li>• Fisioterapia Traumato-Ortopédica</li>
            <li>• Fisioterapia Uroginecológica</li>
            <li>• Vigilância Sanitária e Saúde</li>
            <li>• Vigilância Epidemiológica e Gestão de Serviços de Saúde</li>
          </ul>
        </S.CursosWrapper>

        <S.ContatosWrapper>
          <S.ImagesWrapper>
            <a href="https://www.facebook.com/metodologiaead" target="_blank"><img src="/img/icon_facebook.png" alt="Ícone Facebook" /></a>
            <a href="https://www.instagram.com/metodologiaead/" target="_blank"><img src="/img/icon_instagram.png" alt="Ícone Instagram" /></a>
            <a href="https://api.whatsapp.com/send?phone=5582988686985&text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos" target="_blank"><img src="/img/icon_whatsapp.png" alt="Ícone WhatsApp" /></a>
          </S.ImagesWrapper>
          <span>Av. Venerável João Vieira Chagas, 111</span>
          <span>Mangabeiras, Maceió - AL, 57037-310</span>
          <span>Email: eadmetodologia@gmail.com</span>
          <span>Telefone: (82) 99976-2839</span>
          <img src="/img/icon_ipemig.png" alt="Ícone Ipemig" />
          <img src="/img/icon_metodologiaead.png" alt="Ícone Metodologia EAD" />
        </S.ContatosWrapper>
      </S.Content>
    </S.Container>
  )
}

export default Footer
