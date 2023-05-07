import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem(VIDEO_TIME_KEY) ?? 0);
player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));

function onPlayerTimeUpdate({seconds}) {
  localStorage.setItem(VIDEO_TIME_KEY, JSON.stringify(seconds));
}


