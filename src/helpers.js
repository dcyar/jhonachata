export const formatDate = (date) => {
    return date.toLocaleDateString('es-PE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    });
};

export const orderByDate = (posts) => {
    return posts.sort((a, b) => {
        return (
            new Date(b.data.publishedAt).getTime() -
            new Date(a.data.publishedAt).getTime()
        );
    });
}
