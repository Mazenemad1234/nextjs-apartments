import Sideadmin from "./sideadmin";
interface Adminlayoutchildern {
  children: React.ReactNode;
}
const Layout = ({ children }: Adminlayoutchildern) => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/5 hidden md:block ">
        <Sideadmin />
      </div>
      <div className="w-4/5 flex-grow " >{children}</div>
    </div>
  );
};

export default Layout;
