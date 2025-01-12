const crypto = require("crypto");
const env = require('../config/env.js')
const algorithm = "aes-256-cbc";
const password = "yourSecretPassword"; // Replace this with your own strong password

// Generate the encryption key from the password
const hexKey = env.CRYPTO_KEY;
const key = Buffer.from(hexKey, 'hex');

// console.log("Key:", key.toString('hex'));

// Function to generate a secure key from the password
function generateKey(password) {
  const salt = crypto.randomBytes(16);
  return crypto.scryptSync(password, salt, 32);
}

// Function to encrypt data
function encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
}

// Function to decrypt data
function decrypt(encryptedData) {
  const [ivHex, encryptedHex] = encryptedData.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const encryptedText = Buffer.from(encryptedHex, "hex");
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

module.exports = { encrypt, decrypt };
