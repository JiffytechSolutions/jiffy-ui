import React, { useContext } from "react";
import SideBar from "../SideBar/SideBar";
import "./NewTop.css";
import Button from "../Button/Button";
import { AppContext } from "../../utilities/context/AppContext";
import { Menu } from "../../icons";
import useWindowResize from "../../utilities/useWindowResize";

const NewTop = ({ menu, connectRight, connectLeft }: any) => {
  const { width } = useWindowResize();
  const context = useContext(AppContext);
  const toggleSideBar = () => {
    context.sideBar[1](!context.sideBar[0]);
  };
  return (
    <div className="newtop-menu">
      {
        <div className="inte-topBar__connectLeft">
          {width <= 991 && (
            <Button
              accessibilityLabel="toggle-button"
              icon={<Menu size={20} />}
              type={"outlined"}
              onClick={toggleSideBar}
            />
          )}

          {connectLeft ?? null}
        </div>
      }
      {width > 991 && (
        <div>
          <SideBar
            onChange={function (newPath: string): void {
              throw new Error("Function not implemented.");
            }}
          >
            <SideBar.Section menu={menu} />
          </SideBar>
        </div>
      )}
      {connectRight && (
        <div className="inte-topBar__connectRight">{connectRight}</div>
      )}
    </div>
  );
};

export default NewTop;
