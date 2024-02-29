'use client';

import NextLink from 'next/link';
import styled, { css } from 'styled-components';

export const List = styled.ul`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

const itemStyle = css`
  align-items: center;
  border-radius: 0.5rem;
  color: rgb(55, 65, 81);
  display: flex;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: 0.25rem;
  width: 100%;

  &:hover {
    background-color: rgb(243, 244, 246);
  }

  span {
    margin-inline-start: 0.75rem;
  }
`;

export const Link = styled(NextLink)`
  ${itemStyle}
`;

export const Button = styled.button`
  ${itemStyle}
`;
