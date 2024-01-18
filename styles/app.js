'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  textarea,
  .w-md-editor-text {
    height: 100%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 16rem);
`

export const Title = styled.h3`
  color: rgb(17, 24, 39);
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 2.5rem;
  text-align: center;
`
