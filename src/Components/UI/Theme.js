import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFB860";
const arcGray = "#868686";
const arcWhite = "#ffffff";
const arcLightBlue = "#08deff";
const arcPink = "#FF7373";
const arcGreen = "#39B54A";
const arcBrown = "#A67C52";
const arcYellow = "#FBB03B";
const arcRed = "#C1272D";
const arcPurple = "#8E45CE";
const arcLBlue = "#29ABE2";

export default createMuiTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange,
            white: arcWhite,
            lightBlue: arcLightBlue,
            gray: arcGray,
            pink: arcPink,
            green: arcGreen,
            brown: arcBrown,
            yellow: arcYellow,
            red: arcRed,
            purple: arcPurple,
            skyblue: arcLBlue
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: "1rem"
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            textTransform: 'none',
            color: "white"
        },
        h2: {
            fontFamily: 'RaleWay',
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: '2.5rem',
            color: arcBlue
        },
        h4: {
            fontFamily:  'Raleway',
            fontSize: '1.75rem',
            color: arcBlue,
            fontWeight: 700
        },
        h6: {
            fontWeight: 500,
            fontFamily: 'Raleway',
            color: arcBlue,
            lineHeight: 1
        },
        subtitle2: {
            fontFamily:  'Raleway',
            fontSize: '1.5rem',
            color: arcWhite,
            fontWeight: 400
        },
        subtitle1: {
            color: arcGray,
            fontSize: '1.25rem',
            fontWeight: 300,
        },
        learnButton: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: 'none',
            borderRadius: 50,
            fontFamily: 'Roboto',
            fontWeight: 'bold'
        },
        body1: {
            fontSize: '1.25em',
            color: arcGray,
            fontWeight: 300
        },
        body3: {
            fontSize: '1em',
            color: 'white',
            fontWeight: 300
        },
        body4: {
            fontSize: '1em',
            color: arcLBlue,
            fontWeight: 300
        },
        Revo: {
            fontFamily:  'Raleway',
            fontSize: '2.25rem',
            fontWeight: 700
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: arcBlue,
                fontSize: '1rem'
            }
        },
        MuiInput: {
            root: {
                color: arcGray,
                fontWeight: 300
            },
            underline: {
                "&:before": {
                    borderBottom: `2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not(focused):not($error):before": {
                    borderBottom: `2px solid ${arcBlue}`
                }
            }
        }
    }
});