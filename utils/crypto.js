import crypto from 'crypto';

// 🚨 약한 암호화 알고리즘 사용
export function weakHash(data) {
  return crypto.createHash('md5').update(data).digest('hex');
}

// 🚨 약한 난수 생성
export function generateWeakToken() {
  return Math.random().toString(36).substring(2);
}

// 🚨 약한 암호화 키
export function encryptData(data) {
  const algorithm = 'des'; // 약한 암호화 알고리즘
  const key = '12345678'; // 고정된 약한 키
  
  const cipher = crypto.createCipher(algorithm, key);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  return encrypted;
}