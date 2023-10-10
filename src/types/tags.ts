export interface GetSearchTagResponse {
  data: Tag[];
}

export interface Tag {
  id: number;
  tagName: string;
}
