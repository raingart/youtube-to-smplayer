# youtube_to_smplayer2
This method has been tested only in Linux!

### Principle of work:

Add [GM_script](/GM_script.js) to [Violentmonkey](https://violentmonkey.github.io/).scripts will replace links
with `https://www.youtube.com/watch?v=XXXXX` to `mpv://www.youtube.com/watch?v=bz2hbVHrFT8`

[smplayer-layer.desktop](/.local/share/applications/smplayer-layer.desktop) will redirect them to the script when they are opened [smplayer-layer](/bin/smplayer-layer)
Which will prepare a link to open in smplayer

__Don't forget to make the file__ [smplayer-layer](/bin/smplayer-layer) executable!

```#chmod +x smplayer-layer```

Let me remind you that Youtube stores video in h.264 format only up to 720p;

smplayer uses youtube-dl which at the moment can only steam h.264;

You will not get play 4K-video. This only makes sense if your system is unable to play videos at 60fps+720p.

