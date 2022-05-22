import { Grid } from "@mui/material";
import './ImagesBox.css';
import Button from '../Button';
export default function ImagesBox(props){
    const {info} = props;
    return info && (info.length > 0) ?
    <Grid >
        <Grid  container direction="row" justifyContent="center" spacing={3} className="ImagesBox" >
            {   
                info.map((item) => {
                const {title, subtitle, image} = item;
                return (
                    <Grid item xs={12} md={4}>
                        <img src={image}/>
                        {title}
                        {subtitle}
                    </Grid>
                )
            })}
        </Grid>
        <Grid item>
            <Button text="EXPLORE MIND THE GRAPH" className="loginButton" />
        </Grid>
    </Grid>
    : <h2>Parece que não temos conteúdos!</h2>
}	