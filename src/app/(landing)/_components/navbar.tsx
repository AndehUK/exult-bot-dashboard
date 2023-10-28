"use client";

import { AccountButton } from "./account-button";
import { Logo } from "./logo";
import { NavigationItems } from "./nav-items";
import { MobileSidebar } from "./mobile-sidebar";

export const LandingNavbar = () => {
  return (
    <nav className="p-4">
      <div className="nav:hidden flex items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <MobileSidebar />
        </div>
      </div>
      <div className="nav:flex hidden items-center justify-between">
        <Logo />
        <NavigationItems />
        <div className="flex items-center gap-x-2">
          <AccountButton />
        </div>
      </div>
    </nav>
  );
};
