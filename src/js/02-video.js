"use strict";
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector(`iframe`);
const videoPlayer = new Vimeo.Player(iframe);

onTimePauseVideo();
videoPlayer.on(`timeupdate`, throttle(saveTimeVideo, 1000));
function saveTimeVideo(video) {
    localStorage.setItem(`videoplayer-current-time`, video.seconds);
};
function onTimePauseVideo() {
    let pauseVideo = localStorage.getItem(`videoplayer-current-time`);
    videoPlayer.setCurrentTime(pauseVideo);
};
