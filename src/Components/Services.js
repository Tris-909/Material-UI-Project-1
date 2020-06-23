import React from 'react';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import ButtonArrow from './original';
import customSofwareIcon from '../assets/Custom Software Icon.svg'; 
import mobileAppIcon from '../assets/mobileIcon.svg';
import WebsiteIcon from '../assets/websiteIcon.svg';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography'; 

const useStyles = makeStyles(theme => ({
    pageTitle: {
        color: theme.palette.common.lightBlue,
        [theme.breakpoints.down("md")]: {
            marginBottom: "0.5em",
            fontSize: '5rem'
        }
    },
    sectionTitle: {
        color: theme.palette.common.lightBlue
    },
    learnButton: {
        borderColor: theme.palette.common.lightBlue,
        color: theme.palette.common.lightBlue,
        borderWidth: 2,
        textTransform: 'none',
        borderRadius: 50,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: '2em'
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: '1em'
    },
    servicesContainer: {
        marginTop: '2em'
    }
}));

export default function Services(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
    
    return(
        <Grid containe direction="column">
            {/*------- Title ------*/}
            <Grid item style={{marginLeft: matchesSM ? 0 : '5em', marginTop: '3em'}}>
                <Typography variant="h2" className={classes.pageTitle} style={{textAlign: matchesMD ? "center" : undefined}}>
                    Services
                </Typography>
            </Grid>
            {/*------- First section -------*/}
            <Grid 
                container 
                direction="row" 
                justify={matchesMD ? "center" : "flex-end"}>
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4" className={classes.sectionTitle}>
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
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.lightBlue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : '1.5em', marginBottom: matchesMD ? "4em" : "1em"}}>
                        <img src={mobileAppIcon} alt="ios/android development icon" />
                    </Grid>
            </Grid>
            {/*------Second Section ------*/}
            <Grid 
                container 
                direction={matchesLG ? "row" : matchesMD ? "column" : "row"} 
                justify={matchesMD ? "center" : "flex-start"}>
                <Grid item style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? "center" : undefined }}>
                    <Typography variant="h4" className={classes.sectionTitle}>
                        Custom Software Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Save Energy. Save Time. Save Money.
                    </Typography>
                    <Typography variant="subtitle1">
                        Complete digital solutions, from investigation <br /> to {" "} 
                        <span className={classes.specialText}>celebration.</span>
                    </Typography>
                    <Button variant="outlined" 
                            className={classes.learnButton} 
                            component={Link} to="/customsoftware"
                            onClick={() => {props.setSelectedIndex(1); props.setIsActive(0);}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.lightBlue}/>
                    </Button>
                </Grid>
                <Grid item style={{marginBottom: matchesMD ? "2em" : "1em",marginLeft: matchesSM ? 0 : '4em' , textAlign: matchesMD ? "center" : "inherit"}}>
                    <img src={customSofwareIcon} alt="custom software icon" />
                </Grid>
            </Grid>
            {/*------Third Section ------*/}
            <Grid 
                container 
                direction={matchesLG ? "row" : matchesMD ? "column" : "row"} 
                justify={matchesMD ? "center" : "flex-end"} 
                style={{marginBottom: matchesSM ? '3em' : '5em'}}>
                    <Grid item style={{marginRight: matchesSM ? 0 : '2em', textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4" className={classes.sectionTitle}>
                            Websites Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines,<br /> built for speed.  
                        </Typography>
                        <Button 
                            variant="outlined" 
                            className={classes.learnButton} 
                            component={Link} to="/websites"
                            onClick={() => {props.setSelectedIndex(3); props.setIsActive(0);}}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.lightBlue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginLeft: matchesMD ? '2em' : '1em', marginRight: matchesMD ? '1em' : '4em', marginBottom: matchesMD ? "2em" : "1em", textAlign: matchesMD ? "center" : "inherit"}}>
                        <img src={WebsiteIcon} alt="Website icon" />
                    </Grid>
            </Grid>
            {/* THE END OF SERVICES PAGE */}
        </Grid>
    );
}