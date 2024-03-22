"use client";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import logo from "public/logo.png";

export default function Navigation() {
  return (
    <div className="sticky top-0 bg-gray-100 z-10">
      {/* native nav */}
      {/* <nav className="sticky top-0 bg-gray-100 z-10"> */}
      {/*   <ul className="flex h-24 justify-around items-center font-medium uppercase"> */}
      {/*     <li className="relative h-16 w-36"> */}
      {/*       <Link href="/"> */}
      {/*         <Image src={logo} alt="Signature Courtage" fill /> */}
      {/*       </Link> */}
      {/*     </li> */}
      {/*     <li> */}
      {/*       <Link href="/actualites">Actualités</Link> */}
      {/*     </li> */}
      {/*     <li> */}
      {/*       <Link href="/obtenir-un-pret">Obtenir un prêt</Link> */}
      {/*     </li> */}
      {/*     <li> */}
      {/*       <Link href="/pret-conso-facile">Prêt conso facile</Link> */}
      {/*     </li> */}
      {/*     <li> */}
      {/*       <Link href="/changer-d-assurance">{"Changer d'assurance"}</Link> */}
      {/*     </li> */}
      {/*     <li> */}
      {/*       <Link href="/le-cabinet">Le cabinet</Link> */}
      {/*     </li> */}
      {/*     <li> */}
      {/*       <Link href="/nous-contacter">Nous contacter</Link> */}
      {/*     </li> */}
      {/*     <li> */}
      {/*       <Link href="/nous-recrutons">Nous recrutons !</Link> */}
      {/*     </li> */}
      {/*   </ul> */}
      {/* </nav> */}
      <NavigationMenu className="max-w-screen [&>*]:flex-1">
        {/* <NavigationMenuList> */}
        <NavigationMenuList className="flex h-24 justify-around items-center font-medium uppercase flex-1">
          <NavigationMenuItem>
            <NavigationMenuLink href="/">
              <Image
                src={logo}
                alt="Signature Courtage"
                className=""
                width={100}
                height={24}
              />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/actualites">
              Actualités
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/obtenir-un-pret">
              Obtenir un prêt
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/pret-conso-facile">
              Prêt conso facile
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/changer-d-assurance">
              {"Changer d'assurance"}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/le-cabinet">
              Le cabinet
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/nous-contacter">
              Nous contacter
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/nous-recrutons">
              Nous recrutons !
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
