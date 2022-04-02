import styled from "styled-components";

export const Container = styled.div`
  grid-area: tabs;
  width: 100%;
  max-width: 458px;
  margin: 0 auto;
  display: grid;
  grid-template-areas: "dots" "role" "name" "bio";
  @media (min-width: 768px) {
    grid-template-areas: "role" "name" "bio" "dots";
  }
`;
export const DotContainer = styled.ul`
  grid-area: dots;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.2rem;
  @media (min-width: 1024px) {
    justify-content: left;
    margin-bottom: 9.4rem;
  }
`;
export const Dot = styled.li`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.primary};
  margin: 0 0.8rem;
  cursor: pointer;
  &.active {
    width: 1.3rem;
    height: 1.3rem;
    background: ${({ theme }) => theme.color.secondary};
  }
`;
export const Role = styled.h4`
  grid-area: role;
  color: ${({ theme }) => theme.color.priamry};
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  text-align: center;
  @media (min-width: 1024px) {
    text-align: left;
    margin-bottom: 1.5rem;
  }
`;
export const Name = styled.h3`
  grid-area: name;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  text-align: center;
  @media (min-width: 1024px) {
    text-align: left;
    white-space: nowrap;
    margin-bottom: 2.7rem;
  }
`;
export const Bio = styled.p`
  grid-area: bio;
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    text-align: left;
    max-width: 44.4rem;
    margin-bottom: 8.8rem;
  }
`;
