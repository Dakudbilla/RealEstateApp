import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseURl, fetchApi } from "../../utils/fetchApi";
import Imagescrollbar from "../../components/ImageScrollbar";
const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrenquency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <Imagescrollbar data={photos} />}
    </Box>
  );
};

export default PropertyDetails;

const getServerSideProps = ({ params: { id } }) => {
  const data = fetchApi(
    `${baseURl}/properties/detail/list?locationExternalIDs=${id}`
  );

  return {
    props: {
      propertyDetails: data,
    },
  };
};
