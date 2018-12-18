$(document).ready(function(){

  var dataArr = [];

  var $btnSubmit = $('.btn-submit');
  var $btnDelete = $('.btn-delete');
  var $textFirstName = $('.text-firstname');
  var $textLastName = $('.text-lastname');
  var $textEmail = $('.text-email');

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
