import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    display: none;
    flex-direction: column;

    width: 100%;
    height: auto;

    padding: 50px 0;

    ${media.lessThan(`medium`)`
      display: flex;
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

      ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
      `}
    }

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.texts};
      text-align: center;
      max-width: 550px;

      ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
      width: 80%;
      `}
    }
  `}
`
