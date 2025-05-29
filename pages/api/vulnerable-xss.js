// XSS 취약점 - 사용자 입력을 필터링 없이 출력
export default function handler(req, res) {
  const { message, userInput } = req.body;
  
  // 🚨 XSS 취약점 - 사용자 입력을 그대로 HTML에 삽입
  const htmlResponse = `
    <html>
      <body>
        <h1>Welcome!</h1>
        <p>Your message: ${message}</p>
        <div>User says: ${userInput}</div>
        <script>
          // 🚨 위험한 스크립트 실행
          document.write('${userInput}');
        </script>
      </body>
    </html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(htmlResponse);
}