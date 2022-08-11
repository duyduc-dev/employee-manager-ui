export default function formatDate(date: string) {
  if (date) {
    if (date.includes('-')) {
      const [y, m, d] = date.split('-');
      return `${d}/${m}/${y}`;
    } else if (date.includes('/')) {
      const [d, m, y] = date.split('/');
      return `${y}-${m}-${d}`;
    }
  }

  return date;
}
