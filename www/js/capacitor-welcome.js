window.onload = () => {

  console.log('App loaded!');

  const unlockButton = document.getElementById('unlock'),
    portaitLockButton = document.getElementById('portrait-lock'),
    landscapeLockButton = document.getElementById('landscape-lock');

  unlockButton.onclick = () => {
    window.screen.orientation.unlock();
  };

  portaitLockButton.onclick = () => {
    window.screen.orientation.lock('portrait');
  };

  landscapeLockButton.onclick = () => {
    window.screen.orientation.lock('landscape');
  };

};
