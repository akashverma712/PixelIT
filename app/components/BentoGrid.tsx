'use client';

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

const items = [
  { id: 1, image: "https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4=", span: "row-span-2" },
  { id: 2, image: "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?cs=srgb&dl=pexels-marcin-dampc-807808-1684187.jpg&fm=jpg", span: "col-span-2" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDurhx4iU6-gVfULp2hCL4l7JZp__s776Ew&s" },
  { id: 4, image: "https://images.unsplash.com/photo-1468234847176-28606331216a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sb3IlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D", span: "row-span-2 col-span-2" },
  { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_0Cq_4ltvWqi5oororUKh_ACC1ZHCgbhjg&s" },
  { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmriCn5qb63p0jZiNO6RiNmCbcLttt5oLaow&s", span: "row-span-2" },
  { id: 7, image: "https://media.istockphoto.com/id/1057472128/photo/back-view-of-female-friends-having-fun-on-a-music-concert.jpg?s=612x612&w=0&k=20&c=3lRs6flKEWvCJR8Q2U3nIj1cvyHExZolsjb_COObLEY=" },
  { id: 8, image: "https://media.istockphoto.com/id/2150389695/photo/concertgoer-forms-heart-shape-with-hands-at-beachside-music-festival-crowd-enjoys-live.jpg?s=612x612&w=0&k=20&c=C-rsIFkprFJfUcKRUO7BPZwgnbP9_2uChyEO3JJT5qA=", span: "col-span-2" },
  { id: 9, image: "https://media.istockphoto.com/id/1441599728/photo/three-friends-dancing-at-the-music-festival-in-sunny-day.jpg?s=612x612&w=0&k=20&c=aqD688JNAli1o-aK2sFepgCSeCJ7yy239ECXJH5labw=" },
];


export default function BentoGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ hooks MUST be inside the component
  const shuffledIndexes = useMemo(() => {
    const order = [...Array(items.length).keys()];
    return order.sort(() => Math.random() - 0.5);
  }, []);

  const itemVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 40,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.55,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div ref={ref}>
      <div
  className="
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
    auto-rows-[180px]
    gap-6
    max-w-6xl mx-auto
    grid-flow-dense
  "
>



        {items.map((item, index) => {
          const randomOrderIndex = shuffledIndexes[index];

          return (
            <motion.div
  key={item.id}
  variants={itemVariant}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  custom={randomOrderIndex}
  className={`
    relative overflow-hidden rounded-xl
    border border-white/10
    bg-black/60 backdrop-blur-md
    ${item.span ?? ""}
  `}
>

              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

