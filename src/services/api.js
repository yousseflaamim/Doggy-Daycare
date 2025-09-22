const API_URL = 'https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8';

export const fetchDogs = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    // Data comes directly as data.record (array)
    return data.record || [];
  } catch (error) {
    console.error('Error fetching dogs:', error);
    // Backup sample data
    return [
      {
        name: "Max",
        sex: "male",
        breed: "German Shepherd",
        img: "https://images.unsplash.com/photo-1517423447168-cb804aafa6e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        present: true,
        age: 3,
        chipNumber: "TEST001",
        owner: {
          name: "Ahmed",
          lastName: "Mohammed",
          phoneNumber: "0501234567"
        }
      }
    ];
  }
};