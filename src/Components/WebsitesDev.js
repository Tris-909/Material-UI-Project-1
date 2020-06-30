import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {Link} from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import backArrow from '../assets/backArrow.svg';
import fowardArrow from '../assets/forwardArrow.svg';
import IconButton from '@material-ui/core/IconButton'; 

import AnalyticsIcon from '../assets/analytics.svg';
import ECommerce from '../assets/ecommerce.svg';
import OutrectIcon from '../assets/outreach.svg';
import SEOIcon from '../assets/seo.svg';

import CallToAction from './UI/CallToAction';

const useStyles = makeStyles((theme) => ({
    MainContainer: {
        padding: '2em 5em 10em 5em',
        [theme.breakpoints.down("xs")]: {
            padding: '2em 1em 2em 1em'
        }
    },
    heading: {
        maxWidth: '40em'
    },
    Paragraph: {
        maxWidth: '30em'
    }
}));

export default function WebsitesDev(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    
    return(
        <React.Fragment>
            <Grid item container direction="column" className={classes.MainContainer}>
                {/*--------- FIRST SECTION -------*/}
                <Grid item container direction="row">
                    <Hidden mdDown>
                    <Grid 
                        item 
                        className={classes.arrowContainer} 
                        style={{marginRight: '1em'}}>
                        <IconButton 
                            style={{backgroundColor: 'transparent'}}                      
                            component={Link} to="/mobileapps"
                            onClick={() => {props.setSelectedIndex(2); props.setIsActive(1);}}>
                            <img src={backArrow} alt="Back Arrow" />
                        </IconButton>
                    </Grid>
                    </Hidden>

                    <Grid item container direction="column" className={classes.heading}>
                        <Grid item>
                            <Typography variant="h2">
                                Website Development
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers. 
                            </Typography>
                        </Grid>
                    </Grid>

                    <Hidden mdDown>
                        <Grid item className={classes.arrowContainer}>
                            <IconButton 
                                style={{backgroundColor: 'transparent'}}
                                onClick={() => {props.setIsActive(2);}}
                                component={Link} to="/revolution"> 
                                    <img src={fowardArrow} alt="Foward Arrow" />
                            </IconButton>
                        </Grid>
                    </Hidden>
                </Grid>

                {/*--------- SECOND SECTION -------*/}
                <Grid item container direction="column" style={{marginTop: matchesXS ? '5em' : '10em'}}>
                    <Grid item style={{marginLeft: '2.5em', marginBottom: '1em'}}>
                        <Typography variant="h4">
                            Analytics
                        </Typography>
                    </Grid>
                    <Grid item container direction="row">
                        <Grid item>
                            <img src={AnalyticsIcon} alt="Analytics Icon" />
                        </Grid>
                        <Grid item className={classes.Paragraph} style={{marginTop: '3em', marginLeft: matchesMD ? matchesXS ? undefined : '3em' : '1em'}}>
                            <Typography variant="body1" paragraph>
                                Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, <br/> empowering you to make smarter decisions with measurable effects.
                            </Typography> 
                        </Grid>
                    </Grid>
                </Grid>

                {/*--------- THIRD SECTION -------*/}
                <Grid item container direction="column" style={{marginTop: matchesXS ? '5em' : '10em'}}>
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "flex-start" : "center"} 
                        style={{marginLeft: matchesMD ? '1em' : '4em' ,marginBottom: '1em'}}>
                            E-Commerce
                        </Typography>
                    </Grid>
                    <Grid item container direction="row" justify={matchesMD ? undefined : "flex-end"}>
                        <Grid item>
                            <img src={ECommerce} alt="ECommerce Icon" />
                        </Grid>
                        <Grid item className={classes.Paragraph} style={{marginTop: '3em', marginLeft: matchesMD ? matchesXS ? undefined : '3em' : '1em'}}>
                            <Typography variant="body1" paragraph>
                                It’s no secret that people like to shop online.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                In 2017 over <span style={{fontWeight: 'bold'}}>$2.3 trillion</span> was spent in e-commerce, and it’s time for your slice of that pie.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/*--------- FOURTH SECTION -------*/}
                <Grid item container direction="column" style={{marginTop: matchesXS ? '5em' : '10em'}}>
                    <Grid item style={{marginLeft: '2.5em', marginBottom: '1em'}}>
                        <Typography variant="h4">
                            Outreach
                        </Typography>
                    </Grid>
                    <Grid item container direction="row">
                        <Grid item>
                            <img src={OutrectIcon} alt="OutReach Icon" />
                        </Grid>
                        <Grid item className={classes.Paragraph} style={{marginTop: '3em', marginLeft: matchesMD ? matchesXS ? undefined : '3em' : '1em'}}>
                            <Typography variant="body1" paragraph>
                                Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.
                            </Typography> 
                        </Grid>
                    </Grid>
                </Grid>

                {/*--------- FIFTH   SECTION -------*/}
                <Grid item container direction="column" style={{marginTop: matchesXS ? '5em' : '10em', marginBottom: '5em'}}>
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "flex-start" : "center"} 
                        style={{marginLeft: matchesMD ? '1em' : '4em' ,marginBottom: '1em'}}>
                            Search Engine Optimization
                        </Typography>
                    </Grid>
                    <Grid item container direction="row" justify={matchesMD ? undefined : "flex-end"}>
                        <Grid item>
                            <img src={SEOIcon} alt="SEO Icon" />
                        </Grid>
                        <Grid item className={classes.Paragraph} style={{marginTop: '3em', marginLeft: matchesMD ? matchesXS ? undefined : '3em' : '1em'}}>
                            <Typography variant="body1" paragraph>
                                How often have you ever been to the second page of Google results?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                If you’re like us, probably never.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Customers don’t go there either, so we make sure your website is designed to end up on top.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*--------- CALL_TO_ACTION SECTION -------*/}
            <CallToAction />
        </React.Fragment>
    );
}