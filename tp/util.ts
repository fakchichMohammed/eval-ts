export interface Users {
  name: Object;
  email: Object;
}

export interface Posts {
  title: Object;
  body: Object;
}

export interface Data {
  name: Object;
  email: Object;
  title: Object;
  body: Object;
}

export function view(data) {
  let html = "";
  data.forEach((element) => {
    html += `<article>
      <div>
        <h2>${element.name}</h2>
        <p>${element.email}</p>
      </div> 
      <div>
        <h2>${element.title}</h2>
        <p>${element.body}</p>
      </div>
    </article>
    `;
  });
  document.querySelector("main").innerHTML = html;
}
