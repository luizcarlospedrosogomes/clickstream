import trackClickstream from "./modules/trackClickstream.js";



import { postData, getData } from "./modules/server.js";

export default class Clickstream {

  constructor(url, total) {
    this.url = url;
    this.total = total;
  }
  
  track() {
    this.clickstream = trackClickstream();
  }
  
  post() {   
    const data = JSON.stringify({url: document.URL, clicks: this.clickstream}); 
    postData(this.url+"/click", data);
  }
  
  async get() {
    return await getData(this.url, this.total);
  }

  async heatmap(max = 10) {
    this.data = await this.get();
    if (this.data.length) paintHeatmap(this.data.flat(), max);
  }
}
