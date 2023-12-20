import React from 'react'

function Hero() {
  return (
    <section id="hero" className='hero-section'>
        <div className='hero-section-box'>
            <div className='hero-content'>
                <p className='section-title'>Hey, I am Solomon</p>
                <h1 className='hero-section-title'>
                    <span className='hero-section-title-color'>
                        Full Stack
                    </span>{" "}
                    <br/>
                    Developer
                </h1>
                <p className='hero-section-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libero, reprehenderit aperiam ullam praesentium perspiciatis autem eum, laudantium aliquid totam doloremque porro molestiae voluptate et at modi maiores labore? Tenetur.
                </p>
            </div>
            <button className='btn btn-primary'>Get In Touch</button>
        </div>
        <div className='hero-section-image'>
            <img src="/img/hero_img.png" alt="hero" />
        </div>
    </section>
  )
}

export default Hero