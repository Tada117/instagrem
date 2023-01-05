import * as OutlineIcons from "@heroicons/react/24/outline";
import * as SolidIcons from "@heroicons/react/24/solid";

type IconName = keyof typeof OutlineIcons;
type Icon = React.ComponentProps<"svg"> & { title?: string; titleId?: string };

interface Props extends Icon {
  icon: IconName;
  color?: string;
  size?: number;
  outline?: boolean;
  styles?: string;
}

export const HeroIcon: React.FC<Props> = ({
  icon,
  color,
  size,
  outline,
  styles,
  ...rest
}: Props) => {
  // const  props;
  const { ...icons } = outline ? OutlineIcons : SolidIcons;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const Icon: React.ReactElement = icons[icon];

  const classes = [
    `${color ? "stroke-text-secondary" : "stroke-text-primary"}`,
    `h-${size || 6}`,
    `w-${size || 6}`,
    styles,
  ];

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Icon className={classes.join(" ")} {...rest} />
  );
};
