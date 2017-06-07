'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('Increase the temperature with an up function', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('Decrease the temperature with a down function', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('Temperature can not go below 10', function(){
    for(var i = 0; i<11; i++){
    thermostat.down();
  };
    expect(thermostat.temperature).toEqual(10);
  });

  it('Power saving mode can be switched on and off', function() {
    expect(thermostat.powerSavingModeOn()).toBe(true);
    expect(thermostat.powerSavingModeOff()).toBe(false);
  });

});
