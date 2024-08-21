import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { landingMenu } from "@/datas/menus";

import { usePathname } from "next/navigation";

const LandingNavigationMenu = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {landingMenu.map((menu) => {
          if (!menu.children) {
            return (
              <NavigationMenuItem
                key={menu.title}
                className={
                  pathname.includes(menu.href ?? "xx")
                    ? "bg-primary text-white rounded-3xl"
                    : ""
                }
              >
                <NavigationMenuLink
                  href={
                    menu.href?.startsWith("#")
                      ? `/${menu.href}`
                      : menu.href ?? "/"
                  }
                  className={navigationMenuTriggerStyle()}
                >
                  {menu.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={menu.title}>
                <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                    {menu.children.map((subMenu) => (
                      <li key={subMenu.title}>
                        <NavigationMenuLink
                          href={subMenu.href ?? "/"}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-200 hover:text-blue-200-foreground focus:bg-blue focus:text-blue-200-foreground"
                        >
                          <div className="block text-sm font-medium leading-none">
                            {subMenu.title}
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default LandingNavigationMenu;
