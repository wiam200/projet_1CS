import axios from "axios";
import Cookies from "js-cookie";

export function getChapters(token) {
  return new Promise((resolve, reject) => {
    axios
      .get("http://esi-social.azurewebsites.net/api/programmes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        resolve(data.data);
      })
      .catch((err) => reject(err));
  });
}

export function getChapter(programs, id) {
  return new Promise((resolve, reject) => {
    let result;
    programs.map((program) => {
      let chapter = program.oeuvres.filter((item) => item.id == id);
      chapter = chapter ? chapter[0] : null;
      if (chapter) result = {
        programId: program.id,
        program: program.titre,
        ...chapter
      };
    });
    resolve(result);
    // fetch("https://cat-fact.herokuapp.com/facts/" + id, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => resolve(data))
    //   .catch((err) => reject(err));
  });
}
