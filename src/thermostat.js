'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAXIMUM_TEMPERATURE_SAVING_MODE_ON = 25;
  this.MAXIMUM_TEMPERATURE_SAVING_MODE_OFF = 32;
}

Thermostat.prototype.up = function(){
  // this.temperature += 1;
  // console.log(this.temperature);
  if(this.temperature >= 25){
    console.log(1);
    console.log(this.powerSavingMode);
    console.log(2);
    return this.isMaximumTemperature;
    console.log(this.temperature);
  }else{
    return this.temperature += 1;
  };
};

Thermostat.prototype.down = function(){
  if (this.temperature <= this.MINIMUM_TEMPERATURE){
    this.temperature = 10;
  }else{
  this.temperature -= 1;
};

// Thermostat.prototype.powerSavingModeOn = function(){
//   return this.powerSavingMode = true;
// };
//
// Thermostat.prototype.powerSavingModeOff = function(){
//   return this.powerSavingMode = false;
// };


Thermostat.prototype.switchPowerSavingMode = function(){
  // return this.powerSavingMode = !this.powerSavingMode;
  // if (this,powerSavingMode === true){
  //   return this.powerSavingMode = false;
  // } else{
  //   return this.powerSavingMode = true;
  // };
  return true
};

Thermostat.prototype.isMaximumTemperature = function() {
  if(this.powerSavingMode === false) {
    return this.temperature = this.MAXIMUM_TEMPERATURE_SAVING_MODE_OFF;
  }
  return this.temperature = this.MAXIMUM_TEMPERATURE_SAVING_MODE_ON;
};

};
