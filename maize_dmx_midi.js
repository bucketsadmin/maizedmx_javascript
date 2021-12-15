var midiInput = "MaizeIn";

//I'll add more info here when I can remember what each function does.
function midiNoteOn(ch, note, velocity) {
	 var bank = ui.getCurrentPage();
	if (note == 1) {
		dmx.pressExecButton(1, ch + bank - 1, 1);
	}
	else if (note == 2){
		dmx.pressExecButton(1, ch + bank - 1, 2);
	}
	else if (note == 3){
		dmx.pressExecButton(1, ch + bank - 1, 3);
	}
}

//This is where we turn the lights off via a blackout control
function midiNoteOff(ch, note) {
	if (note == 0) {
		dmx.toggleBlackOut();
	}
}

