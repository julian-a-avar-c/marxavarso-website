"use client";

import * as React from "react";

import { config as mainConfig } from "@/config/main";

import {
  categorias,
  presetarCategoria,
  productos,
  productosDeCategoria,
  type Categoria,
  type Producto,
} from "@/config/productos";

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

        {[
          {
            key: "indumentaria",
            href: "/indumentaria",
            titulo: "Indumentaria",
            categorias: ["top", "remera", "buzo", "polera"] as Categoria[],
          },
          {
            key: "ceramicas",
            href: "/ceramicas",
            titulo: "Ceramicas",
            categorias: ["pocillo", "taza", "plato", "portavasos"] as Categoria[],
          },
          {
            key: "otros",
            href: "/otros",
            titulo: "Otros",
            categorias: ["otro"] as Categoria[],
          },
        ].map((item) => (
          <NavigationMenuItem key={item.key}>
            <NavigationMenuTrigger
              className={cn(
                navigationMenuTriggerStyle(),
                "text-lg text-shadow font-semibold bg-background/0 rounded-none"
              )}
            >
              <a href={item.href} style={{ textDecorationLine: "none" }}>
                {item.titulo}
              </a>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {
                (item.categorias ?? []).map((categoria) => ({categoria, productos: productosDeCategoria(categoria)}))
                .filter(({categoria, productos}) => productos.length > 0)
                .map(({categoria, productos}) => {
                  return (
                    <div key="flex flex-col gap-4">
                      <div>{presetarCategoria(categoria as Categoria)}</div>
                      <ul
                        className={cn(
                          "flex flex-wrap",
                          "w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]"
                        )}
                      >
                        {productos.map((producto) => (
                          // TODO: href
                          <CircleListItem
                            key={`top-nav-productos-${producto.id}`}
                            image={producto.imagenes[0]}
                            className="rounded-full w-fit"
                          />
                        ))}
                      </ul>
                    </div>
                  );
                })}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

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

const TextListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    listClassName?: string;
    titleClass?: string;
    image: string;
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
            <img
              src={image}
              className="aspect-square rounded-full row-[1/3] col-[1/2] w-16"
            />
            <div
              className={cn(
                "text-sm font-medium leading-none",
                "row-[1/2]",
                titleClass
              )}
            >
              {title}
            </div>
            <p
              className={cn(
                "line-clamp-2 text-sm leading-snug text-muted-foreground",
                "row-[2/3]"
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
TextListItem.displayName = "TextListItem";

const CircleListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    listClassName?: string;
    titleClass?: string;
    image: string;
  }
>(
  (
    { className, listClassName, image, title, children, titleClass, ...props },
    ref
  ) => {
    return (
      <li className={cn(listClassName)}>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "leading-none",
              "gap-y-1 p-3",
              "gap-x-4",
              "select-none rounded-full hover:rounded-full no-underline outline-none transition-colors",
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            style={{ textDecorationLine: "none" }}
            {...props}
          >
            <img
              src={image}
              className="aspect-square rounded-full row-[1/3] col-[1/2] w-16"
            />
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
CircleListItem.displayName = "CircleListItem";
