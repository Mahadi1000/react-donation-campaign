/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationApplications } from "../../Utitlity/LocalStorage";

export default function Donation() {
  const donations = useLoaderData();
  const [appliedDonations, setAppliedDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const storedDonationIds = getDonationApplications();
    if (donations.length > 0) {
      const donationsApplied = [];
      for (const id of storedDonationIds) {
        const donation = donations.find((donation) => donation.id === id);
        if (donation) {
          donationsApplied.push(donation);
        }
      }
      setAppliedDonations(donationsApplied);
    }
  }, []);

  const totalPrices = appliedDonations.reduce(
    (total, donation) => total + donation.price,
    0
  );

  const displayedDonations = showAll
    ? appliedDonations
    : appliedDonations.slice(0, 4);

  const handleSeeAll = () => {
    setShowAll(true);
  };

  const handleDelete = (id) => {
    // Filter out the card with the specified id from appliedDonations
    const updatedDonations = appliedDonations.filter(
      (donation) => donation.id !== id
    );

    // Update the state with the new array
    setAppliedDonations(updatedDonations);

    // Update the localStorage to remove the deleted donation id
    const storedDonationIds = getDonationApplications();
    const updatedStoredDonationIds = storedDonationIds.filter(
      (donationId) => donationId !== id
    );
    localStorage.setItem(
      "donation-application",
      JSON.stringify(updatedStoredDonationIds)
    );
  };

  return (
    <div className="mt-20">
      <h1 className="ml-4 text-3xl">Total Prices: ${totalPrices}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayedDonations.map((donation) => (
          <div
            key={donation.id}
            className={`p-4 rounded-lg shadow-lg bg-${donation.card_bg} text-${donation.text_bg}`}
          >
            <img src={donation.picture} alt="" />
            <div
              className={`mb-2 rounded-full h-6 w-6 flex items-center justify-center bg-${donation.text_bg}`}
            ></div>
            <h3 className="text-xl font-semibold">{donation.description}</h3>

            <p>Price: ${donation.price}</p>
            <div className="flex flex-col">
              <button
                className={`bg-${donation.text_bg} text-${donation.text_bg} hover:bg-${donation.card_bg} hover:text-${donation.text_bg} h-8 mt-2 px-2 rounded font-semibold`}
              >
                View Details
              </button>
              <button
                className="bg-red-600 text-white w-44 mx-auto py-3 rounded-md mt-2"
                onClick={() => handleDelete(donation.id)} // Pass the id to delete
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {appliedDonations.length > 4 && !showAll && (
        <button
          className="bg-green-600 text-white px-5 py-3 rounded-lg mt-4 mx-auto block"
          onClick={handleSeeAll}
        >
          See All
        </button>
      )}
    </div>
  );
}
