//functions to make prompts for the metaphor api
import axios from "axios";

//function to create prompts for the metaphor api
export async function createPrompt(obj) {
  let res = [];

  //list of prompts to be sent to the metaphor api
  const prompts = [
    `most ${obj.frontendComplexity} ${obj.programmingLanguage} frontend ${obj.platform} framework`,
    `most ${obj.backendComplexity} ${obj.programmingLanguage} backend ${obj.platform} framework`,
    `most compatible ${obj.database} database for ${obj.programmingLanguage} backend`,
  ];

  for (let i = 0; i < prompts.length; i++) {
    //push all results to the res array
    res.push(await makeRequest(prompts[i]));
  }

  return res;
}

//function to make requests to the metaphor api

export async function makeRequest(prompt) {
  const options = {
    method: "POST",
    url: "https://api.metaphor.systems/search",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_METAPHOR_KEY, // Replace with your actual API key
    },
    data: {
      // Adjust your data here based on the API's requirements
      query: prompt, // Use the prompt you pass as a parameter
      numResults: 1,
      startCrawlDate: "2023-01-01",
      endCrawlDate: "2023-12-31",
      startPublishedDate: "2023-01-01",
      endPublishedDate: "2023-12-31",
      useAutoprompt: true,
      type: "neural",
    },
  };

  try {
    const response = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Request error:", error);
    return null;
  }
}

// ICEBOX: function to get content from the metaphor api then seamlessly pass it to the assistant
// the assistant will then parse through the content and provide a response to the user on how to build
// their project with relavenet stack provided. Currently researching open source models that will make this
// for little to no cost to the user.

export async function getContent(id) {
  const options = {
    method: "GET",
    url: "https://api.metaphor.systems/contents?ids=" + id,
    headers: {
      accept: "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_METAPHOR_KEY,
    },
  };

  try {
    const response = await axios(options);
    const data = response.data;

    console.log(data);
    return data[0].title;
  } catch (error) {
    console.error("Request error:", error);
    return null;
  }
}
