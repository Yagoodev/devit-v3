import {
  Container,
  Heading,
  Wrap,
  WrapItem,
  Text,
  Box,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";

import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export function Footer() {
  return (
    <Container
      maxW="full"
      bg="#071324"
      color="#FFF"
      as="footer"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        maxW={1120}
        m="auto"
        p={10}
      >
        <Wrap w={300} spacing={4}>
          <Heading fontSize="x" fontWeight="extrabold" textTransform="uppercase">Informações</Heading>
          <WrapItem>
            <Text fontSize="sm" marginTop={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
              dapibus leo.
            </Text>
          </WrapItem>
          <WrapItem color="#757575" display="flex" gap={2}>
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaInstagramSquare size={20} />
            <FaLinkedin size={20} />
          </WrapItem>
        </Wrap>

        <Container w={300}>
          <Heading fontSize="x" fontWeight="extrabold" textTransform="uppercase" marginBottom={5}>Navegação</Heading>

          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdOutlineKeyboardArrowRight} />
              Clube
            </ListItem>
            <ListItem>
              <ListIcon as={MdOutlineKeyboardArrowRight} />
              Assinantes
            </ListItem>
            <ListItem>
              <ListIcon as={MdOutlineKeyboardArrowRight} />
              Cliente
            </ListItem>
            <ListItem>
              <ListIcon as={MdOutlineKeyboardArrowRight} />
              Instrutor
            </ListItem>
          </List>
        </Container>

        <Wrap w={300}>
          <Heading fontSize="x" fontWeight="extrabold" textTransform="uppercase">Entre em contato</Heading>
          <Text>example@hotmail.com</Text>
        </Wrap>
      </Box>
    </Container>
  );
}