import useAppStore, { AppPageId } from "../../stores/appStore";
import NavbarItem from "../NavbarItem";
import "./Navbar.scss";

interface NavbarProps {}

// eslint-disable-next-line no-empty-pattern
function Navbar({}: NavbarProps) {
  const { page, setPage } = useAppStore();

  function createNavbarItem(itemText: string, itemPage: AppPageId) {
    return (
      <NavbarItem
        text={itemText}
        onClick={() => setPage(itemPage)}
        focused={page.id === itemPage}
      />
    );
  }

  return (
    <div id="navbar">
      {createNavbarItem("About", "about")}
      {createNavbarItem("Work", "work")}
      {createNavbarItem("Projects", "projects")}
    </div>
  );
}
export default Navbar;
