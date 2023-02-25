import {
  LoginReq,
  LoginRes,
  LogoutReq,
  LogoutRes,
  ReIssueReq,
  ReIssueRes,
} from "./network";
import { MockNetworkService } from "./networkCore";

export default class AuthApiService extends MockNetworkService {
  async login(req: LoginReq): Promise<LoginRes> {
    const res = await this._networkCore.post<LoginRes>();
    return res;
  }
  async logout(req: LogoutReq): Promise<LogoutRes> {
    const res = await this._networkCore.post<LogoutRes>();
    return res;
  }
  async reissue(req: ReIssueReq): Promise<ReIssueRes> {
    const res = await this._networkCore.post<ReIssueRes>();
    return res;
  }
}
