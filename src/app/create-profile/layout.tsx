interface LayoutProps {
    children: React.ReactNode;
  }

  const ContactLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 m-auto py-16">
            {children}
        </div>
    )
}

export default ContactLayout;
