// https://calculator.swiftutors.com/sound-wavelength-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const soundWavelengthRadio = document.getElementById('soundWavelengthRadio');
const waveSpeedRadio = document.getElementById('waveSpeedRadio');
const waveFrequencyRadio = document.getElementById('waveFrequencyRadio');

let soundWavelength;
let waveSpeed = v1;
let waveFrequency = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

soundWavelengthRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Wave Speed (m/s)';
  variable2.textContent = '(F) Wave Frequency (sec)';
  waveSpeed = v1;
  waveFrequency = v2;
  result.textContent = '';
});

waveSpeedRadio.addEventListener('click', function() {
  variable1.textContent = '(W) Sound Wavelength (m)';
  variable2.textContent = '(F) Wave Frequency (sec)';
  soundWavelength = v1;
  waveFrequency = v2;
  result.textContent = '';
});

waveFrequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(W) Sound Wavelength (m)';
  variable2.textContent = '(V) Wave Speed (m/s)';
  soundWavelength = v1;
  waveSpeed = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(soundWavelengthRadio.checked)
    result.textContent = `Sound Wavelength = ${computeSoundWavelength().toFixed(2)} m`;

  else if(waveSpeedRadio.checked)
    result.textContent = `Wave Speed = ${computeWaveSpeed().toFixed(2)} m/s`;

  else if(waveFrequencyRadio.checked)
    result.textContent = `Wave Frequency = ${computeWaveFrequency().toFixed(2)} sec`;
})

// calculation

function computeSoundWavelength() {
  return Number(waveSpeed.value) / Number(waveFrequency.value);
}

function computeWaveSpeed() {
  return Number(soundWavelength.value) * Number(waveFrequency.value);
}

function computeWaveFrequency() {
  return Number(waveSpeed.value) / Number(soundWavelength.value);
}