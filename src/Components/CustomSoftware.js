import React from 'react';
import Hidden from '@material-ui/core/Hidden'; // To hide the MaterialUI Component if argument is true

// LAYOUT ----------------------------------------------------
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// ------------------------------------------------------------

// STYLE ------------------------------------------------------
import Typography from '@material-ui/core/Typography'; 
import {makeStyles, useTheme} from '@material-ui/core/styles';
// ------------------------------------------------------------

// ROUTER -----------------------------------------------------
import {Link}  from 'react-router-dom';
// ------------------------------------------------------------

// SVG ICON -----------------------------------------------------
import IconButton from '@material-ui/core/IconButton'; 
import SaveEnergyIcon from '../assets/bulb.svg';
import SaveTimeIcon from '../assets/stopwatch.svg';
import SaveMoneyIcon from '../assets/cash.svg'; 
import backArrow from '../assets/backArrow.svg';
import fowardArrow from '../assets/forwardArrow.svg';
import roots from '../assets/root.svg';
// ------------------------------------------------------------

// ANIMATION -----------------------------------------------------
import Lottie from 'react-lottie'; 
import animationData from '../animations/documentsAnimation/data'; 
import animationScale from '../animations/scaleAnimation/data.json';
import WheelAnimation from '../animations/automationAnimation/data.json';
import UXAnimation from '../animations/uxAnimation/data';
import CallToAction from './UI/CallToAction';
// ---------------------------------------------------------------

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: '40em'
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    MainContainer: {
        padding: '2em 5em 10em 5em',
        [theme.breakpoints.down("sm")]: {
            padding: '2em 2em 5em 2em'
        }
    },
    animation: {
        maxWidth: '50em',
        minWidth: '15em',
        marginTop: '2em',
        marginLeft: '10%',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '15em'
        }
    },
    itemContainer: {
        maxWidth: "41em"
    }
}));

