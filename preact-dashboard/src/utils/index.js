export const formattedName = (name) => name ? `${name.toLowerCase().split(' ').join('-')}` : '';

export const capitalize = (word) => `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
