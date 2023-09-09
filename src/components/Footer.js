import React from 'react'
import "../style/footer.css"
const Footer = () => {
    return (
        <>
            <footer class="w3-container w3-dark-grey w3-margin-top">
                <div class="footer-buttons">
                    <button class="w3-button w3-disabled w3-padding-large w3-margin-right">Previous</button>
                    <button class="w3-button w3-padding-large">Next »</button>
                </div>
                <p className='footerP'>Powered by <a className="footerA" href="https://elysiancorptech.com/" target="_blank">Elysian Corptech</a></p>
            </footer>


        </>
    )
}

export default Footer