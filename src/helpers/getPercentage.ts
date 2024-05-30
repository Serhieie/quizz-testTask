export function calculatePercentage(
  part: number | undefined,
  whole: number | undefined
): number {
  if (whole === undefined || part === undefined || whole === 0) {
    return 0;
  }
  return (part / whole) * 100;
}
