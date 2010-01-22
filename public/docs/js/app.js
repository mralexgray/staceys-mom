$(document).ready(function() {
$('input#contactemail').focus(function() {
  if ($('input#contactemail').attr("value") != null)
    $('input#contactemail').removeAttr("value");
});

$('input#contactname').focus(function() {
  if ($('input#contactname').attr("value") != null)
    $('input#contactname').removeAttr("value");
});

$('textarea#contactmessage').focus(function() {
  if ($(this).text() != "")
    $(this).text("");
});
});