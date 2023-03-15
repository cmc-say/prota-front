export type LoginReq = {
  deviceToken: string;
  authorizationCode: string;
  socialType: string;
};
export type LoginRes = {
  accessToken: string;
};

export type LogoutReq = {};
export type LogoutRes = {};

export type ReIssueReq = {};
export type ReIssueRes = {};

export type DeleteUserReq = {};
export type DeleteUserRes = {};

export type ReportUserReq = {
  userId: string;
  reportType: string;
};
export type ReportUserRes = {};

export type BlockUserReq = {
  userId: string;
};
export type BlockUserRes = {};

export type CheckCharacterExistReq = {
  worldId: string;
};
export type CheckCharacterExistRes = {};

export type CheckTodoReq = {
  avatarId: number;
  worldId: number;
  todoId: number;
};

export type CreateWorldReq = {
  file: any;
  worldName: string;
  worldUserLimit: number;
  hashtags: string[];
  worldPassword: string;
  worldNotice: string;
  todos: string[];
};
export type CreateWorldRes = {};

export type GetWorldListReq = {};
export type GetWorldListRes = {};

export type GetAllWorldListReq = {
  type: string;
};
export type GetAllWorldListRes = {};

export type DeleteWorldReq = {
  worldId: number;
};
export type DeleteWorldRes = {};

export type PutWorldInfoReq = {};
export type PutWorldInfoRes = {};

export type PostWorldImgReq = {};
export type PostWorldImgRes = {};

export type GetWorldInfoReq = {
  worldId: number;
};
export type GetWorldInfoRes = {};

export type SearchWorldReq = {
  keyword: string;
};
export type SearchWorldRes = {};

export type GetUserCharactersReq = {};
export type GetUserCharacterRes = {};

export type ParticipateWorldReq = {
  worldId: number;
  avatarId: number;
};
export type ParticipateWorldRes = {};

export type AddCharacterReq = {
  file: any;
  avatarName: string;
  avatarMessage: string;
};
export type AddCharacterRes = {};

export type GetRecommendedWorldReq = {};
export type GetRecommendedWorldRes = {};

export type PostCharacterImgReq = {};
export type PostCharacterImgRes = {};

export type PutCharacterInfoReq = {};
export type PutCharacterInfoRes = {};

export type GetCharacterInfoReq = {
  avatarId: number;
};
export type GetCharacterInfoRes = {};

export type GetProgressReq = {};
export type GetProgressRes = {};

export type GetWorldAttendanceReq = {};
export type GetWorldAttendanceRes = {};

export type DeleteCharacterReq = {
  avatarId: number;
};
export type DeleteCharacterRes = {};

export type CreateHashTagReq = {};
export type CreateHashTagRes = {};

export type SearchHashTagReq = {};
export type SearchHashTagRes = {};

export type GetTodayWordReq = {};
export type GetTodayWordRes = {};

export type CreateWordTodayReq = {
  avatarId: number;
  worldId: number;
  wordTodayContent: string;
};
export type CreateWordTodayRes = {};

export type GetWorldTodoProgressReq = {};
export type GetWorldTodoProgressRes = {};

export type GetRecommendedWorldTodosReq = {};
export type GetRecommendedWorldTodosRes = {};

export type GetAlarmRecommendedReq = {};
export type GetAlarmRecommendedRes = {};

export type EditCharacterInfoReq = {
  avatarId: number;
  avatarName: string;
  avatarMessage: string;
};
export type UpdateCharacterImgReq = {
  avatarId: number;
  file: any;
};

export type UpdateWorldImgReq = {
  worldId: number;
  file: any;
};
