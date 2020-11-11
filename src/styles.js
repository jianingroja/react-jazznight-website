//Styled Components
// import {}
import { motion } from "framer-motion";
import styled from "styled-components";

export const About = styled(motion.div)`
  /* height: 100vh; */
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 6rem;
  color: rosybrown;
  @media (max-width: 1000px) {
    display: block;
    padding: 1rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1000px) {
    padding: 0;
    button {
      margin: 1rem 0rem 3rem 0rem;
    }
  }
`;
export const Image = styled.div`
  flex: 0.8;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 1000px) {
      width: 80%;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
