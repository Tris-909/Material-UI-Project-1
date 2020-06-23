import React from 'react'; // Functional Component

// MATERIAL-UI BUTTON 
import Button from '@material-ui/core/Button'; 
import ButtonArrow from '../Components/original'; 
// ----------------------------------------------------- //

// CUSTOM AND DEFAULT STYLES 
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'; 
// ----------------------------------------------------- //

// ANIMATION
import Lottie from 'react-lottie'; 
import animationData from '../animations/landinganimation/data'; 
// ----------------------------------------------------- //

// GRID lAYOUT AND BREAKPOINTS 
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// ------------------------------------------------------//


// HOOKING UP LINKS
import {Link} from 'react-router-dom';
// ----------------------------------------------------- //

// MATERIAL-UI CARD
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// ------------------------------------------------------//

// ICON
import customSofwareIcon from '../assets/Custom Software Icon.svg'; 
import mobileAppIcon from '../assets/mobileIcon.svg';
import WebsiteIcon from '../assets/websiteIcon.svg';
//------------------------------------------------------//

// BACKGROUND
import RevolutionBackground from '../assets/repeatingBackground.svg';
import InfoBackground from '../assets/infoBackground.svg';
// -----------------------------------------------------// 

// CALL_TO_ACTION COMPONENT
import CallToAction from './UI/CallToAction';
//------------------------------------------------------//



const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: '50em',
        minWidth: '21em',
        marginTop: '2em',
        marginLeft: '10%',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '30em'
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: '1em'
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    mainContainer: {
        marginTop: '5em',
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: '21.5em',
        marginLeft: '1em',
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: '2em'
        }
    },
    subtitle: {
        marginBottom: '1em'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    servicesContainer: {
        marginTop: '12em',
        [theme.breakpoints.down("sm")]: {
            padding: 25,
            marginTop: '3em'
        }
    },
    servicesContainerFirst: {
        marginTop: '20em',
        [theme.breakpoints.down("sm")]: {
            padding: 25,
            marginTop: '3em'
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${RevolutionBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        height: '100%',
        width: '100%',
        marginTop: '8em'
    },
    CardRevolution: {
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: '10em',
        [theme.breakpoints.down('sm')]: {
            padding: '8em 0 8em 0'
        }
    },
    infoBackground: {
        backgroundImage: `url(${InfoBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        height: '100%',
        width: '100%'
    },
    learnButtonInfo: {
        borderWidth: 2,
        textTransform: 'none',
        borderRadius: 50,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: "0.9rem",
        height: 45,
        width: 145,
        color: theme.palette.common.white,
        borderColor: theme.palette.common.white,
        marginTop: '1.5em'
    },
    infoTitle: {
        fontFamily: 'RaleWay',
        fontWeight: 700,
        fontSize: "2.5rem",
        color: theme.palette.common.white,
        lineHeight: 1.5
    }

}));

export default function LandingPage(props) {
    const classes = useStyles();
    const theme = useTheme();
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

    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item> {/*-----Hero Block-----*/}
                <Grid container alignItems="center" justify="flex-end" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography align="center" variant="h2">Bringing West Coast Technology <br /> to the Midwest</Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button component={Link} to="/estimate" 
                                        className={classes.estimateButton} 
                                        variant="contained" onClick={() => props.setIsActive(5)}>
                                            Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" 
                                    component={Link} to="/revolution" 
                                    className={classes.learnButtonHero}
                                    onClick={() => props.setIsActive(2)}>
                                    <span style={{marginRight: 10}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />   
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> 
            {/*-----CustomSofware Block-----*/}
                <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.servicesContainerFirst}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to {" "}
                            <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button variant="outlined" 
                                className={classes.learnButton} 
                                component={Link} to="/customsoftware"
                                onClick={() => {props.setSelectedIndex(1); props.setIsActive(0);}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={customSofwareIcon} alt="custom software icon" />
                    </Grid>
                </Grid>
                {/*-----iOS/Android Block-----*/}
                <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"} className={classes.servicesContainer}>
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br />}with either mobile platform.
                        </Typography>
                        <Button variant="outlined" 
                                className={classes.learnButton} 
                                component={Link} to="/mobileapps"
                                onClick={() => {props.setSelectedIndex(2); props.setIsActive(0);}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : '5em'}}>
                        <img className={classes.icon} src={mobileAppIcon} alt="ios/android development icon" />
                    </Grid>
                </Grid>
                {/*-----WebDev Block-----*/}
                <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.servicesContainer}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Websites Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.  
                        </Typography>
                        <Button 
                            variant="outlined" 
                            className={classes.learnButton} 
                            component={Link} to="/websites"
                            onClick={() => {props.setSelectedIndex(3); props.setIsActive(0);}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={WebsiteIcon} alt="Website icon" />
                    </Grid>
                </Grid>
            </Grid>
            {/*----- REVOLUTION BLOCK -----*/}
            <Grid item>
                <div className={classes.revolutionBackground}>
                <Grid container alignItems="center" justify="center" style={{height: matchesXS ? '55em' : '100em', width: '100%'}}>
                <Card className={classes.CardRevolution}>
                    <CardContent>
                        <Grid container direction="column" style={{textAlign: 'center'}}>
                            <Grid item>
                                <Typography variant="h3" gutterBottom>
                                    The Revolution
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                </Typography>
                                <Button 
                                    variant="outlined" 
                                    component={Link} to="/revolution" 
                                    className={classes.learnButtonHero}
                                    onClick={() => props.setIsActive(2)}>
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                </Grid>
                </div>
            </Grid>     
            {/*----- INFORMATION BLOCK -----*/}
            <Grid item>
                <div className={classes.infoBackground}> 
                <Grid container alignItems="center" direction='row' style={{height: matchesXS ? '45em' : '80em', width: '100%'}}>
                    <Grid item container style={{textAlign: matchesXS ? 'center' : 'inherit'}} direction={matchesXS ? 'column' : 'row'}>
                {/*----- Info left -----*/}
                <Grid item sm style={{marginLeft: matchesXS ? '0em' : matchesSM ? '2em' : '5em' }}>
                    <Grid container direction="column" style={{marginBottom: matchesXS ? '5em' : undefined}}>
                        <Typography className={classes.infoTitle}>
                            About Us 
                        </Typography>
                        <Typography variant="subtitle2">
                            Let's get personal.
                        </Typography>
                        <Grid item>  
                        <Button 
                            variant="outlined" 
                            className={classes.learnButtonInfo} 
                            component={Link} to="/about" 
                            onClick={() => props.setIsActive(3)}>
                                <span style={{marginRight: 10}}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.white}/>
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
                {/*----- Info Right-----*/}
                <Grid item sm style={{marginRight: matchesXS ? '0em' : matchesSM ? '2em' : '5em', textAlign: matchesXS ? 'center ' : 'right'}}>
                    <Grid container direction="column">
                        <Typography className={classes.infoTitle}>
                            Contact Us 
                        </Typography>
                        <Typography variant="subtitle2">
                            Say Hello! 
                        </Typography>
                        <Grid item>
                            <Button 
                                variant="outlined" 
                                className={classes.learnButtonInfo} 
                                component={Link} to="/contact"
                                onClick={() => props.setIsActive(4)}>
                                    <span style={{marginRight: 10}}>Learn More</span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.white}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                    </Grid>
                </Grid>
                </div>
            </Grid>
            {/*----- CALL_TO_ACTION BLOCK -----*/}
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid>);
}