const translations = {
  'home-page_title': {
    es: 'Bienvenidx a Dashboard!'
  },
  'home-page_search': {
    es: 'Buscar!'
  },
  'home-page_register_text': {
    es: 'Aún no te registraste? Hacete una nueva cuenta!'
  },
  'home-page_register_cta': {
    es: 'Registrarse!'
  },
  'generic_error': {
    es: 'Ups! Hubo un error al cargar la página'
  },
  'generic_return': {
    es: 'Volver al menú principal'
  }
}

export const getText = (key, lang = 'es') => translations[key][lang];