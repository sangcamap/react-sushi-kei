import React, { useState } from 'react'
import './NavigationBar.scss';
import { image } from '~/assets';
import {Link} from 'react-router-dom'

export default function NavigationBar() {
// Hiển thị menu khi toggle
  const [isShowMenu, setShowMenu] = useState(true)
  const handleShowBtn = () =>{
    setShowMenu(!isShowMenu)
  }

  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <img src={image.logo_lg} alt="logo" className="Navbar__logo__img"></img>
        <span className="Navbar__logo__name">KEI</span>
      </div>
      <ul className={isShowMenu ? 'Navbar__menu isPhone' : 'Navbar__menu'} >
          <Link to="/" className="Navbar__menu__item">
            <i className="fa-solid fa-house"></i> Trang chủ
          </Link>
          <Link to="menu" className="Navbar__menu__item">Thực đơn</Link>
          <Link to="/" className="Navbar__menu__item">Khuyến mãi</Link>
          <Link to="/" className="Navbar__menu__item">Đặt bàn</Link>
          <Link to="/" className="Navbar__menu__item">Liên hệ</Link>
      </ul>
      <div className="Navbar__menuBtn" onClick={handleShowBtn}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
