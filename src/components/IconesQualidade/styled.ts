import styled, { css } from 'styled-components'

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
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
  `}
`
export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: bold;
      color: ${theme.colors.white};
      margin: 10px 0;
    }
    
    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.white};
    }

    img {
      width: 50px;
      height: auto;
    }
  `}
`
