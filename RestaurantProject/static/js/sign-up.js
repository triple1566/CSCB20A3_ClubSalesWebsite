/* This is for the sign-up page */

function signedInButton() {
    let email = document.getElementById('email-field').value;
    let username = document.getElementById('new_username-field').value;
    let password = document.getElementById('new_password-field').value;
    let confirm_password = document.getElementById('confirm-password-field').value;
  
    if (password !== confirm_password) {
      alert("Passwords don't match. Please try again.");
      return false;
    }
  
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert(xhr.responseText);
          document.getElementById('signup-form').reset();
        } else {
          alert('Error: ' + xhr.status);
        }
      }
    }
  
    xhr.open('POST', '/signup', true);
  
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
    xhr.send('email=' + email + '&username=' + username + '&password=' + password);
  
    return false;
  }