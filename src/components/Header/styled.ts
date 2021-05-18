import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    background-image: url('/img/bg_header.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    position: relative;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
  `}

  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  `}

  .logo {
    width: 192px;
    height: auto;

    position: absolute;
    top: 40px;
  }
`
export const HeadingWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    h1 {
      color: ${theme.colors.secondary};
    }

    p {
      font-size: ${theme.font.sizes.medium};
    }

    ${media.lessThan('large')`
      padding: 0 50px;
    `}

    ${media.lessThan('medium')`
      padding: 0 20px;
    `}

    ${media.lessThan('small')`
      h1 {
      font-size: ${theme.font.sizes.large};
    }

    p {
      font-size: ${theme.font.sizes.small};
    }
    `}
  `}
`
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`
export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 20px 0;

    ${media.lessThan('small')`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  `}
`
