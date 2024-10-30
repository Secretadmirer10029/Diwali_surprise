function loadPage() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    document.getElementById('background-video').classList.add('hidden');
}

function goBack() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('intro').style.display = 'flex'; 

    document.getElementById('background-video').classList.remove('hidden');
}

document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
});
