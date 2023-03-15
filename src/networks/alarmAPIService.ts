import { APINetworkService, axiosinstance } from "./networkCore";

export default class AuthApiService extends APINetworkService {
  async getRecommendedAlarmMessage() {
    const res = await axiosinstance.get("/alarm/recommended");
    return res.data;
  }
}
