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
    thermostat.switchPowerSavingMode();
    expect(thermostat.powerSavingMode).toBe(false);
  });

  it('Maximum temperature is 25 when the power saving mode is on', function(){
    for(var i = 0; i<6; i++){
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it('Maximum temperature is 32 when power saving mode is off', function(){
    thermostat.switchPowerSavingMode();
    for(var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  });

  it('Power saving mode is on by deafult', function(){
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('resets the temperature to 20', function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('it returns low usage if the temperature is below 18', function(){
    for(var i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.currentEnergyUsage()).toContain('Low-usage');
  });

  it('it returns medium usage if the temperature is between 18 and 25', function(){
    expect(thermostat.currentEnergyUsage()).toContain('Medium-usage');
  });

  it('it returns highusage if the temperature is above 24', function(){
    for(var i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.currentEnergyUsage()).toContain('High-usage');
  });

});
