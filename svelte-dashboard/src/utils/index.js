export const formattedName = (name) => name ? `${name.toLowerCase().split(' ').join('-')}` : '';

export const capitalize = (word) => `${word.charAt(0).toUpperCase()}${word.substring(1)}`;

export const getLang = (query) => query && query.length ? query.replace('lang=', '') : 'es';
