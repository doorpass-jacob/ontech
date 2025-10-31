export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  bullets: string[];
  talkingPoint: string;
  tableData?: {
    headers: string[];
    rows: Array<string[]>;
  };
}
