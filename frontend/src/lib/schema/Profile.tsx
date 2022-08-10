import { BSON } from "realm"
import { createRealmContext } from "@realm/react"

export class Profile {
  name: any
  _id: any
  constructor({ id = new BSON.ObjectId(), name = undefined }) {
    this.name = name
    this._id = id
  }

  static schema = {
    name: "Profile",
    properties: {
      _id: "objectId",
      name: "string",
      prompt: "string",
      user_id: "string",
    },
    primaryKey: "_id",
  }
}

export default createRealmContext({
  schema: [Profile.schema],
  deleteRealmIfMigrationNeeded: true,
})
