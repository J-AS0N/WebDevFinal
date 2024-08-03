import HomeCSS from '../styles/Home.module.css'
function Home() {
    return(
    <div className={HomeCSS.container}>
        <h1> WELCOME</h1>
        <button className={HomeCSS.employees}> Employees </button>
        <button className={HomeCSS.tasks}> Tasks </button>
    </div>
    )
}

export default Home;