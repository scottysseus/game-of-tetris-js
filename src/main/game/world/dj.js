export default function DJ(args) {

    let {scene, playList} = args;
    let currentSongIndex = 0;

    let stopAllSongs = function() {
        playList.forEach(element => {
            if(element.isPlaying) {
                element.stop();
            }
        });
    }

    let playNextSong = function() {
        stopAllSongs();
        let nextSongIndex = ++currentSongIndex % playList.length;
        let nextSong = playList[nextSongIndex];
        nextSong.play();
        scene.time.addEvent({
            delay: (5 + nextSong.duration) * 1000,
            callback: playNextSong,
            callbackScope: this    
        });
    }

    this.startPlayList = function() {
        playNextSong();
    }

}