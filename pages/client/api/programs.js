let programs = [
    {
      title: "Program 1",
      chapters: [
        {
          title: "Chapter 1",
          description: "Chapter 1 Description",
          id: "aaaaa"
        },
        {
          title: "Chapter 2",
          description: "Chapter 2 Description",
          id: "bbbbbb"
        },
        {
          title: "Chapter 3",
          description: "Chapter 3 Description",
          id: "ccccccc"
        }
      ]
    },
    {
      title: "Program 2",
      chapters: [
        {
          title: "Chapter 1",
          description: "Chapter 1 Description",
          id: "dddddd"
        }
      ]
    }
  ];  
  
  let chapters = [
    {
      title: "Chapter 1",
      program: "Program 1",
      description: "Chapter 1 Description",
      id: "aaaaa"
    },
    {
      title: "Chapter 2",
      program: "Program 1",
      description: "Chapter 2 Description",
      id: "bbbbbb"
    },
    {
      title: "Chapter 3",
      program: "Program 1",
      description: "Chapter 3 Description",
      id: "ccccccc"
    },
    {
      title: "Chapter 1",
      program: "Program 2",
      description: "Chapter 1 Description",
      id: "dddddd",
      categories: [
        {
          label: "category 1",
          value: "eeeee",
          price: 10000
        },
        {
          label: "category 2",
          value: "ttttt",
          price: 2000
        }
      ]
    }
  ]
  
  export function getChapters() {
    return new Promise((resolve, reject) => {
      
      resolve(programs);
      // fetch("https://cat-fact.herokuapp.com/facts", {
      //   method: "GET",
      // })
      //   .then((response) => response.json())
      //   .then((data) => resolve(data))
      //   .catch((err) => reject(err));
  
    });
  }
  
  export function getChapter(id) {
    return new Promise((resolve, reject) => {
      let chapter = chapters.filter(item => item.id == id)
      resolve(chapter[0]);
      // fetch("https://cat-fact.herokuapp.com/facts/" + id, {
      //   method: "GET",
      // })
      //   .then((response) => response.json())
      //   .then((data) => resolve(data))
      //   .catch((err) => reject(err));
  
    });
  }
  