function validateForm() {
  const name = document.getElementById('name');
  const DOB = document.getElementById('DOB');
  const Email = document.getElementById('Email');
  const mobileNumber = document.getElementById('number');
  const EDUQ = document.getElementById('EDU');
  const Address = document.getElementById('Adress');
  const file = document.getElementById('myfile');
  const experience = document.getElementById('experience');


  if (name.value.trim() === '') {
    alert('Please enter your name');
    name.focus();
    return false;
  }

  if (DOB.value.trim() === '') {
    alert('Please enter your date of birth');
    birthday.focus();
    return false;
  }
  if (Email.selectedIndex === 0) {
    alert('please enter your email');
    Email.focus();
    return false;
  }

  if (EDUQ.selectedIndex === 0) {
    alert('Please select your qualification');
    EDUQ.focus();
    return false;
  }

  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobileNumber.value)) {
    alert('Please enter a valid mobile number');
    mobileNumber.focus();
    return false;
  }
  if (Address.value.trim() === '') {
    alert('Please enter your Address');
    Address.focus();
    return false;
  }


  if (experience.value.trim() === '') {
    alert('Please enter your experience');
    experience.focus();
    return false;
  }

  if (file.value.trim() === '') {
    alert('Please select a file');
    file.focus();
    return false;
  }

  return true;
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    if (validateForm()) {
      // Display success message
      const successMessage = document.getElementById('success-message');
      successMessage.style.display = 'block';
      successMessage.innerHTML = 'Form submitted successfully!';
      // Submit the form
      // You can also use AJAX to submit the form without reloading the page
      // For simplicity, I'm just submitting the form normally
      // If you want to stay on the same page, you can use AJAX
      setTimeout(function() {
        form.submit();
      }, 2000); // Wait for 2 seconds before submitting the form
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  });
});