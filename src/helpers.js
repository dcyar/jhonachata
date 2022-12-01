export const formatDate = (date) => {
    const dateFormated = new Date(date);
    dateFormated.setHours(dateFormated.getHours() + 5);

    return dateFormated.toLocaleDateString('es-PE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
