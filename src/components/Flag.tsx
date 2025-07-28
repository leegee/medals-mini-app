interface IFlagProps {
    code: string;
}
export default function Flag(props: IFlagProps) {
    return (
        <div>{props.code}</div>
    );
}