import Header from "./Header/Header"

function DefaultLayout({children}){
    return(
        <div>
            <Header></Header>
            <div className='container'>
                {children}
            </div>
        </div>
    )
}
export default DefaultLayout