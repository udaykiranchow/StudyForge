import { UserAuth as TUserAuth } from "../api/userAuth/UserAuth";

export const USERAUTH_TITLE_FIELD = "username";

export const UserAuthTitle = (record: TUserAuth): string => {
  return record.username?.toString() || String(record.id);
};
