const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateOutageUpdate(data) {
  let errors = {};

  data.estimatedRestTime = !isEmpty(data.estimatedRestTime) ? data.estimatedRestTime : '';
  data.crewArrivalTime = !isEmpty(data.crewArrivalTime) ? data.crewArrivalTime : '';
  data.delayReason = !isEmpty(data.delayReason) ? data.delayReason : '';
  data.completeRestTime = !isEmpty(data.completeRestTime) ? data.completeRestTime : '';

  if (Validator.isEmpty(data.estimatedRestTime)) {
    errors.estimatedRestTime = 'Estimated Restoration Time is required';
  }

  if (Validator.isEmpty(data.crewArrivalTime)) {
    errors.crewArrivalTime = 'Crew Arrival Time is required';
  }

  if (Validator.isEmpty(data.delayReason)) {
    errors.delayReason = 'Delay Reason field is required';
  }

  if (Validator.isEmpty(data.completeRestTime)) {
    errors.completeRestTime = 'The completed restoration time is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};