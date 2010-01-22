
$(document).ready(function() {
  // Contact Form Field Stuff
  var contactEmail = $('input#contactemail');
  var contactName = $('input#contactname'); 
  var contactMessage = $('textarea#contactmessage');
  
  contactName.focus(function(){
    if (this.value == this.defaultValue)
      this.value = '';
    else
      this.select();
  });
  contactName.blur(function() {
    if ($.trim(this.value) == ''){
      this.value = (this.defaultValue ? this.defaultValue : '');
    }
  });
  
  contactEmail.focus(function(){
    if (this.value == this.defaultValue)
      this.value = '';
    else
      this.select();
  });
  contactEmail.blur(function() {
    if ($.trim(this.value) == ''){
      this.value = (this.defaultValue ? this.defaultValue : '');
    }
  });
  
  contactMessage.focus(function(){
    if (this.value == this.defaultValue)
      this.value = '';
    else
      this.select();
  });
  contactMessage.blur(function() {
    if ($.trim(this.value) == ''){
      this.value = (this.defaultValue ? this.defaultValue : '');
    }
  });

  // alert($('#coda-slider-1'));
  // $('#coda-slider-1').codaSlider({
  //    dynamicArrows: false
  // });
  // 
  // $('#coda-slider-2').codaSlider({
  //    dynamicArrows: false
  // });
  // $('#coda-slider-3').codaSlider({
  //    dynamicArrows: false
  // });
  $('a.projimg').zoomimage({
    caption: false,
    centered: true
  });
});

function toggleProject(projectID) {
  var options = {};
  var projidstring = "#projdata" + projectID;
  $(projidstring).toggle('drop', options, 300);
}