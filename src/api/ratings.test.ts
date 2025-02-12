import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";
import { getEstablishmentRatings } from "./ratings";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe("Ratings API", () => {
  beforeEach(() => {
    fetchMocker.resetMocks();
  });

  it("call the ratings api with the provided page number and returns the data", async () => {
    // Given
    let pageNum = 1;
    let expected = { testing: "test" };
    fetchMocker.mockResponseOnce(JSON.stringify(expected));
    // When
    let actual = await getEstablishmentRatings(pageNum);

    // Then
    expect(actual).toEqual(expected);
    expect(fetchMocker.mock.calls.length).toEqual(1);
    expect(fetchMocker.mock.calls[0][0]).toEqual(
      `http://api.ratings.food.gov.uk/Establishments/basic/${pageNum}/10`
    );
  });
});
