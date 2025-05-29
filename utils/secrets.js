// 🚨 하드코딩된 비밀키와 민감정보
export const API_KEYS = {
  stripe: 'sk_live_51234567890abcdef',
  aws: 'AKIAIOSFODNN7EXAMPLE',
  jwt_secret: 'super-secret-jwt-key-123',
  database_password: 'admin123!@#'
};

// 🚨 하드코딩된 사용자 정보
export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'password123',
  email: 'admin@company.com'
};

// 🚨 하드코딩된 외부 서비스 정보
export const EXTERNAL_SERVICES = {
  payment_gateway: {
    url: 'https://api.payment.com',
    secret_key: 'sk_test_123456789'
  },
  email_service: {
    api_key: 'SG.1234567890.abcdefghijklmnop',
    from_email: 'noreply@company.com'
  }
};