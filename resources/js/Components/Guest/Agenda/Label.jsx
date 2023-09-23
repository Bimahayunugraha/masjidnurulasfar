export default function Label(props) {
    return (
        <span className="inline-block text-sm font-medium uppercase tracking-wider text-blue-500">
            {props.children}
        </span>
    );
}
