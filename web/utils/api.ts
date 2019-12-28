import fetch from 'isomorphic-unfetch'

export async function fetchWrapper(
  input: RequestInfo,
  init?: RequestInit
) {
  try {
    const data = await fetch(input,Object.assign(init||{},{ headers: {
      credentials: 'include'
    }}) ).then((res: { json: () => any }) => res.json())
 
    return data
  } catch (err) {
    throw new Error(err.message)
  }
}
