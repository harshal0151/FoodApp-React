import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiwithText = () => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAwjprrVaO4RlkRQWm_7OwUMX-zMTx8AyI"
  );

  const [search, setSearch] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Generative AI Call to fetch text insights
   *
   * Provide a detailed recipe for a healthy version of ${search}. Include a list of ingredients needed, step-by-step instructions for preparation, and the calorie count per serving. Ensure that the recipe is designed to be nutritious, using wholesome and minimally processed ingredients.
   */
  async function aiRun() {
    setLoading(true);
    setResponse("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Provide a detailed recipe for a  ${search}. Include a list of ingredients needed, step-by-step instructions for preparation, and the calorie count per serving. Ensure that the recipe is designed to be nutritious, using wholesome and minimally processed ingredients.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    aiRun();
  };
console.log(aiResponse);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Search Food with Category using Generative AI"
          onChange={(e) => handleChangeSearch(e)}
        />
        <button style={{ marginLeft: "20px" }} onClick={() => handleClick()}>
          Search
        </button>
      </div>

      {loading == true && aiResponse == "" ? (
        <p style={{ margin: "30px 0" }}>Loading ...</p>
      ) : (
        <div style={{ margin: "30px 0" }}>
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
  );
};

export default AiwithText;
