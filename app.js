$(document).ready(function() {
  //attach event listner to button click(input)
//localStorage.length as your array length
// localStorage.key(index) to access by number
// that returns a list of the keys

  $('.store-btn').click(function(event) {
    let titleValue = $('.input-field-title').val();
    let contentValue = $('.input-field-body').val();
    localStorage.setItem('titleValue', titleValue);
    localStorage.setItem('contentValue', contentValue);

  });

  $('.get-btn').click(function(event) {
  let titleValue = localStorage.getItem('titleValue')
  let contentValue = localStorage.getItem('contentValue')
   $('.debug').html(`<p>${titleValue} ${contentValue}</p>`)
  });

  $('.delete-btn').click(function() {
    localStorage.removeItem('titleValue')
    localStorage.removeItem('contentValue')
    $('.debug').html(`<p>have been deleted</p>`)
    // TODO: confirm wanting to delete (window confirm method??)
    //throw up .confirm window
    //
  });

//CLEAR ALL local storage BUTTON
  // $('.').click(function() {
  //  localStorage.clear();
  // });


  //create function skelton stub for read/write/delete
  //research local storage
});
