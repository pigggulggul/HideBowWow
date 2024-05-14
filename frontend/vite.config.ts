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
                // target: 'https://k10a709.p.ssafy.io/',
                target: 'https://hidebowwow.site/',
                changeOrigin: true,
            },
            '/api/game-service': {
                target: 'https://hidebowwow.site/',
                changeOrigin: true,
            },
        },
    },
    //env dir
    envDir: '',
});
