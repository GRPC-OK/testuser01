export default function Home() {
  return (
    <div>
      <h1>Vulnerable Test Application</h1>
      <p>⚠️ This is an intentionally vulnerable application for security testing.</p>
      <div>
        <h2>Test Endpoints:</h2>
        <ul>
          <li><a href="/api/vulnerable-sql">/api/vulnerable-sql</a></li>
          <li><a href="/api/vulnerable-xss">/api/vulnerable-xss</a></li>
          <li><a href="/api/code-injection">/api/code-injection</a></li>
        </ul>
      </div>
    </div>
  )
}