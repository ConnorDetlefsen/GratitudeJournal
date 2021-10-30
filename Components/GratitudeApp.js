import Greeting from "./Greeting";
import History from "./History";
import Input from "./Input";
import AddAgain from "./AddAgain";
import { useState } from "react";
import { Auth } from "@supabase/ui";
import React, { useEffect } from "react";

import { supabase } from "../utils/supabaseClient";

// gets the user object from Context
//const { user } = Auth.useUser()

export default function GratitudeApp({ user }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [gratitudes, setGratitudes] = useState([]);

  const [hasSubmittedToday, setHasSubmittedToday] = useState(false);

  useEffect(() => {
    //run the fetchGratitudes() function
    //after the initial render of the app
    // so we have access to the logged in user
    fetchGratitudes();
  }, []);

  const fetchGratitudes = async () => {
    //get the gratitudes data from supabase
    //set the value of gratitudes state to that data
    let { data: gratitudes, error } = await supabase
      .from("gratitudes")
      .select("entry, date_insert_ts");

    if (!error) {
      /*check date*/

      setGratitudes(gratitudes);
      setLoading(false);
    } else {
      //there was an error
      console.log(error);
      setLoading(false);
      setError(error);
    }
    console.log();
  };
  const addGratitude = async (entry) => {
    console.log(entry);
    if (entry.replace(/\s+/g, "").length === 0) {
      alert("You must enter something to submit!");
    } else {
      const { data, error } = await supabase
        .from("gratitudes")
        .insert([{ id: user.id, entry: entry }]);
      setLoading(true);
      if (error) {
        console.log(error);
        setError(error);
      } else {
        setGratitudes([...gratitudes, { entry: entry, date_insert_ts: null }]);
        setLoading(false);
        setHasSubmittedToday(true);
      }
    }
  };

  const onAddAnother = () => {
    setHasSubmittedToday(false);
  };

  //passed through history then passed to card
  const onDelete = async (entry) => {
    alert("Work in progress: I cannot figure out the api for delete yet :)");
    return;

    let y = gratitudes.findIndex((x) => x.entry === entry);

    console.log("index: ", y);

    let index = gratitudes.indexOf(entry);
    console.log(index);
    let newGratitudes = [...gratitudes];
    console.log(newGratitudes);
    newGratitudes.splice(index, 1);
    console.log(newGratitudes);
    setGratitudes(newGratitudes);
    if (newGratitudes.length === 0) {
      setHasSubmittedToday(false);
    }

    const { data, error } = await supabase
      .from("gratitudes")
      .delete()
      .eq("entry", entry);

    if (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gray-700 min-w-screen">
      <div className="flex flex-col p-1 items-center">
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
      </div>
    </div>
  );
}
