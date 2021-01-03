const postData = (url, data) => {
  
  fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
};

const getData = async (url, total) => {

  const dataResponse = await fetch(url + "/");
  const dataJson = await dataResponse.json();

  const eachResponse = await Promise.all(
    dataJson.slice(Math.max(dataJson.length - total, 0)).map(name => fetch(`${url}/${name}`)),
  );

  const eachJson = await Promise.all(eachResponse.map(item => item.json()));
  return eachJson;
};

export { postData, getData };
