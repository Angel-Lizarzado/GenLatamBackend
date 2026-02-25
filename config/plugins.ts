import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
    'color-picker': {
        enabled: true,
    },
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
});

export default config;
