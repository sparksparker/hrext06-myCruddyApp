$(document).ready(function(){
  console.log('jQuery loaded');

  var dataArr = [];

  var $btnSubmit = $('.btn-submit');
  var $btnDelete = $('.btn-delete');
  var $textFirstName = $('.text-firstname');
  var $textLastName = $('.text-lastname');
  var $textEmail = $('.text-email');

  // store multiple values
  $btnSubmit.on('click', function() {
    if('localStorage' in window && window['localStorage'] !== null) {
        var user = {
          'firstname': $textFirstName.val(),
          'lastname': $textLastName.val(),
          'email': $textEmail.val(),
        }
        var record = JSON.stringify(user);
        localStorage.setItem(user.firstname, record);
        localStorage.setItem(user.lastname, record);
        localStorage.setItem(user.email, record);
    }
  });

  // write to local storage from input when button save clicked
  // $btnSubmit.on('click', function(){
  //   localStorage.setItem('inputFieldValue', $('.text-entry').val());
  //   var myItemInStorage = localStorage.getItem('inputFieldValue');
  //   console.log('myItemInStorage', myItemInStorage);
  //
  //   // display the value here
  //   $('.list-display-field').text(myItemInStorage); // ??
  //
  // });

  // delete from local storage when delete button clicked
  $btnDelete.on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });

});
