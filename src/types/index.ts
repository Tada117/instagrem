export interface Pagination {
  page: number;
  take: number;
  totalCount: number;
}

export interface ApiResponse<T> {
  data: T;
  pagination: Pagination;
}
