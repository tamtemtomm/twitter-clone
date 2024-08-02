import axios from "axios";
import { PORT } from "../utilities/Variables";
import { AccountInterface } from "../Interface/AccountInterface";

export const addAccountRoute = async (newAccount: AccountInterface) => {
  axios
    .post(`${PORT}/user-records/createUser`, newAccount)
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
    .get(`${PORT}/user-records/getUser/${_id}`)
    .then((res) => {
      console.log(res);
      setAccount(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
