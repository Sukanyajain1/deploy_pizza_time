const PizzaController = require("../controllers/pizza.controller");


// all the routes in a module.exports arrow function
module.exports = (app)=>{
    app.get("/api/hello", PizzaController.sayHello);
    app.get("/api/pizzas", PizzaController.findAllPizzas);
    app.post("/api/pizzas", PizzaController.createPizza);
    app.get("/api/pizzas/random", PizzaController.findRandomPizza);  // find a random Pizza

    /* 
    
    Best Practice: Keep all the static routes on the top and all the dynamic routes with path variables on the bottom so the paths with the same roots and routing syntax don't get confused
            ---> (get route with /api/pizzas/someVariable --> the findRandom and findOne routes conflict with each other)
    
    */

    app.get("/api/pizzas/:id", PizzaController.findOnePizza);
    app.put("/api/pizzas/:id", PizzaController.updatePizza);
    app.delete("/api/pizzas/:id", PizzaController.deletePizza);





}