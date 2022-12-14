import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './image_file_input/image_file_input';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => {
  return <ImageFileInput {...props} imageUplader={imageUploader} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 보통 컴포넌트 프롭일 경우 대문자로 작성 */}
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>
);
