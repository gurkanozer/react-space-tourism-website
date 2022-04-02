import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8.8rem;
  @media (min-width: 768px) {
    margin-top: 13.6rem;
  }
  @media (min-width: 1024px) {
    margin-top: 0;
    align-items: flex-start;
  }
`;

export const Title = styled.h5`
  width: 100%;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.tertiary};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2.7px;
  margin-bottom: 3.2rem;
  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 6rem;
  }
  @media (min-width: 1024px) {
    margin-bottom: 9.7rem;
  }
`;
export const Number = styled.span`
  color: ${({ theme }) => theme.color.secondary};
  margin-right: 1.8rem;
`;

export const Image = styled(motion.img)`
  width: 17rem;
  height: 17rem;
  @media (min-width: 768px) {
    width: 30rem;
    height: 30rem;
  }
  @media (min-width: 1024px) {
    width: 44.5rem;
    height: 44.5rem;
  }
`;
