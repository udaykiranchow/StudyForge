export type UserAuth = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string | null;
  password: string | null;
  email: string | null;
};
