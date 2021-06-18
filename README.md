# youtube to smplayer
This method has been tested only in Linux!

### How to work:
Add [GM_script](/GM_script.js) to [Violentmonkey](https://violentmonkey.github.io/).
Scripts will replace links with `https://www.youtube.com/watch?v=XXXXX` to `mpv://www.youtube.com/watch?v=XXXXX`

[smplayer-layer.desktop](/.local/share/applications/smplayer-layer.desktop) link to [smplayer-layer](/bin/smplayer-layer) which will prepare a link to open in smplayer

__Don't forget to make the file__ [smplayer-layer](/bin/smplayer-layer) executable!

```#chmod +x smplayer-layer```

Add `x-scheme-handler/mpv=smplayer-layer.desktop` to `~/.config/mimeapps.list`
for registration new protocol (mpv://) with link it in [smplayer-layer.desktop](/.local/share/applications/smplayer-layer.desktop)

Let me remind you that Youtube stores video in h.264 format only up to 720p;

[Smplayer](https://www.smplayer.info/) use [youtube-dl](https://youtube-dl.org/) which at the moment can only steam h.264;

You will not get play 4K-video. This only makes sense if your system is unable to play videos at 60fps+720p.

## UPD: Better alternative
 [Play with mpv](https://greasyfork.org/en/scripts/416271-play-with-mpv)

 [Click on video thumbnail to play in MPV](https://openuserjs.org/scripts/nsinister/Click_on_video_thumbnail_to_play_in_MPV)
