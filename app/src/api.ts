export const getUrl = (value: string) => {
  return `https://freesound.org/apiv2/search/text/?fields=id,name,previews&query=${value}`
}

export const callFreeSoundApi = (url: string) => {
  return fetch(url,
    {
      headers: {
        Authorization: 'Token Dyjz7trmYZEG0jDK4eoWttjQK298Z94znjHRrf0T'
      }
    }).then(res => res.json())
}
