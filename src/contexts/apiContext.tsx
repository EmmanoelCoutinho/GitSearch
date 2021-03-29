import {
  createContext,
  ReactNode,
  useEffect,
  useCallback,
  useState,
} from "react";

interface Iexported {
  dataUser: IdataUser;
  takeUserValue: (userId: string) => void;
}

interface IdataUser {
  avatar_url: string;
  repos_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  login: string;
  name: string;
  bio: string;
}

interface IapiProviderProps {
  children: ReactNode;
}

export const ApiContext = createContext({} as Iexported);

export function ApiProvider({ children }: IapiProviderProps) {
  const url = "https://api.github.com/users";
  const clientId = process.env.REACT_APP_GITHUB_PUBLIC;
  const clientSecret = process.env.REACT_APP_GITHUB_SECRET;
  const [user, setUser] = useState("");

  const [dataUser, setDataUser] = useState({
    avatar_url: "",
    repos_url: "",
    html_url: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    login: "",
    name: "",
    bio: "",
  });

  const takeUserValue = (userId: string) => {
    setUser(userId);
  };

  const apiFetchUser = useCallback(async () => {
    try {
      const dataResponse = await fetch(
        `${url}/${user}?client_id=${clientId}&client_secret=${clientSecret}`
      );
      const data = await dataResponse.json();
      console.log(data);
      setDataUser({
        avatar_url: data.avatar_url,
        repos_url: data.repos_url,
        html_url: data.html_url,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        login: data.login,
        name: data.name,
        bio: data.bio,
      });
    } catch (error) {
      console.log(error);
    }
  }, [clientId, clientSecret, user]);

  useEffect(() => {
    apiFetchUser();
  }, [apiFetchUser, user]);

  return (
    <ApiContext.Provider
      value={{
        dataUser,
        takeUserValue,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
