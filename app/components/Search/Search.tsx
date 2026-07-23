import { useQueryClient } from "@tanstack/react-query";
import { useState, type SubmitEvent } from "react";

function Search() {
    const [input, setInput] = useState("")
    const queryClient = useQueryClient();

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();

        queryClient.setQueryData(["searchValue"], input)
        queryClient.invalidateQueries({ queryKey: ["ipData"] })
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center w-full max-w-120 h-12 rounded-xl overflow-hidden">
            <input
                type="text"
                className="flex-1 h-full px-5 outline-none bg-white"
                placeholder="Search for any IP address or domain"
                onChange={(e) => setInput(e.target.value)}
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