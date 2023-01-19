import { Outlet } from "react-router-dom"
import {Container, Typography} from "@mui/material"
import ResponsiveAppBar from "../components/ResponsiveAppBar"
import imgBackground from "../images/LoginPage.png"

const Layout = () => {
  console.log({imgBackground})

    return (
        <Container
            maxWidth="xl"
            className={"layout"}
            style={{background: `url(${imgBackground})` || '#f2f6fc', backgroundPosition: "center" }}
        >
            <ResponsiveAppBar />
            <Outlet/>
        </Container>
    )
};

export default Layout