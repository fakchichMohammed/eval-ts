"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.view = void 0;
function view(data) {
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
exports.view = view;
