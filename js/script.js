////////////////navigation manu////////////////
const NavBar = ["HOME", "LEISTUNG", "REFERENZE", "KONTAKT", "ÜBER UNS"];
let NavBarLength = NavBar.length;
let ul = "<ul>";

for (i = 0; i < NavBarLength; i++) {
  ul += `<li><a href=${NavBar[i].toLowerCase()}.html>${NavBar[i]}</a></li>`;
}
ul += "</ul>";
document.getElementById("manu").innerHTML = ul;
document.getElementById("burgermanu").innerHTML = ul;

// slider..............................//

const SlidArray = [
  {
    id: 1,
    name: "Mehr Vertrauen für Ihre Solaranlage. Wir halten Ihr Versprechen.",
    title:
      "",
    img: "https://www.solarzentrum-rheingau.de/fileadmin/user_upload/slide1.jpg",
  },
  {
    id: 2,
    name: "Photovoltaikanlagen",
    title:
      " Mit unseren flexiblen Montagesystemen für Solartechnik",
    img: "https://holger-braaf.de/wp-content/uploads/phototoltaik_slider.jpg",
  },
  {
    id: 3,
    name: "Wartung Ihrer Photvoltaikanlage",
    title:
      "",
    img: "http://planbarphd.de/wp-content/uploads/2021/04/header-regenerative-energien-photovoltaik-s1-1.jpg",
  },
  {
    id: 4,
    name: "",
    title:
      " ",
    img: "https://www.wegatech.de/wp-content/uploads/2022/05/solartechnik-edited.jpg",
  },
];
const div = document.getElementById("slider");
let Arrow_l = document.getElementById("fa-arrow-left");
let Arrow_r = document.getElementById("fa-arrow-right");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const img = document.createElement("img");
div.appendChild(h2);
div.appendChild(p);
div.appendChild(img);
let next = 0;
let currentid = 0;

// slider  div circles..............................
const divRingBox = document.getElementById("ringbox");
SlidArray.forEach((item) => {
  const divRing = document.createElement("div");
  divRing.setAttribute("id", item.id - 1);
  divRingBox.appendChild(divRing);

  divRing.addEventListener("click", (ivent) => {
    next = ivent.target.id;
    slider(next);
  });
});

const forblack = (Slidid) => {
  document.getElementById(currentid).style.background = "rgba(0,0,0,0)";
  document.getElementById(currentid).style.border = "3px solid #000000";
  document.getElementById(Slidid).style.background = "#000";
  currentid = Slidid;
};

const slider = (item) => {
  forblack(item);
  img.setAttribute("src", SlidArray[item].img);
  h2.innerText = SlidArray[item].name;
  p.innerText = SlidArray[item].title;
};
slider(next);

Arrow_r.addEventListener("click", () => {
  if (next == SlidArray.length - 1) {
    next = 0;
  } else {
    next++;
  }
  slider(next);
  h2.setAttribute("class", "h2_animText");
  p.setAttribute("class", "P_animeTxt");
  setTimeout(() => {
    h2.classList.remove("h2_animText");
    p.classList.remove("P_animeTxt");
  }, 1000);
});
Arrow_l.addEventListener("click", () => {
  if (next == 0) {
    next = SlidArray.length - 1;
  } else {
    next--;
  }
  slider(next);
  h2.setAttribute("class", "h2_animText");
  p.setAttribute("class", "P_animeTxt");
  setTimeout(() => {
    h2.classList.remove("h2_animText");
    p.classList.remove("P_animeTxt");
  }, 1000);
});
setInterval(() => {
  if (next == SlidArray.length - 1) {
    next = 0;
  } else {
    next++;
  }
  slider(next);
  h2.setAttribute("class", "h2_animText");
  p.setAttribute("class", "P_animeTxt");
  setTimeout(() => {
    h2.classList.remove("h2_animText");
    p.classList.remove("P_animeTxt");
  }, 1000);
}, 6000);

// burger menu..............................

const Burger = document.getElementById("burgerbar");
const BurgerManu = document.getElementById("burgermanu");

Burger.addEventListener("click", () => {
  BurgerManu.classList.toggle("burgermanublock");
});

// navigation scroll background color ..............
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  const Scroll = this.scrollY;

  if (Scroll > 75) {
    header.style.background = "rgba(12, 45, 136, 0.1)";
  }
  if (Scroll > 150) {
    header.style.background = "rgba(12, 45, 136, 0.2)";
  }
  if (Scroll > 250) {
    header.style.background = "rgba(12, 45, 136, 0.5)";
  }
  if (Scroll > 350) {
    header.style.background = "rgba(12, 45, 136, 0.7)";
  }
  if (Scroll > 450) {
    header.style.background = "rgba(12, 45, 136, 0.9)";
  }
  if (Scroll > 400) {
    header.style.background = "rgba(12, 45, 136, 1)";
  }
  if (Scroll === 0) {
    header.style.background = "rgba(12, 45, 136, 0)";
  }
});
const formFilter = document.getElementById("filterserch");

