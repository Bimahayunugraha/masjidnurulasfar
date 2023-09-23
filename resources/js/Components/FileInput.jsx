import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function FileInput(
    { type = "file", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    "mb-1 block w-full cursor-pointer rounded-lg border border-neutral-60 text-secondary-red placeholder-gray-400 shadow-sm " +
                    className
                }
                ref={input}
            />
        </div>
    );
});
