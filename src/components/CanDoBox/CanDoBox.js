import { Button, Grid } from "@mui/material";
import './CanDoBox.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function CanDoBox(props){
    const {info} = props;
    return info && (info.length > 0) ?
    <Grid  container direction="row" justifyContent="center" spacing={12} className="CanDoBox" >
        {   
            info.map((item) => {
            const {title, subtitle, image} = item;
            return (
                <Grid item >
                    <img src={image}/>
                    {title}
                    {subtitle}
                    <Grid className="iconButton">
                        <Button style={{color:"#5F29CC", fontWeight:'bold'}}><ArrowForwardIosIcon fontSize="20px" style={{}}/>   LEARN MORE</Button>
                    </Grid>
                </Grid>
            )
        })}
    </Grid>
    : <h2>Parece que não temos conteúdos!</h2>
}	