import { IMenu } from "../components/menu-item";

export const getUniqueLabels = (menuList: IMenu[]) => {
  const uniqueLabels: string[] = [];
  for (const menu of menuList) {
    for (const label of menu.labels) {
      if (!uniqueLabels.includes(label)) {
        uniqueLabels.push(label);
      }
    }
  }
  return uniqueLabels;
};
