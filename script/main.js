// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
        }
        animationTimeline();
    });
});

// animation timeline
const animationTimeline = () => {
    const hbd = document.querySelector(".wish-hbd");
    const wishText = document.querySelector(".wish h5");

    // Pisahkan huruf-huruf agar bisa dianimasikan satu per satu
    hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;

    // Timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".profile-picture", 0.5, {
        scale: 3,
        opacity: 0,
        x: -50,
        y: -50,
        rotation: -45,
    })
    .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(".wish-hbd span", 0.7, {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
    }, 0.05)
    .from(wishText, 0.5, {
        opacity: 0,
        y: 20,
        skewX: "-15deg",
    }, "-=1")
    .staggerFromTo(".baloons img", 2.5, {
        opacity: 0.9,
        y: 1400,
    }, {
        opacity: 1,
        y: -1000,
    }, 0.2)
    .staggerTo(".eight svg", 1.5, {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
    }, 0.3)
    .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, {
        opacity: 0,
        y: 20,
        skewX: "-15deg"
    }, 1.2)
    .to(".last-smile", 0.5, {
        rotation: 90,
    }, "+=1");
}
