const result = document.querySelector(".result");

const url = `/api/2-basic-api`;

const fetchData = async () => {
  try {
    const { data } = await axios(url);
    const products = data
      .map((product) => {
        const {
          id,
          image: { url },
          name,
          price,
        } = product;
        return `
        <article key="${id}" class="product">
          <img src="${url}" alt="${name}" />
          <div class="info">
            <h5>${name}</h5>
            <h5 class="price">$${price}</h5>
          </div>
        </article>
     `;
      })
      .join("");
    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = `<h4>There was an error. Please try again later</h4>`;
  }
};

fetchData();
