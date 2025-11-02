import { mockEcharts } from "@/assets/data";
import { wait } from "@/utils";

const loadData = async () => {
  await wait();
  return mockEcharts;
};

export default { loadData };
