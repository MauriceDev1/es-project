function Hero ({height="h-[35vh]", image} : {
    height?:string;
    image?: string;
}) {
    return (
        <div className={`w-full bg-gray-300 ${height}`} style={{backgroundImage: image}}>

        </div>
    )
}

export default Hero;
