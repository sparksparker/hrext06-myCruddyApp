$(document).ready(function(){

  // setting variables
  var $btnSubmit = $('.btn-submit');
  var $btnDelete = $('.btn-delete');
  var $btnDeleteAll = $('.btn-delete-all');
  var $textFirstName = $('.text-firstname');
  var $textLastName = $('.text-lastname');
  var $textEmail = $('.text-email');
  var $listDisplayField = $('.list-display-field');
  var $landingPage = $('.landing-page');
  var $previewPage = $('.preview-page');

  // hiding preview page on load
  $previewPage.hide();

  // setting global variable for JSON.stringify
  var dataArr = [];

  // store multiple values
  $btnSubmit.on('click', function() {
    if (typeof (Storage) !== 'undefined') {
      var dataObj = {
        firstname: $textFirstName.val(),
        lastname: $textLastName.val(),
        email: $textEmail.val(),
      }
      dataArr.push(dataObj);
      localStorage.setItem('contactInfo', JSON.stringify(dataArr));
      var test = localStorage.getItem('contactInfo');
      console.log('contactInfo', test);
    }
    $landingPage.empty();
    $previewPage.show();
    // $listDisplayField.text(test);
  });


  // delete from local storage when delete button clicked
  // $btnDelete.on('click', function(){
  //   localStorage.removeItem('contactInfo');
  // });

  // $btnDeleteAll.on('click', function() {
  //   localStorage.clear();
  // });

});
