import ListCards from "../components/ListCards/ListCards"
import Navbar from "../components/Navbar/Navbar"


export default function Home({ cards }) {
  
  return (
    <>
      <Navbar/>
      <h1>hello World</h1>
      <ListCards cards={cards}/>
      <button className="btn btn-primary">es hora del duelo</button>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
  const data = await response.json()
  
  return{
    props: { cards: data}
  }
}