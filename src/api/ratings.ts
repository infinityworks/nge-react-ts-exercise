const API_URL = "http://api.ratings.food.gov.uk";
const PAGE_SIZE = 10;

export const getEstablishmentRatings = async (pageNum: number) => {
  const response = await fetch(
    `${API_URL}/Establishments/basic/${pageNum}/${PAGE_SIZE}`,
    {
      headers: { "x-api-version": "2" },
    }
  );
  return response.json();
};
