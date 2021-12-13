import Head from "next/head";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Banner from "../components/Banner";
import { baseURL, fetchApi } from "../utils/fetchApi";

const Home = ({ propertyForRent, propertyForSale }) => {
  console.log(propertyForRent);
  return (
    <div>
      <h1>Renphona</h1>
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
        {/**
         * Fetch the propers and map over them for rent home
         */}
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
      {/**
       * Fetch the propers and map over them for rent home
       */}
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const propertyForSale = await fetchApi(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale: propertyForSale?.hits,
    },
  };
};
