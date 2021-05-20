import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`
export const HeadingWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: ${theme.colors.primary};

    margin: 20px 0;

    h2 {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.white};
      text-transform: uppercase;
    }
  `}
`
export const CursosWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 90%;

    ul li {
      display: flex;
      align-items: center;

      height: 50px;

      margin: 10px 0;

      background: ${theme.colors.secondary};

      border-radius: 10px;

      padding: 0 20px;

      font-size: ${theme.font.sizes.xsmall};

      color: ${theme.colors.white};

      font-weight: bold;

      letter-spacing: 2px;

      line-height: 1.4;
    }
  `}
`
