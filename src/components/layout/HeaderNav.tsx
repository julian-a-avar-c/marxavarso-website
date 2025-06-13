"use client";

import * as React from "react";

import { config as mainConfig } from "@/config/main";

import { productos } from "@/config/productos";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

export type HeaderNavProps = {
  class?: string;
};

export function HeaderNav({ class: className }: HeaderNavProps) {
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow font-semibold bg-background/0 rounded-none"
            )}
            style={{ textDecorationLine: "none" }}
          >
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/informacion"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow font-semibold bg-background/0 rounded-none"
            )}
            style={{ textDecorationLine: "none" }}
          >
            Informacion
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow font-semibold bg-background/0 rounded-none"
            )}
          >
            <a href="/indumentaria" style={{ textDecorationLine: "none" }}>
              Indumentaria
            </a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={cn(
                "flex flex-col",
                "w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]"
              )}
            >
              <div className="md:row-[1/11]">
                {productos.indumentaria.map(
                  (producto) => (
                    // TODO: href
                    <ListItem
                      key={`top-nav-productos-${producto.id}`}
                      image={producto.imagenes[0]}
                      title={producto.nombre}
                      href={`/?producto=${producto.id}`}
                    >
                      {producto.categorias.join(", ")}
                    </ListItem>
                  )
                )}
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow font-semibold bg-background/0 rounded-none"
            )}
          >
            <a href="/ceramicas" style={{ textDecorationLine: "none" }}>
              Ceramicas
            </a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={cn(
                "flex flex-col",
                "w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]"
              )}
            >
              <div className="md:row-[1/11]">
                {productos.ceramica.map(
                  (producto) => (
                    // TODO: href
                    <ListItem
                      key={`top-nav-productos-${producto.id}`}
                      image={producto.imagenes[0]}
                      title={producto.nombre}
                      href={`/?producto=${producto.id}`}
                    >
                      {producto.categorias.join(", ")}
                    </ListItem>
                  )
                )}
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow font-semibold bg-background/0 rounded-none"
            )}
          >
            <a href="/otros" style={{ textDecorationLine: "none" }}>
              Otros
            </a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={cn(
                "flex flex-col",
                "w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]"
              )}
            >
              <div className="md:row-[1/11]">
                {productos.otros.map(
                  (producto) => (
                    // TODO: href
                    <ListItem
                      key={`top-nav-productos-${producto.id}`}
                      image={producto.imagenes[0]}
                      title={producto.nombre}
                      href={`/?producto=${producto.id}`}
                    >
                      {producto.categorias.join(", ")}
                    </ListItem>
                  )
                )}
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/envios"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow font-semibold bg-background/0 rounded-none"
            )}
            style={{ textDecorationLine: "none" }}
          >
            Envios
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contacto"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow font-semibold bg-background/0 rounded-none"
            )}
            style={{ textDecorationLine: "none" }}
          >
            Contacto
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    listClassName?: string;
    titleClass?: string;
    image: string,
  }
>(
  (
    { className, listClassName, image, title, children, titleClass, ...props },
    ref
  ) => {
    return (
      <li className={listClassName}>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "leading-none",
              "gap-y-1 p-3",
              "gap-x-4",
              "select-none rounded-md no-underline outline-none transition-colors",
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              "grid grid-cols-[auto_1fr]",
              className
            )}
            style={{ textDecorationLine: "none" }}
            {...props}
          >
            <img src={image} className="aspect-square rounded-full row-[1/3] col-[1/2] w-16" />
            <div className={cn("text-sm font-medium leading-none", "row-[1/2]", titleClass)}>
              {title}
            </div>
            <p
              className={cn(
                "line-clamp-2 text-sm leading-snug text-muted-foreground", "row-[2/3]"
              )}
            >
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
