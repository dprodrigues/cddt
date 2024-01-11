'use client'

import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-image: url(/svgs/auth-page-background.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  display: flex;
  height: -moz-calc(100vh - 4.5rem);
  height: -webkit-calc(100vh - 4.5rem);
  height: calc(100vh - 4.5rem);
  justify-content: center;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`

export const Modal = styled.div`
  align-items: center;
  background: #c4c4c430;
  border-color: rgb(229, 231, 235);
  border-radius: 0.5rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40vw;
  padding: 2rem;
  width: 100%;
`

export const Title = styled.h2`
  color: rgb(17, 24, 39);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  margin-bottom: 1.75rem;
`
