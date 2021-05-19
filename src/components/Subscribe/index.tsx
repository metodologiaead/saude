import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Estilos
import * as S from './styled'

toast.configure()

const Subscribe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhonenumber] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    var xhr = new XMLHttpRequest()
    var url =
      'https://api.hsforms.com/submissions/v3/integration/submit/7458896/eb339c66-9139-4caf-890d-4adcc0589f1d'
    var data = {
      fields: [
        {
          name: 'email',
          value: email
        },
        {
          name: 'firstname',
          value: name
        },
        {
          name: 'phone',
          value: phone
        }
      ],
      context: {
        pageUri: 'https://ejaead.metodologiaead.com.br',
        pageName: 'Landing Page Eja EAD'
      }
    }
    console.log(data)
    var final_data = JSON.stringify(data)

    xhr.open('POST', url)
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        toast.success(
          'Envio com sucesso. Um dos nossos consultores entrará em contato o mais rádipo possivel!'
        )
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        toast.info(
          'Ooops! Há algo de errado, por favor ligue para secretaria (82) 98868-6985.'
        )
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        toast.info(
          'Ooops! Há algo de errado, por favor ligue para secretaria (82) 98868-6985.'
        )
      }
    }
    // Sends the request
    xhr.send(final_data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <S.InputBox>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome Completo"
          required
        />
      </S.InputBox>
      <S.InputBox>
        <MaskedInput
          mask={[
            '(',
            /[1-9]/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/
          ]}
          type="tel"
          value={phone}
          onChange={(e) => setPhonenumber(e.target.value)}
          placeholder="Telefone"
          required
          render={(ref, props) => <input ref={ref} {...props} />}
        />
      </S.InputBox>
      <S.InputBox>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </S.InputBox>
      <S.ButtonWrapper>
        <button type="submit" value="Enviar">
          Enviar
        </button>
      </S.ButtonWrapper>
    </form>
  )
}

export default Subscribe
