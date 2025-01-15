
const Footer = () => {
  return (
    <footer className="mt-20 py-8">
      <div className="grid grid-cols-2 gap-4 text-gray-600">
        
        <div>
          <div className="flex items-center mb-4">
            <img src="Logo.png" alt="logo" />
          </div>
          <p className="text-sm leading-6">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="mt-4 text-sm">All rights reserved.</p>
        </div>

        <div className="grid grid-cols-3">
        <div>
          <h3 className="text-[#0A2540] font-semibold mb-4">Landings</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#0A2540] font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li className="flex items-center">
              Careers
              <span className="bg-green-100 text-[#0A2640] text-xs font-semibold ml-2 px-2 py-0.5 rounded-full">
                Hiring!
              </span>
            </li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#0A2540] font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer