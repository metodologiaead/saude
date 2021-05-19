import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 70px;

    background: ${theme.colors.secondary};

    border-top: 1px solid ${theme.colors.white};
  `}
`
export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1100px;

    margin: 0 auto;

    span {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.white};
    }
  `}
`
