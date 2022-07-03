import {
  Container,
  Box,
  Image,
  Wrap,
  WrapItem,
  Text
} from "@chakra-ui/react";

import ItBlur from "../../assets/it-blur.png";
import MainPhoto from "../../assets/main-photo.png";
import HeroLogo from "../../assets/logo-devit-default.svg";

export function HeroContainer() {
  return (
    <Container bg="#EFEBE4" maxW="full" h={"calc(100vh)"} display="flex" alignItems="center">
      <Box
        as="section"
        display="flex"
        alignItems="center"
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent="space-between"
        maxW={1120}
        m="auto"
        p={3}
      >
        <Wrap spacing={20} w={530}>
          <WrapItem>
            <Image src={HeroLogo} alt="Devit" w={[170, 270, 370]} />
          </WrapItem>

          <WrapItem
            display="flex"
            flexDirection="column"
            gap={3}
          >
            <Text fontSize={24} fontWeight="extrabold" marginTop={15} textAlign={{ base: "center", xl: "left" }}>
              Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit.
            </Text>
            <Text color="#6A6A6A" fontSize={18} textAlign={{ base: "center", xl: "left" }}>
              Amet minim mollit non deserunt
              ullamco est sit aliqua dolor.
            </Text>
          </WrapItem>
        </Wrap>

        <Wrap>
          <Image src={ItBlur} alt="Logo devit desfocado" w={[300, 400, 570]} />
          <Image src={MainPhoto} alt="Pessoa" position="absolute" w={[300, 400, 570]} />
        </Wrap>
      </Box>
    </Container>
  )
}