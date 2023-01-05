export interface ListOptions {
    limit?: number;
    sort?: string;
}

const mapToRequestParams = (params: ListOptions) => {
  const options: Record<string, any> = {};
  if (params.limit) {
    options["_limit"] = params.limit;
  }

  if (params.sort) {
    options["_sort"] = params.sort;
  }

  return options;
};

export default mapToRequestParams;
