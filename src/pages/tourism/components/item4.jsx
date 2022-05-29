import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../core/useAuth";

// import { Container } from './styles';

<<<<<<< HEAD
function Item4({tourism}) {
  let {ip} = useAuth();
  return(
      <>
       {/* <div className="new__left">
               <Link to={`/layout/logform/${tourism._id}`}>
                <img src={ip+"images/"+tourism.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${tourism._id}`}>
                  {
                    tourism.title
                  }
                </Link>
              </p>
            </div> */}
      </>
=======
function Item4({ tourism }) {
  let { ip } = useAuth();
  return (
    <>
      {/* <div className="new__left">
        <Link to={`/layout/logform/${tourism._id}`}>
          <img src={ip + "images/" + tourism.images} alt="" srcSet />
        </Link>
        <p>
          <Link to={`/layout/logform/${tourism._id}`}>
            {tourism.title}
          </Link>
        </p>
      </div> */}
    </>
>>>>>>> 5cbc1ed2a4a0a078555167561295158147a63099
  );
}

export default Item4;
