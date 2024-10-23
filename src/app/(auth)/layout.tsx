interface LayoutProps {
    children: React.ReactNode;
  }

  const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-full h-screen -z-10 flex fixed top-0 left-0 bg-gray-100">
            <div className="w-[450px] p-5 m-auto border flex rounded-md flex-col gap-4 border-gray-300 bg-white shadow-md">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;
