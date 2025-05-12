import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {federation} from '@module-federation/vite';

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'containerApp',
            remotes: {
                taskListApp:
                    {
                        name: 'taskListApp',
                        type: 'module',
                        entry: 'http://localhost:3001/remoteEntry.js', // Removed /assets/
                    },
                taskFormApp: {
                    name: 'taskFormApp',
                    type: 'module',
                    entry: 'http://localhost:3002/remoteEntry.js', // Removed /assets/
                }
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
    server: {
        port: 3000, // Container app on port 3000
    },
});