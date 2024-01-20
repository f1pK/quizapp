import Image from "next/image";
import { CheckCircle } from "@/ui/icons/CheckCircle";
import { importantToKnow } from "@/ui/content/content";
import { Button } from "./Button";

interface IntroProps {
  onGetStartedClick: () => void;
}

export const Intro = ({ onGetStartedClick }: IntroProps) => {
  return (
    <div className="px-5 py-8 flex-1 w-full lg:max-w-4xl mx-auto flex flex-col overflow-hidden">

      {/* Dodany nagłówek z przyciskiem Zaloguj się */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-brand-cerulean-blue">Quiz o Podlasiu</h1>
        <div className="flex space-x-6">
          <Button size="small">Zarejestruj się</Button>
          <Button size="small">Zaloguj się</Button>
        </div>
      </header>



      <Image
        src="/bison-svgrepo-com.svg"
        width={443}
        height={513}
        className="absolute -bottom-10 right-0 z-0 object-contain pointer-events-none w-[443px] h-[413px] lg:w-[500px] lg:h-[600px]"
        alt="Żubr"
      />

      <Image
        src="/dumpling-svgrepo-com.svg"
        width={543}
        height={513}
        className="absolute top-0 right-0 z-0 object-contain pointer-events-none w-[543px] h-[513px] lg:w-[500px] lg:h-[600px]"
        alt="pierożek"
      />

    

      <div className="w-full flex flex-col flex-1 items-center z-10">

        <h3 className="text-black font-bold text-2xl mt-[51.55px] sm:text-3xl">
          Rzeczy, które powinieneś wiedzieć przed rozpoczęciem quizu:
        </h3>

        <div className="flex flex-col items-start mt-5 sm:mt-10 space-y-5">
          {importantToKnow.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle />
              <p className="text-sm text-brand-storm-dust font-normal sm:text-xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Button
        className="w-full z-10"
        block
        size={"small"}
        onClick={onGetStartedClick}
      >{`Rozpocznij Quiz!`}</Button>
    </div>
  );
};
