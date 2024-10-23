import Card from "@/app/components/Card";

// Define a type for the service data
interface ServiceType {
    id: number;
    service: string;
    desc: string;
    link:string;
    image: string;
}

function TypeServices() {
    const types: ServiceType[] = [
        {
            id: 1,
            service: 'service 1',
            link: '/service/1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi consequatur dignissimos ex nulla beatae praesentium aliquam at dolorem sunt nobis ducimus, distinctio, unde provident qui exercitationem, fugit labore eaque! Velit vel similique repellendus temporibus, porro eos quas quo minima praesentium? Quidem et ratione, molestias, molestiae vero ipsum, corporis optio hic quia dignissimos odit necessitatibus. Quaerat, autem vel repellat temporibus quas suscipit. Non accusantium, quae voluptatum reiciendis neque quia nihil quo sunt nisi soluta enim deleniti amet eius ex sint laboriosam dolorum debitis velit modi, unde corporis ullam! Doloremque ullam expedita officia quam eos, esse nesciunt sed explicabo ex nisi.',
            image: '',
        },
        {
            id: 2,
            service: 'service 2',
            link: '/service/2',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi consequatur dignissimos ex nulla beatae praesentium aliquam at dolorem sunt nobis ducimus, distinctio, unde provident qui exercitationem, fugit labore eaque! Velit vel similique repellendus temporibus, porro eos quas quo minima praesentium? Quidem et ratione, molestias, molestiae vero ipsum, corporis optio hic quia dignissimos odit necessitatibus. Quaerat, autem vel repellat temporibus quas suscipit. Non accusantium, quae voluptatum reiciendis neque quia nihil quo sunt nisi soluta enim deleniti amet eius ex sint laboriosam dolorum debitis velit modi, unde corporis ullam! Doloremque ullam expedita officia quam eos, esse nesciunt sed explicabo ex nisi.',
            image: '',
        },
        {
            id: 3,
            service: 'service 3',
            link: '/service/3',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi consequatur dignissimos ex nulla beatae praesentium aliquam at dolorem sunt nobis ducimus, distinctio, unde provident qui exercitationem, fugit labore eaque! Velit vel similique repellendus temporibus, porro eos quas quo minima praesentium? Quidem et ratione, molestias, molestiae vero ipsum, corporis optio hic quia dignissimos odit necessitatibus. Quaerat, autem vel repellat temporibus quas suscipit. Non accusantium, quae voluptatum reiciendis neque quia nihil quo sunt nisi soluta enim deleniti amet eius ex sint laboriosam dolorum debitis velit modi, unde corporis ullam! Doloremque ullam expedita officia quam eos, esse nesciunt sed explicabo ex nisi.',
            image: '',
        },
        {
            id: 4,
            service: 'service 4',
            link: '/service/4',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi consequatur dignissimos ex nulla beatae praesentium aliquam at dolorem sunt nobis ducimus, distinctio, unde provident qui exercitationem, fugit labore eaque! Velit vel similique repellendus temporibus, porro eos quas quo minima praesentium? Quidem et ratione, molestias, molestiae vero ipsum, corporis optio hic quia dignissimos odit necessitatibus. Quaerat, autem vel repellat temporibus quas suscipit. Non accusantium, quae voluptatum reiciendis neque quia nihil quo sunt nisi soluta enim deleniti amet eius ex sint laboriosam dolorum debitis velit modi, unde corporis ullam! Doloremque ullam expedita officia quam eos, esse nesciunt sed explicabo ex nisi.',
            image: '',
        },
    ];

    return (
        <div className="w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 m-auto py-16">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {types.map((t) => (
                <Card key={t.id} data={t} />
                ))}
            </div>
        </div>
    );
}

export default TypeServices;
