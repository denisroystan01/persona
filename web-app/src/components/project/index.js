import React from 'react';
import './index.scss';

// Services
// import apiService from '../../services/api';

function Project() {
    return (
        <div className="project">
            <section className="inner-section">
                <h1>Latest Works</h1>
                <div className="grid-layout">
                    <div className="grid-item grid-item-1 span-1">
                        <div>
                            <h3 title="Project">Morningstar Financial Products</h3>
                            <span title="Industry">Fintech</span>
                            <span title="Company">Morningstar</span>
                            <p title="Description">Products and services for individual investors, financial advisors, asset managers, and retirement-plan providers and sponsors to help them make better investment decisions.</p>
                        </div>
                    </div>
                    <div className="grid-item grid-item-2 span-2">
                        <div>
                            <h3 title="Project">PhasorLab</h3>
                            <span title="Industry">Electronics and Communication</span>
                            <span title="Company">Ajackus</span>
                            <p title="Description">A computer vision solution that augments proprietary high-precision network-based positioning.</p>
                        </div>
                    </div>
                    <div className="grid-item grid-item-3 span-1">
                        <div>
                            <h3 title="Project">Property Capsule</h3>
                            <span title="Industry">Real Estate</span>
                            <span title="Company">Ajackus</span>
                            <p title="Description">Customized map solution for commercial properties.</p>
                        </div>
                    </div>
                    <div className="grid-item grid-item-4">
                        <div>
                            <h3 title="Project">Visa Guide</h3>
                            <span title="Industry">Travel</span>
                            <span title="Company">Ajackus</span>
                            <p title="Description">An online platform to provide visa information and services to travellers around the globe.</p>
                        </div>
                    </div>
                    <div className="grid-item grid-item-5">
                        <div>
                            <h3 title="Project">Binnis Wardrobe</h3>
                            <span title="Industry">E-Commerce</span>
                            <span title="Company">ClouDesign</span>
                            <p title="Description">An e-commerce website for women apparel.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project;