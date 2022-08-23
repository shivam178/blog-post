export const getblogData = async (pokemon) => {
    try {
      let url = 'http://localhost:8080/blogs/api/v1/dashboard/blogs';
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  export const createBlog = async (data) => {
    try {
      let url = 'http://localhost:8080/blogs/api/v1/dashboard/blogs';
      const response = await fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
       body: JSON.stringify(data)
      });
      const blogdata = await response.json();
      return blogdata;
    } catch (err) {}
  };