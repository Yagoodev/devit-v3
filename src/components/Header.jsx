import {
  Container,
  Box,
  Image,
  Stack,
  Button
} from "@chakra-ui/react";

import HeaderLogo from "../assets/logo-devit-white.svg";

export function Header() {
  return (
    <Container maxW="full" bg="#303030" as="header">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW={1120}
        m="auto"
        p={3}
      >
        <Image w={140} src={HeaderLogo} alt="devit" />

        <Stack direction="row" spacing={4}>
          <Button w={140}
            variant="outline"
            color="#FFF"
            _hover={{ bg: "#FFF", color: "#000" }}
          >Entrar</Button>

          <Button
            w={140}
            bg="#22A2F2"
            color="#FFF"
            _hover={{ bg: "#1D8CD1" }}
          >Criar conta</Button>
        </Stack>
      </Box>
    </Container>
  );
}