export interface NetworkInstance {
  get<T>(): Promise<T>;
  post<T>(): Promise<T>;
  put<T>(): Promise<T>;
  delete<T>(): Promise<T>;
}

export class AxiosInstance implements NetworkInstance {
  get<T>() {
    fetch("url", { method: "get" });
    return {} as Promise<T>;
  }
  post<T>() {
    return {} as Promise<T>;
  }
  put<T>() {
    return {} as Promise<T>;
  }
  delete<T>() {
    return {} as Promise<T>;
  }
}

export class MockInstance implements NetworkInstance {
  get<T>() {
    return {} as Promise<T>;
  }
  post<T>() {
    return {} as Promise<T>;
  }
  put<T>() {
    return {} as Promise<T>;
  }
  delete<T>() {
    return {} as Promise<T>;
  }
}

export interface NetworkService {
  _networkCore: NetworkInstance;
}

export class MockNetworkService implements NetworkService {
  _networkCore: NetworkInstance;
  constructor() {
    this._networkCore = new MockInstance();
  }
}

export class APINetworkService implements NetworkService {
  _networkCore: NetworkInstance;
  constructor() {
    this._networkCore = new AxiosInstance();
  }
}
