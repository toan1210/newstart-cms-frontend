import Main from './layout/Main.jsx';
import Logform from './layout/Logform.jsx';
import Storylayout from './layout/Story.jsx';
import Home from './pages/home';
import Fashion from './pages/fashion';
import DetailFashion from './pages/fashion-detail/Index';
import DetailLiving from './pages/detailliving/Index';
import Living from './pages/living';
import News from './pages/news';
import DetailNews from './pages/news-detail/Index';
import Technology from './pages/technology';
import Tourism from './pages/tourism';
import DetailTourism from './pages/tourism-detail/Index';
import Video from './pages/video';
import DetailVideo from './pages/video-detail/Index';
import Brandstuff from './pages/brandstuff';
import DetailBrandstuff from './pages/brandstuff-detail/index.jsx';
import DetailTechnology from './pages/technology-detail/index.jsx';
import LogForm from './pages/logform/Index';
import Story from './pages/story/Index';
import Page404 from './pages/page404';
import DetailLogform from './pages/logformdetail/index';
import DtailStory from './pages/storydetail/index.jsx';
import Economy from './pages/economy/Index.jsx';
import DetailEconomy from './pages/economy-detail/Index';
import Cultural from './pages/cultural/Index';
import DetailCultural from './pages/cultural-detail/Index';
import Entertain from './pages/entertain/Index';
import DetailEntertain from './pages/entertain-detail/Index';
import Sport from './pages/sport/Index';
import Cuisine from './pages/cuisine/Index';
import DetailCuisine from './pages/cuisine-detail/Index';
import DetailSport from './pages/sport-detail/Index';
const routers = [
    {
        path:'/layoutstory',
        component:Storylayout,
        routers: [
            {
                path:'/layoutstory/story/:slug',
                component:DtailStory,
            },
        ]
    },
    {
        path:'/layout',
        component:Logform,
        routers: [
            {
                path:'/layout/logform/:slug',
                component:DetailLogform,
            },
            {
                path:'/layout/story/:slug',
                component:DtailStory,
            },
        ]
    },
    {
        path:'/',
        component:Main,
        routers: [
            {
                path: '/cuisine/:slug',
                component:DetailCuisine,
            },
            {
                path: '/cuisine',
                component:Cuisine,
            },
            {
                path: '/sport/:slug',
                component:DetailSport,
            },
            {
                path: '/sport',
                component:Sport,
            },
            {
                path: '/entertain/:slug',
                component:DetailEntertain,
            },
            {
                path: '/entertain',
                component:Entertain,
            },
            {
                path: '/cultural/:slug',
                component:DetailCultural,
            },
            {
                path: '/cultural',
                component:Cultural,
            },
            {
                path: '/economy/:slug',
                component:DetailEconomy,
            },
            {
                path: '/economy',
                component:Economy,
            },
            {
                path: '/fashion/:slug',
                component:DetailFashion,
            },
            {
                path: '/fashion',
                component:Fashion,
            },
            {
                path: '/living/:slug',
                component:DetailLiving,
            },
            {
                path: '/living',
                component:Living,
            },
            {
                path:'/news/:slug',
                component:DetailNews,
            },
            {
                path:'/news',
                component:News,
            },
            {
                path:'/technology/:slug',
                component:DetailTechnology,
            },
            {
                path:'/technology',
                component:Technology,
                
            },
            {
                path:'/tourism/:slug',
                component:DetailTourism,
            },
            {
                path:'/tourism',
                component:Tourism,
            },
            {
                path:'/video/:slug',
                component:DetailVideo,
            },
            {
                path:'/video',
                component:Video,
            },
            {
                path:'/brandstuff/:slug',
                component:DetailBrandstuff,
            },
            {
                path:'/brandstuff',
                component:Brandstuff,
            },
            {
                path:'/logform',
                component:LogForm,
            },
            {
                path:'/story',
                component:Story,
            },
            {
                exact:'exact',
                path:'/',
                component:Home,
            },
            {
                component:Page404
            }
        ]
    }
]
export default routers