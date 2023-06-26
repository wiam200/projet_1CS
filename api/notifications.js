import axios from "axios";
import Cookies from "js-cookie";

export function getNotifications() {
  let token = Cookies.get("token");
  return new Promise((resolve, reject) => {
    axios
      .get("http://esi-social.azurewebsites.net/api/notification", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        resolve(data.data);
      })
      .catch((err) => resolve([]));
  });
}
