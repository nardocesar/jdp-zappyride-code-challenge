import { usePageConfig } from "providers/contexts";

export const useNavigation = () => {
  const config = usePageConfig();

  const navigation = config?.steps.map((step) => ({
    order: step.order,
    route: step.fieldTitle.toLocaleLowerCase().split(" ").join("-"),
  }));

  return navigation;
};
