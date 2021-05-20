import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1380px;

    background-image: url('/img/qualidades.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 94%;

    padding: 50px 0;

    ${media.lessThan('medium')`
      height: auto;
      background-size: cover;
    `}
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
export const NotaWrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    align-items: center;

    width: 100%;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
    `}
  `}
`

export const FacilidadeWrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    align-items: center;

    width: 100%;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;

      margin-top: 50px;
    `}
  `}
`

export const Imagewrapper = styled.section`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      width: 220px;
      height: auto;
    `}
  `}
`

export const HeadingsWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${media.lessThan('medium')`
      justify-content: center;
      align-items: center;
    `}

    h2 {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.white};
      font-weight: bold;
      text-transform: uppercase;

      ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
      text-align: center;
      `}
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.white};
      margin-bottom: 20px;

      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.xsmall};
        width: 80%;
        text-align: center;
      `}
    }

    img {
      width: 190px;
      height: auto;
      margin-top: 20px;

      ${media.lessThan('medium')`
        width: 100px;
      `}
    }
  `}
`

export const ButtonsWrapper = styled.div`
  ${media.lessThan('medium')`
    display: none;
  `}
`
