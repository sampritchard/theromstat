$(document).ready(function() {

  thermostat = new Thermostat();

  function seeTemperature() {
     $('#temperature').text(thermostat.temperature);
     $('#temperature').attr('class', thermostat.currentEnergyUsage());
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

})
