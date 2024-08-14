export interface TCar {
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status?: 'available' | 'unavailable'; // Defaults to 'available'
  features: string[];
  pricePerHour: number;
  isDeleted: boolean; // Defaults to false
}

export interface TDecodedToken {
  userId: string;
  role: string;
}
