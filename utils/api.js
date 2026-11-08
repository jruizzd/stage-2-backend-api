const FDA_BASE_URL = "https://api.fda.gov/device/classification.json";

const getDevicesFromFDA = async (search) => {
  const response = await fetch(`${FDA_BASE_URL}?search=${search}&limit=10`);

  if (!response.ok) {
    throw new Error(`FDA API Error: ${response.status}`);
  }

  return response.json();
};

module.exports = {
  getDevicesFromFDA,
};
