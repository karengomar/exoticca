import { Container, Grid } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import CardCarousel from "./components/slides/card-carousel.component";
import NavBar from "./components/nav-bar/nav-bar.component";

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
    <Container maxWidth="xl">
      <NavBar />
      <CardCarousel />
    </Container>
  );
}
