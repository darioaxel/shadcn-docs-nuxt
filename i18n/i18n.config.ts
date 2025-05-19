export default defineI18nConfig(() => ({
  legacy: false,
  // disable missing warn so that the starter doesn't show warnings when only one language is used
  missingWarn: false,
  messages: {
    'en': {
      // Search
      'Search...': 'Search...',
      'Search documentation...': 'Search documentation...',
      'No results found.': 'No results found.',

      // TOC
      'On This Page': 'On This Page',

      // Search command
      'Light': 'Light',
      'Dark': 'Dark',
      'System': 'System',

      // Doc footer
      'Edit this page': 'Edit this page',
      'Back to Top': 'Back to Top',

      // Collapse Code
      'Expand': 'Expand',
      'Collapse': 'Collapse',

      // Language Switcher
      'Language': 'Language',
      'Choose your language': 'Choose your language',

      // Theme Switcher
      'Customize': 'Customize',
      'Pick a style and color for the docs.': 'Pick a style and color for the docs.',
      'Color': 'Color',
      'Radius': 'Radius',
      'Theme': 'Theme',

      // Copy Code
      'Copied to clipboard!': 'Copied to clipboard!',

      // Carbon Ads
      'Please support us by disabling your ad blocker.': 'Please support us by disabling your ad blocker.',

      // Read More
      'Read more at': 'Read more at',

      // Field
      'required': 'required',
    },'es-ES': {
  // Búsqueda
  'Search...': 'Buscar...',
  'Search documentation...': 'Buscar en la documentación...',
  'No results found.': 'No se han encontrado resultados.',

  // Índice de contenido
  'On This Page': 'En esta página',

  // Comando de búsqueda
  'Light': 'Claro',
  'Dark': 'Oscuro',
  'System': 'Sistema',

  // Pie de página del documento
  'Edit this page': 'Editar esta página',
  'Back to Top': 'Volver arriba',

  // Colapsar código
  'Expand': 'Expandir',
  'Collapse': 'Colapsar',

  // Selector de idioma
  'Language': 'Idioma',
  'Choose your language': 'Elige tu idioma',

  // Selector de tema
  'Customize': 'Personalizar',
  'Pick a style and color for the docs.': 'Elige un estilo y color para la documentación.',
  'Color': 'Color',
  'Radius': 'Radio',
  'Theme': 'Tema',

  // Copiar código
  'Copied to clipboard!': '¡Copiado al portapapeles!',

  // Anuncios
  'Please support us by disabling your ad blocker.': 'Por favor, apóyanos desactivando tu bloqueador de anuncios.',

  // Leer más
  'Read more at': 'Leer más en',

  // Campo
  'required': 'obligatorio'
    }
   
  },
}));
