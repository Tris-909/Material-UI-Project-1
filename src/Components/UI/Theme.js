import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFB860";
const arcGray = "#868686";
const arcWhite = "#ffffff";
const arcLightBlue = "#08deff";
const arcPink = "#FF7373";

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            white: arcWhite,
            lightBlue: arcLightBlue,
            gray: arcGray,
            pink: arcPink
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
        Revo: {
            fontFamily:  'Raleway',
            fontSize: '2.25rem',
            fontWeight: 700
        }
    }
});