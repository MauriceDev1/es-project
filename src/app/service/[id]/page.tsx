import Link from "next/link";

function Service () {
    return (
        <div className="w-full flex lg:gap-10">
            <div className="w-1/2 md:w-full">
                <div className="w-full h-96 bg-white border border-gray-300">

                </div>
            </div>
            <div className="w-1/2 md:w-full flex flex-col gap-8">
                <h1 className="text-3xl">
                    Service Title
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, reprehenderit suscipit nisi maxime cum atque voluptatibus asperiores natus voluptatum! Eveniet nihil similique repudiandae consequuntur, odio maiores asperiores, magni laboriosam hic obcaecati vitae iusto beatae harum corporis, quos molestiae esse? Quasi adipisci excepturi voluptates inventore officiis sunt nulla laborum molestias impedit ipsa eveniet repudiandae, reiciendis ut assumenda dolores libero ad itaque, vitae, perferendis sequi? Praesentium facilis corrupti accusantium, ea sed vitae recusandae error itaque cupiditate, accusamus sint neque molestias. Modi, hic maxime. Itaque distinctio porro voluptas modi culpa aliquam labore. Sapiente doloribus, tempore placeat sed voluptate distinctio optio dolore amet voluptas.
                </p>
                <Link
                    href={'/view-all'}
                    className="bg-black text-white px-5 py-2 rounded-3xl w-32"
                >
                    View More
                </Link>
            </div>
        </div>
    )
}

export default Service;
