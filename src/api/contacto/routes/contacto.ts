export default {
    routes: [
        {
            method: 'POST',
            path: '/contacto/enviar',
            handler: 'contacto.enviar',
            config: {
                auth: false,
            },
        },
    ],
};
