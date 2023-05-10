export const generateUUID = () => {
  let uuid = '';
  const hexChars = '0123456789abcdef';
  
  for (let i = 0; i < 32; i++) {
    const randomHex = Math.floor(Math.random() * 16);
    const hexChar = hexChars[randomHex];
    uuid += hexChar;
    if (i === 7 || i === 11 || i === 15 || i === 19) {
      uuid += '-';
    }
  }
  
  return uuid;
}