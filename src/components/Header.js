import React from 'react'
import { Link } from 'react-router-dom'
import ListEmployees from './ListEmployees'

const Header = () => {
  return (
    <div>
        <header className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
                {/* <a href='https://www.youtube.com' className='navabr-brand'>
                    Employee Management Application
                </a> */}
                <Link to="/employees" className='navabr-brand'>
                  Employee Management Application
                </Link>
            </div>
        </header>
    </div>
  )
}

export default Header