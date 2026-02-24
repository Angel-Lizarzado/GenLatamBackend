/**
 * A custom controller.
 */

export default {
    async enviar(ctx: any) {
        try {
            const { nombre, empresa, email, mensaje } = ctx.request.body;

            if (!nombre || !email || !mensaje) {
                return ctx.badRequest('Nombre, email y mensaje son obligatorios.');
            }

            // Obtain destination email from global settings fallbacking to a generic one
            const configuracion = await strapi.entityService.findMany('api::configuracion-global.configuracion-global');
            const destino = configuracion?.emailContactoB2B || 'contacto@genlatam.com';

            // Send Email via Strapi Email Plugin
            await strapi.plugin('email').service('email').send({
                to: destino,
                from: 'sistema@genlatam.com',
                replyTo: email,
                subject: `🔴 Nueva Solicitud de Auditoría: ${empresa || nombre}`,
                html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Nueva Consulta Confidencial - GenLatam</h2>
            <p><strong>◉ Representante / Nombre:</strong> ${nombre}</p>
            <p><strong>◉ Empresa / Entidad:</strong> ${empresa || 'N/A'}</p>
            <p><strong>◉ Correo Corporativo:</strong> ${email}</p>
            <h3 style="color: #334155; margin-top: 25px;">Resumen del Caso:</h3>
            <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #3b82f6; color: #475569; border-radius: 4px;">
              <em>"${mensaje}"</em>
            </div>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin-top: 30px;" />
            <p style="font-size: 12px; color: #94a3b8; text-align: center;">
              Enviado desde el formulario seguro en <strong>genlatam.com/contacto</strong>.
            </p>
          </div>
        `,
            });

            ctx.send({ message: 'Email enviado exitosamente' });
        } catch (err) {
            console.error('Error al enviar el correo:', err);
            ctx.internalServerError('Error interno al intentar enviar el correo. Por favor contacte soporte.');
        }
    }
};
