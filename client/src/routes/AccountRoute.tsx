import { AccountInterface } from "../Interface/AccountInterface";

export const addAccountRoute = async (record: AccountInterface) => {
  const response = await fetch(
    "http://localhost:3001/user-records/createUser",
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

export const getAccountRoute = async (_id?: string) => {
  const response = await fetch(
    `http://localhost:3001/user-records/getUser/${_id}`
  );

  if (response.ok){
    const records = await response.json()
    return records
  } else {
    console.log('No user found on this id')
  }
};
