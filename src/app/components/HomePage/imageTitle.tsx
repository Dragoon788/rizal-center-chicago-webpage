interface ImageTitleProps {
    displayText: string;
}

export default function ImageTitle ( { displayText } : ImageTitleProps) {
    return(
        <div className="absolute w-full h-[200px] md:h-[350px] bg-gradient-to-r from-black/70 to-transparent to-80% z-2 pointer-events-none">
            <h1 className="relative flex w-[250px] md:w-[500px] h-full items-center text-3xl md:text-6xl m-5">
                {displayText}
            </h1>
        </div>
    );
}