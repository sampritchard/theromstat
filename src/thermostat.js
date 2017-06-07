'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAXIMUM_TEMPERATURE_SAVING_MODE_ON = 25;
  this.MAXIMUM_TEMPERATURE_SAVING_MODE_OFF = 32;
  this.MAX_TEMP = this.MAXIMUM_TEMPERATURE_SAVING_MODE_ON;
};

Thermostat.prototype.up = function(){
  this.isMaximumTemperature();
  if(this.temperature >= this.MAX_TEMP){
    return 'TEMP TOO HIGH';
  }else{
    return this.temperature += 1;
  };
};

Thermostat.prototype.down = function(){
  if (this.temperature <= this.MINIMUM_TEMPERATURE){
    this.temperature = 10;
    return 'TEMP TOO LOW';
  }else{
  return this.temperature -= 1;
  }
};

Thermostat.prototype.switchPowerSavingMode = function(){
  return this.powerSavingMode = !this.powerSavingMode;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if(this.powerSavingMode === false) {
    return this.MAX_TEMP = this.MAXIMUM_TEMPERATURE_SAVING_MODE_OFF;
  } else {
    return this.MAX_TEMP = this.MAXIMUM_TEMPERATURE_SAVING_MODE_ON;
  }
};

Thermostat.prototype.reset = function() {
  return this.temperature = 20;
}

Thermostat.prototype.currentEnergyUsage = function(){
  if (this.temperature < 18){
    return 'Low usage'
  }
}
