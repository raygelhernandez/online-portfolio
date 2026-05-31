const containers = document.querySelectorAll('.video-container');

containers.forEach(container => {
  const video = container.querySelector('.hover-video');
  const originalSrc = video.src;

  container.addEventListener('mouseenter', () => {
    video.muted = true;
    video.play().catch(error => console.log(error));
  });

  container.addEventListener('mouseleave', () => {
    video.pause();
    
    video.src = '';
    video.src = originalSrc;
    video.load();
  });
});