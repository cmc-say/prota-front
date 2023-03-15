import {
  CreateWorldReq,
  DeleteWorldReq,
  GetAllWorldListReq,
  GetWorldInfoReq,
  ReIssueRes,
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
  getWorldAttendances() {}
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
  async getPopularHashtag() {
    const res = await axiosinstance.get("/world/hashtags?order=popular");
    return res.data;
  }
}
