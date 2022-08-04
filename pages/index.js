import { useEffect, useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import Card from "../components/Card/Card"
import Search from "../components/Search/Search"

export default function Home() {
  let [fetchedData, updateFetchedData] = useState([])
  let [ search, setSearch] = useState(" ")
  let { data } = fetchedData
  console.log(data)

  let api =`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${search}` 
  
  useEffect( () => {
    (async function () {
    let dataFetch = await fetch(api).then((response) => response.json())
    updateFetchedData(dataFetch)
    })()
  }, [api])
 
  
  return (
    <>
      <Navbar/>
      <h1>hello World</h1>
      <Search setSearch={setSearch} />
      <Card  data={data}/>
    </>
  )
}

