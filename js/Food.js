class Food{
    constructor(){
        this.image=loadImage("Milk.png");
        this.FoodStock=foodStock;
    }
    getFoodStock(){
         
        database.ref("Food").on("value",(data)=>{
            this.FoodStock = data.val();
        })
        return this.FoodStock
    }
    updateFoodStock(foodStock){
        this.FoodStock=foodStock
        this.deductFood();
    }
    getFedTime(lastFed){
        this.lastFed=lastFed;
    }
    deductFood(){
        if(this.FoodStock>0){
            this.FoodStock=this.FoodStock-1
        }
        database.ref("/").update({
        "Food":this.FoodStock})
    }
    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720,200,70,70);
        if(this.FoodStock!=0){
            for(var i=0;i<this.FoodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}