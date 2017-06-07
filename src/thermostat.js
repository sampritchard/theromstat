'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAXIMUM_TEMPERATURE_SAVING_MODE_ON = 25;
}

Thermostat.prototype.up = function(){
  this.temperature += 1;
  if(powerSavingModeOn && this.temperature > 25){
    this.temperature = this.MAXIMUM_TEMPERATURE_SAVING_MODE_ON
  };
};

Thermostat.prototype.down = function(){
  if (this.temperature <= this.MINIMUM_TEMPERATURE){
    this.temperature = 10;
  }else{
  this.temperature -= 1;
};

Thermostat.prototype.powerSavingModeOn = function(){
  return this.powerSavingMode = true;
};

Thermostat.prototype.powerSavingModeOff = function(){
  return this.powerSavingMode = false;
};
};
