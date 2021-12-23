declare namespace Express {
  export interface Response {
    dataPaginated: {
      data: any[];
      meta: {
        itemCount: number;
        totalItems: number;
        itemsPerPage: number;
        totalPages: number;
        currentPage: number;
      };
      links: {
        first: string;
        last: string;
        previous?: string;
        next?: string;
      };
    };
  }

  export interface Request {
    user: {
      id: string;
    };
  }
}
