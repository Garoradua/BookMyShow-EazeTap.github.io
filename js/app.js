const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');

    // attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${10 * (sliders.length - 2)}px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 10000);

//side navigation bar

jQuery(document).ready(function () {

    $('.login, .overlay').on('click', function () {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        // $('#id01').removeClass('modal-content');
    });

    $('.open-menu').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
    });
    $('#id01').on('click',function(e){
        e.preventDefault();
        $('#id01').addClass('modal');
    });
    $('#locationSubmmit').on('click',function(){
        getOption();
    })


});

// function getOption() {
//     // alert('clicked');
//         // var selectElement = document.getElementsByClassName('pune-location');
//         var selectElement = document.querySelector('#location-design');
//         var output = selectElement.options[selectElement.selectedIndex].value;
//         alert(output);
//         if(output=='Pune'){
//             alert(output);
//             var puneSelected = document.getElementsByClassName('movie');
//             alert(puneSelected.id);
//             puneSelected.id = "pune";
//             alert(puneSelected.id);

//             // intro.setAttribute(‘id’, ‘Introduction_ 1’)
//                }
//         if(output=='banglore'){
//             // alert(output);
//             var bangSelected = document.getElementById('banglore');
//             alert(bangSelected.id);
//             bangSelected.removeAttribute('id');
//             // intro.setAttribute(‘id’, ‘Introduction_ 1’)
//                 }
//         if(output=='gurgaon'){
//             // alert(output);
//             var gurSelected = document.getElementById('gurgaon');
//             alert(gurSelected.id);
//             gurSelected.removeAttribute('id');
//             // intro.setAttribute(‘id’, ‘Introduction_ 1’)
//                  }
//         if(output=='hyderabad'){
//              // alert(output);
//             var hySelected = document.getElementById('hyderabad');
//             alert(hySelected.id);
//             hySelected.removeAttribute('id');
//             // intro.setAttribute(‘id’, ‘Introduction_ 1’)
//                  }
//         if(output=='noida'){
//             // alert(output);
//             var noSelected = document.getElementById('noida');
//             alert(noSelected.id);
//             noSelected.removeAttribute('id');
            // intro.setAttribute(‘id’, ‘Introduction_ 1’)
    //              }    
    // }
{/* <div class="movie" id="pune"> */}
    // <button onclick="getOption()">Check option</button>
    // <script type="text/javascript">
  
    // function getOption() {
    //     selectElement = document.querySelector('#select1');
    //     output = selectElement.options[selectElement.selectedIndex].value;
    //     document.querySelector('.output').textContent = output;
    // }
    // class="movie" id="pune"
    /* other code */

// });


// login page

// Get the modal


// var modal = document.getElementById('id01');

// close it

// if (target == modal) 
//     modal.style.display = "none";
// }

// });