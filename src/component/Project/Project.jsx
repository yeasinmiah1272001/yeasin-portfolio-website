import { motion } from "framer-motion";
import Container from "../Container/Container";
import img1 from "../../assets/Screenshot_2.png";
import img2 from "../../assets/todoimages.png";
import img3 from "../../assets/smartyt.png";
// import reduxImage from "../../assets/yeasin";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = () => {
  return (
    <Container
      id="Project"
      className="py-16 text-lg lg:px-0 md:px-24 space-y-6"
    >
      <h1 className="text-2xl font-semibold text-lightColor mb-6">
        <span className="mr-2 text-designColor">03.</span> Where I have worked
        <span className="text-gray-500"> ______________</span>
      </h1>

      <div className="w-full flex flex-col items-center justify-center gap-28">
        {/* Project One */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col xl:flex-row gap-6 w-full"
        >
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://shoppingmart-xi.vercel.app/"
          >
            <div>
              <img
                className="w-full h-80 transition duration-300 transform hover:scale-110 object-contain rounded-2xl"
                src={img3}
                alt="Amazon Project Screenshot"
              />
            </div>
          </a>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-48 z-10"
          >
            <div>
              <p className="font-bodyFont text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Smartyt web application</h3>
            </div>
            <p className="text-sm hover:text-designColor bg-slate-950 bg-opacity-45 p-2 md:p-6 rounded-md transition  transform hover:scale-105 lg:ml-14">
            This Next.js and TypeScript project uses Redux for cart management and NextAuth.js for authentication, with deployment on Vercel. It supports adding products, adjusting quantities, and dynamic price updates.
            </p>
            <ul className="text-xs md:text-sm font-bodyFont tracking-wide flex gap-2 md:gap-5 justify-between -mr-6">
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Next.js
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Typescript
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Next-auth
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Stripe
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Vercel Deployment
              </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/smartyt-nextjs"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/backend/tree/main/Book-store"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://shoppingmart-xi.vercel.app/"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Project wo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col xl:flex-row gap-6"
        >
          <a
            className="w-full xl:w-1/2 relative group"
            href="https://book-client-five.vercel.app/"
          >
            <div>
              <img
                className="w-full transition duration-300 transform hover:scale-110 rounded-xl h-80 object-contain"
                src={img1}
                alt="Project Screenshot"
              />
              <div className="absolute w-full bg-lightColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right md:-ml-36 lg:-ml-48 z-10"
          >
            <div>
              <p className="font-bodyFont text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Book-Store 2.0</h3>
            </div>
            <p className="text-sm hover:text-designColor bg-slate-950 bg-opacity-45 p-2 md:p-6 rounded-md transition  transform hover:scale-105">
              Built with React, node js, firebase, express js, mongodb Tailwind
              CSS, and integrated with a book API. Includes features like
              search, filter, and user authentication.
            </p>
            <ul className="text-xs md:text-sm  tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li className="hover:text-designColor transition  transform hover:scale-110">
                React.js
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Node js
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Firebase
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Stripe
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Vercel Deployment
              </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/backend/tree/main/Book-store"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/backend/tree/main/Book-store"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://book-client-five.vercel.app/"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Project Three */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col xl:flex-row-reverse gap-6"
        >
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://todo-form-ten.vercel.app/"
          >
            <div>
              <img
                className="w-full h-80 transition duration-300 transform hover:scale-105  object-contain rounded-2xl"
                src={img2}
                alt="Amazon Project Screenshot"
              />
              <div className="absolute w-full bg-lightColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10"
          >
            <div className="mt-4 lg:mr-24">
              <p className="font-titleFont text-designColor text-sm tracking-wide lg:-mr-16">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold lg:-mr-16">
                Todo Web Application
              </h3>
            </div>
            <p className="text-sm md:text-base bg-slate-950 bg-opacity-45 p-2 md:p-6 rounded-md xl:-mr-20 transition hover:text-designColor  transform hover:scale-105 ">
              Built with Next js, Redux, vercel, Tailwind CSS, and integrated
              with a todo API. Includes features like search, filter.
            </p>
            <ul className="text-xs md:text-sm font-bodyFont tracking-wide flex gap-2 md:gap-5 justify-between text-darktext ">
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Next.js
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Typescript
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Redux
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Stripe
              </li>
              <li className="hover:text-designColor transition  transform hover:scale-110">
                Vercel Deployment
              </li>
            </ul>
            <div className="text-2xl flex gap-4 lg:-mr-16">
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/todo-form"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://github.com/yeasinmiah1272001/todo-form"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300 hover:text-designColor transition  transform hover:scale-150"
                href="https://todo-form-ten.vercel.app/"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </motion.div>
        </motion.div>

       
      </div>
    </Container>
  );
};

export default Project;
