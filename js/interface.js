$(document).ready(function() {

  thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').click(function() {
  thermostat.up();
  $('#temperature').text(thermostat.temperature);
  })

  $('#temperature-down').click(function() {
  thermostat.down();
  $('#temperature').text(thermostat.temperature);
  })

  $('#temperature-reset').click(function() {
  thermostat.reset();
  $('#temperature').text(thermostat.temperature);
  })

  $('#switch-power-mode').click(function() {
   thermostat.switchPowerSavingMode();
   if (thermostat.powerSavingMode) {
     $('#power-saving-status').text('ON')
   } else {
     $('#power-saving-status').text('OFF')
   }
   $('#temperature').text(thermostat.temperature);
 })

})
