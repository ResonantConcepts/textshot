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

if (urlParams.has("creator_name") !== "null" || urlParams.has("creator_twitter") !== "null") {
  console.log(urlParams.get("creator_name"))
  console.log(urlParams.get("creator_twitter"))
  creditText = "by " + (urlParams.get("creator_name") || urlParams.get("creator_twitter")) + " " + creditText;
}

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

  /* start buffer button */
  const bufferDiv = document.createElement('div');
  const bufferLink = 'https://buffer.com/add'
    + `text=${encodeURI(urlParams.get('url'))}`
    + (urlParams.has('via')
      ? '&url=' + urlParams.get("via")
      : '')
    + '&picture=https://us-central1-textshot-app.cloudfunctions.net/post?target=buffer&url=' + window.location.href;
  const bufferButton = `<a href="${bufferLink}" target="_blank">Buffer</a>`
  bufferDiv.innerHTML = bufferButton;
  /* end buffer button */

  /* start twitter button */
  const twitterDiv = document.createElement('div');
  twitterDiv.style.cursor = 'pointer';
  twitterDiv.style.color = '-webkit-link';
  twitterDiv.style.textDecoration = 'underline';
  const twitterHandler = (e) => {
    twitterDiv.innerText = 'loading...'
    twitterDiv.disabled = true;

    fetch('https://us-central1-textshot-app.cloudfunctions.net/post?target=twitter')
      .then((response) => response.text())
      .then((img) => {
        const link = `https://twitter.com/intent/tweet?text=${encodeURI(`${urlParams.get('title')} - ${urlParams.get('url')} via @TextshotApp`)} ${img}`;
        twitterDiv.innerHTML = `<a href="${link}">tweet</a>`
        twitterDiv.onclick = null;
        twitterDiv.disabled = false;
      });
  }
  twitterDiv.onclick = twitterHandler;

  twitterDiv.innerHTML = `Twitter`
  /*end twitter button*/

  document.body.appendChild(bufferDiv);
  document.body.appendChild(twitterDiv);
}

urlParams.has("site_name")
urlParams.has("site_twitter")
urlParams.has("creator_name")
urlParams.has("creator_twitter")