import React from 'react'
import "../styles/HotItemCard.css"
import $ from 'jquery';

const HotItemCard = ({image,index,name,price}) => {
    $(document).ready(function () {
  
        $(".HotItemCard").click(function (){
          $(this).addClass("active").siblings().removeClass("active");
        });
      });
    return (
        <div className="HotItemCard">
            <img src={image} alt={`${index} product`} />
            <p>{name}</p>
            <span>{price}</span>
            
        </div>
    )
}

export default HotItemCard
