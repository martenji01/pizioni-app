import { Outlet } from "react-router-dom";
import {Container} from "@mui/material";

const Layout = () => {
    return (
        <Container maxWidth="xl" className={"layout"}>
            <Outlet />
        </Container>
    )
};

export default Layout