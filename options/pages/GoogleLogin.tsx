import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Avatar, Divider, Spin, message } from 'antd';
import { GoogleOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  token: string;
}

export default function GoogleLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [messageApi, contextHolder] = message.useMessage();

  // 檢查是否已登入
  useEffect(() => {
    // 這裡將來會從 localStorage 或 chrome.storage 中獲取用戶資訊
    const checkLoginStatus = async () => {
      try {
        // 模擬從 storage 獲取資料
        const storedUser = localStorage.getItem('google_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        // 使用 message API 而不是 console.error
        messageApi.error('檢查登入狀態時發生錯誤');
      }
    };

    checkLoginStatus();
  }, []);

  // 處理 Google 登入
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      // 這裡將來會實現真正的 Google OAuth 流程
      // 目前只是一個模擬示範
      messageApi.info('將實現 Google OAuth 登入流程');
      
      // 模擬登入延遲
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      // 使用 message API 處理錯誤
      messageApi.error('登入失敗，請稍後再試');
      setIsLoading(false);
    }
  };

  // 處理登出
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('google_user');
    messageApi.success('已成功登出');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {contextHolder}
      <Title level={2}>Google 帳號管理</Title>
      <Paragraph>
        連結您的 Google 帳號以使用 API Key 功能。您的 API Key 將安全地存儲在我們的伺服器上。
      </Paragraph>
      
      <Divider />
      
      {user ? (
        <Card style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <Avatar 
              size={64} 
              src={user.picture} 
              icon={<UserOutlined />} 
            />
            <div style={{ marginLeft: '20px' }}>
              <Title level={4} style={{ margin: 0 }}>{user.name}</Title>
              <Text type="secondary">{user.email}</Text>
            </div>
          </div>
          
          <Paragraph>
            <Text strong>狀態:</Text> 已連結
          </Paragraph>
          
          <Button 
            icon={<LogoutOutlined />} 
            onClick={handleLogout} 
            danger
          >
            登出 Google 帳號
          </Button>
        </Card>
      ) : (
        <Card style={{ marginTop: '20px', textAlign: 'center', padding: '30px' }}>
          <Title level={4}>尚未連結 Google 帳號</Title>
          <Paragraph>
            連結您的 Google 帳號以管理您的 API Key 並使用進階功能。
          </Paragraph>
          
          <Button 
            type="primary" 
            size="large"
            icon={<GoogleOutlined />} 
            onClick={handleGoogleLogin}
            loading={isLoading}
            style={{ marginTop: '15px', color: '#000000' }}
          >
            使用 Google 帳號登入
          </Button>
        </Card>
      )}
      
      <Divider />
      
      <Title level={3} style={{ marginTop: '30px' }}>API Key 管理</Title>
      <Paragraph>
        登入後，您可以在此管理您的 API Key。
      </Paragraph>
      
      {!user ? (
        <Card style={{ backgroundColor: '#f5f5f5', marginTop: '15px' }}>
          <Text type="secondary">請先登入 Google 帳號以管理您的 API Key</Text>
        </Card>
      ) : (
        <Card style={{ marginTop: '15px' }}>
          <Spin spinning={isLoading}>
            <Text>API Key 管理面板將在此顯示</Text>
            {/* 這裡將來會放置 API Key 管理的組件 */}
          </Spin>
        </Card>
      )}
    </div>
  );
}
