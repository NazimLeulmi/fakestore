import axios from "axios";

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

async function fetchUser(): Promise<User | undefined> {
  const user = await axios.get("https://fakestoreapi.com/users/1");
  return user.data;
}

export default fetchUser;
