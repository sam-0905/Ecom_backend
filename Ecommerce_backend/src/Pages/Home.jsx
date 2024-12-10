import homePage from "../assets/ProductImg/homePage.png"

const Home = () => {

    return (
    <>
     <div style={{backgroundImage:`url(${homePage})`,  
            backgroundPosition: 'center',
            backgroundSize: 'cover',    
            backgroundRepeat: 'no-repeat',
            height:"100vh auto",
            width:"100wh",
            marginTop:"0",
            marginBottom:"0"
            }}>
            <div className='home'>
            <h1>Home</h1>
            </div>
        </div>
    </>
)
}
export default Home;