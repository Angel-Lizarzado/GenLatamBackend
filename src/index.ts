import os from 'os';
import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Obtener las interfaces de red del sistema
    const interfaces = os.networkInterfaces();
    let localIp = 'localhost';

    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name] || []) {
        if (iface.family === 'IPv4' && !iface.internal) {
          localIp = iface.address;
          break;
        }
      }
    }

    // El setTimeout posiciona el mensaje DEBAJO del gran cuadro verde de Strapi
    setTimeout(() => {
      const port = strapi.config.get('server.port', 1337);
      strapi.log.info('✨ ------------------------------------------------------------ ✨');
      strapi.log.info(`🚀 GenLatam Strapi Backend está vivo en tu Red Local!`);
      strapi.log.info(`📱 Prueba desde tu teléfono abriendo: http://${localIp}:${port}`);
      strapi.log.info('✨ ------------------------------------------------------------ ✨');
    }, 1500);
  },
};
