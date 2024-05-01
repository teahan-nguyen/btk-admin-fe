import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
// @ts-ignore
import {dependencies} from './package.json';
import {ModuleFederationPlugin} from "@module-federation/enhanced/rspack";

export default defineConfig({
    server: {
        port: 3002,
    },
    dev: {
        // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
        assetPrefix: 'http://localhost:3002',
    },
    tools: {
        rspack: (config, {appendPlugins}) => {
            appendPlugins([
                new ModuleFederationPlugin({
                    name: 'common_services',
                    exposes: {
                        './blog': './src/blog/Blog',
                        './cms': './src/cms/Cms',
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