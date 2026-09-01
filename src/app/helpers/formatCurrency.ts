export function formatMoney(value: number | string): string {
  const [integer, decimal] = Number(value).toFixed(2).split('.');
  return `$${integer},${decimal}`;
}
