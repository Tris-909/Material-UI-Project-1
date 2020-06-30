import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {Link}  from 'react-router-dom';

import Typography from '@material-ui/core/Typography'; 
import {makeStyles, useTheme} from '@material-ui/core/styles';

import backArrow from '../assets/backArrow.svg';
import fowardArrow from '../assets/forwardArrow.svg';
import phone from '../assets/iphone.svg';
import IconButton from '@material-ui/core/IconButton'; 
import Tools from '../assets/swissKnife.svg';
import Menu from '../assets/extendAccess.svg';
import IncEngage from '../assets/increaseEngagement.svg';

import CallToAction from './UI/CallToAction';

const useStyles = makeStyles(theme => ({
    arrowContainer: {
        marginTop: "0.5em"
    },
    heading: {
        maxWidth: '40em'
    },
    MainContainer: {
        padding: '2em 5em 10em 5em',
        [theme.breakpoints.down("xs")]: {
            padding: '2em 1em 2em 1em'
        }
    }
}));

export default function MobileDevelopment(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


    return(
        <React.Fragment>
            <Grid item container direction='column'  className={classes.MainContainer}>
                {/*--------- FIRST SECTION -------*/}
                <Grid item container direction="row">
                    <Hidden mdDown>
                    <Grid 
                        item 
                        className={classes.arrowContainer} 
                        style={{marginRight: '1em'}}>
                        <IconButton 
                            style={{backgroundColor: 'transparent'}}                      
                            component={Link} to="/customsoftware"
                            onClick={() => {props.setSelectedIndex(1); props.setIsActive(1);}}>
                            <img src={backArrow} alt="Back Arrow" />
                        </IconButton>
                    </Grid>
                    </Hidden>

                    <Grid item container direction="column" className={classes.heading}>
                        <Grid item>
                            <Typography variant={matchesXS ? "h4" : "h2"}>
                                iOS/Android App Development
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={matchesXS ? "body2" : "body1"} paragraph>
                            Mobile apps allow you to take your tools on the go.
                            </Typography>
                            <Typography variant={matchesXS ? "body2" : "body1"} paragraph>
                            Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                            </Typography>
                            <Typography variant={matchesXS ? "body2" : "body1"} paragraph>
                            Convenience. Connection.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Hidden mdDown>
                        <Grid item className={classes.arrowContainer}>
                            <IconButton 
                                style={{backgroundColor: 'transparent'}}
                                onClick={() => {props.setSelectedIndex(3); props.setIsActive(1);}}
                                component={Link} to="/websites"> 
                                    <img src={fowardArrow} alt="Foward Arrow" />
                            </IconButton>
                        </Grid>
                    </Hidden>
                </Grid>
                {/*--------- SECOND SECTION -------*/}
                <Grid item container direction={matchesXS ? "column" : "row"} justify={matchesXS ? "center" : undefined} style={{marginTop: '5em'}}>
                    <Grid item container direction="column" xs align="center" justify="center">
                        <Grid item>
                            <Typography variant="h4" align={matchesXS ? "center" : "left"} style={{marginBottom: '.5em'}}>
                                Integration
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={matchesXS ? "body2" : "body1"}  align={matchesXS ? "center" : "left"} style={{marginBottom: '.5em'}}>
                                Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
                            </Typography>
                            <Typography variant={matchesXS ? "body2" : "body1"}  align={matchesXS ? "center" : "left"}>
                                This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs align="center" style={{marginBottom: matchesXS ? '3em' : undefined, marginTop: matchesXS ? '3em' : undefined}}>
                        <img src={phone} alt="Phone Icon" height={matchesXS ? "200em" : "350em"} width={matchesXS ? "200em" : "350em"}/>
                    </Grid>
                    <Grid item container direction="column" style={{marginTop: matchesSM ? '2em' : undefined}} xs align="center" justify="center">
                        <Grid item>
                            <Typography align={matchesXS ? "center" : "right"} variant="h4" style={{marginBottom: '.5em'}}>
                                Simultaneous Platform Support
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={matchesXS ? "body2" : "body1"} align={matchesXS ? "center" : "right"} paragraph>
                                Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — <br /> all at the same time.
                            </Typography>
                            <Typography variant={matchesXS ? "body2" : "body1"} align={matchesXS ? "center" : "right"} paragraph>
                                This significantly reduces costs and creates a more unified brand experience across all devices.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {/*--------- THIRD SECTION -------*/}
                <Grid item container direction={matchesSM ? "column" : "row"} style={{marginTop: matchesXS ? '5em' : '10em', marginBottom: matchesXS ? '5em' : '10em'}}>
                    <Grid item container direction="column" align="center" justify="center" xs style={{marginBottom: matchesSM ? '4em' : undefined }}>
                        <Grid item>
                            <Typography variant="h4" style={{marginBottom:'1em'}}>
                                Extend Functionality
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={Tools} alt="Swift Knife Icon" style={{width: matchesMD ? '10em' : undefined}}/>
                        </Grid>
                    </Grid> 

                    <Grid item container direction="column" align="center" justify="center" xs style={{marginBottom: matchesSM ? '4em' : undefined }}>
                        <Grid item>
                            <Typography variant="h4" style={{marginBottom:'2em'}}>
                                Extend Access
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={Menu} alt="Extend Access" style={{width: matchesSM ? '15em' : matchesMD ? '20em' : undefined}}/>
                        </Grid>
                    </Grid> 

                    <Grid item container direction="column" align="center" justify="center" xs>
                        <Grid item>
                            <Typography variant="h4" style={{marginBottom:'1em'}}>
                                Increase Engagement
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={IncEngage} alt="Increase Engagements Icon" style={{width: matchesMD ? '10em' : undefined}}/>
                        </Grid>
                    </Grid> 
                </Grid>
            </Grid>
            {/*--------- FOURTH SECTION -------*/}
            <CallToAction />
        </React.Fragment>
    );
}