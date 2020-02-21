function getContrastYIQ(hexcolor) {
    let r = parseInt(hexcolor.substr(0, 2), 16);
    let g = parseInt(hexcolor.substr(2, 2), 16);
    let b = parseInt(hexcolor.substr(4, 2), 16);
    let yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  }
  
  let urlParams = new URLSearchParams(window.location.search);
  
  if (urlParams.has("color")) {
    let root = document.documentElement;
    root.style.setProperty("--highlightBackground", "#" + urlParams.get("color"));
    root.style.setProperty(
      "--highlightText",
      getContrastYIQ(urlParams.get("color"))
    );
  }
  
  if (urlParams.has("selection")) {
    let selection = urlParams.get("selection");
  
    if (urlParams.has("highlight")) {
      let highlight = urlParams.get("highlight");
      let searchTextRegExp = new RegExp(highlight);
      selection = selection.replace(searchTextRegExp, "<mark>$&</mark>");
    }
  
    document.querySelector(".selection").innerHTML = selection;
  }
  
  if (urlParams.has("title")) {
    document
      .querySelector(".title")
      .appendChild(document.createTextNode(urlParams.get("title")));
  }
  
  let credit = document.querySelector(".credit");
  let creditText = "shared via Textshot.app";
  credit.appendChild(document.createTextNode(creditText));
  
  
  if (urlParams.has("hostname")) {
    let hostname = document.createElement("img");
    hostname.classList.add("hostname");
    hostname.src = "https://logo.clearbit.com/" + urlParams.get("hostname");
    document.querySelector(".card-footer").appendChild(hostname);
  }
  
  if (urlParams.has("url")) {
    document.querySelector(".capture").style.display = "block";
    document.querySelector(".sample").style.display = "none";
  
    let button = document.createElement("a");
      let buttonParams = new URLSearchParams();
        buttonParams.append("text", "%E2%80%9C" + urlParams.get("title") + "%E2%80%9D from ");
        buttonParams.append("url", urlParams.get("url"));
        if (urlParams.has("via")) {
          buttonParams.append("via", urlParams.get("via"));
        }
        
    button.href = "https://buffer.com/add?" + buttonParams.toString();
    button.innerHTML = "Buffer";
    button.target = "_blank";
    document.body.appendChild(button);
  }
  
  urlParams.has("site_name")
  urlParams.has("site_twitter")
  urlParams.has("creator_name")
  urlParams.has("creator_twitter")