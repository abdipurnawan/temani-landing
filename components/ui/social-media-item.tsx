import Link from "next/link";
import { Icons } from "./icons";

type SocialMediaItemProps = {
  icon: keyof typeof Icons;
  href: string;
};

const SocialMediaItem = ({ icon, href }: SocialMediaItemProps): JSX.Element => {
  const Icon = Icons[icon];

  return (
    <Link
      className="group rounded-full border-[1px] p-1.5 border-gray-400 hover:border-primary"
      href={href}
    >
      <Icon className="h-5 w-5 text-black group-hover:text-primary" />
    </Link>
  );
};

export default SocialMediaItem;
