import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'; // React를 사용한다면 주석 해제
// import vue from '@vitejs/plugin-vue';   // Vue를 사용한다면 주석 해제

export default defineConfig({
  // GitHub Pages 배포를 위해 base 경로를 상대 경로 './'로 설정
  // 로컬 개발 서버에서는 '/'로 설정
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  // plugins: [react()], // 프레임워크 사용 시 추가
  build: {
    outDir: 'dist',
  },
});