export default function CustomSoftware(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSetting:  {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: animationScale,
        renderSetting:  {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const AutoOptions = {
        loop: true,
        autoplay: true,
        animationData: WheelAnimation,
        renderSetting:  {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const UXOptions = {
        loop: true,
        autoplay: true,
        animationData: UXAnimation,
        renderSetting:  {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <React.Fragment>
        <Grid container direction="column" className={classes.MainContainer}>
            {/*------FIRST SECTION -------*/}
            <Grid item container direction="row" justify={matchesMD ? 'center' : undefined}>
                <Hidden mdDown>
                <Grid 
                    item 
                    className={classes.arrowContainer} 
                    style={{marginRight: '1em', marginLeft: ' -3.5em'}}>
                    <IconButton 
                        style={{backgroundColor: 'transparent'}}                      
                        component={Link} to="/services"
                        onClick={() => {props.setSelectedIndex(0); props.setIsActive(1);}}>
                        <img src={backArrow} alt="Back Arrow" />
                    </IconButton>
                </Grid>
                </Hidden>
                
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? 'center' : 'inherit'}>
                            Custom Software Development 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
                            Whether we're replacing old software or inventing new solutions, Arc Development is here to help your business taclke technology.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
                            Using regular commercial software leaves you with a lot of stuff you don't need, without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all risk falling behind competitors and missing out on huge savings from increased efficiency.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
                            Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? 'center' : undefined}>
                            We create exactly what you need.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                <Grid item className={classes.arrowContainer}>
                    <IconButton 
                        style={{backgroundColor: 'transparent'}}
                        onClick={() => {props.setSelectedIndex(2); props.setIsActive(1);}}
                        component={Link} to="/mobileapps"> 
                        <img src={fowardArrow} alt="Foward Arrow" />
                    </IconButton>
                </Grid>
                </Hidden>

            </Grid>
            {/*------SECOND SECTION -------*/}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                alignItems={matchesXS ? "flex-start" : "center"} 
                justify="center" style={{marginTop: matchesSM ? '2em' : '5em'}}>
                <Grid item container direction="column" style={{maxWidth: '15em', marginLeft: matchesSM ? '2em' : '0em', textAlign: 'center'}}>
                    <Grid item>
                        <Typography variant="h2" style={{marginBottom: '0.5em'}}>Save Energy</Typography>
                        <img src={SaveEnergyIcon} alt="Save Energy Icon" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" 
                    style={{maxWidth: '15em', textAlign: 'center', marginRight: matchesSM ? '0em' : '4em', marginLeft: matchesSM ? '2em' : '4em',  marginTop: matchesMD ? '4em' : '0em', marginBottom: matchesMD ? '4em' : '0em'}}>
                    <Grid item>
                        <Typography variant="h2" style={{marginBottom: '0.5em'}}>Save Time</Typography>
                        <img src={SaveTimeIcon} alt="Save Energy Icon" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" style={{maxWidth: '15em' ,marginLeft: matchesSM ? '2em' : '0em' , marginBottom: matchesXS ? '5em' : '1em', textAlign: 'center'}}>
                    <Grid item>
                        <Typography variant="h2" style={{marginBottom: '0.5em'}}>Save Money</Typography>
                        <img src={SaveMoneyIcon} alt="Save Energy Icon" />
                    </Grid>
                </Grid>
            </Grid>
            {/*------THIRD SECTION -------*/}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                alignItems={matchesMD ? "center" : undefined}
                style={{marginTop: matchesMD ? '2em ' : '5em'}} 
                justify="space-around">
                <Grid item container className={classes.itemContainer} md>
                    <Hidden smUp>
                    <Grid item container md className={classes.animation}>
                        <Lottie options={defaultOptions} style={{maxHeight: 275, maxWidth: 275, minHeight: 250}} />   
                    </Grid>
                    </Hidden>
                    <Grid item container direction="column" style={{width: matchesMD ? '100%' : '50%'}} md>
                        <Typography variant="h4">Digital Documents & Data</Typography>
                        <Typography variant="body1" paragraph>
                            Reduce Errors. Reduce Waste. Reduce Costs.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
                        </Typography>
                    </Grid>
                    <Hidden xsDown> 
                    <Grid item container md className={classes.animation}>
                        <Lottie options={defaultOptions} style={{maxHeight: 275, maxWidth: 275, minHeight: 250}} />   
                    </Grid>
                    </Hidden>
                </Grid>
                
                <Grid 
                    item container 
                    className={classes.itemContainer} md
                    style={{marginTop: "5em"}}>
                    <Grid item container md className={classes.animation}>
                        <Lottie options={scaleOptions} style={{maxHeight: 260, maxWidth: 280}} />   
                    </Grid>
                    <Grid item container direction="column" style={{width: matchesMD ? '100%' : '50%'}} md>
                        <Typography variant="h4" align="right">Scale</Typography>
                        <Typography variant="body1" align="right" paragraph>
                            Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/*------FOURTH SECTION -------*/}
            <Grid 
                item container 
                direction="row" 
                style={{marginTop: matchesMD ? '4em' : '10em', marginBottom:  matchesMD ? '4em' : '10em'}}>
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img src={roots} alt="tree with roots extending out" height={matchesMD ? "250em" : "450em"} width={matchesMD ? "250em" : "450em"}/>
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Root-Cause Analysis
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/*------FIFTH SECTION -------*/}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                alignItems={matchesMD ? "center" : undefined} 
                style={{marginTop: matchesSM ? '0em' : '5em', marginBottom: '10em'}} 
                justify="space-around">
                <Hidden smUp>
                    <Grid item container md className={classes.animation}>
                        <Lottie options={AutoOptions} style={{maxHeight: 275, maxWidth: 275, minHeight: 250}} />   
                    </Grid>
                </Hidden>    
                <Grid item container className={classes.itemContainer} md>
                    <Grid item container direction="column" style={{width: matchesMD ? '100%' : '50%'}} md>
                        <Typography variant="h4">Automation</Typography>
                        <Typography variant="body1" paragraph>
                            Why waste time when you don’t have to?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We can help you identify processes with time or event based actions which can now easily be automated.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
                        </Typography>
                    </Grid>
                    <Hidden xsDown>
                    <Grid item container md className={classes.animation}>
                        <Lottie options={AutoOptions} style={{maxHeight: 275, maxWidth: 275, minHeight: 250}} />   
                    </Grid>
                    </Hidden>
                </Grid>
                
                <Grid 
                    item container 
                    className={classes.itemContainer} md>
                    <Grid item container md className={classes.animation}>
                        <Lottie options={UXOptions} style={{maxHeight: 260, maxWidth: 280}} />   
                    </Grid>
                    <Grid item container direction="column" style={{width: matchesMD ? '100%' : '50%', marginTop: matchesSM ? '2em' : '0em'}} md>
                        <Typography variant="h4" align="right">User Experience Design</Typography>
                        <Typography variant="body1" align="right" paragraph>
                            A good design that isn’t usable isn’t a good design.
                        </Typography>
                        <Typography variant="body1" align="right" paragraph>
                            So why are so many pieces of software complicated, confusing, and frustrating?
                        </Typography>
                        <Typography variant="body1" align="right" paragraph>
                            By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <CallToAction />
        </React.Fragment>
    );
}