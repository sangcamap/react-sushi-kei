import HomePage from "~/pages/Home"
import MenuPage from "~/pages/Menu"

const publicRoutes  = [
    {path: '/', component: HomePage},
    {path: 'menu', component: MenuPage}
]


const privateRoutes = [

]


export {publicRoutes, privateRoutes}



