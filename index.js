const modeButton = document.getElementById('mode');
modeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const scrollButton = document.getElementById('scroll');
window.addEventListener('scroll', () => {
    scrollButton.style.display = window.scrollY > 20 ? 'flex' : 'none';
});
scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
});

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); 
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const resultDiv = document.getElementById('result');
const errorMessage = document.getElementById('errorMessage');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const question1 = document.getElementById('question1').value;
  const question2 = document.getElementById('question2').value;
  const question3 = document.getElementById('question3').value;
  const question4 = document.getElementById('question4').value;
  const question5 = document.getElementById('question5').value;

  if (!email || !phone || !address) {
    errorMessage.style.display = 'block';
    return;
  }

  errorMessage.style.display = 'none';

  const average = (parseInt(question1) + parseInt(question2) + parseInt(question3) + parseInt(question4) + parseInt(question5)) / 5;

  let resultColor = '';
  if (average <= 4) resultColor = 'red';
  else if (average <= 7) resultColor = 'orange';
  else resultColor = 'green';

  const formData = {
    firstName,
    lastName,
    email,
    phone,
    address,
    question1,
    question2,
    question3,
    question4,
    question5,
    average
  };

  const formDataText = `
    <strong>Vardas:</strong> ${formData.firstName} <br>
    <strong>Pavardė:</strong> ${formData.lastName} <br>
    <strong>El. Paštas:</strong> ${formData.email} <br>
    <strong>Telefonas:</strong> ${formData.phone} <br>
    <strong>Adresas:</strong> ${formData.address} <br>
    <strong>Klausimai:</strong> 
    <ul>
      <li>Klausimas 1: ${formData.question1}</li>
      <li>Klausimas 2: ${formData.question2}</li>
      <li>Klausimas 3: ${formData.question3}</li>
      <li>Klausimas 4: ${formData.question4}</li>
      <li>Klausimas 5: ${formData.question5}</li>
    </ul>
  `;
  const averageText = `<strong>Vidurkis:</strong> <span style="color:${resultColor}">${formData.average}</span>`;

  document.getElementById('formData').innerHTML = formDataText;
  document.getElementById('averageResult').innerHTML = averageText;
  resultDiv.style.display = 'block';
});

