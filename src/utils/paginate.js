import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  //_(items) below converts to a lodash item
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
