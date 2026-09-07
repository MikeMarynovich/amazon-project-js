import {formatCurrency} from '../scripts/utils/money.js';

console.log("Test Suite: formatCurrency")

console.log('TC1: converts cents into dollars');
if (formatCurrency(2095) === '20.95'){
    console.log('passed')
} else {
    console.log('failed');
}

console.log('TC2: correctly displays zero');
if (formatCurrency(0) === '0.00'){
    console.log('passed')
} else {
    console.log('failed');
}

console.log('TC3: correctly rounds UP to the nearest cents');
if (formatCurrency(2000.5) === '20.01'){
    console.log('passed')
} else {
    console.log('failed');
}

console.log('TC4: correctly rounds DOWN to the nearest cents');
if (formatCurrency(2000.4) === '20.00'){
    console.log('passed')
} else {
    console.log('failed');
}