document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholder = document.getElementById('video-background');
    const playButton = document.getElementById('play-button');
    

    playButton.addEventListener('click', function() {
        const youtube = document.createElement('iframe');
        youtube.setAttribute('width', '600px');
        youtube.setAttribute('height', '400px');
        youtube.setAttribute('src', `https://www.youtube.com/embed/${`0B-Wno23XCw`}?autoplay=1&modestbranding=1`);                                          // iframe.setAttribute('src', `${`0B-Wno23XCw`}?autoplay=1&modestbranding=1`);
        videoPlaceholder.innerHTML=" "
        videoPlaceholder.appendChild(youtube);
    });
});
