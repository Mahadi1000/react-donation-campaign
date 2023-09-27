/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const [contents, setContents] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/donationsDetails/${id}`);
  };

  return (
    <div>
      <section className="min-h-full relative bg-gray-100">
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <img
              src="https://i.ibb.co/HqS08BG/Rectangle-4281.png"
              alt=""
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-white opacity-90"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-4xl font-bold text-black">
                I Grow By Helping People In Need
              </h1>
              <div className="flex items-center">
                <input
                  type="text"
                  className="mt-4 p-2 border border-gray-300  w-80 h-12 rounded-l-lg"
                  placeholder="Enter something"
                />
                <button className="bg-rose-500 h-12 mt-4 px-3 rounded-r-lg font-semibold hover:bg-rose-800">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div>
          <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Donations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {contents.map((card) => (
                <div
                  key={card.id}
                  className={`p-4 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 text-center bg-${card.card_bg} text-${card.text_bg}`}
                  onClick={() => handleCardClick(card.id)}
                >
                  <img src={card.picture} alt="" />
                  <div
                    className={`mb-2 rounded-full h-6 w-6 flex items-center justify-center  bg-${card.text_bg}`}
                  >
                    <h2 className="mt">{card.title}</h2>
                  </div>
                  <h3 className="text-xl font-semibold">{card.description}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Render the DonationPage component */}
    </div>
  );
}

