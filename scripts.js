

function buyNow() {
    window.location.href = "https://pay.kiwify.com.br/OXZo2kX"
}

function togglePlayPause() {
    const video = document.getElementById('vsl-video')
    const playPauseButton = document.getElementById('play-pause-button')

    if (video.paused) {
        video.play()
        playPauseButton.textContent = "Pausar"
    } else {
        video.pause()
        playPauseButton.textContent = "Reproduzir"
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('vsl-video')
    video.play().catch(error => {
        console.error('Erro ao reproduzir o video.', error)
    })

    video.addEventListener('ended', function () {
        const videoBuyButton = document.getElementById('video-buy-button')
        videoBuyButton.style.display = 'inline-block'
    })
})
