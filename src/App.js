import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar,Feed,SearchFeed,VideoDetail,ChannelDetail } from './Components'

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000', color:"white"}}>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/video/:id"  element={<VideoDetail/>}/>
            <Route path="/channel/:id"  element={<ChannelDetail/>}/>
            <Route path="/search/:searchTerm" exact element={<SearchFeed/>}/>
        </Routes>

    </Box>
    
    </BrowserRouter>
  )
}

export default App