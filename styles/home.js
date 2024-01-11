'use client'

import NextImage from 'next/image'
import NextLink from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 3.5rem 1.5rem 8rem;
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Title = styled.h1`
  color: rgb(17, 24, 39);
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 2.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
    line-height: 1;
  }
`

export const Description = styled.p`
  color: rgb(75, 85, 99);
  font-size: 1.125rem;
  line-height: 1.75rem;
  line-height: 2rem;
  margin-top: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 80rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const LinksContainer = styled.div`
  -moz-column-gap: 1.5rem;
  column-gap: 1.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const GetStarted = styled(NextLink)`
  background-color: rgb(91, 33, 182);
  border-radius: 0.375rem;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.625rem 0.875rem;
`

export const LearnMore = styled(NextLink)`
  color: rgb(17, 24, 39);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
`

export const Image = styled(NextImage)`
  max-width: 28rem;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 32rem;
    margin-right: -2rem;
  }
`
