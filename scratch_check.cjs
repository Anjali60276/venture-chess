const fs = require('fs');

const data = fs.readFileSync('C:\\Users\\WRNXT\\.gemini\\antigravity-ide\\brain\\2102d85d-5bcf-4397-8ec8-f659e790fa3f\\.system_generated\\logs\\transcript_full.jsonl', 'utf-8');
const regex = /https:\/\/venturechessacademy\.com\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/[a-zA-Z0-9-_\.]+/g;

const matches = new Set(data.match(regex) || []);
console.log(Array.from(matches).join('\n'));
