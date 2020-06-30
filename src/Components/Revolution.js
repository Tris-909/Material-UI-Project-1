import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    }, 
    Revo1: {
        ...theme.typography.Revo,
        color: 'black'
    },
    Background: {
        padding: '2em 5em 10em 5em',
        height: '60em',
        [theme.breakpoints.down("md")]: {
            height: '100%'
        },
        [theme.breakpoints.down("xs")]: {
            padding: '2em 1em 2em 1em'
        }
    },
    RevoText: {
        ...theme.typography.body3
    },
    RevotitleSpace: {
        maxWidth: '20em',
        [theme.breakpoints.down("lg")]: {
            width: '100%'
        },
    }
}));

export default function Revolution(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return(
        <React.Fragment>
            <Grid item container direction="column" className={classes.MainContainer}>
                {/* FIRST SECTION */}
                <Grid item style={{marginBottom: matchesSM ? '3em' : '10em'}}>
                    <Typography variant="h3">
                        The Revolution
                    </Typography>
                </Grid>

                <Grid item container direction={matchesMD ? "column" : "row"} style={{marginBottom: matchesSM ? '1em' : '10em'}}>
                    <Grid item md width="100%">
                        <img src={VisionIcon} alt="Vision Icon" width={matchesSM ? '90%' : undefined}/>
                    </Grid>
                    <Grid 
                        item container 
                        direction="column" 
                        style={{marginLeft: matchesMD ? undefined : '5em',marginTop: matchesMD ? '2em' : undefined ,width: matchesMD ? '100%' : undefined}} 
                        md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD ? undefined : 'right'}>
                                Vision
                            </Typography>
                        </Grid> 
                        <Grid item>
                            <Typography variant="body2" align={matchesMD ? undefined : 'right'} paragraph>
                                The rise of computers, and subsequently the Internet, has completely altered every aspect of human life. This has increased our comfort, broadened our connections, and reshaped how we view the world.
                            </Typography>
                            <Typography variant="body2" align={matchesMD ? undefined : 'right'} paragraph>
                                What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.  
                            </Typography>
                            <Typography variant="body2" align={matchesMD ? undefined : 'right'} paragraph>
                                We want to help businesses capitalize on the latest and greatest technology. The best way to predict the future is to be the one building it, and we want to help guide the world into this next chapter of technological expansion, exploration, and innovation.
                            </Typography>
                            <Typography variant="body2" align={matchesMD ? undefined : 'right'} paragraph>
                                By holding ourselves to rigorous standards and pristine quality, we can ensure you have the absolute best tools necessary to thrive in this new frontier.
                            </Typography>
                            <Typography variant="body2" align={matchesMD ? undefined : 'right'} paragraph>
                                We see a future where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that goal.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* SECOND SECTION */}
                <Grid item container direction="row" style={{marginTop: matchesXS ? '2em' : '5em'}}>
                    <Grid 
                    item container direction="column" md style={{marginBottom: matchesSM ? '3em' : undefined}}>
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
                    <Grid item md style={{marginLeft: matchesXS ? undefined : '5em'}}>
                        <img src={HammerIcon} alt="Technology Icon" width={matchesMD ? '90%' : undefined}/>
                    </Grid>
                </Grid>

                <Grid item container direction="row" justify="center" align="center" style={{marginTop: '10em'}}>
                    <Typography variant="h4"> 
                        Process
                    </Typography>
                </Grid>
            </Grid>
            
            {/* THIRD SECTION */}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                align="center" justify={matchesXS ? undefined : "center"}  
                className={classes.Background}
                style={{backgroundColor: theme.palette.common.gray}}>
                <Grid 
                    item container 
                    direction="column" lg align="left" 
                    style={{marginTop: '3em', marginBottom: matchesSM ? '3em' : undefined}} 
                    className={classes.RevotitleSpace}>
                    <Grid item>
                        <Typography className={classes.Revo1}>Consultation</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.RevoText} paragraph>
                            Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            Detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and intuition will help usher you into this new future of possibilities.
                        </Typography>
                    </Grid>
                </Grid> 
                <Grid item lg style={{alignSelf: 'center'}}> 
                    <img src={ConsultantIcon} alt="Consultant Icon" width={matchesMD ? '90%' : undefined}/>
                </Grid>
            </Grid>

            {/* FOURTH SECTION */}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                align="center" justify={matchesXS ? "undefined" : "center"}  
                className={classes.Background}
                style={{backgroundColor: theme.palette.common.pink}}>
                <Grid 
                    item container 
                    direction="column" lg align="left" 
                    style={{marginTop: '3em', marginBottom: matchesSM ? '3em' : undefined}} 
                    className={classes.RevotitleSpace}>
                    <Grid item>
                        <Typography className={classes.Revo1}>Mock Up</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.RevoText} paragraph>
                            After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            This helps us understand and refine the solution itself before getting distracted by specifics and looks.
                        </Typography>
                    </Grid>
                </Grid> 
                <Grid item lg style={{alignSelf: 'center'}}> 
                    <img src={MockUpIcon} alt="MockUp Icon" width={matchesMD ? '90%' : undefined}/>
                </Grid>
            </Grid>

            {/* FIFTH SECTION */}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                align="center" justify={matchesXS ? "undefined" : "center"} 
                className={classes.Background}
                style={{backgroundColor: theme.palette.common.green}}>
                <Grid 
                    item container 
                    direction="column" lg align="left" 
                    style={{marginTop: '3em', marginBottom: matchesSM ? '3em' : undefined}} 
                    className={classes.RevotitleSpace}>
                    <Grid item>
                        <Typography className={classes.Revo1}>Review</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.RevoText} paragraph>
                            Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
                        </Typography>
                    </Grid>
                </Grid> 
                <Grid item lg style={{alignSelf: 'center'}}> 
                    <img src={ReviewIcon} alt="MockUp Icon" width={matchesMD ? '90%' : undefined}/>
                </Grid>
            </Grid>

            {/* SIXTH SECTION */}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                align="center" justify={matchesXS ? "undefined" : "center"}  
                className={classes.Background}
                style={{backgroundColor: theme.palette.common.brown}}>
                <Grid 
                    item container 
                    direction="column" lg align="left" 
                    style={{marginTop: '3em', marginBottom: matchesSM ? '3em' : undefined}} 
                    className={classes.RevotitleSpace}>
                    <Grid item>
                        <Typography className={classes.Revo1}>Design</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.RevoText} paragraph>
                            Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            No aspect is superfluous, and care will be taken with every decision.
                        </Typography>
                    </Grid>
                </Grid> 
                <Grid item lg style={{alignSelf: 'center'}}> 
                    <img src={DesignIcon} alt="MockUp Icon" width={matchesMD ? '90%' : undefined}/>
                </Grid>
            </Grid>

            {/* SEVENTH SECTION */}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                align="center" justify={matchesXS ? "undefined" : "center"}   
                className={classes.Background}
                style={{backgroundColor: theme.palette.common.green}}>
                <Grid 
                    item container 
                    direction="column" lg align="left" 
                    style={{marginTop: '3em', marginBottom: matchesSM ? '3em' : undefined}} 
                    className={classes.RevotitleSpace}>
                    <Grid item>
                        <Typography className={classes.Revo1}>Review</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.RevoText} paragraph>
                            A second round of review is essential to our goal of creating exactly what you want, exactly how you want it.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            This time we’ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure we get everything right the first time.
                        </Typography>
                    </Grid>
                </Grid> 
                <Grid item lg style={{alignSelf: 'center'}}> 
                    <img src={ReviewIcon} alt="MockUp Icon" width={matchesMD ? '90%' : undefined}/>
                </Grid>
            </Grid>

            {/* EIGTH SECTION */}
            <Grid 
                item container 
                direction={matchesLG ? "column" : "row"} 
                align="center" justify={matchesXS ? "undefined" : "center"}  
                className={classes.Background}
                style={{backgroundColor: theme.palette.common.yellow}}>
                <Grid 
                    item container 
                    direction="column" lg align="left" 
                    style={{marginTop: '3em', marginBottom: matchesSM ? '3em' : undefined}} 
                    className={classes.RevotitleSpace}>
                    <Grid item>
                        <Typography className={classes.Revo1}>Build</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.RevoText} paragraph>
                            Here’s where we get down to business.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            Each area is then developed in order of importance until ready to be connected to the next piece.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.
                        </Typography>
                    </Grid>
                </Grid> 
                <Grid item lg style={{alignSelf: 'center'}}> 
                    <img src={BuildIcon} alt="MockUp Icon" width={matchesMD ? '90%' : undefined}/>
                </Grid>
            </Grid>            


            {/* NINE SECTION */}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                align="center" justify={matchesXS ? "undefined" : "center"}  
                className={classes.Background}
                style={{backgroundColor: theme.palette.common.red}}>
                <Grid 
                    item container 
                    direction="column" lg align="left" 
                    style={{marginTop: '3em', marginBottom: matchesSM ? '3em' : undefined}} 
                    className={classes.RevotitleSpace}>
                    <Grid item>
                        <Typography className={classes.Revo1}>Launch</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.RevoText} paragraph>
                            The moment we’ve all been waiting for.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.
                        </Typography>
                    </Grid>
                </Grid> 
                <Grid item lg style={{alignSelf: 'center'}}> 
                    <img src={LaunchIcon} alt="MockUp Icon" width={matchesMD ? '90%' : undefined}/>
                </Grid>
            </Grid>


            {/* 10TH SECTION */}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                align="center" justify={matchesXS ? "undefined" : "center"}  
                className={classes.Background}
                style={{backgroundColor: theme.palette.common.purple}}>
                <Grid 
                    item container 
                    direction="column" lg align="left" 
                    style={{marginTop: '3em', marginBottom: matchesSM ? '3em' : undefined}} 
                    className={classes.RevotitleSpace}>
                    <Grid item>
                        <Typography className={classes.Revo1}>Maintain</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.RevoText} paragraph>
                            Our work doesn’t end there.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.
                        </Typography>
                    </Grid>
                </Grid> 
                <Grid item lg style={{alignSelf: 'center'}}> 
                    <img src={MaintainIcon} alt="MockUp Icon" width={matchesMD ? '90%' : undefined}/>
                </Grid>
            </Grid>

            {/* 11TH SECTION */}
            <Grid 
                item container 
                direction={matchesMD ? "column" : "row"} 
                align="center" justify={matchesXS ? "undefined" : "center"} 
                className={classes.Background}
                style={{backgroundColor: theme.palette.common.skyblue}}>
                <Grid 
                    item container 
                    direction="column" lg 
                    align="left" 
                    style={{marginTop: '3em', marginBottom: matchesSM ? '3em' : undefined}} 
                    className={classes.RevotitleSpace}>
                    <Grid item>
                        <Typography className={classes.Revo1}>Iterate</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.RevoText} paragraph>
                            The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.
                        </Typography>
                        <Typography className={classes.RevoText} paragraph>
                            Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.
                        </Typography>
                    </Grid>
                </Grid> 
                <Grid item lg style={{alignSelf: 'center'}}> 
                    <img src={IterateIcon} alt="MockUp Icon" width={matchesMD ? '90%' : undefined}/>
                </Grid>
            </Grid>            

            <CallToAction />
        </React.Fragment>
    );
}