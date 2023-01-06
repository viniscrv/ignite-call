import { globalCss } from "@ignite-ui/react";

export const globalStyles = globalCss({
    "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
    },
    body: {
        backgroundColor: "$gray900",
        color: "$gray100",
        "--webkit-font-smoothing": "antialiased",

        "::-webkit-scrollbar": {
            width: "10px",
        },
        "::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 5px transparent",
        },
        "::-webkit-scrollbar-thumb": {
            background: "$gray500",
            borderRadius: "2px"
        },
    },
});