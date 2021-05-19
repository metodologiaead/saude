import React from 'react'
import styled from 'styled-components'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`

const WhatsAppWidgets = () => {
  return (
    <Container>
      <WhatsAppWidget
        phoneNumber="+5582988686985"
        textReplyTime="Atendimento das 08h às 18h"
        message="Em que posso Ajudar?"
        companyName="Metodologia EAD"
        sendButton="Enviar"
        placeholder="Escrever Mensagem"
      />
    </Container>
  )
}

export default WhatsAppWidgets
