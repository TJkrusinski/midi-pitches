'use strict';

module.exports = function midiPitch(note) {
  return Math.pow(2, (note-69)/12) * 440;
};
