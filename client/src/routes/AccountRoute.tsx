import { AccountProps } from "../context/AccountContext";

export const addAccountRoute = async (record: AccountProps) => {
  const response = await fetch("http://localhost:3001/user-records/createUser", {
    method: "POST",
    body: JSON.stringify(record),
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    if (response.ok) {
      const newRecord = await response.json();
      console.log(newRecord)
      // setRecord((prev) => [...prev, newRecord])
    }
  } catch (err) {
    console.log(err);
  }
};
