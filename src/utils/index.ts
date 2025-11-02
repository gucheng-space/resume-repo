export const wait = async (delay: number = 500) => {
  await new Promise((r) => setTimeout(r, delay));
};
