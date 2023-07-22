import "./NavbarItem.scss";

interface NavbarItemProps {
  text: string;
  focused: boolean;
  onClick: () => void;
}

function NavbarItem({ onClick, text, focused }: NavbarItemProps) {
  return (
    <div
      className={`navbar-item ${focused && "navbar-item__focused"}`}
      onClick={onClick}
    >
      <div
        className={`navbar-item-background ${
          focused && "navbar-item-background__focused"
        }`}
      />
      <span className="navbar-item__text">{text}</span>
    </div>
  );
}
export default NavbarItem;
