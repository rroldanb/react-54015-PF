export function toCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toPesos(precio) {
  if (typeof precio !== 'number') {
    throw new Error('El precio debe ser un número');
  }

  const formattedPrecio = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP' 
  }).format(precio);

  return formattedPrecio;
}

