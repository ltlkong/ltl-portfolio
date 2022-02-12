const getLocationByIp = async () => {
  const baseurl = 'http://ip-api.com/json';

  return fetch(baseurl).then(response => {
    if (response.ok) return response.json();
    return null;
  });
};

const locationService = {
  getLocationByIp,
};

export default locationService;
