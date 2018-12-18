$(document).ready(function(){
  console.log('jQuery loaded');

  var $btnSubmit = $('.btn-submit');
  var $btnDelete = $('.btn-delete');

  // write to local storage from input when button save clicked
  $btnSubmit.on('click', function(){
    localStorage.setItem('inputFieldValue', $('.text-entry').val());
    var myItemInStorage = localStorage.getItem('inputFieldValue');
    console.log('myItemInStorage', myItemInStorage);

    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??

  });

  // delete from local storage when delete button clicked
  $btnDelete.on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });

});
