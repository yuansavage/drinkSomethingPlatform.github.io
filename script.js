var alldata = [
  {
    name:"Apple Juice",
    price:60,
    note:"No extra sugar"
  },{
    name:"Pineapple Juice",
    price:60,
    note:"Double sugar"
  },{
    name:"Strawberry Juice",
    price:80,
    note:"No ice"
  }];

var vm = new Vue({
    el: "#app",
    data:{
      drinks:alldata,
      status:false
    },
    methods:{
      remove: function(id){
        this.drinks.splice(id,1);
      },
      add: function(){
        this.drinks.push({name:$('.ordName').val(),price:$('.ordPrice').val(),note:$('.ordNote').val()});
        $('.ordName').val('');
        $('.ordPrice').val(0);
        $('.ordNote').val('');
      },
      editForm: function(id){
        document.getElementById("myForm").style.display = "block";
      },
      closeForm: function(id){
        document.getElementById("myForm").style.display = "none";
      },
      sortByNameAsc: function(){
            this.drinks = this.drinks.sort(function(a,b){
            return a.name>b.name?1:-1;
          }); 
      },
      sortByNameDesc: function(){
            this.drinks = this.drinks.sort(function(a,b){
            return a.name<b.name?1:-1;
          }); 
      },
      sortByPriceAsc: function(){
        this.drinks = this.drinks.sort(function(a,b){
          return parseInt(a.price,10)>parseInt(b.price,10)?1:-1;
        });
      },
      sortByPriceDesc: function(){
        this.drinks = this.drinks.sort(function(a,b){
          return parseInt(a.price,10)<parseInt(b.price,10)?1:-1;
        });
      }
    }
});