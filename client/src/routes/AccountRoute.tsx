import axios from "axios";
import { AccountInterface } from "../Interface/AccountInterface";

export const addAccountRoute = async (newAccount: AccountInterface) => {
  axios
    .post("http://localhost:3001/user-records/createUser", newAccount)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};


export const getAccountRoute =  (
  _id: string,
  setAccount: (accounts: any) => void
) => {
  axios
    .get(`http://localhost:3001/user-records/getUser/${_id}`)
    .then((res) => {
      console.log(res);
      setAccount(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
