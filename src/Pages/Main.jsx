// react
import { useState } from 'react';

// CSS
import '../style/Main.scss'

// Pages
import Profile from './Profile'
import Member_page from './Member_page';

// Components
import Default_home from './Default_home';

function Main() {
  // useState,初期値
  const [page, setPage] = useState('Default_home');

  return (
      <div className="Main">
        <header className="Main_header">
          <h3>
            profile web site
          </h3>
          <nav>
            <button onClick={() => setPage('Profile')}>my profile</button>
            <button onClick={() => setPage('Member_page')}>member's profile</button>
          </nav>
        </header>
        <main>
            {page === 'Default_home' && <Default_home />}
            {/* user change */}
            {page === 'Profile' && <Profile />}
            {page === 'Member_page' && <Member_page />}
        </main>
        <footer>
          <div className='footer-margin'>
            <a className="to-top-link"
              href="#"
            >
              ページの一番上へ戻る
            </a>
          </div>
          <div className='footer-margin'>
            <a className="to-top-link"
              href=""
            >
              トップへ戻る
            </a>
          </div>
        </footer>
      </div>
  );
}

export default Main;