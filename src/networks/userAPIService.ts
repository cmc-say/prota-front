import {
  AddCharacterReq,
  AddCharacterRes,
  BlockUserReq,
  BlockUserRes,
  CheckCharacterExistReq,
  CheckCharacterExistRes,
  CreateWordTodayReq,
  CreateWordTodayRes,
  DeleteCharacterReq,
  DeleteCharacterRes,
  GetUserCharacterRes,
  GetUserCharactersReq,
  PostCharacterImgReq,
  PostCharacterImgRes,
  PutCharacterInfoReq,
  PutCharacterInfoRes,
  ReportUserReq,
  ReportUserRes,
} from "./network";
import { MockNetworkService } from "./networkCore";

export default class UserApiService extends MockNetworkService {
  async reportUser(req: ReportUserReq): Promise<ReportUserRes> {
    const res = await this._networkCore.post<ReportUserReq>();
    return res;
  }

  async blockUser(req: BlockUserReq): Promise<BlockUserRes> {
    const res = await this._networkCore.post<BlockUserReq>();
    return res;
  }

  async getAllCharacterList({}: GetUserCharactersReq): Promise<GetUserCharacterRes> {
    const res = await this._networkCore.get<GetUserCharactersReq>();
    return res;
  }

  async isCheckCharacterExist(
    req: CheckCharacterExistReq
  ): Promise<CheckCharacterExistRes> {
    const res = await this._networkCore.get<CheckCharacterExistReq>();
    return res;
  }

  async addCharacter(req: AddCharacterReq): Promise<AddCharacterRes> {
    const res = await this._networkCore.post<AddCharacterReq>();
    return res;
  }

  async updateCharacterImg(
    req: PostCharacterImgReq
  ): Promise<PostCharacterImgRes> {
    const res = await this._networkCore.post<PostCharacterImgReq>();
    return res;
  }

  async updateCharacter(
    req: PutCharacterInfoReq
  ): Promise<PutCharacterInfoRes> {
    const res = await this._networkCore.put<PutCharacterInfoReq>();
    return res;
  }

  async removeCharacter(req: DeleteCharacterReq): Promise<DeleteCharacterRes> {
    const res = await this._networkCore.delete<DeleteCharacterReq>();
    return res;
  }

  async addTodyComment(req: CreateWordTodayReq): Promise<CreateWordTodayRes> {
    const res = await this._networkCore.post<CreateWordTodayReq>();
    return res;
  }
}
