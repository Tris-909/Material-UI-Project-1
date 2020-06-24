import React from 'react';

import Button from '@material-ui/core/Button';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {Link} from 'react-router-dom';

import VisionIcon from '../assets/vision.svg';
import HammerIcon from '../assets/Screen Shot 2019-05-22 at 12.46.03 AM.svg';
import ConsultantIcon from '../assets/consultationIcon.svg';
import MockUpIcon from '../assets/mockupIcon.svg';
import ReviewIcon from '../assets/reviewIcon.svg';
import DesignIcon from '../assets/designIcon.svg';
import BuildIcon from '../assets/buildIcon.svg';
import LaunchIcon from '../assets/launchIcon.svg';
import MaintainIcon from '../assets/maintainIcon.svg';
import IterateIcon from '../assets/iterateIcon.svg';

import CallToAction from './UI/CallToAction';   

const useStyles = makeStyles(theme => ({
    MainContainer: {
        padding: '2em 5em 10em 5em',
        [theme.breakpoints.down("xs")]: {
            padding: '2em 1em 2em 1em'
        }
    }
}));

export default function Revolution(props) {
    const classes = useStyles();
    const theme = useTheme();

    return(
        <React.Fragment>
            <Grid item container direction="column" className={classes.MainContainer}>
                {/* FIRST SECTION */}
                <Grid item style={{marginBottom: '10em'}}>
                    <Typography variant="h3">
                        The Revolution
                    </Typography>
                </Grid>

                <Grid item container direction="row" style={{marginBottom: '10em'}}>
                    <Grid item md>
                        <img src={VisionIcon} alt="Vision Icon" />
                    </Grid>
                    <Grid item container direction="column" style={{marginLeft: '5em'}} md>
                        <Grid item>
                            <Typography variant="h4" align="right">
                                Vision
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" align="right" paragraph>
                                The rise of computers, and subsequently the Internet, has completely altered every aspect of human life. This has increased our comfort, broadened our connections, and reshaped how we view the world.
                            </Typography>
                            <Typography variant="body2" align="right" paragraph>
                                What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.  
                            </Typography>
                            <Typography variant="body2" align="right" paragraph>
                                We want to help businesses capitalize on the latest and greatest technology. The best way to predict the future is to be the one building it, and we want to help guide the world into this next chapter of technological expansion, exploration, and innovation.
                            </Typography>
                            <Typography variant="body2" align="right" paragraph>
                                By holding ourselves to rigorous standards and pristine quality, we can ensure you have the absolute best tools necessary to thrive in this new frontier.
                            </Typography>
                            <Typography variant="body2" align="right" paragraph>
                                We see a future where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that goal.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* SECOND SECTION */}
                <Grid item container direction="row" style={{marginTop: '5em'}}>
                    <Grid item container direction="column" md>
                        <Grid item style={{marginBottom: '3em'}}>
                            <Typography variant="h4">
                                Technology
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" paragraph>
                                In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website development.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Instead of chaining together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Developers have since built on top of these systems by automating project setup and deployment, allowing creators to focus as much as possible on their work itself.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                These technical advancements translate into savings by significantly reducing the workload and streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                This puts personalization in your pocket — faster, better, and more affordable than ever before.
                            </Typography>    
                        </Grid>
                    </Grid>
                    <Grid item md style={{marginLeft: '5em'}}>
                        <img src={HammerIcon} alt="Technology Icon" />
                    </Grid>
                </Grid>

                <Grid item container direction="row" justify="center" align="center" style={{marginTop: '10em'}}>
                    <Typography variant="h4"> 
                        Process
                    </Typography>
                    
                </Grid>

            </Grid>
        </React.Fragment>
    );
}