// ColorManager.js
const COLORS = [
    '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9',
    '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2',
    '#B2DFDB', '#C8E6C9', '#DCEDC8', '#F0F4C3',
    '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8',
    '#F5F5F5', '#CFD8DC'
  ];
  
  let colorMap = {};
  let usedColors = new Set();
  
  export function getUniqueColorById(id) {
    if (colorMap[id]) return colorMap[id];
  
    const availableColors = COLORS.filter(color => !usedColors.has(color));
    const color = availableColors.length
      ? availableColors[Math.floor(Math.random() * availableColors.length)]
      : COLORS[id % COLORS.length]; // fallback if all colors used
  
    colorMap[id] = color;
    usedColors.add(color);
  
    return color;
  }
  