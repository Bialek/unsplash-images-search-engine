import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
	applicationId: "3609d4a6197903583b16fe3180f0c4690eef812937957aa1c5dba199fd02fcb2",
	secret: "ede73d59cd65e78dde2ad5c385a9350ce942d71c6ca1adcff93adc5472c5e29b",
	callbackUrl: "https://unsplash.com/"
});

const UnsplashApi = (getState) => {
    return unsplash.search.photos(getState().currentCategory, 1, 20)
        .then(response => response.json())
        .then(responseJson => {  return responseJson.results })
}



export default UnsplashApi