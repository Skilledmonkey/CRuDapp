$(document).ready(function() {
  //attach event listner to button click(input)
  $('.store-btn').click(function() {
    localStorage.setItem("hrext", "three is best");
  });

  $('.get-btn').click(function() {
   console.log(localStorage.getItem('hrext'))
  });

  $('.delete-btn').click(function() {
   localStorage.removeItem('hrext');
  });

//CLEAR ALL BUTTON
  $('.').click(function() {
   localStorage.clear();
  });


  //create function skelton stub for read/write/delete
  //research local storage
});
