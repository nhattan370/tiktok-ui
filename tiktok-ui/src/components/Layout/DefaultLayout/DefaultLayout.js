import Header from "./Header/Header"

function DefaultLayout({children}){
    return(
        <div>
            <Header></Header>
            <div style={{marginTop: '50px'}} className='container'>
                {children}
            </div>
        </div>
    )
}
export default DefaultLayout