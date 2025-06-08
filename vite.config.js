import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'; // React를 사용한다면 주석 해제
// import vue from '@vitejs/plugin-vue';   // Vue를 사용한다면 주석 해제

export default defineConfig({
  // GitHub Pages 배포를 위한 base 경로 설정
  // 로컬 개발 서버에서도 적용되도록 조건부 설정
  base: process.env.NODE_ENV === 'production' ? '/danaproject/' : '/',
  // 만약 특정 프레임워크를 사용한다면 plugins 배열에 추가
  // plugins: [react()], // 예: React
  build: {
    outDir: 'dist',
  },
});