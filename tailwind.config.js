const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    100: "#a273ff",
                    200: "#935bff",
                    300: "#8344ff",
                    400: "#742cff",
                    500: "#6415FF",
                    600: "#5a13e6",
                    700: "#5011cc",
                    800: "#460fb3",
                    900: "#3c0d99",
                },

                secondary: {
                    100: "#7c8ba1",
                    200: "#667892",
                    300: "#506582",
                    400: "#3a5173",
                    500: "#243E63",
                    600: "#203859",
                    700: "#1d324f",
                    800: "#192b45",
                    900: "#16253b",
                    navy: "#135DB3",
                    yellow: "#FFCE52",
                    "subtle-yellow": "#FFF5E5",
                    orange: "#DC5B1A",
                    "subtle-blue": "#63D6FA",
                    "soft-blue": "#6FCBFD",
                    green: "#35AC32",
                    red: "#B00020",
                    "soft-red": "#ff3333",
                    "soft-white": "#f8f8f8",
                },

                gradient: {
                    1: "rgba(197, 234, 249, 1)",
                    2: "rgba(255, 255, 255, 1)",
                },

                tertiary: {
                    7: "#f6f8fa",
                },

                "primary-violet": "#4957CC",
                "primary-background": "#DFE2F6",
                "primary-soft-violet": "#243E63",
                "primary-subtle-violet": "#1A202C",
                "neutral-5": "#EAEAEA",
                "neutral-20": "#D3D3D3",
                "neutral-40": "#A8A8A8",
                "neutral-60": "#7C7C7C",
                "neutral-80": "#515151",
                "neutral-100-2": "#252525",
                "neutral-background": "#FCFCFC",
                "tertiary-1": "#1E1E1E",
                "tertiary-2": "#595959",
                "tertiary-3": "#3240B3",
                "tertiary-4": "#4ADD7C",
                "tertiary-5": "#374957",
                "tertiary-6": "#171717",
                skeleton: "#E6E6E6",
                "tertiary-background-1": "#D7DAF4",
                dark: "#0f172a",
                "dark-4": "#737373",
                "red-1": "#800017",
                "red-2": "#B00020",
                "tertiary-yellow": "#E5A400",
            },
            boxShadow: {
                1: "0px 1px 2px rgba(0, 0, 0, 0.05), 0px 1px 3px 1px rgba(0, 0, 0, 0.03)",
                2: "0px 1px 2px rgba(159, 159, 159, 0.1), 0px 2px 6px 2px rgba(149, 149, 149, 0.05)",
                3: "0px 4px 8px 3px rgba(149, 149, 149, 0.05), 0px 2px 2px rgba(37, 37, 37, 0.05)",
                4: "1px 4px 15px rgba(57, 57, 57, 0.1)",
                5: "0px 12.5216px 11.1442px rgba(37, 37, 37, 0.03), 0px 6.6501px 5.91859px rgba(37, 37, 37, 0.02), 0px 2.76726px 2.46286px rgba(37, 37, 37, 0.01)",
                6: "2px 1px 20px rgba(138, 138, 138, 0.1), -2px 1px 10px 1px rgba(0, 0, 0, 0.05)",
                7: "0px 16px 48px rgba(0, 0, 0, 0.25)",
            },
            height: {
                1: "calc(100vh - 5rem)",
            },
            borderRadius: {
                10: "10px",
                16: "16px",
                20: "20px",
                100: "100px",
            },
            translate: {
                "3d": "translate3d(522.5px, 3847.5px, 0px)",
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: "100ch",
                    },
                },
            },
        },
        aspectRatio: {
            auto: "auto",
            square: "1 / 1",
            video: "16 / 9",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13",
            14: "14",
            15: "15",
            16: "16",
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("flowbite/plugin"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/typography"),
    ],
};
