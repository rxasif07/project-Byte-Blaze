import { useEffect, useState } from "react";


const Navbar = () => {

    const [theme,setTheme]=useState(false);
     const [changeThem,setChangeThem]=useState('light')

      console.log(changeThem)
      
      useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme',changeThem)
      })

    const handleToggol = (theme)=>{
        setTheme(theme)
       if(theme === true){
        setChangeThem('synthwave')
       }
       else{
        setChangeThem('light')
       }
      
        }
    

    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg px-14 fixed z-10">
  <div className="flex-1">
    <a className="btn btn-ghost font-bold gap-0 text-xl"><span className="text-purple-600 gap-0">Byte</span> <span className="text-red-600">Blaze</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className="font-bold"><a>Home</a></li>
      <li className="font-bold"><a>Blogs</a></li>
      <li className="font-bold"><a>Bookmarks</a></li>
      <li>
      <label className="grid cursor-pointer place-items-center">
  <input onClick={()=>handleToggol(!theme)}
    type="checkbox"
    value="synthwave"
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
      </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;