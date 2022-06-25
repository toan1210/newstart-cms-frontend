import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { Container } from './styles';
import { Login } from "./Login-Firebase";
import {Loginfb} from "./Login-Firebase"
import JSONDATA from './traditionals.json'
function Header() {
  const [searchTerm,setSearchTerm]=useState('')
  const [filter,setFilter]=useState('');
  const [searchValue,setSearchValue]=useState('');
  const [show,setShow]=useState('');


  function eventFillter(value) {
    const fillter = JSONDATA.filter(item => item.title.includes(value));
    setFilter(fillter);
    setSearchValue(value);
  }

  const handleChooseOption = (value)=>{
    setSearchValue(value);
  }
  const closeSearch = ()=>{
    setSearchValue('');
  }

  return (
    <>
      <header className="home-headerr">
        <div className="headerr">
          <div className="container">
            <div className="header">
              <div className="header__logo">
                <a href="/">
                  <img src="/img/star_logo.dffe8010.png" alt="" srcSet />
                </a>
              </div>
              <div className="header__menu">
                <ul>
                  <li>
                    <NavLink to="/news">Tin Mới</NavLink>
                  </li>
                  <li>
                    <NavLink to="/technology">Công Nghệ</NavLink>
                  </li>
                  <li>
                    <NavLink to="/economy">Kinh Tế</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cultural">VH-XH</NavLink>
                  </li>
                  <li>
                    <NavLink to="/entertain">Giải Trí</NavLink>
                  </li>
                  <li>
                    <NavLink to="/living">Sống Khỏe</NavLink>
                  </li>
                  <li>
                    <NavLink to="/video">Video</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tourism">Du Lịch</NavLink>
                  </li>
                  <li>
                    <NavLink to="/brandstuff">Hàng Hiệu</NavLink>
                  </li>
                  <li>
                    <NavLink to="/fashion">Thời Trang</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sport">Thể Thao</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cuisine">Ẩm Thực</NavLink>
                  </li>
                  <li className="dots">
                    <span />
                  </li>
                </ul>
              </div>
              {/* key search data */}
              {searchValue && 
               <div className="research">
                  {filter.map((val,key)=>(
                      <div className="user" key={key} onMouseEnter={()=>handleChooseOption(val.title)}>
                        {/* <p style={{fontSize: 12}}>{val.title}</p> */}
                        <a href="">{val.title}</a>
                    </div>
                  ))}
              </div>
              }
              <div className="header__search" onBlur={closeSearch}>
                <input type="text" className="input-search" 
                placeholder="Tìm kiếm" 
                onChange={(e) => eventFillter(e.target.value) }
                value={searchValue}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
                  
              </div>
              {/* kết thúc làm search input */}
              {/* <button onClick={() =>setShow(SignUp)}>Login</button> */}
              {/* <Link to="/Login">Thể Thao</Link> */}
                <button onClick={()=>{Login()}} >Google</button>
                <button onClick={()=>{Loginfb()}}>Facebook</button>
              <div className="header__login">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  <path d="M18,19v-2c0.45-0.223,1.737-1.755,1.872-2.952c0.354-0.027,0.91-0.352,1.074-1.635c0.088-0.689-0.262-1.076-0.474-1.198 c0,0,0.528-1.003,0.528-2.214c0-2.428-0.953-4.5-3-4.5c0,0-0.711-1.5-3-1.5c-4.242,0-6,2.721-6,6c0,1.104,0.528,2.214,0.528,2.214 c-0.212,0.122-0.562,0.51-0.474,1.198c0.164,1.283,0.72,1.608,1.074,1.635C10.263,15.245,11.55,16.777,12,17v2c-1,3-9,1-9,8h24 C27,20,19,22,18,19z" />
                </svg> */}
              </div>
            </div>
          </div>
          <div className="header-sub-menu">
            <div className="headerr__popup">
              <div className="container">
                <ul className="headerr__popup-menu">
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/news">
                      Tin Mới
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/technology">
                      Công Nghệ
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/economy">
                      Kinh Tế
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/cultural">
                      VH-XH
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/entertain">
                      Giải Trí
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/living">
                      Sống Khỏe
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/video">
                      Video
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/tourism">
                      Du Lịch
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/brandstuff">
                      Hàng Hiệu
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/fashion">
                      Thời Trang
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/sport">
                      Thể Thao
                    </a>
                  </li>
                  <li className="parent thoi-su">
                    <a className="headerr__popup-link" href="/cuisine">
                      Ẩm Thực
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="headerr-channels-menu">
              <div className="container">
                <div className="headerr-channels-logo">
                  <img src="/img/star_logo.dffe8010.png" alt="" srcset="" />
                </div>
                <div className="headerr-channels-content">
                  <p>Giấy phép thiết lập : TTTĐT số 42/GP-STTTT</p>
                  <p>Chịu trách nhiệm nội dung : NGUYỄN TẤN HÙNG ANH</p>
                  <p>CTY CP TTĐPT PHÁP LUẬT SAO</p>
                  <p>
                    Địa chỉ: 22 Đường 30b, khu phố 2, Phường Bình An, Quận 2,
                    Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                  <p>Email : nstartv.vn@gmail.com</p>
                  <p>Hotline : 0909430791</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header;
