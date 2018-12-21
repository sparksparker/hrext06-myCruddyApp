$(document).ready(function(){

  // setting variables
  var $btnSubmitLanding = $('.btn-submit-landing');
  var $btnSubmitPreview = $('.btn-submit-preview');
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
  var $resultsDisplayField = $('.results-display-field');
  var $resultsPage = $('.results-page');
  var $surveyResults = $('.survey-results');
  var $btnRestartSurvey = $('.btn-restart-survey');
  var $btnNotYou = $('.btn-not-you');

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
  });

  // delete from local storage when delete button clicked
  $btnDelete.on('click', function(){
    localStorage.removeItem('contactInfo');
  });

// go back to preview page
  $btnBackPreview.on('click', function() {
    $landingPage.toggle();
    $previewPage.toggle();
  });

  $btnSubmitPreview.on('click', function() {
    $previewPage.toggle();
    $resultsPage.toggle();

    $resultsDisplayField.text(`Great news, ${$textFirstName.val()}! We found some matches for you.`)

    var department = $('#department').val();
    var features = $('#features').val();
    var employees = $('#employees').val();

    $surveyResults.text(`You selected:
      Department: ${department}
      Features: ${features}
      Employees: ${employees}`);
  });

  $btnRestartSurvey.on('click', function() {
    $resultsPage.toggle();
    $previewPage.toggle();
  })

  $btnNotYou.on('click', function() {
    $previewPage.toggle();
    $landingPage.toggle();
    location.reload();
  })

  // $btnDeleteAll.on('click', function() {
  //   localStorage.clear();
  // });


});
