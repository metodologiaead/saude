import styled, { css } from 'styled-components'

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
  `}
`

export const Imagewrapper = styled.section`
  ${({ theme }) => css``}
`

export const HeadingsWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.white};
      font-weight: bold;
      text-transform: uppercase;
    }

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.white};
      margin-bottom: 20px;
    }

    img {
      width: 190px;
      height: auto;
      margin-top: 20px;
    }
  `}
`
