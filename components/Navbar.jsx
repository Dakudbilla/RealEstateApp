import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  return (
    <Flex alignItems="baseline" p="2" borderBottom="1px" borderColo="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          realEstor
        </Link>
      </Box>
      <Spacer />
      <Flex justifyItems="stretch" display={{ base: "none", lg: "block" }}>
        <Link href="/" passHref>
          <Button
            mr="4"
            colorScheme="blue"
            variant="outline"
            leftIcon={<FcHome />}
          >
            Home
          </Button>
        </Link>
        <Link href="/search" passHref>
          <Button
            mr="4"
            colorScheme="blue"
            variant="outline"
            leftIcon={<BsSearch />}
          >
            Filter Properties
          </Button>
        </Link>

        <Link href="/search?purpose=for-sale" passHref>
          <Button
            mr="4"
            colorScheme="teal"
            variant="outline"
            leftIcon={<FcAbout />}
          >
            Buy Property
          </Button>
        </Link>
        <Link href="/search?purpose=for-rent" passHref>
          <Button
            mr="4"
            colorScheme="teal"
            variant="outline"
            leftIcon={<FcHome />}
          >
            Rent Property
          </Button>
        </Link>
      </Flex>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outlined"
          color="red.400"
          display={{ base: "block", lg: "none" }}
        />
        <MenuList display={{ base: "block", lg: "none" }}>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FcHome />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
