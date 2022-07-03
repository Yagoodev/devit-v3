import { HeroContainer } from "./components/Partials/HeroContainer";
import { CourseContainer } from "./components/Partials/CourseContainer";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import {
  Stack,
  ChakraProvider
} from "@chakra-ui/react";

export function App() {
  return (
    <Stack>
      <ChakraProvider>
        <Header />
        <HeroContainer />
        <CourseContainer />
        <Footer />
      </ChakraProvider>Ð
    </Stack>
  )
}