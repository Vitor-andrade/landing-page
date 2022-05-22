import { Grid, Typography } from '@mui/material';
import './App.css';
import Button from './components/Button';
import CanDoBox from './components/CanDoBox/CanDoBox';
import Header from './components/Header/Header';
import ImagesBox from './components/ImagesBox/ImagesBox';

const canDoInfo = [
  {
    title:<h3 style={{lineHeight:1.5,color:'#5F29CC'}}>Graphical Abstracts<br/> and Infographics</h3>,
    subtitle:<h4 style={{fontWeight:'bold', lineHeight:1.5}}>Improve your papers’ impact <br/>and visibility through quality visual <br/>communication</h4>,
    image:require('./images/image_3/image_3.png')
  },
  {
    title:<h3 style={{lineHeight:1.5,color:'#5F29CC'}}>Scientific Poster<br/>in a few clicks</h3>,
    subtitle:<h4 style={{fontWeight:'bold', lineHeight:1.5}}>Add visual impact to your<br/>posters with scientific <br/>illustrations and graphics</h4>,
    image:require('./images/image_2/image_2.png')
  },
  {
    title:<h3 style={{lineHeight:1.5,color:'#5F29CC'}}>Make better <br/>Slide Presentation</h3>,
    subtitle:<h4 style={{fontWeight:'bold', lineHeight:1.5}}>Transform your lectures,<br/>meetings and classes into <br/>high-impact visual experiences</h4>,
    image:require('./images/image_1/image_1.png')
  },
]

const imagesInfo = [
  {
    title:<h3 style={{lineHeight:1.5,color:'#FFFFFF'}}>Drag and Drop</h3>,
    subtitle:<h4 style={{fontWeight:'normal', lineHeight:1.5}}>Easily select and <br/>manage illustrations,<br/>text and templates</h4>,
    image:require('./images/ico_drag/ico_drag.png')
  },
  {
    title:<h3 style={{lineHeight:1.5,color:'#FFFFFF'}}>Pre-Made Resources</h3>,
    subtitle:<h4 style={{fontWeight:'normal', lineHeight:1.5}}>Don’t waste time!<br/>Use our templates and just<br/>customize colours, text etc</h4>,
    image:require('./images/ico_premade/ico_premade.png')
  },
  {
    title:<h3 style={{lineHeight:1.5,color:'#FFFFFF'}}>Online Platform</h3>,
    subtitle:<h4 style={{fontWeight:'normal', lineHeight:1.5}}>Access your creations<br/>at any time and from<br/>anywhere</h4>,
    image:require('./images/ico_platform/ico_platform.png')
  },
  {
    title:<h3 style={{lineHeight:1.5,color:'#FFFFFF'}}>On-demand<br/>Illustrations</h3>,
    subtitle:<h4 style={{fontWeight:'normal', lineHeight:1.5}}>Don’t find exactly what<br/>you need? We will design<br/>it for you!</h4>,
    image:require('./images/ico_odemand/ico_odemand.png')
  },
  {
    title:<h3 style={{lineHeight:1.5,color:'#FFFFFF'}}>Multiple Sizing<br/>Options</h3>,
    subtitle:<h4 style={{fontWeight:'normal', lineHeight:1.5}}>Ready-to-go templates<br/>in all popular sizes</h4>,
    image:require('./images/ico_multiple/ico_multiple.png')
  },
  {
    title:<h3 style={{lineHeight:1.5,color:'#FFFFFF'}}>Share creations</h3>,
    subtitle:<h4 style={{fontWeight:'normal', lineHeight:1.5}}>Share your creations <br/>with your team or <br/>other users</h4>,
    image:require('./images/ico_share/ico_share.png')
  },
]

function App() {
  return (
    <Grid className='App' container xs={12} >
      <div className='gradient'>
        <Header />
        <Grid container  style={{marginTop:20}}>
          <Grid item xs={12} md={4} className="textButtonGrid">
            <Grid xs={12} md={7}>
              <h1 style={{color:"white", textAlign:'left', fontSize:"25px"}}>Discover all<br/> possibilities of using <br/> this powerfull tool<br/> and create science <br/>figures, posters and <br/>infographics.</h1>
            </Grid>
            <Grid xs={12} md={5}>
              <Button className="purpleButton" text="Start creating now"/>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} className="bigImage">
            <img src={require('./images/head-02/head-02.png')}/>
          </Grid>
        </Grid>
      </div>
      <Grid xs={12} container direction='column' style={{marginTop:"100px", marginBottom:"50px"}}>
          <h2 style={{color:"#5F29CC"}}>Visualize what Mind the Graph can do for you</h2>  
      </Grid>
      <CanDoBox info={canDoInfo}/>

      <Grid container xs={12} className="purpleBackgroundContainer">
        <h2>Create effective science figures in minutes</h2>
        <h4 style={{fontWeight:'normal', lineHeight:1.5}}>We built Mind the Graph for simplicity. The platform is easy to use and just about anybody <br/>can use it to create great infographics and presentations - from beginners to professionals, <br/>individuals to groups and small labs to large organisations</h4>
        <ImagesBox info={imagesInfo}/>
      </Grid>
    </Grid>
  );
}

export default App;
