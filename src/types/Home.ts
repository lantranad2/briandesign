type ToggleNavFunction = () => void;
type ExpandNavFunction = () => void;
type CloseNavFunction = () => void;

interface HomeContextInterface {
  navExpanded: boolean;
  toggleNav: ToggleNavFunction;
  expandNav: ExpandNavFunction;
  closeNav: CloseNavFunction;
}

export type { ToggleNavFunction, HomeContextInterface };
