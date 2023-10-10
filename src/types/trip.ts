export interface CityData {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface NewTripData {
  startDate: string | null;
  endDate: string | null;
  cityIds: number[];
}

export interface DateRangeData {
  startDate: string | null;
  endDate: string | null;
}
