export interface DataResponse<T> {
  data: T;
}

export interface PageDataResponse<T> extends DataResponse<T> {
  page: number;
  size: number;
  elementSize: number;
  hasNext: boolean;
}
