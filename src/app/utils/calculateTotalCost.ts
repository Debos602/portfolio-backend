const calculateTotalCost = (
  startTime: string,
  endTime: string,
  pricePerHour: number,
): number => {
  // Convert startTime and endTime to Date objects
  const start = new Date(`1970-01-01T${startTime}:00Z`);
  const end = new Date(`1970-01-01T${endTime}:00Z`);

  // Calculate the duration in milliseconds
  const durationMs = end.getTime() - start.getTime();

  // Convert duration from milliseconds to hours
  const durationHours = durationMs / (1000 * 60 * 60);

  // Calculate total cost
  return durationHours * pricePerHour;
};

export default calculateTotalCost;
