import { defineConfig } from 'vite';
import { resolve } from 'path'; // path 모듈 임포트

// React나 Vue를 사용한다면 해당 플러그인 임포트
// import react from '@vitejs/plugin-react';
// import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  // plugins: [react()], // 프레임워크 사용 시 주석 해제
  build: {
    outDir: 'dist',
    // 다중 페이지 애플리케이션(MPA) 설정
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'), // about.html 추가
        // 필요한 경우 다른 HTML 페이지도 여기에 추가 (예: characterIp: resolve(__dirname, 'character-ip.html'))
      },
    },
  },
});