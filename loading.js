document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">VENCER</div>
            <div class="loading-spinner"></div>
            <div class="loading-progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;
    document.body.appendChild(loadingScreen);

    const progressBar = loadingScreen.querySelector('.progress-bar');
    let progress = 0;

    function simulateProgress() {
        if (progress < 100) {
            progress += Math.random() * 30;
            if (progress > 100) progress = 100;
            progressBar.style.width = progress + '%';

            if (progress < 100) {
                setTimeout(simulateProgress, 200);
            } else {
                setTimeout(() => {
                    loadingScreen.classList.add('fade-out');
                    setTimeout(() => {
                        loadingScreen.remove();
                    }, 500);
                }, 500);
            }
        }
    }

    window.addEventListener('load', function() {
        simulateProgress();
    });
}));