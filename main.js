let countdown;

function startTimer() {
  const hoursInput = document.getElementById('hours');
  const minutesInput = document.getElementById('minutes');
  const secondsInput = document.getElementById('seconds');

  let totalSeconds =
    parseInt(hoursInput.value || 0) * 3600 +
    parseInt(minutesInput.value || 0) * 60 +
    parseInt(secondsInput.value || 0);

  if (totalSeconds <= 0) {
    alert('Введите корректное значение таймера!');
    return;
  }

  clearInterval(countdown);

  countdown = setInterval(() => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('timer').textContent = `${formatTime(
      hours
    )}:${formatTime(minutes)}:${formatTime(seconds)}`;

    if (totalSeconds <= 0) {
      stopTimer();
      alert('Таймер завершен!');
    } else {
      totalSeconds--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
  document.getElementById('timer').textContent = '';
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}