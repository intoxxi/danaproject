import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages 배포를 위한 base 경로 설정
  base: '/danaproject/', // 저장소 이름과 동일하게 설정
  build: {
    outDir: 'dist', // 빌드 결과물이 dist 폴더에 생성되도록 명시 (기본값)
  },
});