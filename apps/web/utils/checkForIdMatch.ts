export const checkForIdMatch = (id: string) => {
  const re = new RegExp(/^[0-9a-fA-F]{8}/i);
  return re.test(id);
};
