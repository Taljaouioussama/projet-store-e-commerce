// import React from 'react'
// import Product from './Product'
// import './Home.css'; 

// const Home = () => {
//     return (
//         <div>
//             <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//                 <div class="carousel-indicators">
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
//                 </div>
//                 <div class="carousel-inner">
//                     <div class="carousel-item active">
//                         <img src="https://static.nike.com/a/images/f_auto/d1519d10-fccc-4899-9b3b-75197f36e46c/image.jpeg" class="d-block w-100" alt="IPhone" height="500px"/>
//     </div>
//                         <div class="carousel-item">
//                             <img src="https://th.bing.com/th/id/R.231f604b8a28b1a06e517112b5b6ce55?rik=CXuajhDUkQd2dA&pid=ImgRaw&r=0" class="d-block w-100" alt="IPhone" height="500px"/>
//     </div>
//                             <div class="carousel-item">
//                                 <img src="https://th.bing.com/th/id/OIP.QxBb0PNa0lR-sB4FCQtzqgHaFJ?w=680&h=473&rs=1&pid=ImgDetMain" class="d-block w-100" alt="IPhone" height="500px"/>
//     </div>
//                             <div class="carousel-item">
//                                 <img src="https://i.pinimg.com/originals/0d/66/c7/0d66c7e94093d55db23eac76e06ffbeb.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
//     </div>
//                             </div>
//                             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                                 <span class="visually-hidden">Previous</span>
//                             </button>
//                             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                                 <span class="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                         <Product/>
//                     </div>
//                     )
// }

//                     export default Home







import React from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                </div>

                {/* Carousel Images */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://static.nike.com/a/images/f_auto/d1519d10-fccc-4899-9b3b-75197f36e46c/image.jpeg"
                            className="d-block w-100"
                            alt="Nike Store Slide 1"
                            height="500px"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://th.bing.com/th/id/R.231f604b8a28b1a06e517112b5b6ce55?rik=CXuajhDUkQd2dA&pid=ImgRaw&r=0"
                            className="d-block w-100"
                            alt="Nike Store Slide 2"
                            height="500px"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://th.bing.com/th/id/OIP.QxBb0PNa0lR-sB4FCQtzqgHaFJ?w=680&h=473&rs=1&pid=ImgDetMain"
                            className="d-block w-100"
                            alt="Nike Store Slide 3"
                            height="500px"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.pinimg.com/originals/0d/66/c7/0d66c7e94093d55db23eac76e06ffbeb.jpg"
                            className="d-block w-100"
                            alt="Nike Store Slide 4"
                            height="500px"
                        />
                    </div>
                </div>

                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Products Section */}
            <Product />
        </div>
    );
};

export default Home;
