    $('.contact-form').submit(function(event) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "telegram.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        alert("Заявка успешно отправлена");
        $("form").trigger("reset");
      });
      return false;
    });