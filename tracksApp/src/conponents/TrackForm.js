import React, { useContext } from "react";

import { Input, Button, Text } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTacks from "../hooks/useSaveTacks";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTacks();

  console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter Name"
          onChangeText={changeName}
        />
      </Spacer>

      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
