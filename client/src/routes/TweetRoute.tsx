export const addTweetRoute = async (record: any) => {
  const response = await fetch(
    "http://localhost:3001/tweet-records/createTweet",
    {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  try {
    if (response.ok) {
      const newRecord = await response.json();
      console.log(newRecord);
      // setRecord((prev) => [...prev, newRecord])
    }
  } catch (err) {
    console.log(err);
  }
};
