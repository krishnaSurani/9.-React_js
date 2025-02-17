import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Nav from '../component/Nav'
import Slider from '../component/Slider'
import Footer from '../component/Footer'

function Movie() {

    const [lan, setlan] = useState("all");
    const [cat,setcat] = useState("allcat");
    const [state, setstate] = useState("");
    const [sort, setSort] = useState("asc")

    const data = [
        {
            "id": 1,
            "title": "Chhaava",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA1NC40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-wefbnyucnt-portrait.jpg",
            "category": "Action,Drama,Historical",
            "language": "Hindi",
            "rate": 9.3
        },
        {
            "id": 2,
            "title": "Captain America: Brave New World",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4xLzEwICA0LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00399765-lxpecsqysh-portrait.jpg",
            "category": "Action,Adventure,Sci-Fi",
            "language": "English, Hindi, Tamil, Telugu",
            "rate": 7.1
        },
        {
            "id": 3,
            "title": "Sky Force",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA1NS44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00371539-yqjkjctnet-portrait.jpg",
            "category": "Action, Historical, Thriller",
            "language": "Hindi",
            "rate": 8.9
        },
        {
            "id": 4,
            "title": "Loveyapa",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICA0LjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00427632-xhmvucrduf-portrait.jpg",
            "category": "Comedy, Drama, Romantic",
            "language": "Hindi",
            "rate": 7.9
        },
        {
            "id": 5,
            "title": "Deva",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny41LzEwICAxOS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374104-qgsmfbnanb-portrait.jpg",
            "category": "Action, Thiriller",
            "language": "Hindi",
            "rate": 7.5
        },
        {
            "id": 6,
            "title": "Bridget Jones: Mad About the boy",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4xLzEwICA2OCBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00422388-sewljackmb-portrait.jpg",
            "category": "Comedy, Romantic",
            "language": "English",
            "rate": 7.2
        },
        {
            "id": 7,
            "title": "Mufasa: The Lion King ",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA3OC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-hhkrpankjb-portrait.jpg",
            "category": "Adventure,Animation,Drama",
            "language": "English, Telugu, Hindi, Tamil",
            "rate": 8.4
        },
        {
            "id": 8,
            "title": "illti",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA0NSBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00406120-ncjgwzyavy-portrait.jpg",
            "category": "Comedy, Drama",
            "language": "Panjabi",
            "rate": 8.6
        },
        {
            "id": 9,
            "title": "Bromance",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAzLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00428300-mmwsjpwlgt-portrait.jpg",
            "category": "Advanture, Comedy, Romantic",
            "language": "Malayalam",
            "rate": 8.4
        },
        {
            "id": 10,
            "title": "Shotyi Bole Shotyi Kichhu Nei",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAxLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00426642-arvhgcyptw-portrait.jpg",
            "category": "Drama, Thriller",
            "language": "Bengali",
            "rate": 7.9
        },
        {
            "id": 11,
            "title": "Vidaamuyarchi",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICA1MC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408788-qwbtscvqpf-portrait.jpg",
            "category": "Action, Mystery, thriller",
            "language": "Tamil, Hindi",
            "rate": 7.7
        },
        {
            "id": 12,
            "title": "Daveed",
            "img": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAyLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432337-ldquhmljqm-portrait.jpg",
            "category": "Action , Drama, Sports",
            "language": "Malayalam",
            "rate": 8.8
        }
    ]

    // const searchData = data.filter((item) =>
    //     item.title.toLowerCase().includes(state.toLowerCase())
    // )

    // const sortedData = data.sort((a, b) =>
    //     sort == 'asc' ? a.rate - b.rate : b.rate - a.rate
    // )

//     const filteredData=data.filter((el)=>{
//         return lan == "all" ? data : el.language.includes(lan), cat =="allcat" ? data : el.category.includes(cat);
//     })

const filteredData = data
.filter((el) => {
    const language = lan === "all" || el.language.includes(lan);
    const category = cat === "allcat" || el.category.toLowerCase().includes(cat.toLowerCase());
    const search = el.title.toLowerCase().includes(state.toLowerCase());
    return language && category && search;
})
.sort((a, b) => {
    if (sort === "asc") {
        return a.rate - b.rate;
    } else if (sort === "desc") {
        return b.rate - a.rate;
    } else {
        return 0;
    }
});




    return (
        <>

            <Nav />
            <Navbar />
            <Slider />
            <div className='h-[1700px] w-full bg-[#F5F5F5]'>
                <div className='h-[90%] w-[80%] m-auto pt-5 flex justify-between'>
                    <aside className='h-full w-[25%] ps-2 pt-3'>
                        <h3>Filters</h3>
                        <div className='h-[15%] w-full bg-white ps-3 '>

                            <p className='text-[#DC354B]'>Language</p>
                            <div className='h-[67%] w-full flex  align-items-center flex-wrap text-[#DC354B] text-sm' onChange={(e)=>setlan(e.target.value)}>
                                <button className='border h-[25%] w-[21%]' value='all' onClick={() => setlan('all')}>All</button>
                                <button className='border h-[25%] w-[23%] ms-2' value='Hindi' onClick={() => setlan('Hindi')}>Hindi</button>
                                <button className='border h-[25%] w-[27%] ms-2' value='English' onClick={() => setlan('English')}>English</button>
                                <button className='border h-[25%] w-[30%]' value='Gujrati'onClick={() => setlan('Panjabi')}>Panjabi</button>
                                <button className='border h-[25%] w-[35%] ms-2' value='Malayalam' onClick={() => setlan('Malayalam')}>Malayalam</button>
                                <button className='border h-[25%] w-[25%] ms-2' value='Marathi' onClick={() => setlan('Marathi')}>Marathi</button>
                                <button className='border h-[25%] w-[25%]' value='Telugu' onClick={() => setlan('Telugu')}>Telugu</button>
                                <button className='border h-[25%] w-[25%] ms-2' value='Tamil' onClick={() => setlan('Tamil')}>Tamil</button>
                            </div>
                        </div>
                        <div className='h-[25%] w-full bg-white ps-3 mt-4'>

                            <p className='text-[#DC354B]'>Genres</p>
                            <div className='h-[80%]  w-full flex  align-items-center flex-wrap text-[#DC354B] text-sm' onChange={(e)=>setcat(e.target.value)}>
                            <button className='border h-[13%] w-[23%]' onClick={() => setcat('allcat')}>All</button>
                                <button className='border h-[13%] w-[23%] ms-2'onClick={() => setcat('Drama')}>Drama</button>
                                <button className='border h-[13%] w-[27%] ms-2'onClick={() => setcat('Action')}>Action</button>
                                <button className='border h-[13%] w-[30%]'onClick={() => setcat('Comedy')}>Comedy</button>
                                <button className='border h-[13%] w-[30%] ms-2'onClick={() => setcat('Romantic')}>Romantic</button>
                                <button className='border h-[13%] w-[30%] ms-2'onClick={() => setcat('Adventure')}>Adventure</button>
                                <button className='border h-[13%] w-[25%]'onClick={() => setcat('Family')}>Family</button>
                                <button className='border h-[13%] w-[22%] ms-2'onClick={() => setcat('Thriller')}>Thriller</button>
                                <button className='border h-[13%] w-[32%] ms-2'onClick={() => setcat('Animation')}>Animation</button>
                                <button className='border h-[13%] w-[25%]'onClick={() => setcat('Classic')}>Classic</button>
                                <button className='border h-[13%] w-[27%] ms-2'onClick={() => setcat('Historical')}>Historical</button>
                                <button className='border h-[13%] w-[25%] ms-2'onClick={() => setcat('Anime')}>Anime</button>
                                <button className='border h-[13%] w-[22%] 'onClick={() => setcat('Horror')}>Horror</button>
                                <button className='border h-[13%] w-[25%] ms-2'onClick={() => setcat('Musical')}>Musical</button>
                                <button className='border h-[13%] w-[30%] ms-2'onClick={() => setcat('Mystery')}>Mystery</button>
                                <button className='border h-[13%] w-[40%] 'onClick={() => setcat('Psychological')}>Psychological</button>
                                <button className='border h-[13%] w-[22%] ms-2'onClick={() => setcat('Sci-Fi')}>Sci-Fi</button>
                                <button className='border h-[13%] w-[22%] ms-2'onClick={() => setcat('Sports')}>Sports</button>
                            </div>
                        </div>
                    </aside>
                    <div className='h-full w-[73%] '>
                        <div className='h-[4%] w-full flex ps-3  items-center justify-between'>
                            <input type="text" placeholder='🔍 Search Movie..' onChange={(e) => setstate(e.target.value)} className='border h-[35px] w-[30%] ps-3' />

                            <select onChange={(e) => setSort(e.target.value)} className='border h-[35px] text-[#666] text-sm px-2' >
                                <option value="asc">High To Low</option>
                                <option value="desc">Low To High</option>
                            </select>

                        </div>
                        <div className='h-[6%] w-full pt-2 mb-2'>
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/coming-soon-web-collection-202012090733.png" alt="" />
                        </div>
                        <div className='h-[90%] row row-cols-5 '>
                            {
                                filteredData.map((el, i) => {
                                    return <><br />
                                        <div className='h-[400px] col ms-3'>
                                            <img src={el.img} alt="" className='rounded-lg mb-2 h-[70%]' />
                                            <div className='ps-2'>
                                                <span key={i} className='text-lg font-semibold'>{el.title} </span><br />
                                                <span key={i} className='text-sm capitalize text-[#666]'> {el.language}</span></div>

                                        </div>

                                    </>

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Movie










