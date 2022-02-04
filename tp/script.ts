


import { Data, Posts, Users, view } from "./util.js";

let data: Data;
let users: any;
let posts: any;
let filteredData = new Set()

document.addEventListener("DOMContentLoaded", async () => {
  let reponse = await fetch("https://jsonplaceholder.typicode.com/users");
  users = (await reponse.json()) as Array<Partial<Users>>;
  reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(users);
  
  posts = (await reponse.json()) as Array<Partial<Posts>>;
  users.forEach((user, index) => {
    posts.forEach((post) => {
      if (user.id === post.userId) {
        data.body = post.body;
        data.title = post.title;
        data.name = user.name;
        data.email = user.email;
        filteredData.add(data[index])
      }
    });
  });
  console.log(filteredData);
  console.log(data);
  view(filteredData);
});


document.querySelector("form").addEventListener("submit" , (e : Event) => {
  e.preventDefault()
  const inputTitle = document.querySelector("input[type='title']") as HTMLInputElement ;
  const inputAuteur = document.querySelector("input[type='auteur']") as HTMLInputElement ;
  
  const TitleFiltre = filteredData.filter( post =>  post.title.toLowerCase().includes(inputTitle.value.toLowerCase())    
  )
  view(TitleFiltre)
  const AuteurFiltre = filteredData.filter( post =>  post.name.toLowerCase().includes(inputAuteur.value.toLowerCase())    
  )
  view(AuteurFiltre)
  
})

