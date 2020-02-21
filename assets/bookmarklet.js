(function() {
    let selection = "";
    if (window.getSelection) {
      selection = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      selection = document.selection.createRange().text;
    }
  
    const params = new URLSearchParams();
    params.append("url", document.location.href);
    params.append("title", document.title);
    params.append("hostname", document.location.hostname);
    params.append("site_name",document.querySelector('meta[property="og:site_name"]'));
    params.append("site_twitter",document.querySelector('meta[property="twitter:site"]'));
    params.append("creator_name",document.querySelector('meta[property="author"]'));
    params.append("creator_twitter",document.querySelector('meta[property="twitter:creator"]'));
    params.append("selection", selection);
    params.append("color", "335fff");
    params.append("via", "textshotapp");
  
    const link = "https://textshot.app/preview.html?" + params.toString();
    window.open(link, "Share on Textshot");
  })();
  