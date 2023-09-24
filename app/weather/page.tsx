const getData = async () => {
  const url = 'http://104.248.101.152:4000/weather';
  const randomQueryParam = `?timestamp=${Date.now()}`;
  const result = await fetch(url + randomQueryParam);
  return result.json();
};

export default async function post() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h3>Random Weather Information</h3>
      {
        data.map((post:any) => {
          return <ul>
            <li>Temperature: {post.temperature}°C</li>
            <li>Condition: {post.condition}</li></ul>;
        })
      }
      
    </div>
  );

}