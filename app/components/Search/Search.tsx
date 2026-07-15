function Search() {
    return (
        <form className="flex items-center w-full max-w-100 h-12 rounded-xl overflow-hidden">
            <input
                type="text"
                className="flex-1 h-full px-5 outline-none bg-white"
            />

            <button
                type="submit"
                className="h-full w-12 bg-black flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="14"
                >
                    <path
                        fill="none"
                        stroke="#FFF"
                        strokeWidth="3"
                        d="M2 1l6 6-6 6"
                    />
                </svg>
            </button>
        </form>
    );
}

export default Search;