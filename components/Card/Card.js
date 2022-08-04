import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const imagePerRow = 10
const Card = ({ data }) => {
  const [ next, setNext] = useState(imagePerRow)
  let display

  const handleMoreCard = () => {
    setNext(next + imagePerRow)
  }
  
  if (data) {
    display = data.slice(0,next).map( (card) => {
      let { id, name, type, desc, race, archetype, card_sets, card_images } = card
      return (
        <div key={id}>
          <style jsx>
            {`
              .card-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                justify-content: center;
                align-items: center;
                height: 160px;
                margin: 0;
                border: 1px solid #FFC300;
                border-radius: 8px;
                box-shadow: 2px 4px rgb( 255, 191, 0, 0.2);

              }
              .card-title {
                display:flex;
                flex-direction: column;
                text-align: enter;
                padding: 0 10px 0 10px;
                font-size: 16px;
             
              }
              .container-image {
                display:flex;
                align-items: center;
                justify-content: center;
              }
              .card-title ul {
                list-style: none;
              }

              .card-title ul li {
                margin-top: 6px;
              }

              .type-card {
                font-size: 10px;
                color: #888;
              }


            `}
          </style>

          <div className="card-container">
            <div className="container-image">
                <Image className="card-image" src={card_images[0].image_url}  alt={name} width={90} height={120} objectFit="fill" />
            </div>
            <div className="card-title" key={name}>
              <ul>
                <li className="name-card">{name}</li>
                <li className="type-card">{type}</li>
              </ul>
            </div>
            
            </div>
        </div>
      )
    })
  }
  else {
    display = "Not cards Found"
  }
  return (
    <div>
      <style jsx>
        {`
          .container-list-card {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            margin: 30px;

          }

          @media (min-width: 768px) {
            .container-list-card {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (min-width: 992px) {
            .container-list-card {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (min-width: 1200px) {
            .container-list-card {
              grid-template-columns: 1fr 1fr 1fr 1fr;
            }
          }

        `}
      </style>
      <div className="container-list-card">             
        {display} 
      </div>
      <div className="container-load d-flex justify-content-center m-5">
        <button className="btn btn-outline-warning rounded-circle d-flex justify-content-center p-3" onClick={handleMoreCard}>
          <Image src="/mileniumeye.png" width={30} height={30}/>
        </button>
      </div>
    </div>
  );
}

export default Card;