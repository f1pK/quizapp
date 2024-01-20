"use client";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Button } from "@/app/_ui/components/Button";

import confettiAnimation from "@/ui/assets/animations/confetti.json";
import { DonutChart } from "./DonutChart";

interface ResultProps {
  results: {
    correctAnswers: number;
    wrongAnswers: number;
    secondsUsed: number;
  };
  totalQuestions: number;
}
export const Result = ({ results, totalQuestions }: ResultProps) => {
  const { correctAnswers, wrongAnswers, secondsUsed } = results;

  const handleRetry = () => {
    // Restart quiz
    window.location.reload();
  };

  return (
    <motion.div
      key={"result"}
      variants={{
        initial: {
          background: "#FF6A66",
          clipPath: "circle(0% at 50% 50%)",
        },
        animate: {
          background: "#FF6A66",
          clipPath: "circle(100% at 50% 50%)",
        },
      }}
      className="w-full h-full flex justify-center p-5"
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col text-black font-bold text-[32px] text-center w-full">


        {/* Result Box */}
        <div className="mt-6 flex-1 bg-white border border-brand-light-gray rounded-2xl flex flex-col items-center py-7 px-2 ">
                {/* Dodany nagłówek z przyciskiem Zaloguj się */}

          
          <Lottie
            animationData={confettiAnimation}
            loop={false}
            autoplay={true}
            style={{ width: "170px", height: "170px" }}
          />
          <h3 className="text-brand-midnight text-[32px] font-medium leading-9 mt-4">
            Gratulacje!
          </h3>
          <p className="text-brand-midnight text-xl font-normal mt-2">
            Twój wynik
          </p>
          <span className="text-brand-midnight font-medium text-[40px]">
            {`${correctAnswers}/${totalQuestions}`}
          </span>
          <p className="text-brand-midnight text-sm font-normal mt-1">
            poprawne odpowiedzi
          </p>

          {/* Charts */}
          <div className="flex items-center mt-4 space-x-4">
            <DonutChart
              className="w-36 h-36"
              total={60 * totalQuestions}
              used={secondsUsed}
              type={"time"}
              data={[
                {
                  label: "Wykorzystany czas",
                  value: secondsUsed,
                  color: "#374CB7",
                },
                {
                  label: "Pozostały czas",
                  value: 60 * totalQuestions - secondsUsed,
                  color: "#F0F0F0",
                },
              ]}
            />

            <DonutChart
              className="w-36 h-36"
              type={"questions"}
              total={totalQuestions}
              used={correctAnswers}
              data={[
                {
                  label: "Poprawne",
                  value: correctAnswers,
                  color: "#56C490",
                },
                {
                  label: "Złe",
                  value: wrongAnswers,
                  color: "#FF6A66",
                },
              ]}
            />
          </div>
        </div>

        {/* Retry Button */}
        <div className="mt-auto">
          <Button
            intent={"secondary"}
            size="small"
            block
            className="mt-6"
            onClick={handleRetry}
          >
            Spróbuj ponownie
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