let ArrayFillter = []; ////   fillter method array  //////////

// Server pick up ,............................
const section = document.getElementById("StatiaBox");
const Serverp = document.createElement("p");
const savepost = document.getElementById("post");
const form = document.getElementById("addpost");

const Server = async (url) => {
  const GetServer = await fetch(url, {
    method: "GET",
  });
  if (GetServer.status !== 200) {
    throw GetServer.status;
  }
  const Serverjson = await GetServer.json();
  return Serverjson;
};

Server("https://jsonplaceholder.typicode.com/posts")
  .then((GetserverJson) => {
    GetserverJson.forEach((post) => {
      ServerTeg(post);
    });
  })
  .catch((error) => {
    const section = document.getElementById("StatiaBox");
    const Perror = document.createElement("p");
    Perror.innerText = "ERROR";
    section.appendChild(Perror);
  });

const ServerTeg = (post) => {
  //filter method array text add...................
  const li = document.createElement("li");
  li.setAttribute("class", "postremov");
  li.innerText = post.title;
  ArrayFillter.push(li);
  document.getElementById("addtext").appendChild(li);
  // ............................/////////////////////

  const article = document.createElement("article");
  article.setAttribute("class", "title");

  const span = document.createElement("span");
  span.innerHTML = `<i class="fa-solid fa-arrows-up-down" id="${post.id}-" ></i>`;

  const Serverh2 = document.createElement("h2");
  Serverh2.innerText = post.title;

  const clearspan = document.createElement("span");
  clearspan.setAttribute("class", "clearpost");
  clearspan.innerHTML = `<i class="fa-solid fa-x" id="${post.id}b" ></i>`;

  article.appendChild(span);
  article.appendChild(clearspan);
  article.appendChild(Serverh2);
  section.appendChild(article);

  document.getElementById(`${post.id}-`).addEventListener("click", () => {
    article.setAttribute("id", `${post.id}+`);
    article.classList.toggle("newpost");
    if(article.classList[1] == "newpost"){
      Server(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
    Serverp.innerText = post.body;
    document.getElementById(`${post.id}+`).appendChild(Serverp);
    document.getElementById(`${post.id}-`).style.color = "#ffffff";
    }else {
      Serverp.remove();
      document.getElementById(`${post.id}-`).style.color = "#000000";
    }
  });

  document.getElementById(`${post.id}b`).addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "DELETE",
    });
    article.remove();
  });
};

form.addEventListener("submit", (ivent) => {
  ivent.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: ivent.target.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      ServerTeg(json);
    });
});

// post scrol animation ....................................
window.addEventListener("scroll", () => {
  const postscroll = this.scrollY;
  if (postscroll > 400) {
    section.style.width = "85%";
    section.style.height = "250px";
  }
  if (postscroll < 400) {
    section.style.width = "30%";
    section.style.height = "250px";
  }
});

// filter metthod serch ...................
const divchild = document.getElementById("addtext");

const filterfunction = (functional) => {
  ArrayFillter.forEach((item) => {
    divchild.appendChild(item);
    if (
      item.innerText.toLowerCase().includes(functional.toLowerCase()) &
      (functional !== "")
    ) {
      divchild.style.display = "block";
      item.classList.add("postadd");
    } else {
      item.classList.remove("postadd");
      divchild.style.display = "none";
    }
  });
};

formFilter.addEventListener("input", (textvalue) => {
  filterfunction(textvalue.target.value);
});

// animation Grow your business fast................
window.addEventListener("scroll", () => {
  const AnimeScroll = this.scrollY;
  if (AnimeScroll > 700) {
    document.getElementById("businessfast").classList.add("transform");
  } else {
    document.getElementById("businessfast").classList.remove("transform");
  }
});

// scroll button top 0....................................
const buttonTop = document.getElementById("ScrolTop");
buttonTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// itkol taimer .........................................
window.addEventListener("scroll", () => {
  const timeScroll = this.scrollY;
  if (timeScroll > 2895) {
    let time = 1;
    setInterval(() => {
      if (time === 2500) {
        return;
      }
      time++;
      document.getElementById("timSpan").innerText = time + "+";
    }, 1);

    let minut = 1;
    setInterval(() => {
      if (minut === 350) {
        return;
      }
      minut++;
      document.getElementById("minutSpan").innerText = minut + "+";
    }, 30);

    let secund = 1;
    setInterval(() => {
      if (secund === 20) {
        return;
      }
      secund++;
      document.getElementById("secundSpan").innerText = secund + "+";
    }, 500);
  }
});

// Innovative IT Solution for your Business & Startup..........................
window.addEventListener("scroll", () => {
  const inovationScroll = this.scrollY;
  if (inovationScroll > 4500) {
    setTimeout(() => {
      document.getElementById("trun_on").setAttribute("class", "trun_on");
      document.getElementById("innovation").setAttribute("class", "innovation");
    }, 500);
  }
});
