import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex backgroundColor="aliceblue">
      <Box
        textAlign="center"
        p="5"
        color="gray.600"
        borderTop="1px"
        borderColor="gray.100"
        alignItems="baseline"
      >
        <Text> &copy; 2021 realEstor, Inc.</Text>
      </Box>
      <Spacer />
      <ButtonGroup variant="ghost" color="gray.600">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="GitHub"
          icon={<FaGithub fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="20px" />}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default Footer;
