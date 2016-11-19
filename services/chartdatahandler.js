 export default class {

  createdCallback() {
    if (!top.window.chartData)
      top.window.chartData = [];

    this.data = top.window.chartData;

  }

  subscribeData(nodes, timespan)
  {
    for(let i in nodes){
        let c = nodes[i];
        this.data[i] = {};
        this.data[i].label = c.name;
        this.data[i].borderColor = c.color;
        this.data[i].fill = false;
        this.data[i].data = [];
        this.wpcp.subscribeData([{id:c.base}], e => {
            this.data[i].data.push({
                    x: new Date().getTime(),
                    y: e.value
                });
            //chart.update();
        });
        //console.log(this.data);
    }
  }

  getData(){
    return this.data;
  }
}
