
function getMenu(){
fetch(" https://free-food-menus-api-production.up.railway.app/burgers")
.then((response) => response.json())
.then((data) => {
    console.log(data);

});
}
getMenu()

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({});
//     },2500);
// }) 
// function takeOrder()
// {

// }
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({order_status:true, paid:false});
    },1500);
})
function OrderPrep(){
    console.log("orderprep");

    promise1
    .then((response) => {
        console.log(response.order_status);
        if(response.success){
            console.log(response);
        }

    })
    .catch((error) => {
        console.log(error);
    });
}
OrderPrep()


let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({order_status:true, paid:true});
    },1000);
})

function PayOrder(){
    console.log("payorder");
    promise2
    .then((response) => {
        console.log(response.order_status);
        if(response.paid){
            console.log(response);
            thankYouFun()
        }

    })
    .catch((error) => {
        console.log(error);
    });
}

PayOrder()

function thankYouFun(){
    alert("ThankYou");

}
