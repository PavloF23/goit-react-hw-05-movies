import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;

  li {
    flex-basis: calc((100% - 7 * 16px) / 8);
  }

  img {
    width: 140px;
    height: 180px;
    margin-bottom: 6px;
    object-fit: cover;
    border-radius: 3px;
  }

  p {
    font-size: 12px;
    margin: 0;
  }
`;

export const Character = styled.p`
  margin-top: 4px;
  color: #808080;
`;