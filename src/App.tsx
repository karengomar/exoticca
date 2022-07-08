import { Container } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import CardCarrousel from './components/slides/card-carrousel.component'

const Home = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
`;

const Text = styled.div`
  font-size: 1rem;
  color: #2a2a2a;
`;

const Link = styled.a`
  font-weight: 600;
  color: #2a2a2a;
`;

export default function App() {
  return (
    <Container>
      <CardCarrousel />
    </Container>
  );
}
