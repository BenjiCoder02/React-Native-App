const mode = "prod" //use 'dev' for local and 'prod' for production
const APIDomainSelector = (mode !== "dev" ? "https://impact-toronto-react-native.herokuapp.com" : "http://192.168.2.92:8080")

export const youtubeLink = "https://www.youtube.com/c/ImpactChurchTO/featured";
export const homeAPI = `${APIDomainSelector}/home`
export const eventsAPI = `${APIDomainSelector}/rest/v1/events`
export const registerPushToken = `${APIDomainSelector}/rest/v1/register-push-token`
export const verseOfTheDayAPI = `${APIDomainSelector}/rest/v1/verse`