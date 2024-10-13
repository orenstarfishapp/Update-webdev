import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioPicture from "../../assets/images/screencapture-yoniyosha-co-il-2023-07-27-14_08_16-1.png";
import ExplorerImage from "../../assets/images/explorer_gaEmeYI7Ic.png";
import SallonImage from "../../assets/images/sallonmary_portfolio.png";
import BarberImage from "../../assets/images/image_2024_10_11T14_09_58_211Z.png";

const Portfolio: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <a href="https://danielbarber.co.il/" target="_blank" rel="noopener noreferrer" className="block rounded-lg shadow-lg overflow-hidden">
              <PortfolioItem
                name="Daniel Barber"
                title="ספר"
                imageSrc={ExplorerImage}
              />
            </a>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <a href="https://yoniyosha.co.il/" target="_blank" rel="noopener noreferrer" className="block rounded-lg shadow-lg overflow-hidden">
              <PortfolioItem
                name="Yonatan Yoshua"
                title="בפסיכולוגיה,לוגותרפיסט"
                imageSrc={PortfolioPicture}
              />
            </a>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <a href="https://sallonmary.co.il/" target="_blank" rel="noopener noreferrer" className="block rounded-lg shadow-lg overflow-hidden">
              <PortfolioItem
                name="Sallon"
                title=""
                imageSrc={SallonImage}
              />
            </a>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-white mb-8">Design</h3>
          <div className="transform hover:scale-105 transition-transform duration-300 max-w-2xl mx-auto">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <PortfolioItem
                name="Barber"
                title=""
                imageSrc={BarberImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;