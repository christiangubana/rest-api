
export const getAuthFromLocalStorage = () => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (!username || !password) {
      throw new Error("Username or password not found in local storage");
    }
  
    return {
      username: username,
      password: password,
    };
  };
  