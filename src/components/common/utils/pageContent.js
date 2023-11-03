export function getPageContent(itemArray, startIndex, pageSize) {
  let moviesList = itemArray.slice(startIndex, startIndex + pageSize);
  return moviesList;
}
