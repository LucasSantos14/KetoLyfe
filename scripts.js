function buyNow() {
    window.location.href = "https://pay.kiwify.com.br/OXZo2kX";
}

function togglePlayPause() {
    const video = document.getElementById('vsl-video');
    const playPauseButton = document.getElementById('play-pause-button');

    if (video.paused) {
        video.play();
        playPauseButton.textContent = "Pausar";
    } else {
        video.pause();
        playPauseButton.textContent = "Reproduzir";
    }

    if (video.muted) {
        video.muted = false;
    }
}

const video = document.getElementById('vsl-video')
video.addEventListener('ended', function() {
    const videoBuyButton = document.getElementById('video-buy-button');
    const headerBuyButton = document.getElementById('header-buy-button');
    const infoBuyButton = document.getElementById('info-buy-button');
    const footerBuyButton = document.getElementById('footer-buy-button');
    
    videoBuyButton.style.display = 'inline-block';
    headerBuyButton.style.display = 'inline-block';
    infoBuyButton.style.display = 'inline-block';
    footerBuyButton.style.display = 'inline-block';
})