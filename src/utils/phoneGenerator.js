import { countryFormats } from './phoneFormats';

function generateRandomDigit() {
  return Math.floor(Math.random() * 10).toString();
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generatePrefix(country) {
  const format = countryFormats[country];
  
  if (format.validPrefixes) {
    return getRandomElement(format.validPrefixes);
  } else if (format.areaCodeRules) {
    let areaCode;
    do {
      areaCode = Math.floor(Math.random() * (format.areaCodeRules.max - format.areaCodeRules.min + 1)) + format.areaCodeRules.min;
    } while (format.areaCodeRules.exclude?.includes(areaCode));
    return areaCode.toString();
  }
  
  return null;
}

export function generatePhoneNumber(country) {
  const format = countryFormats[country];
  let number = format.format;
  
  // Generate valid prefix first
  const prefix = generatePrefix(country);
  if (prefix) {
    const prefixDigits = prefix.length;
    number = prefix + number.slice(prefixDigits);
  }
  
  // Fill remaining X's with random digits
  while (number.includes('X')) {
    number = number.replace('X', generateRandomDigit());
  }
  
  return `${format.prefix} ${number}`;
}