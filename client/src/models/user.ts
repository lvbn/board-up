export interface User {
  _id: string;
  username: string;
  attendingBoardups?: string[];
  hostingBoardups?: string[];
}
