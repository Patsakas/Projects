window.addEventListener('DOMContentLoaded', (event) => {
    const gameContainer = document.getElementById('game-container');
    const player = document.getElementById('player');
    
    function centerPlayer() {
      const containerWidth = gameContainer.offsetWidth;
      const playerWidth = player.offsetWidth;
      const leftPosition = (containerWidth - playerWidth) / 2;
      
      player.style.left = leftPosition + 'px';
    }
    
    centerPlayer();
  });
  