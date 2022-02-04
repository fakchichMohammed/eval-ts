"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_js_1 = require("./util.js");
let data;
let users;
let posts;
let filteredData = new Set();
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    let reponse = yield fetch("https://jsonplaceholder.typicode.com/users");
    users = (yield reponse.json());
    reponse = yield fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(users);
    posts = (yield reponse.json());
    users.forEach((user, index) => {
        posts.forEach((post) => {
            if (user.id === post.userId) {
                data.body = post.body;
                data.title = post.title;
                data.name = user.name;
                data.email = user.email;
                filteredData.add(data[index]);
            }
        });
    });
    console.log(filteredData);
    console.log(data);
    (0, util_js_1.view)(filteredData);
}));
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputTitle = document.querySelector("input[type='title']");
    const inputAuteur = document.querySelector("input[type='auteur']");
    const TitleFiltre = filteredData.filter(post => post.title.toLowerCase().includes(inputTitle.value.toLowerCase()));
    (0, util_js_1.view)(TitleFiltre);
    const AuteurFiltre = filteredData.filter(post => post.name.toLowerCase().includes(inputAuteur.value.toLowerCase()));
    (0, util_js_1.view)(AuteurFiltre);
});
