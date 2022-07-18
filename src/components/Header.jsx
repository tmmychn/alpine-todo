export default () => {
    return (
        <header 
            x-data="{darkMode: false,}">
            <div className="logo">
                <h1 className="text-white">
                    TODO
                </h1>
            </div>
            <button className="dark-mode-toggle" x-on:click="darkMode = !darkMode">
                <img src="/src/assets/icon-moon.svg" alt="moon icon" x-show="!darkMode"/>
                <img src="/src/assets/icon-sun.svg" alt="sun icon" x-show="darkMode" />
            </button>
        </header>
    )
}