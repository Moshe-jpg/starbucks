const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
  .from("header", { y: "-100", ease: "bounce", duration: 2 })
  .from(".nav-link", { opacity: 0, stagger: 0.5 })
  .from(
    ".textBox h1",
    {
      x: "-100vw",
      ease: "elastic",
      duration: 2.5,
    },
    1
  )
  .from(
    ".textBox p",
    {
      x: "-100vw",
      ease: "elastic",
      duration: 2.5,
    },
    1
  )
  .from(".imgBox", { x: "200%" }, "<.5")
  .from(".sci li", { opacity: 0, stagger: 0.5 })
  .fromTo(
    ".open-btn",
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 },
    "<.1"
  );

