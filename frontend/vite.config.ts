import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    //proxy settings
    server: {
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp',
        },
        proxy: {
            '/api/member-service': {
                target: 'http://jongbum.site:8001/',
                changeOrigin: true,
            },
            '/api/game-service': {
                target: 'http://jongbum.site:8002/',
                changeOrigin: true,
            },
        },
    },
    //env dir
    envDir: '',
});
