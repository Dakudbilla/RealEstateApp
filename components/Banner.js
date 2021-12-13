import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  imageUrl,
  linkName,
  buttonText,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <break />
          {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1}
          <break />
          {desc2}
        </Text>
        <Link passHref href={linkName}>
          <Button fontSize="xl">{buttonText}</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Banner;
