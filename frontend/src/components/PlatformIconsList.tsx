import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";
import { Stack } from "@mui/material";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  linux: FaLinux,
  mac: FaApple,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: BsNintendoSwitch,
  ios: MdPhoneIphone,
  android: FaAndroid,
  web: BsGlobe,
};

const PlatformIconsList = ({ platforms }: Props) => {
  return (
    <>
      <Stack direction={"row"} gap={1}>
        {platforms.map((platform) => {
          const IconComponent = iconMap[platform.slug];
          return (
            // if there is a match then, return the icon, otherwise undefined (instead of error)
            IconComponent && (
              <IconComponent
                key={platform.id}
                title={platform.name}
                style={{ color: "#777" }}
              />
            )
          );
        })}
      </Stack>
    </>
  );
};

export default PlatformIconsList;
