// @flow

export const asyncFetch = async endpoint => {
  const url = endpoint,
    options = {
      method: 'GET',
      'Content-Type': 'application/json',
      dataType: 'json'
    };
  try {
    const response = await fetch(url, options);

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};
