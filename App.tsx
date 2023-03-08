import React from "react";
import StackNavigation from "./src/navigation/stackNavigator/StackNavigation";
import "./assets/i18n/i18n.config";
import { Realm, createRealmContext } from "@realm/react";
class Task extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  static generate(description: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      description,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: "Task",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      description: "string",
      isComplete: { type: "bool", default: false },
      createdAt: "date",
    },
  };
}

const { RealmProvider, useRealm, useQuery } = createRealmContext({
  schema: [Task],
});

const App = () => {
  return (
    <RealmProvider>
        <StackNavigation />
    </RealmProvider>
  );
};
export default App;
