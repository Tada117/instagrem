export interface MenuState {
  id: string;
  path?: string;
  onClick?: () => void;
  title: string;
  icon: JSX.Element;
}
