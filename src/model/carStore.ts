import { observable, decorate, action } from "mobx";

export default class CarStore {
  data: object | [] | undefined;

  query: string = "";

  updateQuery = (query: string) => {
    this.query = query;
  };

  getCarTrademarks = () => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then(response => response.json())
      .then(data => this.setData(data))
      .catch(error => console.log(error.message));
  };

  getCarModels = (trademarkCode: string) => {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${trademarkCode}/modelos`
    )
      .then(response => response.json())
      .then(data => this.setData(data))
      .catch(error => console.log(error.message));
  };

  getCarYear = (trademarkCode: string, modelCode: string) => {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${trademarkCode}/modelos/${modelCode}/ano`
    )
      .then(response => response.json())
      .then(data => this.setData(data))
      .catch(error => console.log(error.message));
  };

  getCarValue = (trademarkCode: string, modelCode: string, year: string) => {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${trademarkCode}/modelos/${modelCode}/ano/${year}`
    )
      .then(response => response.json())
      .then(data => this.setData(data))
      .catch(error => console.log(error.message));
  };

  setData = (data: object | []) => {
    this.data = data;
  };
}

decorate(CarStore, {
  query: observable,
  updateQuery: action,
  data: observable,
  setData: action,
  getCarTrademarks: action,
  getCarModels: action,
  getCarValue: action,
  getCarYear: action
});
