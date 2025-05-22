function checkPassword() {
  const userPass = document.getElementById('password').value;
  const correctPass = 'JN230523';
  const errorMsg = document.getElementById('error-message');

  if (userPass === correctPass) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('conteudo-seguro').style.display = 'block';
    setInterval(updateTimer, 1000);
  } else {
    errorMsg.textContent = 'Senha incorreta. Tente novamente!';
  }
}

function responderSim() {
  document.getElementById('pergunta').style.display = 'none';
  document.querySelector('.sim').style.display = 'none';
  document.querySelector('.nao').style.display = 'none';
  document.getElementById('conteudo').style.display = 'block';
}

function responderNao() {
  document.getElementById('pergunta').style.display = 'none';
  document.querySelector('.sim').style.display = 'none';
  document.querySelector('.nao').style.display = 'none';
  document.getElementById('imagemNao').style.display = 'block';
}

const startDate = new Date('2023-05-23T00:00:00');
function updateTimer() {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) { months += 12; years--; }

  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}
