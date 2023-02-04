import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: 8px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 32px) / 5);
`;

export const LinkItem = styled(NavLink)`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    transform: scale(1.1);
    color: #ec9706;
  }
`;

export const Poster = styled.img`
  height: 365px;
  object-fit: cover;
`;

export const MovieTitle = styled.div`
  padding: 12px 4px;
`;