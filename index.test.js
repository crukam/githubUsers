
import { githubUserRepos } from "./index";
import { mockResponse } from './repos';
import axios from 'axios';

jest.mock('axios');

describe("githubUserRepos", () => {
  it("should make the request successfully", async () => {
    const data = {
      'key1': 'value1',
      'key2': 'value2'
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });

  it("should return an error when request is unsuccessful", async () => {
    const error = { message: "error occurs" };
    axios.get.mockImplementationOnce(() => Promise.reject(error));
  });

  it("should return an array of objects with the user repos", async () => {
   
    axios.get.mockResolvedValue(mockResponse);

    const expectedResult = await githubUserRepos('crukam');
    expect(expectedResult).toEqual(mockResponse.data);
    });
});