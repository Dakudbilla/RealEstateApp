import { useContext } from "react";
import { Box, Flex, Text, Avatar, Icon } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" margin="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={scrollPrev}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" margin="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={scrollNext}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};
const Imagescrollbar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overlow: "hidden" }}
    >
      {data.map((item) => (
        <Box
          key={item.id}
          width="910px"
          itemId={item.id}
          overflow="hidden"
          p="1"
        >
          <Image
            alt="property"
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width:500px) 100px, (max-width):1023px 400px,1000px"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default Imagescrollbar;
