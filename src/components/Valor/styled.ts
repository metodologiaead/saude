import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 600px;

    padding: 50px 0;

    background-image: url('/img/bg_valor.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    ${media.lessThan('medium')`
      background-image: url('/img/bg_valor_mobile.png');
      height: 300px;
      background-position-x: -182px;
    `}
  `}
`
