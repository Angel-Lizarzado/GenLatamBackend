import type { Schema, Struct } from '@strapi/strapi';

export interface SharedEnlaceSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_enlace_socials';
  info: {
    description: '';
    displayName: 'EnlaceSocial';
    icon: 'link';
  };
  attributes: {
    plataforma: Schema.Attribute.Enumeration<
      [
        'YouTube',
        'X',
        'Instagram',
        'LinkedIn',
        'TikTok',
        'Telegram',
        'WhatsApp',
      ]
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMetrica extends Struct.ComponentSchema {
  collectionName: 'components_shared_metricas';
  info: {
    description: 'Una m\u00E9trica estad\u00EDstica para presumir en el B2B';
    displayName: 'Metrica';
    icon: 'chart-pie';
  };
  attributes: {
    etiqueta: Schema.Attribute.String & Schema.Attribute.Required;
    valor: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPerfilPresentador extends Struct.ComponentSchema {
  collectionName: 'components_shared_perfil_presentadors';
  info: {
    description: 'Componente para mostrar el perfil y redes de un host o presentador de la plataforma';
    displayName: 'Perfil Presentador';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    enlaceInstagram: Schema.Attribute.String;
    enlaceX: Schema.Attribute.String;
    fotoPerfil: Schema.Attribute.Media<'images'>;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    rol: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServicioDestacado extends Struct.ComponentSchema {
  collectionName: 'components_shared_servicio_destacados';
  info: {
    description: 'Tarjeta de capacidad o servicio para la p\u00E1gina de inicio';
    displayName: 'Servicio Destacado';
    icon: 'star';
  };
  attributes: {
    descripcion: Schema.Attribute.Text & Schema.Attribute.Required;
    icono: Schema.Attribute.Enumeration<
      [
        'Presentation',
        'Globe',
        'BarChart3',
        'Activity',
        'Zap',
        'Shield',
        'Smartphone',
        'Megaphone',
        'Star',
        'Users',
        'TrendingUp',
        'Target',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Presentation'>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface YoutubeCrecimientoCanal extends Struct.ComponentSchema {
  collectionName: 'components_youtube_crecimiento_canals';
  info: {
    description: 'M\u00E9tricas espec\u00EDficas de crecimiento para un canal de YouTube en un caso de \u00E9xito';
    displayName: 'CrecimientoCanal';
    icon: 'youtube';
  };
  attributes: {
    nombreOpcional: Schema.Attribute.String;
    suscriptoresAntes: Schema.Attribute.BigInteger;
    youtubeChannelId: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.enlace-social': SharedEnlaceSocial;
      'shared.metrica': SharedMetrica;
      'shared.perfil-presentador': SharedPerfilPresentador;
      'shared.servicio-destacado': SharedServicioDestacado;
      'youtube.crecimiento-canal': YoutubeCrecimientoCanal;
    }
  }
}
