

const selector = document.querySelector(".navbar");
const navigation = selector.querySelectorAll("a");

console.log(navigation)
navigation.forEach(link => {
    link.addEventListener("click", function (){
        navigation.forEach(nav => nav.classList.remove("active"));

            this.classList.add("active");
        
    })

    // console.log(link);
} );

