import { Grid, useMediaQuery } from "@mui/material";
import Button from "../Button";
import './Header.css';
export default function Header(){

    const buttons = [
        {
            className:"whiteButton",
            text:"Templates"
        },
        {
            className:"whiteButton",
            text:"Pricing"
        },
        {
            className:"whiteButton",
            text:"Blog"
        },
        {
            className:"whiteButton",
            text:"Jobs"
        },
        {
            className:"loginButton",
            text:"Login"
        },
        {
            className:"purpleButton",
            text:"Sign up free"
        },
    ]

    const isMobile = useMediaQuery("(max-width:1025px)");
    return <Grid container className="header" direction={isMobile ? "column" : "row"} alignItems='center' style={{padding:"40px"}}>
        <Grid item className={isMobile ? "": "logoGrid"} xs={12} md={5}>
            <img src={require('../../images/logo_mindthegraph/logo_mindthegraph.png')} />
        </Grid>
        <Grid item xs={12} md={6} className={isMobile ? "": "buttonsGrid"}>
            {
                buttons.map((item) => 
                    <Button style={isMobile ? {margin:15} : {}} text={item.text} className={item.className} />
                )
            }
        </Grid>
    </Grid>
}