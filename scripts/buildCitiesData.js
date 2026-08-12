const fs = require('fs');
const path = require('path');

// Helper to format population
function formatPop(num) {
  if (num >= 1000000000) return (num / 1000000000).toFixed(2) + ' Billion';
  if (num >= 1000000) return (num / 1000000).toFixed(2) + ' Million';
  return num.toLocaleString();
}

console.log('Generating real world cities dataset...');
