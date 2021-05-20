import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    padding: 50px 0;

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`
export const Content = styled.div`
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
    }

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.texts};
      text-align: center;
      max-width: 550px;
    }
  `}
`
export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;

    margin-top: 20px;

    ul {
      display: flex;
      justify-content: space-around;
      width: 80%;
      position: relative;

      &::after {
        content: '';
        display: block;
        border-bottom: 3px solid ${theme.colors.gray};
        position: absolute;
        width: 100%;
        bottom: 0px;

        z-index: 1;
      }
    }

    li button {
      background: transparent;
      color: ${theme.colors.gray};

      font-size: ${theme.font.sizes.medium};
      font-weight: bold;

      cursor: pointer;

      width: 220px;

      transition: all 0.2s ease-in-out;

      position: relative;

      &:hover {
        color: ${theme.colors.primary};

        &::after {
          content: '';
          display: block;
          border-bottom: 3px solid ${theme.colors.primary};
          position: absolute;
          width: 100%;
          bottom: 0;

          z-index: 2;
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li button span {
      font-size: 50px;
      margin-right: 5px;
    }

    .active {
      color: ${theme.colors.primary};

      &::after {
        content: '';
        display: block;
        border-bottom: 3px solid ${theme.colors.primary};
        position: absolute;
        width: 100%;
        bottom: 0;

        z-index: 2;
      }
    }
  `}
`
