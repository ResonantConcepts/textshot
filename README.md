# Textshot
Read. Capture. Tweet.

## How it works
1. Grab the <a href="javascript:(function()%7Bvar%20selection%3D%22%22%3Bwindow.getSelection%3Fselection%3Dwindow.getSelection().toString()%3Adocument.selection%26%26%22Control%22!%3Ddocument.selection.type%26%26(selection%3Ddocument.selection.createRange().text)%3Bvar%20params%3Dnew%20URLSearchParams%3Bparams.append(%22url%22%2Cdocument.location.href)%2Cparams.append(%22title%22%2Cdocument.title)%2Cparams.append(%22hostname%22%2Cdocument.location.hostname)%2Cparams.append(%22site_name%22%2Cdocument.querySelector('meta%5Bproperty%3D%22og%3Asite_name%22%5D'))%2Cparams.append(%22site_twitter%22%2Cdocument.querySelector('meta%5Bproperty%3D%22twitter%3Asite%22%5D'))%2Cparams.append(%22creator_name%22%2Cdocument.querySelector('meta%5Bproperty%3D%22author%22%5D'))%2Cparams.append(%22creator_twitter%22%2Cdocument.querySelector('meta%5Bproperty%3D%22twitter%3Acreator%22%5D'))%2Cparams.append(%22selection%22%2Cselection)%2Cparams.append(%22color%22%2C%22335fff%22)%2Cparams.append(%22via%22%2C%22textshotapp%22)%3Bvar%20link%3D%22https%3A%2F%2Ftextshot.app%2Fcapture.html%3F%22%2Bparams.toString()%3Bwindow.open(link%2C%22Share%20on%20Textshot%22)%7D)()">Textshot bookmarklet</a>
2. Highlight text anywhere on the web
3. Click on your bookmarklet
4. Preview on textshot.app
5. Tweet it out!
