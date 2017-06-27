
$(document).ready(function() {

  thermostat = new Thermostat();

  function seeTemperature() {
     $('#temperature').text(thermostat.temperature);
     $('#temperature').attr('class', thermostat.currentEnergyUsage());
     $.post("http://localhost:4567/temperature", {temperature: thermostat.temperature});
  }

  seeTemperature();

  $('#temperature-up').click(function() {
  thermostat.up();
  seeTemperature();
  })

  $('#temperature-down').click(function() {
  thermostat.down();
  seeTemperature();
  })

  $('#temperature-reset').click(function() {
  thermostat.reset();
  seeTemperature();
  })

  $('#switch-power-mode').click(function() {
   thermostat.switchPowerSavingMode();
   if (thermostat.powerSavingMode) {
     $('#power-saving-status').text('ON')
   } else {
     $('#power-saving-status').text('OFF')
   }
  seeTemperature();
 })

$.get("http://localhost:4567/temperature", function(data) {
  var data = JSON.parse(data)
  $("#temperature").text(data.temperature);
  console.log(1)
})

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
    $('#current-condition').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
  })
}

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

})
