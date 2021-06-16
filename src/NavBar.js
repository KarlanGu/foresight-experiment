import { Alignment, Menu, MenuItem, MenuDivider, Navbar, NavbarHeading, NavbarDivider, NavbarGroup, Button } from "@blueprintjs/core";
import { useState, useEffect } from "react";
import { Popover2 } from "@blueprintjs/popover2";


const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
}

export function NavBar() {
    const { width } = useViewport();
    const breakpoint = 560;

    return width > breakpoint ? (
        <Navbar className="bp3-dark" fixedToTop={true}>
        <NavbarGroup>
            <NavbarHeading>Globoticket</NavbarHeading>
            <input className="bp3-input" placeholder="Search files..." type="text" />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="warning-sign" text="Alerts" />
            <NavbarDivider />
            <Button icon="user" className="bp3-minimal"></Button>
            <Button icon="notifications" className="bp3-minimal"></Button>
            <Button icon="cog" className="bp3-minimal"></Button>
        </NavbarGroup>
        </Navbar>
    ) :
    (
        <Navbar className="bp3-dark" fixedToTop={true}>
        <NavbarGroup>
            <NavbarHeading>Globoticket</NavbarHeading>
            <input className="bp3-input" placeholder="Search files..." type="text" />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
            <Popover2 content={
                <Menu>
                    <MenuItem icon="home" text="Home"></MenuItem>
                    <MenuItem icon="warning-sign" text="Alerts"></MenuItem>
                    <MenuDivider />
                    <MenuItem icon="user" text="User"></MenuItem>
                    <MenuItem icon="notifications" text="Notifications"></MenuItem>
                    <MenuItem icon="cog" text="Settings"></MenuItem>
                </Menu>
            }>
                <Button icon="layout-grid"/>
            </Popover2>
 
        </NavbarGroup>
        </Navbar>
    );
}