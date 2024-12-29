import { generatePhoneNumber } from './utils/phoneGenerator';

function generateNumbers() {
  const country = document.getElementById('countrySelect').value;
  const resultsDiv = document.getElementById('results');
  
  resultsDiv.innerHTML = '';
  
  for (let i = 0; i < 5; i++) {
    const number = generatePhoneNumber(country);
    const numberDiv = document.createElement('div');
    numberDiv.className = 'p-3 bg-gray-50 rounded-lg font-mono';
    numberDiv.textContent = number;
    resultsDiv.appendChild(numberDiv);
  }
}

document.getElementById('generateBtn').addEventListener('click', generateNumbers);

// Generate initial numbers
generateNumbers();