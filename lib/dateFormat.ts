export const dateFormat = (date: string) => {
  // Intentar convertir el string a un objeto de fecha
  const dateObj = new Date(date);

  // Verificar si la fecha es inválida
  if (isNaN(dateObj.getTime())) {
    console.error("Error: La fecha proporcionada no es válida.");
    return "Fecha no válida";
  }

  // Formatear la fecha
  const formattedDate = new Intl.DateTimeFormat("es-EC", {
    dateStyle: "medium",
    timeStyle: 'medium',
    timeZone: "America/Guayaquil",
  }).format(dateObj);

  // Capitalizar la primera letra
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};
