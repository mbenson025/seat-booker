const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

//typeof shows movieSelect is a string, + converts to number
let ticketPrice = +movieSelect.value;

//update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');


  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  // console.log(selectedSeatsCount); -- SHOWS NODE LIST and elements inside of it
}

//note----keeping functions above eventListeners is a good way to stay organized---- 


//movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();

});

//seat click event
container.addEventListener('click', (e) => {
  // console.log(e.target);-------shows you what you click on for anything
  if(e.target.classList.contains('seat') && 
  !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});





