(function() {

  var $form = $('#mailchimp-form');
  var $notification = $('.contact-box__notification');

  $form.submit(function(event) {
    event.preventDefault();
    var error = "Please enter a valid email.";
    var success = "Thanks for signing up! Please check your email for confirmation.";

    if (!isValidEmail($form)) {
      $notification.html(error);
      $notification.show();
      $notification.css("color", "red");
    }
    else {
      $notification.html(success);
      $notification.show();
      $notification.css("color", "inherit");
    }
  })

  function isValidEmail($form) {
    var inputText = $form.find("input[type='email']").val();
    console.log(inputText);
    if (!inputText || !inputText.length) {
      return false;
    }
    return true;
  }
})()
