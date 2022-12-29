import * as SolidIcons from "@heroicons/react/24/solid";
import * as OutlineIcons from "@heroicons/react/24/outline";

type IconName = keyof typeof OutlineIcons;

interface Props {
  icon: IconName;
  color?: string;
  size?: number;
  outline?: boolean;
  styles?: string;
  onClick?: (params?: any) => any;
}

export const HeroIcon = (props: Props): JSX.Element => {
  const { icon, color, size, outline, styles = false, onClick } = props;
  const { ...icons } = outline ? OutlineIcons : SolidIcons;
  // @ts-ignore
  const Icon: JSX.Element = icons[icon];

  const classes = [
    `${color ? `stroke-${color}` : "stroke-text-primary"}`,
    `h-${size ? size : 6}`,
    `w-${size ? size : 6}`,
    styles,
  ];

  return (
    // @ts-ignore
    <Icon className={classes.join(" ")} onClick={onClick} />
  );
};
