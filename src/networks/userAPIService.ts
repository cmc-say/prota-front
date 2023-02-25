import {
  BlockUserReq,
  BlockUserRes,
  ReportUserReq,
  ReportUserRes,
} from "./network";
import { MockNetworkService } from "./networkCore";

export default class UserApiService extends MockNetworkService {
  async reportUser(req: ReportUserReq): Promise<ReportUserRes> {
    const res = await this._networkCore.get<ReportUserReq>();
    return res;
  }

  async blocktUser(req: BlockUserReq): Promise<BlockUserRes> {
    const res = await this._networkCore.get<BlockUserReq>();
    return res;
  }
}
