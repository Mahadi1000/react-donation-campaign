const getDonationApplications = () => {
  const storedDonationApplications = localStorage.getItem(
    "donation-application"
  );
  if (storedDonationApplications) {
    return JSON.parse(storedDonationApplications);
  }
  return [];
};
const saveDonationApplication = (id) => {
  const storedDonationApplications = getDonationApplications();
  const exists = storedDonationApplications.find(donationId => donationId === id);
  if (!exists) {
    storedDonationApplications.push(id);
    localStorage.setItem(
      "donation-application",
      JSON.stringify(storedDonationApplications)
    );
  }
};

export { getDonationApplications, saveDonationApplication };
