export const formatDate = (date) => {
    date.setHours(date.getHours() + 5);

    return date.toLocaleDateString('es-PE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
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
