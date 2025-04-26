export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  function getDayOfSeason(date: Date): number {
    const seasonStart = new Date(date.getFullYear(), 8, 1); // 1 de septiembre (mes 8 = septiembre)
    const diff = Math.floor((date.getTime() - seasonStart.getTime()) / (1000 * 60 * 60 * 24));
    return diff + 1; // día 1 es 1 de sept
  }
  
  export function calculatePoints(day: number): number {
    if (day === 1) return 2;
    if (day === 2) return 3;
    const day1 = 2;
    const day2 = 3;
    let points = 0;
    let prev = day2;
    let prevPrev = day1;
  
    for (let i = 3; i <= day; i++) {
      points = prevPrev + prev * 0.6;
      prevPrev = prev;
      prev = points;
    }
  
    return Math.round(points);
  }
  
  export function formatPoints(points: number): string {
    return points > 1000 ? `${Math.round(points / 1000)}K` : points.toString();
  }
  
  export function getTodayPoints(): string {
    const today = new Date();
    const day = getDayOfSeason(today);
    const points = calculatePoints(day);
    return formatPoints(points);
  }
  