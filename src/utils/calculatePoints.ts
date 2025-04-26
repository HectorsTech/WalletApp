export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  function getDayOfSeason(date: Date): number {
    const seasonStart = new Date(date.getFullYear(), 0, 1); // 1 de enero
    const diff = Math.floor((date.getTime() - seasonStart.getTime()) / (1000 * 60 * 60 * 24));
    return diff + 1;
  }
  
  // NUEVA fórmula más controlada
  export function calculatePoints(day: number): number {
    // crecimiento suave tipo XP
    return Math.min(Math.round(Math.log2(day + 1) * 100), 9999);
  }
  
  export function formatPoints(points: number): string {
    return points >= 1000
      ? `${(points / 1000).toFixed(1)}K` // 1 decimal en miles
      : points.toString();
  }
  
  export function getTodayPoints(): string {
    const today = new Date();
    const day = getDayOfSeason(today);
    console.log('Day of season:', day);
    if (day < 1) return '0';
    const points = calculatePoints(day);
    console.log('Raw points:', points);
    return formatPoints(points);
  }
  