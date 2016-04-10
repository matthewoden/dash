'use strict';
const button = require('node-dash-button');
const maker = require('maker-ifttt');

const MAC_ADDRESS = require('../config.json').address
const IFTTT_MAKER_KEY = require('../config.json').maker
const EVENT_NAME = require('../config.json').event

const dash = button(MAC_ADDRESS);
const trigger = new maker(IFTTT_MAKER_KEY);

dash.on("detected", function (dash_id){
  trigger.triggerEvent(EVENT_NAME)
});
