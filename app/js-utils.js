export function formatDate(dateString) {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1; // getMonth() returns zero-based month
    const year = dateObj.getFullYear();
    return `${month}/${day}/${year}`;
}