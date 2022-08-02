import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const ListCards = ({ cards }) => {
  console.log(cards)
  return (
    <div>
      <style jsx>
        {`
          .list-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            gap: 20px;
            justify-content: space-around;
            margin: 40px;
            padding: 0;
          }
          .card-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            list-style: none;
            border: 2px solid #ffc300 ;
            border-radius: 10px;
            background-color: rgb(69,69,69,098);
             
            
          }
          .title-container {
            width: 130px;
            height: 30px;
            margin-bottom: 5px;
            font-size: 12px;
            
          }
          .link-text {
            width:100%;
            height: 100%;
            text-align: justify;
          }
          .image-container {
            margin: 15px;
          }
        `}
      </style>

      <ul className="list-container">
        {cards.data.slice(0,16).map((card) => 
        <>
          <li className='card-container' key={card.id}>
            <div className="title-container">
              <Link className="link-text" href={`/Cards/${card.id}`}>
                {card.name}
              </Link>
            </div>
            <div className="image-container">
              <Image src={card.card_images[0].image_url} width={70} height={100} /> 
            </div>         
          </li>
        </>
      )}</ul>
    </div>
  );
}

export default ListCards;