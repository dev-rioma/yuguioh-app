import { useEffect, useState } from "react"
import Image from "next/image"
import Navbar from "../components/Navbar/Navbar"
import Card from "../components/Card/Card"
import Search from "../components/Search/Search"
import Footer from "../components/Footer/Footer"
import ModalBtn from "../components/ModalBtn/ModalBtn"
import Layout from "../components/Layout/Layout"

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
      <Layout>
        <div className="d-flex justify-content-center mb-4 mt-2">
          Trading Card
        </div>
        <div>
          <button className="btn-primary">nuevo boton</button>
        </div>
        <Search setSearch={setSearch} />
        <div className="d-flex justify-content-center m-3">
          <ModalBtn />
        </div>
        <Card  data={data}/>
      </Layout>
    </>
  )
}

