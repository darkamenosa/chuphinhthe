$(document).ready(function() {
  // Functional methods
  // ---------------------------------
  
  function identity(val) {
    return val;
  }

  function sideEffectWrapper(fn) {
    return function(val) {
      fn()
      return val;
    }
  }
  
  // App methods
  // ---------------------------------
  
  function getEmailsRef() {
    return firebase.database().ref('emails');
  }

  /**
   * Read email from form
   */
  function readEmailForm() {
    return $('#email').val();
  }

  function hideEmailForm() {    
    $('#email-form').addClass('d-none');
  }
  
  function saveEmail(email) { 
    return getEmailsRef()
      .set({
        email: email
      });
  }

  function showThanks() {
    $('#thanks-form').removeClass('d-none');
  }

  function showLoader() {
    console.log('show loader running')
    $('#loader').removeClass('d-none');
  } 

  function hideLoader() {
    $('#loader').addClass('d-none');
    console.log('hide loader running')
  }

  function handleEmailFormSubmit(event) {
    // Event form default action
    event.preventDefault();

    return Promise
      .resolve()
      .then(readEmailForm)
      .then(sideEffectWrapper(hideEmailForm))
      .then(sideEffectWrapper(showLoader))
      .then(saveEmail)
      .then(sideEffectWrapper(hideLoader))
      .then(showThanks)
  }

  /**
   * Main program
   */
  function main() {
    // Listen on submit event of the form
    $('#email-form')
      .on('submit', handleEmailFormSubmit)
  }


  // Run the app
  main();

});
