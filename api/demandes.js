import axios from "axios";
import Cookies from "js-cookie";
import { getUserToken } from "./auth";

export function createDemande(id, formData) {
  return new Promise((resolve, reject) => {
    let token = getUserToken();
    axios
      .post(
        `http://esi-social.azurewebsites.net/api/demandes/create?oeuvreId=${id}`,
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

export function getDemandes() {
  return new Promise((resolve, reject) => {
    let token = Cookies.get("token");
    axios
      .get(`http://esi-social.azurewebsites.net/api/demandes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        resolve(
          data.data.map((item) => {
            return {
              name: item.user.name,
              status: item.status,
              id: item.id,
              date: new Date(item.created_at).toLocaleDateString(),
              piecejointes: item.piecejointes,
            };
          })
        );
      })
      .catch((err) => reject(err));
  });
}

export function getDemandesByStatus() {
  return new Promise((resolve, reject) => {
    let token = Cookies.get("token");
    axios
      .get(`http://esi-social.azurewebsites.net/api/demandes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        resolve(
          data.data
            .filter((item) => item.status == "approved")
            .map((item) => {
              return {
                name: item.user.name,
                status: item.status,
                id: item.id,
                date: new Date(item.created_at).toLocaleDateString(),
                piecejointes: item.piecejointes,
              };
            })
        );
      })
      .catch((err) => reject(err));
  });
}

export function getAttachementLink(name) {
  return new Promise((resolve, reject) => {
    let token = Cookies.get("token");
    fetch(`http://esi-social.azurewebsites.net/api/file?name=${name}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.blob())
      .then((data) => {
        const url = URL.createObjectURL(data);
        resolve(url);
      })
      .catch((err) => reject(err));
  });
}

export function changeStatusDemandes(id, status) {
  return new Promise((resolve, reject) => {
    let token = Cookies.get("token");
    axios
      .post(
        `http://esi-social.azurewebsites.net/api/demandes/status/${id}`,
        { status: status },
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

export function payDemande(id, montant, method) {
  return new Promise((resolve, reject) => {
    let token = Cookies.get("token");
    axios
      .post(
        `http://esi-social.azurewebsites.net/api/paydemande/${id}`,
        { montant: montant, method: method },
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
