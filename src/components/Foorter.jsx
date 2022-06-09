import React from "react";
import { NavLink } from "react-router-dom";
// import { Container } from './styles';

// import { RiAdvertisementLine, RiMailLine, RiPhoneFill } from "react-icons/ri";

function Foorter() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-left">
            <NavLink exact to="/">
              <img src="/img/star_logo.dffe8010.png" alt="" />
            </NavLink>
            <p>Giấy phép thiết lập: TTTĐT số 42/GP-STTTT</p>
            <p>Chịu trách nhiệm nội dung: NGUYỄN TẤN HÙNG ANH</p>
          </div>
          <div className="footer-right">
            <h3>Liên hệ</h3>
            <p>
              {/* <RiMailLine /> */}
              <span>nstartv.vn@gmail.com</span>
            </p>
            <p>
              {/* <RiAdvertisementLine /> */}
              <span>Quảng cáo</span>
            </p>
            <p>
              {/* <RiPhoneFill /> */}
              <span>0909430791</span>
            </p>
            <h3>Theo dõi newstar trên</h3>
            <div class="img-logo-footer">
              <a href="https://www.facebook.com/nstartv.vn">
                <img src="/img/facebookLogo.png" alt="Facebook logo" />
              </a>
              <a to="https://www.youtube.com/channel/UCOslMXB2hFLKCaLLSo65KWQ">
                <img src="/img/logoYoutube.png" alt="Facebook logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p> CTY CP TTĐPT PHÁP LUẬT SAO </p>
          <p>
            22 Đường 30b, khu phố 2, Phường Bình An, Quận 2, Thành phố Hồ Chí
            Minh, Việt Nam
          </p>
        </div>
      </footer>
    </>
  );
}

export default Foorter;
