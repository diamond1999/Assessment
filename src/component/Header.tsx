import Nav from './Nav'


const Header = () => {
  return (
    <div className='flex items-center justify-between  font-sans'>
        <div className="">
            <img src="Logo.png" alt="logo" className='' />
        </div>

        <div className="">
            <Nav/>
        </div>
    </div>
  )
}

export default Header