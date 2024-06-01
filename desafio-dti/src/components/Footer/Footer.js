import './Footer.css'

const Footer = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/StephanieSouzaC" target="_blank">
                        <img src="/images/github.svg" alt="logo Github"/>
                    </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/stephanie-souza-83a18b239/" target="_blank">
                        <img src="/images/linkedin.svg" alt="logo LinkedIn"/>
                    </a>
                </li>
            </ul>
            <p>© Desenvolvido por Stephanie Souza</p>
        </section>
    </footer>
    )
}

export default Footer;