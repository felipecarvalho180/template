import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = 'sua_chave_de_criptografia'; // Substitua com a sua chave de criptografia

export function encryptToken(token: string) {
  const encryptedToken = CryptoJS.AES.encrypt(token, ENCRYPTION_KEY).toString();
  return encryptedToken;
}

export function decryptToken(encryptedToken: string) {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedToken, ENCRYPTION_KEY);
  const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedToken;
}