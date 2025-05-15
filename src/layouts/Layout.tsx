import Aside from "../components/aside/Aside";
import Search from "../components/header/Search";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div id="layout" className="bg-gray-200 dark:bg-gray-700">
      <main className="[grid-area:main] px-4 overflow-y-auto">
        <Outlet></Outlet>
      </main>
      <Aside className="[grid-area:aside]" />
      <Search className="[grid-area:header]"></Search>
    </div>
  );
}

export default Layout;
