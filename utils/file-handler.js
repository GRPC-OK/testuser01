import fs from 'fs';
import path from 'path';

// 🚨 Path Traversal 취약점
export function readUserFile(filename) {
  // 경로 검증 없이 사용자 입력을 그대로 사용
  const filePath = path.join('./uploads', filename);
  
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    throw new Error('File not found');
  }
}

// 🚨 Directory Traversal 취약점
export function deleteFile(filepath) {
  // 상대 경로 공격에 취약
  const fullPath = `./files/${filepath}`;
  
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    return true;
  }
  return false;
}

// 🚨 파일 업로드 취약점
export function uploadFile(filename, content) {
  // 파일 확장자 검증 없음
  const uploadPath = `./uploads/${filename}`;
  
  fs.writeFileSync(uploadPath, content);
  return uploadPath;
}