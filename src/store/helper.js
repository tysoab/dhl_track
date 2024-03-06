export async function fetchData(trackNumber) {
  let data;
  let isLoading = false;
  let error = null;

  try {
    isLoading = true;
    const response = await fetch(
      `http://localhost:8000/data?track_number=${+trackNumber}`
    );

    if (!response) throw new Error(`Couldn't fetch data`);
    data = await response.json();
    data = data[0];
    if (!data) throw new Error(`Couldn't fetch data`);
    isLoading = false;
  } catch (err) {
    isLoading = false;
    error = err.message;
  }

  return {
    data,
    isLoading,
    error,
  };
}
