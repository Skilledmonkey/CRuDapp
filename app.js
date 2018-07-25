$(document).ready(function(){


  let JobHoursObject = function(ticket, jcode, pays){
      this.ticket = ticket;
      this.jobCode = jcode;
      this.pays = pays;
  }

  //GETS A SINGLE VALUE FROM EVERY TICKET AND EACH JOB IN THE TICKET
  let getAllTicketValues = function(whatValue) { // whatValue needs to be a string from each object
    let valuesArr = [];
    //JUST ONE TICKET
// console.log(ticket)
//     if(ticket){
//         let jobObjs = JSON.parse(localStorage.getItem(localStorage.key(ticket)))
//         jobObjs.forEach(function(element) {
//           return valuesArr.push(element[whatValue]);
//         })
//       } else {
        //FOR ALL TICKETS
        if(whatValue === 'pays'){
          for(let i = 0; i < localStorage.length; i++){
            let jobObjs = JSON.parse(localStorage.getItem(localStorage.key(i)))// gives the array of objects
            jobObjs.forEach(function(element) {
              return valuesArr.push(Number(element[whatValue]));
            })
          }
        } else {
          for(let i = 0; i < localStorage.length; i++){
            let jobObjs = JSON.parse(localStorage.getItem(localStorage.key(i)))// gives the array of objects
            jobObjs.forEach(function(element) {
              return valuesArr.push(element[whatValue]);
            })
          }
        }
      //}
    return valuesArr;
  }

  // let findIndex = function(ticketNum) {
  //
  // }

// TODO REFACTOR USING REDUCE
  let totaler = function(array) {
    let total;
    console.log(typeof(array[0]))
    if(typeof(array[0]) === 'number'){
      total = 0;
      for(let i = 0; i < array.length; i++){
        total += array[i];
      }
    } else {
      total = {};
      for(let i = 0; i < array.length; i++){
        if(total.hasOwnProperty(array[i])){
          total[array[i]]++
        } else {
          total[array[i]] = 1;
        }
      }
    }
    return total;
  }


  // attach event listener to buttons(input?)
  // create function stub for read/write/delete
    // research local storage

  // $().on('click', function(){
  //
  // });

  $('.store-btn').on('click', function(event){
    let carTicket = $('.input-ticket-car').val();
    let jobCode = $('.input-job-code').val().toUpperCase();
    let time = $('.input-hours').val()

    if(localStorage.hasOwnProperty(carTicket)){
      let updateJobsObj = JSON.parse(localStorage.getItem(carTicket));

      updateJobsObj.push(new JobHoursObject(carTicket, jobCode, time));
      localStorage.setItem(carTicket, JSON.stringify(updateJobsObj))
      } else {
        localStorage.setItem(String(carTicket), JSON.stringify([new JobHoursObject(carTicket, jobCode, time)]));
        //localStorage.setItem('contentValue', jobCode);
        $('.debug').html(`<p>Item Added</p>`)
      }
  });

  $('.get-btn').on('click', function(event){
    //console.log(localStorage.getItem('hrext'));
    let titleValue = localStorage.getItem('titleValue');
    let contentValue = localStorage.getItem('contentValue');

    $('.debug').html(`<p>${titleValue} ${contentValue}</p>`);

  });

  $('.delete-btn').on('click', function(event){
    // TODO add in a confirm
    // throw up .confirm window
    // capture result
    // test boolean to delete or not
    localStorage.removeItem('titleValue'); // needs to be an input value
    localStorage.removeItem('contentValue');
    $('.debug').html(`<p>Items deleted</p>`);


  });




});
