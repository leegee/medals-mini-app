import styles from './Flag.module.scss';

interface IFlagProps {
    code: string;
}

// Country codes used in the medal data API, in order
// to allow calculation of position in the sprite sheet.
const codeToIndex = [
    "AUT",
    "BLR",
    "CAN",
    "CHN",
    "FRA",
    "GER",
    "ITA",
    "NED",
    "NOR",
    "RUS",
    "SUI",
    "SWE",
    "USA",
];

/**
 * The flag sprite is of 13 flags, a total of 28px x 221px thus each flag is 28px x 17px.
 * In the sprite sheet, flags are rendered in alphabetical order.
 */
export default function Flag(props: IFlagProps) {
    const index = codeToIndex.indexOf(props.code);
    const flagClass = styles.flag + ' ' + styles['flag-' + index];

    return (
        <span className={flagClass} title={props.code} />
    );
}