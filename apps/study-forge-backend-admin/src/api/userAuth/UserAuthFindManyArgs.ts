import { UserAuthWhereInput } from "./UserAuthWhereInput";
import { UserAuthOrderByInput } from "./UserAuthOrderByInput";

export type UserAuthFindManyArgs = {
  where?: UserAuthWhereInput;
  orderBy?: Array<UserAuthOrderByInput>;
  skip?: number;
  take?: number;
};
