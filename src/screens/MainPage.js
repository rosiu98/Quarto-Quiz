import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Begin } from "../components/Begin";
import { Box } from "../components/Box";
import { Image } from "../components/BoxImage";
import { Button } from "../components/Button";
import Title from "../components/Title";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "RESET" });
    }, 1000);
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1, duration: 1 }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <Title
        title={"Quarto Quiz"}
        description={
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea."
        }
      />
      <Box>
        {" "}
        <Image
          animate={{ top: "-20%" }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          src={"./img/autro.svg"}
        />
        <Button to="question/0">Let's Begin</Button>
        <div className="box">
          <Begin
            right={"30px"}
            animate={{ top: 500 }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          >
            Let's&nbsp;Begin
          </Begin>
          <Begin
            right={"50%"}
            animate={{ top: 400 }}
            transition={{ ease: "linear", duration: 9, repeat: Infinity }}
          >
            Let's&nbsp;Begin
          </Begin>
          <Begin
            right={"70%"}
            animate={{ top: 500 }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          >
            Let's&nbsp;Begin
          </Begin>
          <Begin
            right={"90%"}
            animate={{ top: 400 }}
            transition={{ ease: "linear", duration: 6, repeat: Infinity }}
          >
            Let's&nbsp;Begin
          </Begin>
          <Begin
            right={"20%"}
            animate={{ top: 500 }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          >
            Let's&nbsp;Begin
          </Begin>
        </div>
      </Box>
    </motion.div>
  );
};

export default MainPage;
