import axios from "axios";
import Cookies from "js-cookie";
import { getUserToken } from "./auth";

export function createDemande(formData) {
  return new Promise((resolve, reject) => {
    let token = getUserToken();
    axios
      .post(
        "http://esi-social.azurewebsites.net/api/demandes/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
}
