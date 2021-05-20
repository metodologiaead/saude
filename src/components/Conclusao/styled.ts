import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    padding: 50px 0;
  `}
`
export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
  `}
`

export const HeadingWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.secondary};
      text-align: center;
      text-transform: uppercase;

      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.medium};
      `}
    }

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.texts};
      text-align: center;
      max-width: 700px;

      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.xsmall};
        width: 80%;
      `}
    }
  `}
`

export const ImagesWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 340px 700px;
    grid-gap: 20px;
    justify-content: center;

    margin-top: 20px;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;

      width: 100%;

      justify-content: center;
      align-items: center;
    `}
  `}
`
export const Qualidade = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 340px;
    height: 340px;

    ${media.lessThan('medium')`
      width: 340px;
      height: 240px;
      justify-content: center;
      align-items: center;
    `}

    background: ${theme.colors.secondary};

    border-radius: 10px;

    h3 {
      font-size: ${theme.font.sizes.medium};
      text-align: center;
      color: ${theme.colors.white};
      font-weight: bold;

      margin-top: 50px;

      ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
      margin-top: initial;
      `}
    }

    p {
      font-size: ${theme.font.sizes.small};
      text-align: center;
      color: ${theme.colors.white};

      width: 80%;

      margin-top: 30px;

      ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
      `}
    }
  `}
`
export const Conhecimento = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 700px;
    height: 340px;

    background-image: url('/img/conhecimento.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    border-radius: 10px;

    position: relative;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 10px;

      position: absolute;

      background: rgba(0, 0, 0, 0.5);

      z-index: 2;
    }

    h3 {
      font-size: ${theme.font.sizes.medium};
      text-align: center;
      color: ${theme.colors.white};
      font-weight: bold;

      margin-top: 50px;

      z-index: 10;

      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.small};
        margin-top: initial;
      `}
    }

    p {
      font-size: ${theme.font.sizes.small};
      text-align: center;
      color: ${theme.colors.white};

      width: 80%;

      margin-top: 30px;

      z-index: 10;

      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.xsmall};
      `}
    }

    ${media.lessThan('medium')`
      width: 340px;
      height: 240px;
      justify-content: center;
      align-items: center;
    `}
  `}
`
