const getPostsData = async () => {
  const res = await fetch("http://104.248.101.152:4000/weather");
  return res.json();
};

export default async function posts() {
  const posts = await getPostsData();
  console.log(posts);
  return (
    <div>
      {
        posts.map((post:any) => {
          return <ul>
            <li>Temperature: {post.temperature}°C</li>
            <li>Condition: {post.condition}</li></ul>;
        })
      }
      
    </div>
  );

}
