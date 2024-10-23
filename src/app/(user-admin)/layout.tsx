import { IoCalendar, IoChatbox, IoPerson } from "react-icons/io5";

interface LayoutProps {
    children: React.ReactNode;
  }

  const ContactLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-full h-screen bg-gray-100 fixed">
            <div className="w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 m-auto py-16 h-screen flex gap-10">
                <div className="w-[250px] bg-whitex">
                    <ul className="w-full text-center flex flex-col gap-3">
                        <li className="border border-gray-300 flex rounded-3xl h-10 bg-white">
                            <p className="m-auto flex gap-4 items-center">
                                <IoPerson />
                                Profile
                            </p>
                        </li>
                        <li className="border border-gray-300 flex rounded-3xl h-10 bg-white">
                            <p className="m-auto flex gap-4 items-center">
                                <IoCalendar />
                                Bookings
                            </p>
                        </li>
                        <li className="border border-gray-300 flex rounded-3xl h-10 bg-white">
                            <p className="m-auto flex gap-4 items-center">
                                <IoChatbox />
                                Chat
                            </p>
                        </li>
                        <li className="border border-gray-300 rounded-3xl h-10 bg-white">
                            History
                        </li>
                    </ul>
                </div>
                <div className="bg-white w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContactLayout;
