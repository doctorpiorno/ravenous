const apiKey = "b_K0fa1puqrTtbPW4Iraj3cuR9hpHtRgeUpnouf5NLt8A34uzjLafJX2WUjBMi-7KdnZfvvSyXS3O9hncog5bC41i0GUjWvw1KSCcPl42eisf2giyQvQR-zGdB-NW3Yx";

const Yelp = {
  search: function (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {headers: {
        Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json;
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            const output = {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1 + business.location.address2 + business.location.address3,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }
            console.log(output);
            return output;
          });
        }
      });
    }
  }

export default Yelp;
