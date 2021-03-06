import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    padding: 50px 0;

    background: ${theme.colors.secondary};

    ${media.lessThan('medium')`
      height: auto;
    `}
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 300px 450px 300px;
    grid-gap: 10px;
    justify-content: center;

    width: 100%;
    max-width: 1100px;

    margin: 0 auto;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  `}
`

export const SobreWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    ${media.lessThan('medium')`
      padding: 0 20px;
    `}

    h2 {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
      font-weight: bold;
      line-height: 2;
    }

    h3 {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
      font-weight: bold;
      line-height: 2;

      margin-top: 20px;
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.white};
    }
  `}
`

export const CursosWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    padding: 0 20px;

    li {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.white};
      line-height: 1.5;
    }

    h2 {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
      font-weight: bold;
      line-height: 2;
    }
  `}
`

export const ContatosWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: end;
    align-items: flex-end;

    ${media.lessThan('medium')`
      width: 100%;
      text-align: initial;
      align-items: initial;
      padding: 0 20px;
    `}

    span {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.white};
      margin-bottom: 20px;
    }

    img {
      width: 199px;
      height: auto;
      margin-bottom: 10px;
    }
  `}
`

export const ImagesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    margin-bottom: 10px;

    ${media.lessThan('medium')`
      justify-content: initial;
      margin-top: 20px;
    `}

    img {
      width: 40px;
      height: auto;
      margin-left: 20px;

      ${media.lessThan('medium')`
      margin-left: initial;
      margin-right: 20px;
      `}
    }
  `}
`
