import React from 'react';

// 🚨 XSS 취약점이 있는 React 컴포넌트
function UnsafeComponent({ userContent, htmlContent }) {
  
  // 🚨 dangerouslySetInnerHTML 무분별한 사용
  return (
    <div>
      <h2>User Generated Content</h2>
      
      {/* 🚨 XSS 취약점 - 사용자 입력을 직접 렌더링 */}
      <div dangerouslySetInnerHTML={{ __html: userContent }} />
      
      {/* 🚨 추가 XSS 취약점 */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      
      {/* 🚨 innerHTML 직접 조작 */}
      <div ref={(el) => {
        if (el && userContent) {
          el.innerHTML = userContent;
        }
      }} />
    </div>
  );
}

export default UnsafeComponent;