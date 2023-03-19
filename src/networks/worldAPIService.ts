import {
  AddMultipleHashtagsReq,
  CreateWorldReq,
  DeleteMultipleHashtagsReq,
  DeleteWorldReq,
  EditWorldInfoReq,
  GetAllWorldListReq,
  GetWorldInfoReq,
  SearchWorldReq,
  UpdateWorldImgReq,
} from "./network";
import {
  APINetworkService,
  MockNetworkService,
  axiosMediaInstance,
  axiosinstance,
} from "./networkCore";

export default class WorldAPIService extends APINetworkService {
  async createWorld(req: CreateWorldReq) {
    const data = new FormData();

    const formData = JSON.stringify({
      worldName: req.worldName,
      worldUserLimit: req.worldUserLimit,
      hashtags: req.hashtags,
      worldPassword: req.worldPassword,
      todos: req.todos,
    });

    data.append("file", req.file);
    data.append("data", formData);
    axiosMediaInstance.post(`/world`, data);
  }
  changeWorldImage(req: UpdateWorldImgReq) {
    const data = new FormData();
    data.append("file", req.file);
    axiosMediaInstance.post(`/world${req.worldId}/img`, data);
  }
  async EditWorldInfoReq(req: EditWorldInfoReq) {
    const res = await axiosinstance.put(`/world/${req.worldId}/info}`);
    return res.data;
  }

  async getAllWorlds(req: GetAllWorldListReq) {
    const res = await axiosinstance.get(`/world/?order=${req.type}`);
    return res.data;
  }
  async deleteWorld(req: DeleteWorldReq) {
    const res = await axiosinstance.delete(`/world/${req.worldId}`);
    return res.data;
  }
  async getWorldInfoById(req: GetWorldInfoReq) {
    const res = await axiosinstance.get(`/world/${req.worldId}`);
    return res.data;
  }
  async getTodoCheckCount(req: GetWorldInfoReq) {
    const res = await axiosinstance.get(`/world/${req.worldId}/todo/today`);
    return res.data;
  }
  async getWorldCharacters(req: GetWorldInfoReq) {
    const res = await axiosinstance.get(`/world/${req.worldId}/avatars`);
    return res.data;
  }
  async searchWorld(req: SearchWorldReq) {
    const res = await axiosinstance.get(`/world/search?keyword=${req.keyword}`);
    return res.data;
  }

  async addMultipleHashtags(req: AddMultipleHashtagsReq) {
    const res = await axiosinstance.post(`/world/${req.worldId}}/hashtags`, {
      hashtags: req.hashtags,
    });
    return res.data;
  }

  async deleteMultipleHashtags(req: DeleteMultipleHashtagsReq) {
    // const res = await axiosinstance.delete(`/world/${req.worldId}}/hashtags`, {
    //   worldHashtagIds: req.worldHashtagIds,
    // });
    // return res.data;
  }
  async getRecommendedWorld() {
    const res = await axiosinstance.post("/world/recommended");
    return res.data;
  }
  async getRecommendedWorldTodo(req: GetWorldInfoReq) {
    const res = await axiosinstance.post(
      `/world/${req.worldId}/todo/recommended`
    );
    return res.data;
  }
  async getRealTimeWorld() {
    const res = await axiosinstance.get("/world?order=recent");
    return res.data.data;
  }
  async getPopularHashtag() {
    const res = await axiosinstance.get("/world/hashtags?order=popular");
    return res.data;
  }
}
