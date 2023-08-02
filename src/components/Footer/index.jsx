import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
            <div className="redes">
                <a href="https://github.com/joaquincardosorios">
                    <img src="/img/facebook.png" alt="facebook"/>
                </a>
                <a href="https://github.com/joaquincardosorios">
                    <img src="/img/twitter.png" alt="twitter"/>
                </a>
                <a href="https://github.com/joaquincardosorios">
                    <img src="/img/instagram.png" alt="instagram"/>
                </a>
            </div>
            <img src="/img/Logo.png" alt="org"/>
            <strong>Desarrollado por Joaquin Cardoso</strong>
        </footer>
    )
}

export default Footer