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
export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    width: 100%;
    max-width: 1100px;

    margin: 0 auto;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
    `}
  `}
`
export const FormWrapper = styled.div`
  ${({ theme }) => css`
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 100%;

      h2 {
        font-size: ${theme.font.sizes.xlarge};
        color: ${theme.colors.secondary};
        text-transform: uppercase;
        font-weight: bold;

        ${media.lessThan('medium')`
          font-size: ${theme.font.sizes.medium};
          text-align: center;
        `}
      }

      p {
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.secondary};

        ${media.lessThan('medium')`
          font-size: ${theme.font.sizes.xsmall};
          text-align: center;
          width: 100%;
        `}
      }
  `}
`
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
