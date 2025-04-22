export type Elder = {
  id: string;
  name: string;
  status: "Inside" | "Outside";
  updated_at: string; // Timestamp
};


// types.ts - Define TypeScript types for monitoring page
export interface Bed {
  occupied: boolean;
}

export interface Room {
  id: number;
  beds: Bed[];
}
