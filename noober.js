window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

// loop through json

for (i=0; i < json.length; i++) {

// define variable for each noober ride

let noober = json[i]

// Add different visual look – purple border for Noober Purple, larger text for Noober XL

let borderColor
let fontSize
let nooberType

if (noober.purpleRequested == true) 
{
      nooberType = `Noober Purple`
      fontSize = `text-2xl`
      borderColor = `purple`
} 
else if (noober.numberOfPassengers > 3) 
{
      nooberType = `Noober XL`
      fontSize = `text-4xl`
      borderColor = `black`
} 
else 
{
      nooberType = `Noober X`
      fontSize = `text-2xl`
      borderColor = `black`
}

// define variable for html part to adjust

let nooberQuery = document.querySelector(`.rides`)

// Add dynamic data to html

nooberQuery.insertAdjacentHTML(`beforeend`,
`<h1 class="inline-block mt-8 px-4 py-2 rounded-xl ${fontSize} bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>${nooberType}</span>
</h1>
<div class="border-4 border-${borderColor}-900 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="${fontSize} py-1">${noober.passengerDetails.first} ${noober.passengerDetails.last}</h2>
      <p class="font-bold text-gray-600">${noober.passengerDetails.phoneNumber}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
      ${noober.numberOfPassengers} passengers
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${noober.pickupLocation.address}</p>
      <p>${noober.pickupLocation.city} , ${noober.pickupLocation.state} ${noober.pickupLocation.zip}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${noober.dropoffLocation.address}</p>
      <p>${noober.dropoffLocation.city} , ${noober.dropoffLocation.state} ${noober.dropoffLocation.zip}</p>
    </div>
  </div>
</div>`)
}

})