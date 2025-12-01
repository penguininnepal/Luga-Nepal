import { useState } from "react"

const Dropdown = () => {
    const [ isOpen, setisOpen] = useState(false);

  return (
    <div>

        <button onClick={() => setisOpen(!isOpen)} className="px-4 py-2 bg-blue-800 rounded">
            Menu
        </button>
        {isOpen && (
            <div className="mt-2 w-48 bg-white text-black rounded shadow-lg">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

        )}
      
    </div>
  )
}

export default Dropdown
