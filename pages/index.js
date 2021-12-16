import Head from "next/head";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Property from "../components/Property";
import { getPropertiesForRent, getPropertiesForSale } from "../utils/helper";

const Home = ({ propertiesForSale, propertiesForRent }) => {
  return (
    <div>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for "
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="/images/banner.jpg"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1={`Find & Buy Own Your `}
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="/images/buy.jpg"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const propertiesForSale = await getPropertiesForSale();
  const propertiesForRent = await getPropertiesForRent();
  return {
    props: {
      propertiesForSale: propertiesForSale,
      propertiesForRent: propertiesForRent,
    },
  };
}
