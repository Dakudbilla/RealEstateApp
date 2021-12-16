import { baseURl, fetchApi } from "./fetchApi";

export const getPropertiesForSale = async () => {
  try {
    const propertyForSale = await fetchApi(
      `${baseURl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
    );
    return propertyForSale?.hits;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export const getPropertiesForRent = async () => {
  try {
    const propertyForRent = await fetchApi(
      `${baseURl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
    );

    return propertyForRent?.hits;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};
