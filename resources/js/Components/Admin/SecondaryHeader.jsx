export default function SecondaryHeader({ props, className = "", children }) {
    return (
        <div
            {...props}
            className={
                "fixed left-0 right-0 z-20 w-full bg-white bg-opacity-90 px-6 py-2 backdrop-blur-sm " +
                className
            }
        >
            {children}
        </div>
    );
}
