import NextImage from 'next/image'
import NextLink from 'next/link'
import styled, { css } from 'styled-components'

export const Container = styled.header`
  border-bottom: ${(props) =>
    props.$hasBorder && '2px solid rgb(243, 244, 246)'};
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 80rem;
  padding: 1.25rem 1.5rem;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: start;

  @media (min-width: 1024px) {
  }
`

export const Logo = styled(NextImage)`
  max-width: 8rem;
  width: 100%;
`

const fontLink = css`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`

export const Login = styled(NextLink)`
  ${fontLink}

  color: rgb(107, 114, 128);
`

export const Register = styled(NextLink)`
  ${fontLink}

  align-items: center;
  background-color: rgb(91, 33, 182);
  border-radius: 0.375rem;
  border: 1px solid transparent;
  color: #ffffff;
  display: inline-flex;
  justify-content: center;
  margin-left: 2rem;
  padding: 0.5rem 1rem;
`
