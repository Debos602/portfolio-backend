// Utility function to ensure time format is correct
export const formatToHHmm = (time: string): string => {
  // Regular expression to match HH:mm format (24-hour)
  const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;

  // Log the input time for debugging
  console.log('Input Time:', time);

  // Check if the time matches the HH:mm format
  if (!timePattern.test(time)) {
    throw new Error(
      'Invalid time format. Please provide time in HH:mm format.',
    );
  }

  return time;
};
