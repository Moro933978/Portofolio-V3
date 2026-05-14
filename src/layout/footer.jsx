const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="backdrop-blur-xl">
            <center>
                <div className="w-full max-w-[90%] h-[1.2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_15px_rgba(168,85,247,0.8)] mb-6"></div>                <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                    © {currentYear}{" "}
                    <a href="" className="hover:underline text-purple-500 dark:text-purple-400">
                        Omar Kamel™
                    </a>
                    . All Rights Reserved.
                </span>
            </center>
        </footer>
    );
};

export default Footer;