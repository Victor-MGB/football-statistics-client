import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";

function Video() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?&met=Videos&eventId=86392&APIkey=103051168&APIkey=49097422559256be8a821f7c8f71ee98ac0dcce2ac4ff6b4e85b5212e2edc492"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.result) {
          setVideos(data.result);
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
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-[6rem]">
        <h1 className="text-3xl font-semibold mb-4">Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">
                {video.video_title}
              </h2>
              <iframe
                title={video.video_title}
                src={video.video_url}
                width="100%"
                height="200"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Video;
