export interface ListOptions {
    limit?: number;
    sort?: string;
    offset?: number;
    contains?: string;
}

const mapToRequestParams = (params: ListOptions) => {
  const options: Record<string, any> = {};
  if (params.limit) {
    options["_limit"] = params.limit;
  }

  if (params.sort) {
    options["_sort"] = params.sort;
  }

  if (params.offset) {
    options["_start"] = params.offset;
  }

  if (params.contains) {
    // TODO: regardless of the input I always receive 400 Bad Request response.
    //       Can't find the right format from the Swagger docs.
    options["_contains"] = params.contains;
  }

  return options;
};

export default mapToRequestParams;
