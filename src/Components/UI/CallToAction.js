import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../original';
import Background from '../../assets/background.jpg';
import MobileBackGround from '../../assets/mobileBackground.jpg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    backgroundCTA: {
        backgroundImage: `url(${Background})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        height: '60em',
        width: '100%',
        [theme.breakpoints.down("md")]: {
            backgroundImage:  `url(${MobileBackGround})`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5rem',
        marginRight: '5em',
        marginLeft: '2em',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: '0em',
            marginLeft: '0em',
            marginTop: '3em'
        }
    }
}));

export default function CallToAction() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return(
        <Grid container justify={matchesXS ? "center" : "space-between"} alignItems="center" className={classes.backgroundCTA} direction={matchesXS ? 'column' : 'row'}>    
            <Grid item style={{marginLeft: matchesXS ? '0em' : '5em', textAlign: matchesXS ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">Simple Software.<br /> Revolutionary Results.</Typography>
                        <Typography variant="subtitle2" style={{fontSize: '1.5rem'}}>Take advantage of the 21st Century.</Typography>
                        <Grid container justify={matchesXS ? "center" : undefined} item> 
                            <Button variant="outlined" className={classes.learnButtonHero} component={Link} to="/revolution">
                                <span style={{marginRight: 8}}>Learn More</span>
                                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button component={Link} to="/estimate" variant="contained" className={classes.estimateButton}>
                    Free Estimate
                </Button>
            </Grid>
        </Grid>
    );
}