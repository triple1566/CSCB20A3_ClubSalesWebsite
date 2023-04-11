/* This is for the sign-up page */

function signedInButton() {
    var email = document.getElementById('email-field').value;
    var username = document.getElementById('new_username-field').value;
    var password = document.getElementById('new_password-field').value;
    var confirm_password = document.getElementById('confirm-password-field').value;
  
    // Check if password and confirm password match
    if (password !== confirm_password) {
      alert("Passwords don't match. Please try again.");
      return false;
    }
  
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Define what happens on successful data submission
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Success! Notify user and clear form
          alert(xhr.responseText);
          document.getElementById('signup-form').reset();
        } else {
          // Something went wrong. Notify user.
          alert('Error: ' + xhr.status);
        }
      }
    }
  
    // Open a new connection
    xhr.open('POST', '/signup', true);
  
    // Set the request header
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
    // Send the request with form data
    xhr.send('email=' + email + '&username=' + username + '&password=' + password);
  
    // Prevent the form from submitting
    return false;
  }