import homePage from "../assets/ProductImg/homePage.png"

const Home = () => {

    return (
    <>
     <div style={{backgroundImage:`url(${homePage})`,  
            backgroundPosition: 'center',
            backgroundSize: 'cover',    
            backgroundRepeat: 'no-repeat',
            height:"70vh",
            width:"auto",
            marginTop:"0",
            marginBottom:"0"
            }}>
            <div className='home'>
            <h1>Home</h1>
            <button>Shop</button>
            </div>
        </div>
    </>
)
}
export default Home;