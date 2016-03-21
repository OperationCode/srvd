// credit: https://github.com/rydama/mailchimp-ajax-signup, http://stackoverflow.com/a/15120409/215821

(function() {

  var $form = $('#mailchimp-form');
  var $notification = $('#mailchimp-notification');
  var $inputEl = $form.find("input[type='email']");

  $form.submit(function(event) {
    var $inputText = $inputEl.val();
    event.preventDefault();
    var message = "Please enter a valid email.";

    if (!isValidEmail($inputText)) {
      $notification.html(message);
      $notification.css("color", "red");
      $notification.show();
    }
    else {
      signupUser($form, $notification).then(function(data) {
        if (data.result === "success") {
          $notification.css("color", "inherit");
          $('.contact-box__button').css('display', "none");
          $inputEl.css('display', "none");
          message = "Thanks for signing up! Please check your email to confirm.";
        }
        else if (data.result === "error"){
          if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
            message = "You're already subscribed. Thank you.";
            $notification.css("color", "inherit");
          }
          else {
            message = "Sorry. Unable to subscribe. Please try again later.";
            $notification.css("color", "red");
          }
        }
        $notification.html(message);
        $notification.show();
      });
    }
  });

  function isValidEmail($inputText) {
    if (!$inputText || !$inputText.length) {
      return false;
    }
    return true;
  }

  function signupUser($form, $notification) {
    return $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache: false,
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
    });
  }
})()
