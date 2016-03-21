// credit: https://github.com/rydama/mailchimp-ajax-signup, http://stackoverflow.com/a/15120409/215821

(function() {

  var $form = $('#mailchimp-form');
  var $notification = $('#mailchimp-notification');

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
      signupUser($form, $notification).then(function() {
        $notification.show();
      });
    }
  });

  function isValidEmail($form) {
    var inputText = $form.find("input[type='email']").val();
    if (!inputText || !inputText.length) {
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
        error: function(err) {
          // not needed for JSONP cross-domain requests
        },
        success: function(data) {
          var message;
          if (data.result != "success") {
              message = data.msg || "Sorry. Unable to subscribe. Please try again later.";
              $notification.css("color", "red");
              if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                message = "You're already subscribed. Thank you.";
                $notification.css("color", "inherit");
              }
              $notification.html(message);
          } else {
            $notification.css("color", "inherit");
            $notification.html("Thanks for signing up! Please check your email to confirm.");
          }
        }
    });
  }
})()
