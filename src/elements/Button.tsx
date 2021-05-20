import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const LinkTo = styled.a`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 160px;
    height: 61px;

    margin-right: 20px;

    background: ${theme.colors.primary};
    border-radius: 100px;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};

    text-decoration: none;

    transition: all 0.2s ease-in-out;

    ${media.lessThan('small')`
      margin: 0 0 10px 0;
    `}

    ${media.lessThan('medium')`
      margin-right: initial;
    `}

    &:hover {
      filter: brightness(0.9);
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 30%);
      transform: translateY(-2px);
    }
  `}
`

const Button = ({ href, name }) => {
  return (
    <Link href={href} passHref scroll={false}>
      <LinkTo>{name}</LinkTo>
    </Link>
  )
}

export default Button
