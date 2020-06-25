import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import YearBook from '../assets/yearbook.svg';
import Founder from '../assets/founder.jpg';
import Puppy from '../assets/puppy.svg';
import History from '../assets/history.svg';

import CallToAction from './UI/CallToAction';   

const useStyles = makeStyles(theme => ({
    AboutTitle: {
        ...theme.typography.body4
    },
    MainContainer: {
        padding: '2em 3em 10em 3em',
        [theme.breakpoints.down("xs")]: {
            padding: '2em 1em 2em 1em'
        }
    },
    BorderPic: {
        borderRadius: '1000px',
        width: '40%',
        [theme.breakpoints.down("md")]: {
            width: '20%'
        },
        [theme.breakpoints.down("sm")]: {
            width: '35%'
        },
        [theme.breakpoints.down("xs")]: {
            width: '40%'
        }
    }
}));

export default function About(props) {
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return(
        <React.Fragment>
            <Grid item container direction="column" className={classes.MainContainer}>
                <Grid item container direction="column">
                    <Grid item style={{marginBottom: matchesSM ? '3em' : '5em'}}>
                        <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                            About Us
                        </Typography>
                    </Grid>
                    <Grid item align="center" justify="center">
                        <Typography paragraph style={{width: '70%'}} className={classes.AboutTitle}>
                            Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="row">
                    <Grid item container direction="column" align={matchesSM ? 'center' : undefined} style={{marginRight: matchesMD ? undefined : '5em'}} md>
                        <Grid item style={{marginTop: '5em'}}>
                            <Typography variant="h4">
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                <span style={{fontWeight: 'bold'}}>We’re the new kid on the block.</span>
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Founded in 2019, we’re ready to get our hands on the world’s business problems.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                It all started with one question: Why aren’t all businesses using available technology? There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                All this change can be a lot to keep up with, and that’s where we come in.
                            </Typography>
                        </Grid> 
                    </Grid>
                    <Grid 
                        item md 
                        style={{width: matchesMD ? '100%' : undefined}}
                        >
                        <img src={History} alt="History Icon" style={{alignSelf: matchesMD ? 'center' : undefined, width: matchesMD ? '100%' : undefined}}/>
                    </Grid>
                </Grid>

                <Grid 
                    item container 
                    direction={matchesMD ? "column" : "row"} justify="space-between" 
                    style={{marginTop: matchesMD ? '5em' : '10em', height: matchesMD ? undefined : '43em'}}>
                    <Grid 
                        item container 
                        direction="column" sm 
                        style={{alignSelf: matchesMD ? "center" : 'flex-end', marginBottom: matchesMD ? '3em' : undefined}}
                        align={matchesMD ? "center" : undefined}>
                        <Grid item  style={{width: matchesMD ? '100%' : undefined}}>
                            <img src={YearBook} alt="yearBook" style={{alignSelf: matchesMD ? 'center' : undefined, width: matchesMD ? '100%' : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                a page from my Sophomore yearbook
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid 
                        item container 
                        direction="column" sm 
                        style={{marginLeft: matchesMD ? undefined : '2em', marginRight: matchesMD ? undefined : '2em', alignSelf: 'flex-start'}}
                        align={matchesMD ? "center" : undefined}>
                        <Grid item>
                            <Typography variant="h4" align="center" style={{marginBottom: '0.5em'}}>
                                Team
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" paragraph align="center">
                                Zachary Reece, Founder
                            </Typography>
                            <Typography variant="body2" paragraph align="center">
                                I started coding when I was 9 years old.
                            </Typography>
                        </Grid>
                        <Grid item justify="center" align="center">
                            <img src={Founder} alt="Founder" className={classes.BorderPic} style={{height: '100%'}}/>
                        </Grid>
                        <Grid item style={{width: matchesXS ? '80%' : '50%', alignSelf: "center", marginTop: matchesMD ? '3em' : undefined}}>
                            <Typography variant="body2" paragraph align="center">
                                I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                            </Typography>
                            <Typography variant="body2" paragraph align="center">
                                Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
                            </Typography>   
                        </Grid>
                    </Grid>
                
                    <Grid 
                        item container 
                        direction="column" sm 
                        style={{alignSelf: matchesMD ? 'center' : 'flex-end', marginTop: matchesMD ? '3em' : undefined}} 
                        align={matchesMD ? "center" : undefined}>
                        <Grid item style={{width: matchesMD ? '100%' : undefined}}>
                            <img src={Puppy} alt="Puppy" style={{alignSelf: matchesMD ? 'center' : undefined, width: matchesMD ? '100%' : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                my miniature dapple dachshund, Sterling
                            </Typography>
                        </Grid>
                    </Grid>
                
                </Grid>
            </Grid>
            <CallToAction />
        </React.Fragment>
    );
}