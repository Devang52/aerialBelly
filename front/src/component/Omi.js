import { Link } from "react-router-dom";
function Omi() {
    return (
        <>
            <div className="dempp" style={{ backgroundImage: "url('/assets/img/hero/omi.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height:'790px' }}>
                {/* <h2 style={{ paddingTop: '18%' }}>Our Annual Show</h2>
                <p>Home / Our Annual Show</p> */}
            </div>




            <div className="overflow-hidden space bgring" id="about-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="title-area mb-30">
                            <h1 className="sec-title" style={{ textAlign: 'center' }}>Our Annual Show</h1>
                        </div>
                        <div className="col-xl-12">
                            <div className="title-area mb-30">
                                <h3 className="sec-title">An Authentic Belly Dance & Aerial Arts show</h3>
                            </div>
                            <p className="sec-desc mt-n2 mb-30">Immerse yourself in the enchanting world of <span style={{color:'#bd934c', fontWeight:'700'}} >OMI</span>, a mesmerizing live show directed and choreographed by the talented Nupur Shah. <span style={{color:'#bd934c', fontWeight:'700'}} >OMI</span> transcends boundaries, blending the soulful rhythms of Live Egyptian Darbouka music with the captivating artistry of belly dance, creating an authentic and unforgettable experience. At a breathtaking height of 30 feet, <span style={{color:'#bd934c', fontWeight:'700'}} >OMI</span> introduces the awe-inspiring dimension of aerial arts, elevating the spectacle to new heights. Witness the fusion of strength and grace as performers masterfully navigate the aerial realm, adding a dynamic layer to this extraordinary showcase. <span style={{color:'#bd934c', fontWeight:'700'}} >OMI</span> celebrates the diverse tapestry of belly dance, featuring various forms such as Oriental Belly dance, Tribal fusion belly dance, FCBD, Folklore belly dance, and more. <span style={{color:'#bd934c', fontWeight:'700'}} >OMI</span> is the national platform for every member/student of AerialBelly to showcase their talent in the most grand way. Nupur Shah's artistic direction brings forth the purest essence of these dance forms, creating a rich and vibrant tapestry of movement and expression. This captivating journey through belly dance and aerial arts is not confined by age; participants range from 6 to 75 years old. <span style={{color:'#bd934c', fontWeight:'700'}} >OMI</span> is a testament to the universal language of dance, embracing individuals of all ages and backgrounds. Experience the magic, energy, and sheer beauty of <span style={{color:'#bd934c', fontWeight:'700'}} >OMI</span>, where every movement tells a story, and the stage becomes a canvas for artistic expression. Let Nupur Shah's visionary choreography transport you to a world where belly dance and aerial arts converge in perfect harmony. This grand show AerialBelly did recently was houseful, leaving everyone mesmerised and spellbound!</p>
                            <p className="sec-desc mt-n2 mb-30">
                            <span style={{color:'#bd934c', fontWeight:'700'}} >OMI</span> is more than a show; it's a celebration of the purest form of these art forms, inviting you to be a part of an unforgettable experience that happens every year in India.</p>
                            Be a part of <span style={{color:'#bd934c', fontWeight:'700'}} >OMI</span> and get ready to give your art a recognition nationwide.
                            <p className="sec-desc mt-n2 mb-30"></p>
                        </div>
                    </div>
                </div>
                <div className="shape-mockup movingX d-none d-xxl-block" data-top="0%" data-right="0%"><img
                    src="assets/img/shape/shape_1.png" alt="shape" /></div>
            </div>


            <div className="video-area-two top-bg-center" data-bg-src="assets/img/bg/demo.jpg">
                <div className="video-wrapper">
                    <div className="video-box1 my-5" data-bg-src="assets/img/normal/demo.jpg">
                        <video controls style={{height:'760px', width:'850px'}}>
                            <source src="assets/img/hero/omivideo.mp4" type="video/mp4"/>
                                <source src="movie.ogg" type="video/ogg"/>
                                </video>
                            </div>
                            <div className="video-text bgringg">
                                
                                <div className="img-box4" style={{width: '545px'}}>
                                    
                                <div className="img1"style={{marginTop: '-75px'}}><img src="assets/img/hero/omi_img1.jpg" style={{  borderRadius: '30px' }} alt="About" />
                                    
                                    </div>

                                    <div className="img1"style={{marginTop: '35px'}}><img src="assets/img/hero/omi_img2.jpg" style={{ borderRadius: '30px' }} alt="About" />
                                    
                                    </div>
                                    {/* <div className="shape1"><img src="assets/img/shape/about_shape_1.svg" alt="shape" /></div> */}
                                </div>
                            </div>
                    </div>
                </div>

                <style jsx>{`
       

                @media (max-width: 768px) {
                    .img-box4 {
                        width: 100% !important;
                        
                    }
                }
            `}</style>

            </>
            )
}
            export default Omi;