$(document).ready(function(){

  // setting variables
  var $btnSubmitLanding = $('.btn-submit-landing');
  var $btnDelete = $('.btn-delete');
  var $btnDeleteAll = $('.btn-delete-all');
  var $textFirstName = $('.text-firstname');
  var $textLastName = $('.text-lastname');
  var $textEmail = $('.text-email');
  var $listDisplayField = $('.list-display-field');
  var $landingPage = $('.landing-page');
  var $previewPage = $('.preview-page');
  var $btnBackPreview = $('.btn-back-preview');
  var $displayField = $('.display-field');

  // hiding preview page on load
  $previewPage.hide();

  // setting global variable for JSON.stringify
  var dataArr = [];

  // store multiple values
  $btnSubmitLanding.on('click', function() {
    if (typeof (Storage) !== 'undefined') {
      var dataObj = {
        firstname: $textFirstName.val(),
        lastname: $textLastName.val(),
        email: $textEmail.val(),
      }
      dataArr.push(dataObj);
      var strDataArr = JSON.stringify(dataArr)
      localStorage.setItem('contactInfo', strDataArr);
      var test = localStorage.getItem('contactInfo');
      console.log('contactInfo', test);

      $landingPage.toggle();
      $previewPage.toggle();

      var firstName = $textFirstName.val();
      $displayField.text(`Thanks, ${firstName}! Here's a few questions to get us started.`);
      // console.log('contactInfo', test);
    }
    // $listDisplayField.text(test);
  });

  $btnBackPreview.on('click', function() {
    $landingPage.toggle();
    $previewPage.toggle();
  });


  // delete from local storage when delete button clicked
  $btnDelete.on('click', function(){
    localStorage.removeItem('contactInfo');
  });

  // $btnDeleteAll.on('click', function() {
  //   localStorage.clear();
  // });

});
