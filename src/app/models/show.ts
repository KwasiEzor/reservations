export interface ShowModel {
  id?: number;
  slug: string;
  title: string;
  description: string;
  poster_url: string;
  location_id: number;
  bookable: boolean;
  created_at?: Date;
  updated_at?: Date;
  representations?: [];
  locations?: [];
}
