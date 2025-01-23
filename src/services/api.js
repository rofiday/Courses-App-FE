const API_URL = import.meta.env.VITE_API_URL;

export const login = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const json = await response.json();
    if (json.status === "error") throw new Error(json.message);
    return json;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const register = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    console.log(response);
    const json = await response.json();
    if (json.status === "error") throw new Error(json.message);
    return json;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
export const logout = async () => {
  try {
    const response = await fetch(`${API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    const json = await response.json();
    if (json.status === "error") throw new Error(json.message);
    return json;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const getAllCourses = async () => {
  try {
    const response = await fetch(`${API_URL}/api/courses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (json.status === "error") throw new Error(json.message);
    return json;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const getCourseById = async (id) => {
  try {
    console.log("id", id);
    const response = await fetch(`${API_URL}/api/courses/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (json.status === "error") throw new Error(json.message);
    return json;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const registerCourse = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/users-courses/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const json = await response.json();
    if (json.status === "error") throw new Error(json.message);
    return json;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const getUsersCoursesByUserId = async () => {
  try {
    const response = await fetch(`${API_URL}/api/users-courses/all`, {
      credentials: "include",
    });
    const json = await response.json();
    console.log(json);
    if (json.status === "error") throw new Error(json.message);
    return json;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
