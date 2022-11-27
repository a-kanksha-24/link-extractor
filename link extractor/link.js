const txt1 = document.querySelector("#content");
const btn = document.querySelector("button");
const str = "";
txt1.value = str;
btn.addEventListener("click", getLinks);
output = document.getElementById("demo");
function getLinks() {
  const temp = txt1.value;
  const regex = /[-a-zA-Z0-9@:%\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%\+.~#?&//=]*)?/gi;
  const linksrep = temp.match(regex);
  const links = [];
  linksrep.forEach((link) => {
    if (!links.includes(link)) {
      links.push(link);
    }
  });
  output.innerHTML = "";
  for (index = 0; index < links.length; index++) {
    output.innerHTML += `<div class ="links"> <a href="${links[index]}" target="_blank" >${links[index].length > 50 ? links[index].slice(0, 50) + '...' : links[index]}</a> </div>`;
  }
}
