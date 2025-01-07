// import React from 'react'
import Banner from './Banner'
import TopSales from './TopSales'
import Recommened from './Recommened'
import News from './News'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchBooks } from '../../redux/features/books/bookSlice'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      (async()=>{
        try {
           dispatch(fetchBooks())
        } catch (error) {
            console.error(error)
        }
      })()
    ,[]})
    return (
        <>
            <Banner />
            <TopSales />
            <Recommened />
            <News />
        </>
    )
}

export default Home