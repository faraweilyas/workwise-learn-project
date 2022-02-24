import Layout from "@/components/layout/layout";
import NewPost from "@/components/modals/NewPost";
import Comments from "@/components/posts/Comments";
import SinglePost from "@/components/posts/SinglePost";
import { useState } from "react";

export default function Home() {
  let posts = [
    {
      name: "Olasukanmi Habeeb",
      isAdmin: false,
      color: "bg-yellow-50",
      role: "Technology",
      image: "/assets/images/Olasukanmi.png",
      postImage: "/assets/images/emoji.png",
      text: "Happy Birthday, Jide!",
    },
    {
      name: "Osamudiamen Imasuen",
      isAdmin: false,
      role: "Design",
      image: "https://picsum.photos/30",
      postImage: null,
      text:
        "I’m the new intern. It’s nice to join an amazing team like yours. Thanks for this opportunity. I won’t squander it in Jesus mighty name.",
    },
    {
      name: "Jide Fawas",
      isAdmin: true,
      role: "Sales & Marketing",
      image: "https://picsum.photos/30",
      postImage: "https://picsum.photos/200",
      text:
        "Hey guys, I just got into my hotel. See the view from up here. Beijing is sooooo beautiful! I should get started on my slides ahead of tomorrow. @Olasukanmi Habeeb, we should visit here again.",
    },
    {
      name: "Mariah Dustin",
      isAdmin: true,
      role: "Human Resources",
      image: "https://picsum.photos/30",
      postImage: null,
      text:
        "Game night is coming! So sad @Jide Fawas won’t be able to join us. Which of these should be the main game of the night?",
    },
    {
      name: "Temitope Dorcas",
      isAdmin: false,
      role: "Customer Service",
      image: "https://picsum.photos/30",
      postImage: null,
      text:
        "I saw this earlier today on NY Times. We were freaking mentioned on NY Times. Blowwwwwwwwwwn! 🤩🤩 ",
      poll: [
        "FIFA 2021, PES 2020 and Need for Speed ",
        "Scrabble, WHOT, and beer pong",
        "Truth or Dare",
        "Monopoly",
      ],
    },
  ];
  return (
    <Layout title='Landing Page'>
      <div className='center p-2'>
        <NewPost />
        <div className='flex justify-between mt-3 items-center '>
          <div className='w-full mt-2 mr-2 h-2 border-t border-gray-400'></div>
          <p className='bordered w-full bg-white rounded-full p-1 font-semibold
           text-center text-gray-500 tracking-tighter' >SHOW PINNED MESSAGES</p>
          <div className='w-full h-2 mt-2 ml-2  border-t border-gray-400'></div>
        </div>
        {posts.map((post, index) => (
          <SinglePost post={post} key={index} />
        ))}
        
      </div>
    </Layout>
  );
}
