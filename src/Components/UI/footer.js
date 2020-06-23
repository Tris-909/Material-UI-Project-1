import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down("md")]: {
            width: '21em'
        },
        [theme.breakpoints.down("xs")]: {
            width: '12em'
        }
    },
    MainContainer: {
        position: 'absolute'
    },
    link: {
        color: "white",
        fontFamily: 'Arial',
        fontSize: '1rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: "3.5em"
    },
    icon: {
        height: '4em',
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: '1.5em',
            width: '1.5em'
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: "-6em",
        right: '1.5em',
        [theme.breakpoints.down("xs")]: {
            right: "0.6em"
        }
    }
}));

export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
            <Grid container justify="center" className={classes.MainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} onClick={() => props.setIsActive(0)} component={Link} to="/">
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} onClick={() => {props.setIsActive(1); props.setSelectedIndex(0);}} component={Link} to="/services">
                            Services
                        </Grid>
                        <Grid item className={classes.link} onClick={() => {props.setIsActive(1); props.setSelectedIndex(1);}} component={Link} to="/customsoftware">
                            Custom Sofware Development
                        </Grid>
                        <Grid item className={classes.link} onClick={() => {props.setIsActive(1); props.setSelectedIndex(2);}} component={Link} to="/mobileapps">
                            iOS/Android App Development
                        </Grid>
                        <Grid item className={classes.link} onClick={() => {props.setIsActive(1); props.setSelectedIndex(3);}} component={Link} to="/websites">
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}  onClick={() => props.setIsActive(2)} component={Link} to="/revolution">
                            The Revolution
                        </Grid>
                        <Grid item className={classes.link}  onClick={() => props.setIsActive(2)} component={Link} to="/vision">
                            Vision
                        </Grid>
                        <Grid item className={classes.link}  onClick={() => props.setIsActive(2)} component={Link} to="/technology">
                            Technology
                        </Grid>
                        <Grid item className={classes.link}  onClick={() => props.setIsActive(2)} component={Link} to="/process">
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link}  onClick={() => props.setIsActive(3)} component={Link} to="/about">
                            About Us
                        </Grid>
                        <Grid item className={classes.link}  onClick={() => props.setIsActive(3)} component={Link} to="/history">
                            History
                        </Grid>
                        <Grid item className={classes.link}  onClick={() => props.setIsActive(3)} component={Link} to="/team">
                            Team Member
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} onClick={() => props.setIsActive(4)} component={Link} to="/contact">
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            <img alt="black slash" src={footerAdornment} className={classes.adornment}/>
            <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
                <Grid item component={"a"} href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                    <img src={facebook} alt="Facebook link" className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://twitter.com/explore" rel="noopener noreferrer" target="_blank">
                    <img src={twitter} alt="Twitter link" className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com/?hl=en" rel="noopener noreferrer" target="_blank">
                    <img src={instagram} alt="Instagram link" className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    );
}