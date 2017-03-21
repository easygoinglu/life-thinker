var util = {
  date: {
    format: function(date){
      return [date.getFullYear(), date.getMonth(), date.getDate()].join("/")
    }
  }
};

export default util;