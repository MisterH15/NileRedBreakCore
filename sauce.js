var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var audioplayer;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '1080',
        width: '1920',
        videoId: 'IrdYueB9pY4',
        events: {
            'onReady': onPlayerReady
        }
    });
  audioplayer = new YT.Player('audioplayer', {
        height: '1',
        width: '1',
        videoId: 'RgFaK6ZQifE',
        events: {
            'onReady': onAudioPlayerReady
        }
    });
}

function onPlayerReady(event) {
    player.setPlaybackRate(2);
    player.mute();
	
  var playButton = document.getElementById("btnplay");
  playButton.addEventListener("click", function () {
    player.playVideo();
	player.seekTo(90);
  });
}
	
function onAudioPlayerReady(event) {
	var playButton = document.getElementById("btnplay");
	playButton.addEventListener("click", function () {
    audioplayer.playVideo();
	audioplayer.seekTo(50);
  });
}
