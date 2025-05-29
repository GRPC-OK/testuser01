// SQL Injection 취약점 - 사용자 입력을 직접 쿼리에 삽입
export default async function handler(req, res) {
  const { username, password } = req.body || {};
  
  // 🚨 SQL Injection 취약점 - 이런 코드는 위험함!
  const vulnerableQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  
  // 모의 응답 (실제 DB 연결 없음)
  console.log('Vulnerable query:', vulnerableQuery);
  
  // 가짜 결과 반환
  if (username === 'admin' && password === 'password') {
    res.status(200).json({ 
      success: true, 
      user: { id: 1, username: 'admin' } 
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid credentials' 
    });
  }
}