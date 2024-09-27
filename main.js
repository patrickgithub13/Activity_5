// Notification
function showAlert() {
  alert("You Have Been Selected!!!");
  }

// Change Color
function changeBackgroundColor() {
  var card = document.querySelector('.cardColor');
  if (card.style.backgroundColor === 'rgb(1, 21, 34)' || card.style.backgroundColor === '#011522') {
    card.style.backgroundColor = '#dddddd'; 
  } else {
      card.style.backgroundColor = '#011522'; 
  }
}

// Text Change
function changeHeadingText() {
  var heading = document.getElementById('heading');

  if (heading.innerHTML === "Demon Slayer") {
    heading.innerHTML = "Muichiro Tokito";
    heading.classList.add('new-text');
  } else {
    heading.innerHTML = "Demon Slayer";
    heading.classList.remove('new-text');
  }
}

// Date & Time
function showDateTime() {
    var currentDateTime = new Date();

    var formattedDateTime = currentDateTime.toLocaleString();

    document.getElementById('displayDateTime').innerHTML = formattedDateTime;
  }

// Summation
  function adjustWidth(input) {
    input.style.width = (input.value.length + 1) + "ch";
  }

    var int1 = document.getElementById('int1');
    var int2 = document.getElementById('int2');

    int1.addEventListener('input', function() {
      adjustWidth(int1);
    });

    int2.addEventListener('input', function() {
      adjustWidth(int2);
    });

function calculateSum() {
    var num1 = parseFloat(document.getElementById('int1').value);
    var num2 = parseFloat(document.getElementById('int2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      var sum = num1 + num2;

      document.getElementById('result').innerHTML = "Sum: " + sum;
    } else {
      document.getElementById('result').innerHTML = "Please enter valid numbers.";
    }
  }
  
function handleKeyPress(event) {
  if (event.key === "Enter") {
      calculateSum();
  }
}

document.getElementById('int1').addEventListener('keypress', handleKeyPress);
document.getElementById('int2').addEventListener('keypress', handleKeyPress);

// Login
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = event.target;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = `img/eye-close.png`;
    } else {
        passwordInput.type = 'password'; 
        eyeIcon.src = `img/eye.png`;
    }
}