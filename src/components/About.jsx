import React from 'react'
import { NavLink } from 'react-router-dom'
import './About.css'; 

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        




Nike, Inc. est un leader mondial dans le domaine des articles de sport et de mode active, offrant une gamme de produits innovants pour les athlètes de tous niveaux. Fondée en 1964, Nike a transformé l'industrie du sport avec des designs avant-gardistes, des technologies de pointe et une passion pour la performance. Que vous soyez un sportif professionnel ou un passionné de fitness, notre mission est de vous inspirer à repousser vos limites et à atteindre vos objectifs.

Le Nike Store propose une vaste sélection de vêtements, chaussures et accessoires pour hommes, femmes et enfants. Chaque produit est conçu pour offrir confort, style et performance, en utilisant des matériaux de haute qualité et des technologies exclusives, telles que Nike Air, Flyknit et Dri-FIT.

Nous croyons en l'importance de la communauté et du bien-être, et nous nous efforçons de créer un environnement inclusif où chacun peut s'épanouir. Découvrez nos collections tendances et innovantes dans notre magasin, et laissez-nous vous accompagner dans votre parcours vers un avenir plus actif et plus sain.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
