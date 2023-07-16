import axios from "axios";

const app = axios.create({
  baseURL: 'http://localhost:8080/'
})

export function getAllData(){
  return app.get<string>('/tranferencia').then(res => res.data)
}