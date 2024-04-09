import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function Comment() {
  const [commentsData, setCommentsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?met=Comments&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492&matchId=902316"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.result) {
          setCommentsData(data.result["902316"]);
        } else {
          throw new Error("Data format is incorrect");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!commentsData) {
    return <div className="text-blue-500">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto mt-12">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">
          Match Comments
        </h1>
        <ul className="divide-y divide-gray-300">
          {commentsData.map((comment, index) => (
            <li key={index} className="px-4 py-3">
              <div className="text-lg font-semibold">
                {comment.comments_time || "N/A"}
              </div>
              <div className="text-gray-700">{comment.comments_text}</div>
              <div className="text-sm text-gray-500">
                {comment.comments_state_info || "N/A"}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Comment;
