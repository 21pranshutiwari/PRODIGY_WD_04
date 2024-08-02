const about =document.querySelector(".abt");
const project =document.querySelector(".project");
const contact =document.querySelector(".Contact");
const insta =document.querySelector("#insta");
const face =document.querySelector("#face");


about.onclick = () =>{
    open("http://127.0.0.1:5500/about.html");
}
project.onclick = () =>{
    open("http://127.0.0.1:5500/project.html");

}
contact.onclick = () =>{
    open("http://127.0.0.1:5500/contact.html");

}
insta.onclick = () =>{
    open("https://www.instagram.com/pranshu.pandit.75286/");

}
face.onclick = () =>{
   open("https://www.facebook.com/pranshu.pandit.75286/");

}