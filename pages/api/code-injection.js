import { exec } from 'child_process';

// Code Injection 취약점 - eval() 및 exec() 사용
export default function handler(req, res) {
  const { code, command } = req.body;
  
  // 🚨 Code Injection 취약점 - eval() 사용
  try {
    const result = eval(code);
    res.status(200).json({ result });
  } catch (error) {
    // 🚨 Command Injection 취약점 - 사용자 입력을 시스템 명령어로 실행
    exec(`echo "Error: ${command}"`, (error, stdout, stderr) => {
      res.status(500).json({ 
        error: error?.message, 
        stdout, 
        stderr 
      });
    });
  }
}