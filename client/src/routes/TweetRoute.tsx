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

export const getTweetAllRoute = async() => {
  const response = await fetch("http://localhost:3001/tweet-records/getTweet")

  if (response.ok){
    const records = await response.json()
    return records
  } 
  else {
    console.log("No records found in db")
  }
}
