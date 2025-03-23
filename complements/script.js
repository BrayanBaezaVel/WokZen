// PRODUCTS

const products = [
    { Image:"../assets/Images/jangjang.jpg", name:"FIDEOS JING JANG", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum, minus veniam",link:"https://www.youtube.com/watch?v=l78-XyfETl0"},
    { Image:"../assets/Images/stir-fry-chicken-zucchini-sweet-peppers-green-onion-with-chopsticks.jpg", name:"FLOR DE LOTO ", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum, minus veniam",link:"https://www.youtube.com/watch?v=5yLGjXTF6MY"},
    { Image:"../assets/Images/sushi-dish-asian-restaurant.jpg", name:"SUSHI SALMON", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum, minus veniam",link:"https://www.youtube.com/watch?v=Xk0wdDTTPA0"},
    { Image:"../assets/Images/ND-Lumpia-lhfz-superJumbo.jpg", name:"LUMPIA", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum, minus veniam",link:"https://www.youtube.com/watch?v=0z1xkgYQLq8"},
    { Image:"../assets/Images/chicken-7249273_640.jpg", name:"JATSU CHICKEN", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum, minus veniam",link:"https://www.youtube.com/watch?v=4wcbJGoDvqM"},
    { Image:"../assets/Images/camarones.jpg", name:"CAMARON LOCO", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum, minus veniam",link:"https://www.youtube.com/watch?v=eeBQrWAVSV0"}
]
const productList = document.getElementById("product-list");
products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "col-md-4 mb-4";
    productCard.innerHTML = `
        <div class="card h-100">
            <img src="${product.Image}" class="card-img-top h-100 w-100" alt="${product.name}">
            <div class="card-body text-center">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.info}</p>
                <a href="${product.link}" class="btn btn-primary">Buy Now</a>
            </div>
        </div>
    `;
    productList.appendChild(productCard);
});

// FORMS REGISTER
    document.getElementById('register' ).addEventListener('submit',async function(event){
        event.preventDefault();

        let userName = document.getElementById('nameReg').value.trim();
        let userEmail = document.getElementById ('emailReg').value.trim();
        let userPass= document.getElementById ('passReg').value.trim();

        if ( userName == '' || userEmail == '' || userPass == ''){
            alert ('Please Fill in all fields')
            return;
        }
        let userData ={
            name: userName,
            emai : userEmail,
            password : userPass,
        };

        try {
            let response = await fetch("https://workzen.com/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            let data = await response.json();
            console.log("Response From Api",data);
            if(response.ok){
                alert("Registered Succcesfully");
                this.reset
            }else{
                alert ("Error registering, try again Sending ")
            }
            
            
        } catch (error) {
            console.error("Error",error);
            alert ("There was a problem with the registration")            
        }
    });