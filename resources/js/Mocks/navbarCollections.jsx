export const mainNavbarCollections = [
    {
        name: "Home",
        route: "home",
        type: "anchor",
    },
    {
        name: "Profile",
        route: "profile-masjid",
        type: "anchor",
    },
];

export const mobileNavbarCollections = [
    {
        name: "Home",
        route: "home",
        iconActive: (
            <i className="fa-solid fa-grid-2 mb-1 text-lg text-primary-violet transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
        ),
        iconInActive: (
            <i className="fa-light fa-grid-2 mb-1 text-lg text-gray-500 transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
        ),
        type: "anchor",
    },
    {
        name: "Profile",
        route: "profile-masjid",
        iconActive: (
            <i className="fa-solid fa-mosque mb-1 text-lg text-primary-violet transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
        ),
        iconInActive: (
            <i className="fa-light fa-mosque mb-1 text-lg text-gray-500 transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
        ),
        type: "anchor",
    },
];
