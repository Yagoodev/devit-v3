import {
  Container,

} from "@chakra-ui/react";

import { CourseCardContainer } from "../CourseCardContainer";

import LogoDefault from "../../assets/logo-devit-default.svg";

export function CourseContainer() {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxW={1120}
      margin="auto"
    >
      <div>
        <img src={LogoDefault} alt="devit" />
        <h1>Nossos cursos</h1>
      </div>

      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
        sunt nostrud amet.
      </p>

      <CourseCardContainer />
    </Container>
  );
}