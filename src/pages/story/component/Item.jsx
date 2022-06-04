import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item({_id,title,author,status,category,date,images,summary}) {
  let {ip} = useAuth();
  return(
      <>
      <div className="list-news__itme">
        <div dangerouslySetInnerHTML={{__html:summary}}></div>
      </div>
      </>
  )
}

export default Item;