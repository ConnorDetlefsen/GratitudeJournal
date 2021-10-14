import Head from "next/head";
import Greeting from "../components/Greeting";
import History from "../Components/History";
import Input from "../Components/Input";
import AddAgain from "../Components/AddAgain";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState({
    name: "Connor",
    email: "detlefsen@chapman.edu",
  });

  const [gratitudes, setGratitudes] = useState([]);

  const [hasSubmittedToday, setHasSubmittedToday] = useState(false);

  const addGratitude = (entry) => {
    if (entry.replace(/\s+/g, "").length === 0) {
      alert("You must enter something to submit!");
    } else {
      let newGratitude = [...gratitudes, entry];
      setGratitudes(newGratitude);
      setHasSubmittedToday(true);
    }
  };

  const onAddAnother = () => {
    setHasSubmittedToday(false);
  };

  //passed through history then passed to card
  const onDelete = (entry) => {
    let index = gratitudes.indexOf(entry);
    let newGratitudes = [...gratitudes];
    newGratitudes.splice(index, 1);
    setGratitudes(newGratitudes);
    if (newGratitudes.length === 0) {
      setHasSubmittedToday(false);
    }
  };

  return (
    <div className="bg-gray-700 min-h-screen min-w-screen">
      <Head>
        <title>{user.name}'s Gratitude Journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col p-1 items-center">
        <Greeting
          color="text-pink-800"
          user={user}
          gratitudes={gratitudes}
          hasSubmittedToday={hasSubmittedToday}
        ></Greeting>
        {!hasSubmittedToday && <Input handleSubmit={addGratitude}></Input>}
        {hasSubmittedToday && <AddAgain onAddAnother={onAddAnother}></AddAgain>}

        {gratitudes.length > 0 && (
          <History
            className="p-3"
            gratitudes={gratitudes}
            onDelete={onDelete}
          ></History>
        )}
      </main>
    </div>
  );
}
