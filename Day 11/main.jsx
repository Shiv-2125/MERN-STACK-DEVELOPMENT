 import { StrictMode } from "react"
import {createRoot} from 'react-dom/client'


import PostMovie from "./components/PostMovie.jsx"
import GetMovie from "./components/GetMovie.jsx"

const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <PostMovie/>
        <GetMovie/>
    </StrictMode>
)


