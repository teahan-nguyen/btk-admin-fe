import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
// @ts-ignore
import {dependencies} from './package.json';
import {ModuleFederationPlugin} from "@module-federation/enhanced/rspack";

export default defineConfig({
    server: {
        port: 3000,
    },
    tools: {
        rspack: (config, {appendPlugins}) => {
            appendPlugins([
                new ModuleFederationPlugin({
                    name: 'udestiny',
                    remotes: {
                        common_admin: 'common_admin@http://localhost:3001/mf-manifest.json',
                        common_services: 'common_services@http://localhost:3002/mf-manifest.json',
                    },
                    shared: {
                        ...dependencies,
                        react: {
                            singleton: true,
                            requiredVersion: dependencies['react'],
                        },
                        'react-dom': {
                            singleton: true,
                            requiredVersion: dependencies['react-dom'],
                        },
                    },
                }),
            ]);
        },
    },
    plugins: [pluginReact()],
});