import styled, { css } from 'styled-components'

export const CursosWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  `}
`

export const ItemsLeftWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 20px;

    li {
      margin-right: 20px;
      padding: 10px 0;
    }

    ul li div {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      width: 100%;
    }

    ul li div h3 {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.secondary};
      font-weight: bold;
      text-align: end;
    }

    li p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.texts};
      text-align: end;
    }
  `}
`

export const ItemsRightWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 20px;

    li {
      margin-left: 20px;
      padding: 10px 0;
    }

    ul li div {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
    }

    ul li div h3 {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.secondary};
      font-weight: bold;
      text-align: start;
    }

    li p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.texts};
      text-align: start;
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
  `};
`
