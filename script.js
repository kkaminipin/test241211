var tl = gsap.timeline({ delay: 0 });
tl.to('.box1', { duration: 2, rotation: -360 }).to('.box2', { duration: 1, x: -100, ease: 'elastic.out' }).to('.box3', { duration: 2, rotation: 360, x: 100, ease: 'expo.out' });
