import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const InputBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    input {
      display: block;

      width: 100%;
      height: 50px;

      background: #D9E0E6;
      margin: 10px 0;

      border-radius: 10px;

      padding: 0 20px;

      outline: none;

      color: ${theme.colors.texts};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 160px;
      height: 61px;

      margin-right: 20px;

      background: ${theme.colors.primary};
      border-radius: 100px;

      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};

      transition: all 0.2s ease-in-out;

      cursor: pointer;

      ${media.lessThan('small')`
      margin: 0 0 10px 0;
    `}

      &:hover {
        filter: brightness(0.9);
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 30%);
        transform: translateY(-2px);
      }
    }
  `}
`
