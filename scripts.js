function buyNow() {
    alert('Redirecionando para a página de compra!');
    window.location.href = "https://pay.kiwify.com.br/dM5t9c5";
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

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('vsl-video');
    video.muted = true;
    video.play();

    video.addEventListener('ended', function() {
        const videoBuyButton = document.getElementById('video-buy-button');
        const headerBuyButton = document.getElementById('header-buy-button');
        const infoBuyButton = document.getElementById('info-buy-button');
        const footerBuyButton = document.getElementById('footer-buy-button');
        
        videoBuyButton.style.display = 'inline-block';
        headerBuyButton.style.display = 'inline-block';
        infoBuyButton.style.display = 'inline-block';
        footerBuyButton.style.display = 'inline-block';
    });

    video.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
        }
    });
});
